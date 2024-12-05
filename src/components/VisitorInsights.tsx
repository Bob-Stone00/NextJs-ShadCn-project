"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis, Legend } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", loyal: 186, new: 80, unique: 100 },
  { month: "February", loyal: 305, new: 200, unique: 150 },
  { month: "March", loyal: 237, new: 120, unique: 180 },
  { month: "April", loyal: 73, new: 190, unique: 110 },
  { month: "May", loyal: 209, new: 130, unique: 200 },
  { month: "June", loyal: 214, new: 140, unique: 160 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function VisitorInsights() {
  return (
    <Card className="py-[20px] ">
      <CardHeader>
        <CardTitle className="font-bold">Visitor Insights</CardTitle>
      </CardHeader>
      <CardContent className="relative right-[32px]">
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              ticks={[0, 100, 200, 300, 400]}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="loyal"
              type="monotone"
              stroke="purple"
              strokeWidth={2}
              dot={false}
              name="Loyal Customers"
            />
            <Line
              dataKey="new"
              type="monotone"
              stroke="red"
              strokeWidth={2}
              dot={false}
              name="New Customers"
            />
            <Line
              dataKey="unique"
              type="monotone"
              stroke="lime"
              strokeWidth={2}
              dot={false}
              name="Unique Customers"
            />
            <Legend
              verticalAlign="bottom"
              height={36}
              formatter={(value, entry) => {
                const { stroke }: any = entry;
                return (
                  <span style={{ color: stroke, fontWeight: "bold" }}>
                    {value}
                  </span>
                );
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
