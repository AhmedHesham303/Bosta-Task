import { getToken } from "@/lib/tokenStorage";
import { Navigate } from "react-router";

export default function WithAuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = getToken();
  if (!token) return <Navigate to="/signin" />;

  return children;
}
