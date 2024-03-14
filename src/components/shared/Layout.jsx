import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 overflow-y-auto">
        <Header />
        <div className="p-4 h-100">{<Outlet />}</div>
      </div>
    </div>
  );
};

export default Layout;
