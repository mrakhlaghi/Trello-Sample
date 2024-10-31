import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import HiddenMenuItem from "./_components/HiddenMenuItem";

const HiddenMenuItems = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    <div
      ref={menuRef}
      className="relative flex xl:hidden justify-center items-center z-50 "
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          "flex justify-center items-center gap-x-1 py-1.5  pl-3 pr-2  rounded-[3px] hover:bg-[#333C43] tooltip tooltip-bottom ",
          isOpen && "bg-[#333C43]"
        )}
        data-tip="More"
      >
        <div className="flex justify-center items-center  "> More </div>
        <IoChevronDownOutline className="" size={15} />
      </button>

      {/* Submenu */}
      <div
        className={clsx(
          "  absolute left-0 top-10 rounded-lg shadow-lg border border-gray-700 bg-white dark:bg-[#282E33] ring-1 ring-black ring-opacity-5 transition-all  duration-100  overflow-hidden ",
          isOpen
            ? "w-80 min-h-fit max-h-80  min-w-80  visible "
            : " w-0 min-h-0 max-h-0  min-w-0 max-w-0 invisible  "
        )}
      >
        <div className="flex flex-col justify-start items-center divide-y divide-gray-600  ">
          <div className="w-full h-fit bg-[#282e33] flex flex-col justify-between items-center  ">
            <div className=" w-full py-3  flex  flex-col  justify-between items-center    ">
              <HiddenMenuItem
                title="  Templates"
                className="xl:hidden flex py-5"
              />
              <HiddenMenuItem
                title="  Starred"
                className=" lg:hidden flex py-5"
              />
              <HiddenMenuItem
                title="  Recent"
                className=" md:hidden flex py-5"
              />
              <HiddenMenuItem
                title="  Workspaces"
                className=" sm:hidden flex py-5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiddenMenuItems;
