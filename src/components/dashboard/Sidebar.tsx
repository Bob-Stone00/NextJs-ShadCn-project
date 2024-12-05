import React from "react";
import {
  Home,
  Trophy,
  ShoppingCart,
  Package,
  BarChart,
  MessageCircle,
  Settings,
  LogOut,
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <aside
      className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-sidebar transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 z-50 lg:relative lg:translate-x-0`}
    >
      <div className="p-6 text-2xl font-extrabold text-primary">
        <button
          className="lg:hidden text-gray-600"
          onClick={toggleSidebar}
          aria-label="Close Sidebar"
        >
          ✖
        </button>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        <NavItem icon={<Home />} label="Dashboard" active />
        <NavItem icon={<Trophy />} label="Leaderboard" />
        <NavItem icon={<ShoppingCart />} label="Order" />
        <NavItem icon={<Package />} label="Products" />
        <NavItem icon={<BarChart />} label="Sales Report" />
        <NavItem icon={<MessageCircle />} label="Messages" />
        <NavItem icon={<Settings />} label="Settings" />
      </nav>

      <div className="p-4 border-t border-gray-200">
        <NavItem icon={<LogOut />} label="Sign Out" />
      </div>
    </aside>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active }) => (
  <div
    className={`flex items-center p-3 rounded-md cursor-pointer ${
      active
        ? "bg-primary text-white shadow-md"
        : "hover:bg-gray-100 text-grayText"
    }`}
  >
    <span className="mr-4">{icon}</span>
    <span>{label}</span>
  </div>
);

export default Sidebar;
