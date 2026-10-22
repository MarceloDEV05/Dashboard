import { Outlet } from "react-router-dom";
import { SideBar } from "../SideBar/SideBar";

export function Layout() {
return (
  
    <div className="flex h-screen w-full bg-slate-100">
      
      
      <SideBar />

     
      <main className="flex-1 p-8">
        <Outlet /> 
      </main>

    </div>
  ); 
}
