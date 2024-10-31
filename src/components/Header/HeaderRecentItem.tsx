import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { RecentMenuItemType } from "../../types";
import RecentMenuItem from "./_components/RecentMenuItem";
const HeaderRecentItem = () => {
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
  const items: RecentMenuItemType[] = [
    {
      title: "Agile Board Template | Trello",
      desc: "mojtaba akhlaghi's workspace",
      imgUrl:
        "https://trello-backgrounds.s3.amazonaws.com/53baf533e697a982248cd73f/480x480/96406688eb291c869064290cfb9b0c80/shutterstock_134707556.jpg",
    },
    {
      title: "Project Management",
      template: true,
      imgUrl:
        "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x336/24baa6609b89fb8eb0cc0aceb70eaf36/photo-1557682250-33bd709cbe85.jpg",
    },
    {
      title: "Scrum Board",
      desc: "mojtaba akhlaghi's workspace",
      imgUrl:
        "https://trello-backgrounds.s3.amazonaws.com/4e8eb47da16fe58f9dbdf7d0/480x300/0f299a7485408e6ad3daac75476be678/background.png",
    },
  ];
  return (
    <div ref={menuRef} className="relative  flex justify-center items-center z-10 ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          "flex justify-center items-center gap-x-1 py-1.5  pl-3 pr-2  rounded-[3px] hover:bg-[#333C43] tooltip tooltip-bottom",
          isOpen && "bg-[#333C43]"
        )}
        data-tip="Reecnt"
      >
        <div className="flex justify-center items-center  "> Recent </div>
        <IoChevronDownOutline className="" size={15} />
      </button>

      {/* Submenu */}
      <div
        className={clsx(
          " absolute left-0 top-10 rounded-lg shadow-lg border border-gray-700 bg-white dark:bg-[#282E33] ring-1 ring-black ring-opacity-5 transition-all  duration-100  overflow-hidden ",
          isOpen
            ? "min-h-fit max-h-fit  min-w-80 w-80 visible"
            : "min-h-0 max-h-0  min-w-0 w-0 invisible "
        )}
      >
        <div className="flex flex-col justify-start items-center divide-y divide-gray-600 ">
          <div className="  w-full flex flex-col gap-y-3 p-2   ">
            {items.map((item, index) => (
              <RecentMenuItem
                item={item}
                key={`HeaderRecentItem--item-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderRecentItem;
