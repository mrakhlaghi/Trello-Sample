import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { LuSearch } from "react-icons/lu";
const HeaderSearchItem = ({ className }: { className?: string }) => {
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
    <div
      ref={menuRef}
      className={clsx("relative  justify-center items-center hidden md:flex  ", className)}
    >
      <div
        onFocus={() => setIsOpen(true)}
        className={clsx(
          "md:w-40  lg:w-64 h-8  rounded-md  bg-[#23292f] hover:bg-[#282e33] border-2 border-secondary-400  focus-within:border-[#7caff6]/60  flex justify-center items-center  focus:!outline-none  focus:border  focus:shadow-white focus:shadow-2xl   px-3 py-1.5 ",
          isOpen && "  absolute right-0 z-20 w-[calc(100vw*0.7)] ",
        )}
      >
        <LuSearch className="text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className=" text-sm bg-transparent text-gray-300 placeholder-gray-400 focus:outline-none ml-2 mt-1 w-full  "
        />
      </div>

      {/* <IoIosSearch
        className={clsx(
          "w-6 h-6 md:block !text-secondary-500 dark:text-gray-300 cursor-pointer"
        )}
      /> */}
    </div>
  );
};

export default HeaderSearchItem;
