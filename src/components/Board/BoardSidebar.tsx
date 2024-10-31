import clsx from "clsx";
import { useState } from "react";
import { IoChevronForwardOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function BoardSidebar({ className }: { className?: string }) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  return (
    <div
      className={clsx(
        "relative h-[calc(100vh-48px)] bg-[#1e1a1c] bg-opacity-95 flex flex-col justify-start items-center gap-y-4  transition-all duration-200",
        isSideBarOpen ? "w-64 min-w-64 max-w-64" : "w-6 min-w-6 max-w-6",
        className
      )}
    >
      <button
        onClick={() => setIsSideBarOpen(!isSideBarOpen)}
        className={clsx(
          "absolute -right-2.5 top-5 flex justify-center items-center pl-0.5 w-6 h-6 rounded-full bg-secondary-50 border border-secondary-300 font-bold  hover:bg-secondary-200 hover:bg-opacity-50  hover:cursor-pointer z-20 ",
          isSideBarOpen && "hidden"
        )}
      >
        <IoChevronForwardOutline className={clsx("text-white rounded-full  ")} size={16} />
      </button>

      <div
        className={clsx(
          "w-full flex flex-col gap-y-3  divide-y divide-secondary-200 ",
          !isSideBarOpen && "hidden"
        )}
      >
        <div className="flex flex-col justify-start items-start gap-y-1 pb-0 py-1 px-2">
          <div className="w-full rounded-md flex justify-between items-center gap-x-2 pl-1 pt-1 pr-1   ">
            <div className="flex justify-start items-center gap-x-2">
              <span className="w-8 h-8 px-1 rounded-[4px] flex justify-center items-center text-black text-xl font-bold bg-gradient-to-b from-[#9790f1] to-[#649afc] pt-1">
                M
              </span>
              <Link
                to={"https://trello.com/w/workspace46731678"}
                className="flex flex-col justify-start items-start gap-x-2"
              >
                <span className="text-[13px] text-secondary-600/80">
                  mojtaba akhlaghi's <br /> workspace
                </span>
                <span className="text-[11px] text-secondary-600/70">
                  Premium
                </span>
              </Link>
            </div>
            <button
              onClick={() => setIsSideBarOpen(!isSideBarOpen)}
              className="p-2 rounded-md bg-secondary-100  hover:bg-secondary-200 hover:cursor-pointer"
            >
              <IoChevronForwardOutline
                className={clsx("text-white ", isSideBarOpen && "rotate-180")}
                size={14}
              />
            </button>
          </div>
        </div>
        <div className="flex"></div>
      </div>
    </div>
  );
}

export default BoardSidebar;
