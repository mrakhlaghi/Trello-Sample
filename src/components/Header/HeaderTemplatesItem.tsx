import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
import { RecentMenuItemType } from "../../types";
import { Photos } from "../../../public/icons";
import RecentMenuItem from "./_components/RecentMenuItem";
const HeaderTemplatesItem = ({ className }: { className?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
  const items: RecentMenuItemType[] = [
    {
      title: "Agile Board Template | Trello",
      imgUrl:
        "https://trello-backgrounds.s3.amazonaws.com/53baf533e697a982248cd73f/480x480/96406688eb291c869064290cfb9b0c80/shutterstock_134707556.jpg",
    },
    {
      title: "Project Management",
      imgUrl:
        "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x336/24baa6609b89fb8eb0cc0aceb70eaf36/photo-1557682250-33bd709cbe85.jpg",
    },
    {
      title: "Scrum Board",
      imgUrl:
        "https://trello-backgrounds.s3.amazonaws.com/4e8eb47da16fe58f9dbdf7d0/480x300/0f299a7485408e6ad3daac75476be678/background.png",
    },
    {
      title: "Agile Board Template | Trello",
      imgUrl:
        "https://trello-backgrounds.s3.amazonaws.com/53baf533e697a982248cd73f/480x480/96406688eb291c869064290cfb9b0c80/shutterstock_134707556.jpg",
    },
    {
      title: "Project Management",
      imgUrl:
        "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x336/24baa6609b89fb8eb0cc0aceb70eaf36/photo-1557682250-33bd709cbe85.jpg",
    },
    {
      title: "Scrum Board",
      imgUrl:
        "https://trello-backgrounds.s3.amazonaws.com/4e8eb47da16fe58f9dbdf7d0/480x300/0f299a7485408e6ad3daac75476be678/background.png",
    },
    {
      title: "Project Management",
      imgUrl:
        "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x336/24baa6609b89fb8eb0cc0aceb70eaf36/photo-1557682250-33bd709cbe85.jpg",
    },
    {
      title: "Scrum Board",
      imgUrl:
        "https://trello-backgrounds.s3.amazonaws.com/4e8eb47da16fe58f9dbdf7d0/480x300/0f299a7485408e6ad3daac75476be678/background.png",
    },
  ];
  return (
    <div
      ref={menuRef}
      className={clsx("relative  flex justify-center items-center ", className)}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          "flex justify-center items-center gap-x-1 py-1.5  pl-3 pr-2  rounded-[3px] hover:bg-[#333C43]  tooltip tooltip-bottom",
          isOpen && "bg-[#333C43]"
        )}
        data-tip="Templates"
      >
        <div className="flex justify-center items-center  "> Templates </div>
        <IoChevronDownOutline className="" size={15} />
      </button>

      {/* Submenu */}
      <div
        className={clsx(
          " z-50 absolute left-0 top-10 rounded-lg shadow-lg border border-gray-700 bg-white dark:bg-[#282E33] ring-1 ring-black ring-opacity-5 transition-all  duration-100  overflow-hidden ",
          isOpen
            ? "w-80 min-h-fit max-h-80  min-w-80  visible"
            : " w-0 min-h-0 max-h-0  min-w-0 max-w-0 invisible  "
        )}
      >
        <div className="flex flex-col justify-start items-center divide-y divide-gray-600 ">
          <div className="w-full max-h-96 bg-[#282e33] flex flex-col justify-between items-center overflow-y-scroll ">
            <div className=" w-full py-2  flex  justify-between items-center px-3">
              <span className="text-secondary-500 text-xs ">Top templates</span>{" "}
              <span className=" w-5 h-5  flex justify-center items-center rounded-sm hover:bg-secondary-300/70">
                <IoChevronUpOutline
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={clsx(
                    " p-1 transition-all ",
                    isMenuOpen ? "rotate-180" : "rotate-0"
                  )}
                  size={22}
                />
              </span>
            </div>
            {isMenuOpen && (
              <div className="  w-full min-h-full h-full flex flex-col  py-2">
                {items.map((item, index) => (
                  <RecentMenuItem
                    item={item}
                    key={`HeaderTemplatesItem--item-${index}`}
                  />
                ))}
              </div>
            )}
          </div>
          <div className="w-full flex flex-col justify-center items-center  ">
            <div className=" flex justify-start flex-col items-center gap-y-2 px-5 py-4 bg-[#1a1e21]">
              <div className="flex  justify-start items-start gap-x-4 ">
                <img src={Photos} alt="Photos" className="w-7 h-7 " />
                <span className="">
                  See hundreds of templates from the Trello community
                </span>
              </div>
              <button className="w-full h-9 rounded-md flex justify-center items-center text-secondary-600/90  bg-secondary-200/80 hover:bg-secondary-300 active:bg-[#579dff] ">
                Explore templates
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTemplatesItem;
