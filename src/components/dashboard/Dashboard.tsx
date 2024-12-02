import React from "react";
import { LineChartt } from "../LineChartt";
import { BarChartt } from "../BarChartt";
import { BarChartt2 } from "../BarChartt2";
import { AreaChartt } from "../AreaChartt";
import TopProducts from "../TopProducts";
import { VolumeService } from "../VolumeService";
import Image from "next/image";
import { Button } from "../ui/button";
import SalesMap from "../SalesMap";

const DashboardOutline: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 bg-gray-100 min-h-screen">
      <div className="col-span-1 md:col-span-8 bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl md:text-2xl font-bold">Today's Sales</h2>
            <p className="text-sm md:text-base text-gray-500">Sales Summary</p>
          </div>
          <Button className="flex items-center border rounded px-3 md:px-4 py-2 bg-white">
            <Image
              src="/images/bx-chevron-down (1).svg"
              alt="chart"
              width={15}
              height={15}
            />
            <span className="ml-2 text-sm">Export</span>
          </Button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
          {[
            {
              bg: "bg-red-100",
              iconBg: "bg-red-500",
              title: "$1k",
              subtitle: "Total Sales",
              change: "+8%",
              src: "images/bx-bar-chart (2).svg",
            },
            {
              bg: "bg-yellow-100",
              iconBg: "bg-yellow-500",
              title: "300",
              subtitle: "Total Orders",
              change: "+5%",
              src: "images/bx-group.svg",
            },
            {
              bg: "bg-green-100",
              iconBg: "bg-green-500",
              title: "5",
              subtitle: "Products Sold",
              change: "+1%",
              src: "images/bookmark.svg",
            },
            {
              bg: "bg-purple-100",
              iconBg: "bg-purple-500",
              title: "8",
              subtitle: "New Customers",
              change: "+0.5%",
              src: "images/book.svg",
            },
          ].map((item, index) => (
            <div key={index} className={`${item.bg} p-4 rounded-lg`}>
              <div
                className={`${item.iconBg} w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full`}
              >
                <Image src={`${item.src}`} alt="icon" width={20} height={20} />
              </div>
              <h3 className="text-lg md:text-xl font-bold mt-4">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 font-semibold">
                {item.subtitle}
              </p>
              <span className="text-xs md:text-xs text-blue-500 font-bold">
                {item.change} from yesterday
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="col-span-1 md:col-span-4 ">
        <LineChartt />
      </div>

      <div className="col-span-1 md:col-span-4  ">
        <BarChartt />
      </div>

      <div className="col-span-1 md:col-span-4  ">
        <AreaChartt />
      </div>

      <div className="col-span-1 md:col-span-4 ">
        <BarChartt2 />
      </div>

      <div className="col-span-1 md:col-span-5 ">
        <TopProducts />
      </div>

      <div className="col-span-1 md:col-span-3 ">
        <SalesMap />
      </div>

      <div className="col-span-1 md:col-span-4  ">
        <VolumeService />
      </div>
    </div>
  );
};

export default DashboardOutline;
