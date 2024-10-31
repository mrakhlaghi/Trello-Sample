import { Outlet } from "react-router-dom";
import Header from "./Header/Header";

function AppLayout() {
  return (
    <div className="  flex  dark:bg-[#181A20] h-screen  ">
      <div className="w-full h-full ">
        <Header />
        <div className="  flex flex-col ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
export default AppLayout;
