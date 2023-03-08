import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/sidebar";

const MainLayout = () => {
  return (
    <div>
      <Sidebar />
    </div>
  );
};

export default MainLayout;
