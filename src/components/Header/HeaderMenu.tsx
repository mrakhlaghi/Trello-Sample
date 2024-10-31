import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import TrelloBrandIcon from "../TrelloBrand/TrelloBrandIcon";
import HeaderMenuItem from "./HeaderMenuItem";
import HeaderWorkSpaceItem from "./HeaderWorkSpaceItem";
import HeaderRecentItem from "./HeaderRecentItem";
import HeaderStarredItem from "./HeaderStarredItem";
import HeaderTemplatesItem from "./HeaderTemplatesItem";
import useResponsiveWidth from "../../hooks/UseResponsiveWidth";
import HiddenMenuItems from "./HiddenMenuItems";
import { FiPlus } from "react-icons/fi";
// import { GetAndSetTokenApi } from "../services/authService";

function HeaderMenu({ className }: { className?: string }) {
  const navigate = useNavigate();
  const size = useResponsiveWidth();

  return (
    <ul
      className={clsx(
        "flex   justify-center items-center gap-x-1  ",
        className
      )}
    >
      <li className="flex justify-center items-center  ">
        <HeaderMenuItem key="menu-tab" />
        <TrelloBrandIcon
          key="trello-tab"
          onClick={() => navigate("https://trello.com/")}
        />
      </li>

      <li
        className=" hidden sm:flex  justify-center items-center  text-secondary-500 text-sm "
        key="workspace-tab"
      >
        <HeaderWorkSpaceItem />
      </li>
      <li
        className="hidden md:flex justify-center items-center  text-secondary-500 text-sm "
        key="recent-tab"
      >
        <HeaderRecentItem />
      </li>
      <li
        className="hidden lg:flex justify-center items-center  text-secondary-500 text-sm "
        key="starred-tab"
      >
        <HeaderStarredItem />
      </li>
      <li
        className="hidden xl:flex justify-center items-center  text-secondary-500 text-sm    "
        key="templates-tab"
      >
        <HeaderTemplatesItem />
      </li>
      <li
        className="flex justify-center items-center  text-secondary-500 text-sm  ml-3 "
        key="more-tab"
      >
        <HiddenMenuItems />
      </li>
      <li
        className="flex justify-center items-center  text-secondary-500 text-sm  ml-3 "
        key="create-tab"
      >
        <button
          className=" px-2 py-1.5  rounded-[4px] text-semibold text-[#1d2125] bg-[#579dff] hover:bg-[#85b8ff]  flex justify-center items-center"
          onClick={() => navigate("https://trello.com")}
        >
          { size._2xl ? "Create" : <FiPlus size={18} />}
        </button>
      </li>
    </ul>
  );
}
export default HeaderMenu;
