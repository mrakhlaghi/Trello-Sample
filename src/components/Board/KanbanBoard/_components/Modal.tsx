import React from "react";
import { CardType } from "../../../../types";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  card: CardType;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  card,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed w-screen h-screen inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6 mx-4 relative">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">{card.title}</h2>
        <p className="text-gray-600 mb-6">{card.content}</p>

        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
          >
            Close
          </button>
          <button
            onClick={onSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Submit
          </button>
        </div>

        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
