import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { StaredTabImg } from "../../../public/icons";
const HeaderStarredItem = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef} className="relative  flex justify-center items-center ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          "flex justify-center items-center gap-x-1 py-1.5  pl-3 pr-2  rounded-[3px] hover:bg-[#333C43] tooltip tooltip-bottom ",
          isOpen && "bg-[#333C43]"
        )}
        data-tip="Starred" 
      >
        <div className="flex justify-center items-center  "> Starred </div>
        <IoChevronDownOutline className="" size={15} />
      </button>

      {/* Submenu */}
      <div
        className={clsx(
          "z-10 absolute left-0 top-10 rounded-lg shadow-lg border border-gray-700 bg-white dark:bg-[#282E33] ring-1 ring-black ring-opacity-5 transition-all  duration-100  overflow-hidden ",
          isOpen
            ? "min-h-fit max-h-fit  min-w-80 w-80 visible"
            : "min-h-0 max-h-0  min-w-0 w-0 invisible "
        )}
      >
        <div className="flex flex-col justify-start items-center ">
          <div className="  w-full flex flex-col gap-y-3 px-3  pt-3  pb-5  ">
            <img src={StaredTabImg} alt="StaredTabImg" />
            <span className="text-center">
              {" "}
              Star important boards to access them quickly and easily.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderStarredItem;
