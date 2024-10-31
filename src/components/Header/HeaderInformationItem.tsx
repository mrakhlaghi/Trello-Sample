import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const HeaderInformationItem = () => {
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
        className="flex  justify-center items-center p-1 hover:bg-[#333C43]  rounded-full  tooltip tooltip-bottom"
        data-tip="Information" 
      >
        <svg
          width="24"
          height="24"
          role="presentation"
          focusable="false"
          viewBox="0 0 24 24"
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 12C2 6.47667 6.47667 2 12 2C17.5233 2 22 6.47667 22 12C22 17.5233 17.5233 22 12 22C6.47667 22 2 17.5233 2 12ZM4 12C4 16.4188 7.58124 20 12 20C16.4188 20 20 16.4188 20 12C20 7.58124 16.4188 4 12 4C7.58124 4 4 7.58124 4 12ZM8 10C7.99999 7.48383 10.3214 5.51108 12.9389 6.10713C14.3829 6.43513 15.5569 7.60513 15.8899 9.04813C16.3809 11.1771 15.1719 13.0911 13.3589 13.7471C13.1549 13.8201 13.0099 14.0021 13.0099 14.2191V14.0001C13.0099 14.5521 12.5629 15.0001 12.0099 15.0001C11.4579 15.0001 11.0099 14.5521 11.0099 14.0001V12.9871C11.0179 12.4411 11.4599 12.0001 11.9999 12.0001C13.1029 12.0001 13.9999 11.1021 13.9999 10.0001C13.9999 8.89713 13.1029 8.00013 11.9999 8.00013C10.8959 8.00013 9.99935 8.92313 10.0004 10.0271C9.98522 10.5666 9.54291 11 9 11C8.47773 11 8.04856 10.599 8.00385 10.0882C8.00385 10.0882 8 10.0297 8 10ZM12 18C11.448 18 11 17.552 11 17C11 16.448 11.448 16 12 16C12.552 16 13 16.448 13 17C13 17.552 12.552 18 12 18Z"
            fill="currentColor"
          ></path>
        </svg>
      </button>

      {/* Submenu */}
      <div
        className={clsx(
          " z-50 absolute right-0 top-10 rounded-lg shadow-lg divide-y divide-secondary-300/60 px-3  border border-gray-700 bg-white dark:bg-[#282E33] ring-1 ring-black ring-opacity-5 transition-all  duration-100  overflow-hidden ",
          isOpen
            ? "min-h-fit max-h-fit  min-w-80 w-80 visible"
            : "min-h-0 max-h-0  min-w-0 w-0 invisible "
        )}
      >
        <Link
          to="https://trello.com/power-ups?utm_source=trello&utm_medium=inapp&utm_content=header-tips&utm_campaign=power-ups"
          className="flex flex-col justify-start items-center "
        >
          <div className="  w-full flex flex-col gap-y-3 px-3  pt-3  pb-5">
            <img src="/images/infoBanner.png" alt="StaredTabImg" />

            <span className="text-center">
              Make boards more powerful with Trello Power-Ups
            </span>
          </div>
        </Link>
        <div className="flex flex-wrap justify-center items-center py-3">
          <Link to="https://trello.com/pricing" className="w-fit   rounded-md px-2 py-1 text-sm  hover:bg-secondary-300 "  >Pricing</Link>
          <Link to="https://trello.com/pricing" className="w-fit   rounded-md px-2 py-1 text-sm  hover:bg-secondary-300 "  >Apps</Link>
          <Link to="https://trello.com/pricing" className="w-fit   rounded-md px-2 py-1 text-sm  hover:bg-secondary-300 "  >Blog</Link>
          <Link to="https://trello.com/pricing" className="w-fit   rounded-md px-2 py-1 text-sm  hover:bg-secondary-300 "  >Privacy</Link>
          <Link to="https://trello.com/pricing" className="w-fit   rounded-md px-2 py-1 text-sm  hover:bg-secondary-300 "  >Notice at Collection</Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderInformationItem;
