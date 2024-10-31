import clsx from "clsx";
import { IoChevronUpOutline } from "react-icons/io5";

function HiddenMenuItem({
  title,
  className,
}: {
  title: string;
  className: string;
}) {
  return (
    <div
      className={clsx(
        "w-full h-7  flex justify-between items-center hover:bg-[#323940] px-4 cursor-pointer ",
        className
      )}
    >
      <span className="text-sm ">{title}</span>
      <IoChevronUpOutline className={clsx(" p-1  rotate-90 ")} size={22} />{" "}
    </div>
  );
}

export default HiddenMenuItem;
