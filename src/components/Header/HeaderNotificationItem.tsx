import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
const HeaderNotificationItem = () => {
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
    <div ref={menuRef} className="relative flex justify-center items-center ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          "flex justify-center items-center p-1  rounded-full hover:bg-[#333C43]   tooltip tooltip-bottom ",
          isOpen && "bg-[#333C43]"
        )}
        data-tip="Notification" 
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          role="presentation"
          className="w-6 h-6"
        >
          <path
            fill="currentcolor"
            fillRule="evenodd"
            d="M6.59 17.83a2 2 0 0 0 2.83 0L6.59 15a2 2 0 0 0 0 2.83m4.79-12.35A5.04 5.04 0 0 1 14.95 4c.97 0 1.95.28 2.79.84q.03-.04.07-.07a1.01 1.01 0 1 1 1.35 1.49 5.05 5.05 0 0 1-.64 6.36l-.72.73c-.78.78-1.81 2.21-2.31 3.21l-1.51 3.02c-.25.5-.77.58-1.17.19l-8.56-8.55c-.4-.4-.31-.92.19-1.17l3.02-1.51c.99-.49 2.42-1.53 3.21-2.31zm2.74 9.63c.52-.97 1.57-2.4 2.35-3.18l.73-.73a3.05 3.05 0 0 0 .39-3.83c-.19-.29-.72-.77-.86-.86A3.04 3.04 0 0 0 15.05 6c-.8 0-1.57.31-2.16.89l-.95.95c-.78.79-2.22 1.82-3.2 2.31L7 11.02l6.07 6.07z"
          ></path>
        </svg>

        {/* <img
          src="/images/ProfileImg.png"
          alt="ProfileImg"
          className=" w-7 h-7 rounded-full "
        /> */}
      </button>

      {/* Submenu */}
      <div
        className={clsx(
          " z-50 absolute right-0 top-10 rounded-lg shadow-lg border border-gray-700 bg-white dark:bg-[#282E33] ring-1 ring-black ring-opacity-5 transition-all  duration-100  overflow-hidden ",
          isOpen
            ? "min-h-fit max-h-fit  min-w-80 w-80 visible"
            : "min-h-0 max-h-0  min-w-0 w-0 invisible "
        )}
      >
        <div className="flex flex-col justify-start items-center ">
          <div className="  w-full flex flex-col gap-y-3 px-3  pt-3  pb-5  ">
            <span className="text-center">Notifications</span>
            {/* <img src={StaredTabImg} alt="StaredTabImg" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderNotificationItem;
