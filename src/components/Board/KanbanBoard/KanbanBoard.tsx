import clsx from "clsx";
import AddColBtn from "./_components/AddColBtn";
import { useEffect, useMemo, useState } from "react";
import { CardType, Column, Id } from "../../../types";
import ColumnContainer from "./_components/ColumnContainer";
import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import { createPortal } from "react-dom";
import Card from "./_components/Card";

function KanbanBoard({ className }: { className?: string }) {
  const [columns, setColumns] = useState<Column[]>([]);
  const [cards, setCards] = useState<CardType[]>([]);
  const [activeItem, setActiveItem] = useState<{
    type: "Column" | "Card";
    item: Column | CardType;
  } | null>(null);

  const columnsIds = useMemo(() => {
    return columns.map((col) => col.id);
  }, [columns]);
  //   console.log(columns);

  // Load columns and cards from local storage on mount
  useEffect(() => {
    const storedColumns = localStorage.getItem("columns");
    const storedCards = localStorage.getItem("cards");

    if (storedColumns) {
      setColumns(JSON.parse(storedColumns));
    }
    if (storedCards) {
      setCards(JSON.parse(storedCards));
    }
  }, []);

  // Save columns and cards to local storage only if they are non-empty
  useEffect(() => {
    if (columns.length > 0) {
      localStorage.setItem("columns", JSON.stringify(columns));
    }
    if (cards.length > 0) {
      localStorage.setItem("cards", JSON.stringify(cards));
    }
  }, [columns, cards]);

  const createColumn = () => {
    const columnToAdd: Column = {
      id: Date.now(),
      title: `Column ${columns.length + 1}`,
    };

    setColumns([...columns, columnToAdd]);
  };
  const onDragStartHandler = (event: DragStartEvent) => {
    const { active } = event;
    console.log(active);
    if (active.data.current?.type === "Column") {
      setActiveItem({ type: "Column", item: active.data.current.column });
    } else if (active.data.current?.type === "Card") {
      setActiveItem({ type: "Card", item: active.data.current.card });
    }
  };
  const onDragEndHandler = (event: DragEndEvent) => {
    const { active, over } = event;

    // If there is no drop target, exit early
    if (!over) {
      setActiveItem(null);
      return;
    }

    // Reorder columns if dragging a column
    if (activeItem?.type === "Column") {
      const activeColumnId = active.id;
      const overColumnId = over.id;

      if (activeColumnId !== overColumnId) {
        setColumns((columns) => {
          const overIndex = columns.findIndex((col) => col.id === overColumnId);
          const activeIndex = columns.findIndex(
            (col) => col.id === activeColumnId
          );
          return arrayMove(columns, activeIndex, overIndex);
        });
      }
    }

    // Reorder cards if dragging a card
    else if (activeItem?.type === "Card") {
      const activeCardId = active.id;
      const overCardId = over.id;

      if (activeCardId !== overCardId) {
        setCards((cards) => {
          const activeCard = cards.find((card) => card.id === activeCardId);
          const overCard = cards.find((card) => card.id === overCardId);

          if (
            activeCard &&
            overCard &&
            activeCard.columnId === overCard.columnId
          ) {
            const activeIndex = cards.findIndex(
              (card) => card.id === activeCardId
            );
            const overIndex = cards.findIndex((card) => card.id === overCardId);
            return arrayMove(cards, activeIndex, overIndex);
          }

          // If the conditions aren't met, return the original array
          return cards;
        });
      }
    }

    // Reset the active item state
    setActiveItem(null);
  };

  const updateColumnHandler = (id: Id, title: string) => {
    const newColumns = columns.map((col) => {
      if (col.id === id) {
        return { ...col, title };
      }
      return col;
    });
    setColumns(newColumns);
  };

  const createCardToColumnHandler = (columnId: Id, title: string) => {
    const newCard: CardType = {
      id: Date.now(),
      columnId,
      title: title,
      content: "",
    };
    setCards((prev) => [...prev, newCard]);
  };

  const deleteCardHandler = (id: Id) => {
    const newCards = cards.filter((card) => card.id !== id);
    setCards(newCards);
  };

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } })
  );

  const onDragOverHandler = (event: DragOverEvent) => {
    const { active, over } = event;

    if (!over) {
      setActiveItem(null);
      return;
    }
    const activeCardId = active.id;
    const overCardId = over?.id;
    if (activeCardId === overCardId) return;

    const isActiveACard = active.data.current?.type === "Card";
    const isOverACard = over.data.current?.type === "Card";
    const isOverAColumn = over.data.current?.type === "Column";

    if (!isActiveACard) return;
    if (isActiveACard && isOverACard) {
      const activeIndex = cards.findIndex((card) => card.id === activeCardId);
      const overIndex = cards.findIndex((card) => card.id === overCardId) ?? 0;
      console.log("🚀 ~ onDragOverHandler ~ overIndex:", overIndex);

      cards[activeIndex].columnId = cards[overIndex].columnId;
      return arrayMove(cards, activeIndex, overIndex);
    }

    if (isActiveACard && isOverAColumn) {
      const activeIndex = cards.findIndex((card) => card.id === activeCardId);

      cards[activeIndex].columnId = overCardId;
      return arrayMove(cards, activeIndex, activeIndex);
    }
  };


  return (
    <div
      className={clsx(
        "flex justify-start items-start gap-x-4 px-3 py-2 overflow-y-hidden  overflow-x-scroll  ",
        className
      )}
    >
      <DndContext
        sensors={sensors}
        onDragStart={onDragStartHandler}
        onDragEnd={onDragEndHandler}
        onDragOver={onDragOverHandler}
      >
        <SortableContext items={columnsIds}>
          {columns.map((col, index) => (
            <ColumnContainer
              key={`${col.id}-${index}`}
              createCardToColumn={createCardToColumnHandler}
              updateColumn={updateColumnHandler}
              deleteCard={deleteCardHandler}
              column={col}
              cards={cards.filter((card) => card.columnId === col.id)}
            />
          ))}
        </SortableContext>
        {createPortal(
          <DragOverlay>
            {activeItem?.type === "Column" && (
              <ColumnContainer
                key={`${activeItem.item.id}-hovered`}
                createCardToColumn={createCardToColumnHandler}
                updateColumn={updateColumnHandler}
                deleteCard={deleteCardHandler}
                column={activeItem.item as Column}
                cards={cards.filter(
                  (card) => card.columnId === activeItem.item.id
                )}
              />
            )}
            {activeItem?.type === "Card" && (
              <Card
                card={activeItem.item as CardType}
                deleteCard={deleteCardHandler}
              />
            )}
          </DragOverlay>,
          document.body
        )}
      </DndContext>

      <AddColBtn
        onClick={() => {
          console.log("add col");
          createColumn();
        }}
      />
    </div>
  );
}

export default KanbanBoard;
