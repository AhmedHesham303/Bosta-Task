import { getToken } from "@/lib/tokenStorage";
import { Navigate, Outlet } from "react-router";

export default function AuthLayout() {
  const token = getToken();
  if (!token) return <Navigate to="/login" />;

  return <Outlet />;
}
