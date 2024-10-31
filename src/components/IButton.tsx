import clsx from "clsx";

function IButton({
  className = "",
  children = "",
  title,
  type,
  onclick,
}: {
  className?: string;
  children?: any;
  title?: any;
  type?: any;
  onclick?: any;
}) {
  return (
    <button
      className={clsx(
        "flex justify-center items-center gap-x-1 px-3 py-1  rounded-md hover:bg-white hover:bg-opacity-20  ",
        className
      )}
      type={type}
      onClick={onclick}
    >
      {children}
      {title}
    </button>
  );
}

export default IButton;
