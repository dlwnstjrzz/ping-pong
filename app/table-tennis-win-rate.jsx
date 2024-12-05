"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

// Sample data for the player's match history
const matchData = [
  { month: "Jan", winRate: 60 },
  { month: "Feb", winRate: 65 },
  { month: "Mar", winRate: 70 },
  { month: "Apr", winRate: 68 },
  { month: "May", winRate: 72 },
  { month: "Jun", winRate: 75 },
];

export default function TableTennisWinRate() {
  const totalMatches = 100;
  const wins = 70;
  const losses = totalMatches - wins;
  const winRate = (wins / totalMatches) * 100;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">
        Table Tennis Win-Rate Statistics
      </h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Player Statistics</CardTitle>
            <CardDescription>Overall performance summary</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p>Total Matches: {totalMatches}</p>
              <p>Wins: {wins}</p>
              <p>Losses: {losses}</p>
              <p className="text-lg font-semibold">
                Win Rate: {winRate.toFixed(2)}%
              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Win Rate Over Time</CardTitle>
            <CardDescription>Monthly win rate percentage</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                winRate: {
                  label: "Win Rate",
                  color: "hsl(var(--chart-1))",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={matchData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="winRate"
                    stroke="var(--color-winRate)"
                    name="Win Rate %"
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
