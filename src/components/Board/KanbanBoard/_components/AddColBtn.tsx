import clsx from "clsx";
import { FiPlus } from "react-icons/fi";

function AddColBtn({
  className,
  onClick,
}: {
  className?: string;
  onClick?: any;
}) {
  return (
    <button
      className={clsx(
        "flex justify-start items-center gap-x-3 px-3 py-4 min-w-80 w-80 h-10  text-nowrap text-white text-sm bg-secondary-900 bg-opacity-40 hover:bg-opacity-20 rounded-lg  transition-all duration-50  ",
        className
      )}
      onClick={onClick}
    >
      <FiPlus size={15} />
      Add Another List
    </button>
  );
}

export default AddColBtn;
