import { Outlet } from "react-router";

export default function CenteredLayout() {
  return (
    <div className="flex flex-1 items-center justify-center min-h-[calc(100vh-3rem)]">
      <Outlet />
    </div>
  );
}
