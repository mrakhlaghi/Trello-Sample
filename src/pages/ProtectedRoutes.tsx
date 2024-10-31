import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function ProtectedRoutes() {
  const user = useAuth();
  return user?.authenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoutes;
