import { LuTableProperties } from "react-icons/lu";
import { FaStar, FaLock, FaRocket, FaBolt } from "react-icons/fa";
import { IoMdOptions } from "react-icons/io";
import { HiUserGroup } from "react-icons/hi";
import IButton from "../IButton";
import HeaderProfileItem from "../Header/HeaderProfileItem";
import { MdFilterList } from "react-icons/md";
import { RiMoreFill } from "react-icons/ri";

export default function BoardHeader() {
  return (
    <div className=" w-full min-h-10  bg-[#1e1a1c] bg-opacity-20 flex flex-wrap  items-center justify-between  text-white text-nowrap px-1 md:pl-4 md:pr-2 py-2 ">
      <div className="flex items-center gap-1 md:gap-2">
        <input
          type="text"
          placeholder="Trello "
          defaultValue="Trello "
          className="input rounded-sm min-w-32 w-36 max-w-60 h-8 bg-transparent hover:!bg-white hover:!bg-opacity-20 placeholder:font-bold placeholder:text-text-sm text-nowrap placeholder:text-white !text-white focus:!text-secondary-500 focus:placeholder:text-sm focus:bg-gray-900  focus:hover:!bg-gray-900"
        />
        <IButton className="!p-1.5">
          <FaStar className="text-white  text-nowrap" />
        </IButton>
        <IButton className="!p-1.5">
          <FaLock className="text-white  text-nowrap" />
          <span className="hidden lg:block text-sm ">Private</span>
        </IButton>
        <div className="flex items-center gap-1.5 px-2 py-1.5 rounded  bg-[#EAF0F0] hover:bg-white cursor-pointer ">
          <IoMdOptions className="!text-black " size={14} />
          <span className="text-xs text-black font-medium  ">Board</span>
        </div>
        <IButton className="!p-1.5 hidden sm:flex ">
          <LuTableProperties className="rotate-180" />
          <span className="hidden lg:block text-sm font-medium">Table</span>
        </IButton>
      </div>

      <div className="flex w-full md:w-fit justify-end items-center gap-1">
        <IButton className="!p-1.5 ">
          <FaRocket className="text-white  text-nowrap " />
          <span className="hidden xl:block text-sm ">Power-Ups</span>
        </IButton>
        <IButton className="!p-1.5 ">
          <FaBolt className="text-white  text-nowrap" />
          <span className="hidden xl:block text-sm ">Automation</span>
        </IButton>
        <IButton className="!p-1.5">
          <MdFilterList className="text-white  text-nowrap" />
          <span className="hidden md:block text-sm ">Filters</span>
        </IButton>
        <HeaderProfileItem className="hover:bg-white hover:bg-opacity-20 !tooltip-bottom " />

        <div className="flex items-center gap-1.5 px-2 py-1.5 rounded  bg-[#EAF0F0] hover:bg-white cursor-pointer ">
          <HiUserGroup className="!text-black " size={14} />
          <span className="text-xs text-black font-medium  ">Share</span>
        </div>

        <IButton className="!p-1.5">
          <RiMoreFill className="text-white  text-nowrap" size={20} />
        </IButton>
      </div>
    </div>
  );
}
