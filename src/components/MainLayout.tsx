import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AppLayout from "./AppLayout";

// type Props = {
//     children: React.ReactElement | React.ReactElement[] | React.ReactNode
//   }

function MainLayout() {
  const [, setPath] = useState("");
  const location = useLocation();
  useEffect(() => {
    setPath(location.pathname);
  }, [location]);

  return (
    <>
      <AppLayout>
        {/* <MobileSideBar/> */}

        {/* {children} */}
      </AppLayout>
    </>
  );
}

export default MainLayout;
