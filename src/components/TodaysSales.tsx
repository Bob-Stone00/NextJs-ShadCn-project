"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Legend } from "recharts";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", desktop: 18600, mobile: 8000 },
  { month: "February", desktop: 30500, mobile: 20000 },
  { month: "March", desktop: 23700, mobile: 12000 },
  { month: "April", desktop: 7300, mobile: 19000 },
  { month: "May", desktop: 20900, mobile: 13000 },
  { month: "June", desktop: 21400, mobile: 14000 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "skyblue",
  },
  mobile: {
    label: "Mobile",
    color: "limegreen",
  },
} satisfies ChartConfig;

export function TodaysSales() {
  return (
    <Card className="h-[410px] ">
      <CardHeader>
        <CardTitle className="text-xl">Total Revenue</CardTitle>
      </CardHeader>
      <CardContent className="relative right-[31px] h-[100%]">
        <ChartContainer config={chartConfig} className="">
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{ top: 0, right: 0, left: 20, bottom: -30 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              ticks={[0, 5000, 10000, 15000, 20000, 25000]}
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              domain={[0, 25000]}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar
              dataKey="desktop"
              fill="skyblue"
              radius={4}
              barSize={12}
              name="Online Sales (Desktop)"
            />
            <Bar
              dataKey="mobile"
              fill="limegreen"
              radius={4}
              barSize={12}
              name="Offline Sales (Mobile)"
            />

            <Legend
              verticalAlign="bottom"
              height={36}
              formatter={(value, entry) => {
                const { fill }: any = entry;
                return (
                  <span style={{ color: fill, fontWeight: "bold" }}>
                    {value}
                  </span>
                );
              }}
            />
          </BarChart>
        </ChartContainer>
        <CardFooter className="flex flex-wrap justify-center gap-4 mt-[30px] ">
          <div className="flex items-center justify-between bg-white   w-full">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 relative bg-blue-100 rounded-lg p-2">
                <Image
                  src="images/bx-objects-vertical-bottom.svg"
                  alt=""
                  objectFit="contain"
                  width={23}
                  height={23}
                />
              </div>
              <div>
                <h3 className="text-base font-sm">Online Sales</h3>
              </div>
            </div>
            <p className="text-blue-500 font-bold text-sm">$30 500</p>
          </div>

          <div className="flex items-center justify-between bg-white   w-full">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 relative bg-green-100 rounded-lg p-2">
                <Image
                  src="images/bx-square-rounded.svg"
                  alt=""
                  objectFit="contain"
                  width={23}
                  height={23}
                />
              </div>
              <div>
                <h3 className="text-base font-sm">Offline Sales</h3>
              </div>
            </div>
            <p className="text-green-500 font-bold text-sm">$20 000</p>
          </div>
        </CardFooter>
      </CardContent>
    </Card>
  );
}
