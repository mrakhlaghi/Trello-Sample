import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CardType, Column, Id } from "../../../../types";
import { IoIosMore } from "react-icons/io";
import { CSS } from "@dnd-kit/utilities";
import { useMemo, useState } from "react";
import truncateText from "../../../../utils/truncateText.ts";
import { FiPlus } from "react-icons/fi";
import Card from "./Card.tsx";
import clsx from "clsx";

function ColumnContainer({
  className,
  column,
  updateColumn,
  createCardToColumn,
  deleteCard,
  cards,
}: {
  className?: string;
  column: Column;
  updateColumn: (id: Id, title: string) => void;
  createCardToColumn: (columnId: Id, title: string) => void;
  deleteCard: (id: Id) => void;

  cards: CardType[];
}) {
  const [isEditMode, setIsEditMode] = useState<boolean>();
  const [isOpenAddInput, setIsOpenAddInput] = useState<boolean>();
  const [inputValue, setInputValue] = useState<string>("");

  const cardIds = useMemo(() => {
    return cards.map((card) => card.id);
  }, [cards]);

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: column.id,
    data: { type: "Column", column },
    disabled: isEditMode,
  });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    disabled: isEditMode,
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className={clsx(
          "opacity-30 min-w-60 w-60 min-h-20 h-fit flex flex-col justify-start items-start  text-sm text-nowrap  bg-[#101204]  rounded-xl  px-3 py-3 overflow-hidden  ",
          className
        )}
      >
        <div className="w-full flex justify-between items-center gap-1">
          <div className="flex justify-center items-center hover:cursor-pointer text-gray-300 ">
            {column.title}
          </div>
          <div className="flex justify-center items-center p-1.5 rounded hover:bg-white hover:bg-opacity-20 ">
            <IoIosMore
              className="  text-[#D9D9D9] hover:cursor-pointer "
              size={15}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className=" min-w-60 w-60 min-h-14 h-fit flex flex-col justify-start items-start gap-y-3  text-sm text-nowrap  bg-[#101204]  rounded-xl  px-3 pt-3  pb-2"
    >
      <div className="w-full flex justify-between items-center gap-1">
        <div
          className="flex justify-center items-center hover:cursor-pointer text-gray-300 "
          onClick={() => setIsEditMode(true)}
        >
          {!isEditMode && truncateText(column.title, 20)}
          {isEditMode && (
            <input
              type="text"
              value={column.title}
              onChange={(e) => updateColumn(column?.id, e?.target?.value)}
              className=" h-6 rounded bg-white text-secondary-200 px-3"
              autoFocus
              onBlur={() => setIsEditMode(false)}
              onKeyDown={(e) => {
                if (e.key !== "Enter") return;
                setIsEditMode(false);
              }}
            />
          )}
        </div>
        <div className="flex justify-center items-center p-1.5 rounded hover:bg-white hover:bg-opacity-20 ">
          <IoIosMore
            className="  text-[#D9D9D9] hover:cursor-pointer "
            size={15}
          />
        </div>
      </div>

      <div className="w-full flex flex-col flex-grow justify-start items-center gap-y-2">
        <SortableContext items={cardIds} strategy={verticalListSortingStrategy}>
          {cards.map((card: CardType) => (
            <Card deleteCard={deleteCard} card={card} key={card.id} />
          ))}
        </SortableContext>
      </div>
      {isOpenAddInput ? (
        <div className=" w-full flex justify-between items-center">
          <input
            type="text"
            value={inputValue}
            autoFocus
            onChange={(e) => setInputValue(e.target.value)}
            className=" w-32 h-6 rounded bg-white text-secondary-200 px-3 "
          />

          <button
            className=" px-2 py-0.5  rounded-[4px] text-sm text-semibold text-[#1d2125] bg-[#579dff] hover:bg-[#85b8ff]  flex justify-center items-center"
            onClick={() => {
              if (!inputValue) {
                setIsOpenAddInput(false);
              }
              if (inputValue) {
                createCardToColumn(column?.id, inputValue);
                setInputValue("");
                setIsOpenAddInput(false);
              }
            }}
          >
            Add card
          </button>
        </div>
      ) : (
        <button
          // onClick={() => createCardToColumn(column?.id)}
          onClick={() => {
            setIsOpenAddInput(true);
          }}
          className="flex h-7  hover:cursor-pointer rounded-md text-sm px-2 py-1 mb-1 hover:bg-white hover:bg-opacity-20 w-full  justify-start items-center gap-x-2 "
        >
          <FiPlus size={18} />
          Add a CardType
        </button>
      )}
    </div>
  );
}

export default ColumnContainer;
