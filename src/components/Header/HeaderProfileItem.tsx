import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
const HeaderProfileItem = ({
  wrapperClassName,
  className,
}: {
  wrapperClassName?: string;
  className?: string;
}) => {
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
    <div ref={menuRef} className={clsx("relative flex justify-center items-center ",wrapperClassName)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          "flex justify-center items-center p-1  rounded-full hover:bg-[#333C43]  tooltip tooltip-left  ",
          isOpen && "bg-[#333C43]",
          className
        )}
        data-tip="Account"
      >
        <img
          src="/images/ProfileImg.png"
          alt="ProfileImg"
          className=" w-6 h-6 rounded-full "
        />
      </button>

      {/* Submenu */}
      <div
        className={clsx(
          "absolute right-0 top-10 rounded-lg shadow-lg border border-gray-700 bg-white dark:bg-[#282E33] ring-1 ring-black ring-opacity-5 transition-all  duration-100  overflow-hidden ",
          isOpen
            ? "min-h-fit max-h-fit  min-w-80 w-80 visible"
            : "min-h-0 max-h-0  min-w-0 w-0 invisible "
        )}
      >
        <div className="flex flex-col justify-start items-center ">
          <div className="  w-full flex flex-col gap-y-3 px-3  pt-3  pb-5  ">
            <span className="text-center"> Account</span>
            {/* <img src={StaredTabImg} alt="StaredTabImg" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderProfileItem;
