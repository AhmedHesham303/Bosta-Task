import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center p-4">
      <Outlet />
    </div>
  );
}
