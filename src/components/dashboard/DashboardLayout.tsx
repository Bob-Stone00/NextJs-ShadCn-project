import React, { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Dashboard from "./Dashboard";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      <div className="sticky top-0  h-full overflow-y-auto">
        <Sidebar />
      </div>

      <div className="flex-1">
        <Topbar />
        <main className=" ">
          <Dashboard />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
