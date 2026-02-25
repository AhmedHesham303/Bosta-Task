import { Outlet } from "react-router";
import Navbar from "../common/NavBar";

export default function MainLayout() {
  return (
    <div className="w-full min-h-screen justify-center items-center  flex flex-col ">
      <Navbar />
      <div className="p-4">
        {" "}
        <Outlet />
      </div>
    </div>
  );
}
