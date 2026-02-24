import { getToken } from "@/lib/tokenStorage";
import { Navigate, Outlet } from "react-router";

function UnAuthLayout() {
  const token = getToken();
  if (!token) return <Outlet />;

  return <Navigate to="/" />;
}

export default UnAuthLayout;
