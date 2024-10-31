import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useDarkMode } from "../context/DarkModeContext";
import clsx from "clsx";

function DarkModeToggle({ className }: { className?: string }) {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button className={clsx(className)} onClick={toggleDarkMode}>
      {isDarkMode ? (
        <HiOutlineSun className="w-5 h-5 text-secondary-900 hover:text-primary-800" />
      ) : (
        <HiOutlineMoon className="w-5 h-5 text-secondary-900 hover:text-primary-800" />
      )}
    </button>
  );
}
export default DarkModeToggle;
