"use client";

import React, { ReactNode, useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

interface DashboardLayoutProps {
  children?: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <div className="flex">
      <div className="sticky top-0 h-screen">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>

      <div className="flex-1">
        <div className="sticky top-0 z-50">
          <Topbar toggleSidebar={toggleSidebar} />
        </div>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
