import clsx from "clsx";
import { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { RecentMenuItemType } from "../../../types";

const RecentMenuItem = ({ item }: { item: RecentMenuItemType }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    return (
      <div
        className="flex flex-col justify-start items-start gap-y-1  py-1 px-2 "
        onMouseEnter={(e) => {
          const starIcon = e.currentTarget.querySelector(
            ".star-icon"
          ) as HTMLElement;
          if (starIcon) {
            starIcon.style.display = "block";
          }
        }}
        onMouseLeave={(e) => {
          const starIcon = e.currentTarget.querySelector(
            ".star-icon"
          ) as HTMLElement;
          if (starIcon) {
            starIcon.style.display = "none";
          }
        }}
      >
        <div className="w-full rounded-md flex justify-between items-center gap-x-2 p-1 pr-3 hover:bg-[#323940]">
          <div className="flex justify-start items-center gap-x-3">
            <div
              style={{ backgroundImage: `url(${item.imgUrl})`}}
              className={`w-10 h-8 rounded-md  bg-cover`}
            ></div>

            <div className="flex flex-col justify-start items-start  ">
              <span className="text-sm text-secondary-600/90 hover:cursor-pointer text-nowrap">
                {item.title}
              </span>
              {item.desc ? (
                <span className="text-[11px] text-secondary-600/70 hover:cursor-pointer -mt-1">
                  {item.desc}
                </span>
              ) : (
                ""
              )}
            </div>
            {item.template && (
              <span className="text-[11px] rounded-sm bg-[#455159] px-1 text-white/70 hover:cursor-pointer">
                Template
              </span>
            )}
          </div>
          <div className="flex justify-center items-center">
            {isFavorite ? (
              <FaStar
                size={14}
                onClick={() => setIsFavorite(!isFavorite)}
                className={clsx(
                  "   text-yellow-500 hover:cursor-pointer hover:scale-[1.25] transition-all duration-100  "
                )}
              />
            ) : (
              <FaRegStar
                size={14}
                onClick={() => setIsFavorite(!isFavorite)}
                className="star-icon text-secondary-600/90 hover:text-yellow-500 hover:cursor-pointer hover:scale-[1.25] transition-all duration-100 z-20  "
              />
            )}
          </div>
        </div>
      </div>
    );
  };
  export default RecentMenuItem