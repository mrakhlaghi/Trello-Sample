import clsx from "clsx";

function SearchInput({ className }: { className?: string }) {
  return (
    <label
      className={clsx(
        " input input-bordered textField__input !w-full flex items-center gap-2 !min-h-8 !max-h-8 p-1 pl-3 bg-secondary-100",
        className
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="h-4 w-4 opacity-70"
      >
        <path
          fillRule="evenodd"
          d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
          clipRule="evenodd"
        />
      </svg>
      <input
        type="text"
        placeholder="Coin, Function, Announcement"
        className="grow text-xs flex  justify-center items-end pt-1 "
      />
    </label>
  );
}

export default SearchInput;
