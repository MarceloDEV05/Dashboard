import { Outlet } from "react-router-dom";
import { SideBar } from "../SideBar/SideBar";

export function Layout() {
  return (
    <div className="flex min-h-screen">
      <SideBar />

      <main className="flex-1 bg-gray-100 p-6">
        <Outlet />
      </main>
    </div>
  );
}
