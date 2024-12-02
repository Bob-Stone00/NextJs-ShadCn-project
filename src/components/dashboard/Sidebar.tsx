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

const Sidebar = () => {
  return (
    <aside className="flex flex-col h-screen w-64 bg-white shadow-sidebar">
      
      <div className="p-6 text-2xl font-extrabold text-primary"></div>

      
      <nav className="flex-1 px-4 space-y-1">
        <NavItem icon={<Home />} label="Dashboard" active />
        <NavItem icon={<Trophy />} label="Leaderboard" />
        <NavItem icon={<ShoppingCart />} label="Order" />
        <NavItem icon={<Package />} label="Products" />
        <NavItem icon={<BarChart />} label="Sales Report" />
        <NavItem icon={<MessageCircle />} label="Messages" />
        <NavItem icon={<Settings />} label="Settings" />
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200">
        <NavItem icon={<LogOut />} label="Sign Out" />
      </div>
    </aside>
  );
};

const NavItem = ({ icon, label, active }:any) => (
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
