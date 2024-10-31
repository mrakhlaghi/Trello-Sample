import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { AtlassianIcon, SettingIcon } from "../../../public/icons";
import { Link } from "react-router-dom";
import MenuIcon from "./_components/MenuIcon";

const HeaderMenuItem = () => {
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
  const menuItems = [
    {
      title: "Atlassian Home",
      link: "https://home.atlassian.com/",
      icon: <img src={AtlassianIcon} alt="AtlassianIcon" className="w-6 h-6" />,
    },
    {
      title: "Jira",
      link: "https://id.atlassian.com/login?login_hint=mojtabaakhlaghi3003030%40gmail.com&prompt=none&continue=https%3A%2F%2Fmojtabaakhlaghi3003030.atlassian.net/secure/BrowseProjects.jspa?selectedProjectType=software,business",
      icon: (
        <img
          src="https://flight-deck-assets-bifrost.prod-east.frontend.public.atl-paas.net/assets/image/logos/contrib/jira/icons/white.svg"
          className="w-6 h-6"
        />
      ),
    },
    {
      title: "Trello",
      link: "https://trello.com/appSwitcherLogin?login_hint=mojtabaakhlaghi3003030@gmail.com",
      icon: (
        <img
          src="https://flight-deck-assets-bifrost.prod-east.frontend.public.atl-paas.net/assets/image/logos/contrib/trello/icons/white.svg"
          className="w-6 h-6"
        />
      ),
    },
    {
      title: "Administration",
      link: "https://trello.com/appSwitcherLogin?login_hint=mojtabaakhlaghi3003030@gmail.com",
      icon: <img src={SettingIcon} alt="SettingIcon" className="w-6 h-6" />,
    },
  ];

  return (
    <div   ref={menuRef} className="relative inline-block  ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-center items-center p-1.5 rounded-[3px] hover:bg-[#333C43] tooltip tooltip-right "
        data-tip="More form Atlassian"
      >
        <MenuIcon className="w-5 h-5" />
      </button>

      {/* Submenu */}
      <div
        className={clsx(
          " z-10 absolute left-0 top-10   py-3 px-2 pt-7 rounded-lg shadow-lg border border-gray-700 bg-white dark:bg-[#282E33] ring-1 ring-black ring-opacity-5 transition-all  duration-100  overflow-hidden ",
          isOpen
            ? "min-h-[calc(100vh*0.8)] max-h-[calc(100vh*0.8)] min-w-80 w-80 visible "
            : "min-h-0 max-h-0  min-w-0 w-0 invisible "
        )}
      >
        <div className="flex gap-x-10  ">
          {/* Basic Column */}
          <div className="p-4 px-0 w-full    flex flex-col  gap-y-3">
            <p className="text-secondary-500 font-bold !text-xs text-start ml-3 -mb-2">
              YOUR APPS
            </p>
            <ul className="flex flex-col justify-start items-start  gap-y-1 ">
              {menuItems.map((item , index) => {
                return (
                  <Link
                    to={item.link}
                    key={`HeaderMenuItem--item-${index}`}
                    className="w-full rounded-md flex justify-start items-center gap-x-2 py-2 px-2 hover:bg-[#323940] "
                  >
                    <span
                      className={clsx(
                        "w-8 h-8 px-1 rounded-md flex justify-center items-center bg-[#0052CC]",
                        item.title == "Administration" && "bg-gray-500"
                      )}
                    >
                      {item.icon}
                    </span>
                    <span className="text-sm text-secondary-500">
                      {item.title}
                    </span>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenuItem;
