import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Bell, Search, Globe, Menu } from "lucide-react";

interface TopbarProps {
  toggleSidebar?: () => void;
}

const Topbar: React.FC<TopbarProps> = ({ toggleSidebar }) => {
  return (
    <header className="flex items-center justify-between h-20 px-6 bg-white shadow-md">
      
      <button
        className="lg:hidden p-2 rounded-md hover:bg-gray-100 text-grayText"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        <Menu className="w-6 h-6" />
      </button>

      
      <h1 className="text-xl font-bold text-grayText hidden lg:block">Dash</h1>

      
      <div className="flex items-center space-x-6">
       
        <div className="relative hidden md:block w-72">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-grayText"
            aria-hidden="true"
          />
          <input
            type="text"
            placeholder="Search here..."
            className="w-full pl-10 pr-4 py-2 text-sm rounded-md bg-gray-100 focus:ring-2 focus:ring-primary outline-none"
            aria-label="Search"
          />
        </div>

        
        <Globe className="w-6 h-6 text-grayText cursor-pointer" aria-label="Language Selector" />
        <Bell className="w-6 h-6 text-grayText cursor-pointer" aria-label="Notifications" />

       
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <div className="cursor-pointer" aria-haspopup="true" aria-expanded="false">
              <Avatar>
                <AvatarImage src="/profile.jpg" alt="Profile Picture" />
                <AvatarFallback>MU</AvatarFallback>
              </Avatar>
            </div>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content
            className="w-48 bg-white rounded-md shadow-lg p-2"
            sideOffset={5}
            align="end"
          >
            <DropdownMenu.Item className="px-3 py-2 hover:bg-gray-100 rounded-md cursor-pointer">
              View Profile
            </DropdownMenu.Item>
            <DropdownMenu.Item className="px-3 py-2 hover:bg-gray-100 rounded-md cursor-pointer">
              Settings
            </DropdownMenu.Item>
            <DropdownMenu.Item className="px-3 py-2 hover:bg-gray-100 rounded-md cursor-pointer">
              Sign Out
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>
    </header>
  );
};

export default Topbar;
