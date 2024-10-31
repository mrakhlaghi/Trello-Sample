import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { IoChevronDownOutline } from "react-icons/io5";

const HeaderWorkSpaceItem = () => {
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
        data-tip="Workspaces"
      >
        <div className="flex justify-center items-center  "> Workspaces </div>
        <IoChevronDownOutline className="" size={15} />
      </button>

      {/* Submenu */}
      <div
        className={clsx(
          " z-10 absolute left-0 top-10      rounded-lg shadow-lg border border-gray-700 bg-white dark:bg-[#282E33] ring-1 ring-black ring-opacity-5 transition-all  duration-100  overflow-hidden ",
          isOpen
            ? "min-h-fit max-h-fit  min-w-80 w-80 visible"
            : "min-h-0 max-h-0  min-w-0 w-0 invisible "
        )}
      >
        <div className="flex flex-col justify-start items-center divide-y divide-gray-600 ">
          {/* Basic Column */}
          <div className="  w-full flex flex-col gap-y-3 p-2  pt-5">
            <p className="text-secondary-500/90 font-bold !text-xs text-start ml-3 -mb-2">
              Current Workspace
            </p>
            <ul className="flex flex-col justify-start items-start gap-y-1 pb-2 py-1 px-2 ">
              <div
                // to={item.link}
                className="w-full rounded-md flex justify-start items-center gap-x-2 pb-2 py-1 px-2 "
              >
                <span
                  className={clsx(
                    "w-10 h-10 px-1 rounded-md flex justify-center items-center text-black text-xl font-bold bg-gradient-to-b from-[#9790f1] to-[#649afc]  "
                  )}
                >
                  M
                </span>
                <span className="text-sm text-secondary-600/90">
                  mojtaba akhlaghi's workspace
                </span>
              </div>
            </ul>
          </div>
          <div className="  w-full flex flex-col gap-y-3 p-2  pt-5 ">
            <p className="text-secondary-500/90 font-bold !text-xs text-start ml-3 -mb-2">
              Current Workspace
            </p>
            <ul className="flex flex-col justify-start items-start gap-y-1 pb-2 py-1 px-2 ">
              <Link
                to={"https://trello.com/w/workspace46731678"}
                className="w-full rounded-md flex justify-start items-center gap-x-2 p-2  hover:bg-[#323940] "
              >
                <span
                  className={clsx(
                    "w-10 h-10 px-1 rounded-md flex justify-center items-center text-black text-xl font-bold bg-gradient-to-b from-[#9790f1] to-[#649afc]  "
                  )}
                >
                  M
                </span>
                <span className="text-sm text-secondary-600/90">
                  mojtaba akhlaghi's workspace
                </span>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderWorkSpaceItem;
