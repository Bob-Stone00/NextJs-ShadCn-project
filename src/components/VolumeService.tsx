"use client";

import { Bar, BarChart, XAxis, Legend } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
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
  { date: "2024-07-15", running: 450, swimming: 300 },
  { date: "2024-07-16", running: 380, swimming: 420 },
  { date: "2024-07-17", running: 520, swimming: 120 },
  { date: "2024-07-18", running: 140, swimming: 550 },
  { date: "2024-07-19", running: 600, swimming: 350 },
  { date: "2024-07-20", running: 480, swimming: 400 },
];

const chartConfig = {
  running: {
    label: "Running",
    color: "skyblue", // Updated color
  },
  swimming: {
    label: "Swimming",
    color: "limegreen", // Updated color
  },
} satisfies ChartConfig;

export function VolumeService() {
  return (
    <Card className="h-[320px]">
      <CardHeader>
        <CardTitle>Volume vs Service Level</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              // Removed weekday formatting
            />
            <Bar
              dataKey="running"
              stackId="a"
              fill="skyblue" // Updated color
              radius={[0, 0, 4, 4]}
              barSize={20} // Thinner bars
            />
            <Bar
              dataKey="swimming"
              stackId="a"
              fill="limegreen" // Updated color
              radius={[4, 4, 0, 0]}
              barSize={20} // Thinner bars
            />
            <ChartTooltip
              content={<ChartTooltipContent />}
              cursor={false}
              defaultIndex={1}
            />
            <Legend
              verticalAlign="bottom"
              iconSize={12}
              layout="horizontal"
              payload={[
                { value: "Volume 1,135", type: "square", color: "skyblue" },
                { value: "Services 6", type: "square", color: "limegreen" },
              ]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
