import HeaderMenu from "./HeaderMenu";
import { useState } from "react";
import clsx from "clsx";
import HeaderInformationItem from "./HeaderInformationItem";
import HeaderProfileItem from "./HeaderProfileItem";
import HeaderNotificationItem from "./HeaderNotificationItem";
import HeaderSearchItem from "./HeaderSearchItem";

function Header() {
  // const { isLoading } = useUser();
  const [isLoading] = useState(false);
  // const [isOpenSearch, setIsOpenSearch] = useState(false);
  // const size = useResponsiveWidth();

  return (
    <div
      className=" px-2 h-12 flex justify-between items-center bg-[#1D2125]  border-b border-b-secondary-200/80 
    "
    >
      <div
        className={clsx(
          " flex justify-between items-center w-full h-full ",
          isLoading && "blur-sm opacity-50"
        )}
      >
        {/* <img src={TrelloLogoBrand} alt="TrelloLogoBrand" /> */}

        <div className=" flex justify-start items-center gap-x-6 h-full">
          <HeaderMenu />
        </div>
        <div className="flex justify-center items-center gap-x-3 ">
          <HeaderSearchItem />
          {/* <DarkModeToggle />   */}

          <div className="flex justify-start items-center gap-x-1.5">
            <HeaderNotificationItem />
            <HeaderInformationItem />
            <HeaderProfileItem wrapperClassName="z-30" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
