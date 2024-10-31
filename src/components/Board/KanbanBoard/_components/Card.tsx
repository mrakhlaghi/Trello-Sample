import { FaTrash } from "react-icons/fa6";
import { CardType, Id } from "../../../../types";
import { useState } from "react";
import clsx from "clsx";
import Modal from "./Modal";
import { FaPen } from "react-icons/fa";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function Card({
  card,
  deleteCard,
}: {
  card: CardType;
  deleteCard: (id: Id) => void;
}) {
  const [hovered, setHovered] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState<CardType | null>(null);
  const [isEditMode, setIsEditMode] = useState(false);

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: card.id,
    data: { type: "Card", card },
    disabled: isEditMode,
  });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    disabled: isEditMode,
  };

  if (isDragging) {
    return (
      <>
        <div
          ref={setNodeRef}
          style={style}
          {...attributes}
          {...listeners}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => setModalOpen(true)}
          className={clsx(
            " relative w-full  border border-opacity-0 border-white flex justify-between items-center py-2 px-2 h-fit rounded-md bg-[#22272B] ",
            hovered && "border border-opacity-100 "
          )}
        >
          <p className="w-full overflow-hidden text-wrap break-words whitespace-normal">
            {card.title}
          </p>
          <div className=" absolute right-2 top-1.5 flex justify-end items-center gap-x-1 ">
            <span
              className={clsx(
                "flex justify-center items-center p-1.5 hover:bg-[#22272B] bg-opacity-65 rounded-full ",
                hovered ? "visible" : "hidden"
              )}
            >
              <FaTrash
                onClick={() => deleteCard(card.id)}
                className={clsx(
                  "    hover:cursor-pointer text-secondary-800 hover:text-secondary-900    "
                )}
                size={11}
              />
            </span>
            <span
              className={clsx(
                "flex justify-center items-center p-1.5 hover:bg-[#22272B] bg-opacity-65 rounded-full ",
                hovered ? "visible" : "hidden"
              )}
            >
              <FaPen
                onClick={() => {
                  setIsEditMode(true);
                  setModalData(card);
                }}
                className={clsx(
                  "    hover:cursor-pointer text-secondary-800 hover:text-secondary-900    "
                )}
                size={11}
              />
            </span>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setModalOpen(true)}
        className={clsx(
          " relative w-full  border border-opacity-0 border-white flex justify-between items-center py-2 px-2 h-fit rounded-md bg-[#22272B] ",
          hovered && "border border-opacity-100 "
        )}
      >
        <p className="w-full overflow-hidden text-wrap break-words whitespace-normal">
          {card.title}
        </p>
        <div className=" absolute right-2 top-1.5 flex justify-end items-center gap-x-1 ">
          <span
            className={clsx(
              "flex justify-center items-center p-1.5 hover:bg-[#22272B] bg-opacity-65 rounded-full ",
              hovered ? "visible" : "hidden"
            )}
          >
            <FaTrash
              onClick={() => deleteCard(card.id)}
              className={clsx(
                "    hover:cursor-pointer text-secondary-800 hover:text-secondary-900    "
              )}
              size={11}
            />
          </span>
          <span
            className={clsx(
              "flex justify-center items-center p-1.5 hover:bg-[#22272B] bg-opacity-65 rounded-full ",
              hovered ? "visible" : "hidden"
            )}
          >
            <FaPen
              onClick={() => {
                setIsEditMode(true);
                setModalData(card);
              }}
              className={clsx(
                "    hover:cursor-pointer text-secondary-800 hover:text-secondary-900    "
              )}
              size={11}
            />
          </span>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={() => {
          setModalOpen(false);
          alert("Submitted!");
        }}
        card={card}
      />
    </>
  );
}

export default Card;
