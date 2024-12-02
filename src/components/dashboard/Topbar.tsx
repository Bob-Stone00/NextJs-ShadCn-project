import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Bell, Search, Globe } from "lucide-react";

const Topbar = () => {
  return (
    <header className="flex items-center justify-between h-20 px-6 bg-white shadow-md">
      
      <h1 className="text-xl font-bold text-grayText">Dash</h1>

      
      <div className="flex items-center space-x-6">
        
        <div className="relative w-72">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-grayText" />
          <input
            type="text"
            placeholder="Search here..."
            className="w-full pl-10 pr-4 py-2 text-sm rounded-md bg-gray-100 focus:ring-2 focus:ring-primary outline-none"
          />
        </div>

       
        <Globe className="w-6 h-6 text-grayText cursor-pointer" />
        <Bell className="w-6 h-6 text-grayText cursor-pointer" />

       
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <div className="cursor-pointer">
              <Avatar>
                <AvatarImage src="/profile.jpg" alt="Profile Picture" />
                <AvatarFallback>MU</AvatarFallback>
              </Avatar>
            </div>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content className="w-48 bg-white rounded-md shadow-lg p-2">
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
