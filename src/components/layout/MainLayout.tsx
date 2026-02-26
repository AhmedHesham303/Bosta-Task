import { Outlet } from "react-router";
import Navbar from "../common/Navbar";

export default function MainLayout() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-col flex-1 p-4 pt-16">
        <Outlet />
      </div>
    </div>
  );
}
