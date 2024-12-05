"use client";

import { useState } from "react";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { Input } from "../components/ui/input";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../components/ui/chart";
import {
  PieChart,
  Label,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import {
  players,
  headToHeadRecords,
  Player,
  HeadToHead,
} from "../data/players";

export default function TableTennisClub() {
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  console.log(11111, selectedPlayer);
  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getWinRate = (player) =>
    ((player.wins / player.matches) * 100).toFixed(2);

  const getHeadToHeadRecords = (playerId) => {
    return players
      .filter((p) => p.id !== playerId)
      .map((opponent) => {
        const record = headToHeadRecords.find(
          (r) =>
            (r.player1Id === playerId && r.player2Id === opponent.id) ||
            (r.player1Id === opponent.id && r.player2Id === playerId)
        );

        if (!record) return { opponent, wins: 0, losses: 0 };

        const wins =
          record.player1Id === playerId
            ? record.player1Wins
            : record.player2Wins;
        const losses =
          record.player1Id === playerId
            ? record.player2Wins
            : record.player1Wins;

        return { opponent, wins, losses };
      });
  };

  const badges = ["indigo", "gray", "red"];
  const pieChartData = selectedPlayer
    ? [
        { name: "승리", value: selectedPlayer.wins },
        { name: "패배", value: selectedPlayer.matches - selectedPlayer.wins },
      ]
    : [];

  const COLORS = ["#4ade80", "#fb923c"];

  const sortedPlayers = [...players].sort(
    (a, b) => b.wins / b.matches - a.wins / a.matches
  );

  const topPlayersData = sortedPlayers.slice(0, 5).map((player) => ({
    name: player.name,
    winRate: parseFloat(getWinRate(player)),
  }));
  const chartData = [
    { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
    { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
    { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
    { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
    { browser: "other", visitors: 90, fill: "var(--color-other)" },
  ];
  const chartConfig = {
    visitors: {
      label: "Visitors",
    },
    chrome: {
      label: "이동민",
      color: "hsl(var(--chart-1))",
    },
    safari: {
      label: "여진성",
      color: "hsl(var(--chart-2))",
    },
    firefox: {
      label: "신승철",
      color: "hsl(var(--chart-3))",
    },
    edge: {
      label: "이재명",
      color: "hsl(var(--chart-4))",
    },
    other: {
      label: "손지우",
      color: "hsl(var(--chart-5))",
    },
  };
  return (
    <div className="container mx-auto p-4 max-w-[390px] min-h-screen">
      <div className="flex items-center mb-4 justify-center">
        <img src="./logo.png" alt="로고" width={90} />
        {/* <h1 className="text-2xl font-bold">드라이브 아카이브</h1> */}
      </div>

      <Card className="mb-4">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Top 5</CardTitle>
          <CardDescription className="text-sm">승률 상위 5명</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <BarChart
              accessibilityLayer
              data={chartData}
              layout="vertical"
              margin={{
                left: 0,
              }}
            >
              <YAxis
                dataKey="browser"
                type="category"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => chartConfig[value]?.label}
              />
              <XAxis dataKey="visitors" type="number" hide />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar dataKey="visitors" layout="vertical" radius={5} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card className="mb-4">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">멤버 리스트</CardTitle>
          <CardDescription className="text-sm">
            리스트에서 이름을 클릭해 상대전적을 확인하세요!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Input
            placeholder="선수 검색..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full mb-3"
          />
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-xs">이름</TableHead>
                  <TableHead className="text-xs">경기</TableHead>
                  <TableHead className="text-xs">승</TableHead>
                  <TableHead className="text-xs">승률</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPlayers.map((player) => {
                  const badge = badges[player.tier - 1];
                  console.log(2232, badge);
                  return (
                    <TableRow
                      key={player.id}
                      className={`cursor-pointer hover:bg-gray-700 ${
                        selectedPlayer?.id === player.id ? "bg-gray-700" : ""
                      }`}
                      onClick={() => setSelectedPlayer(player)}
                    >
                      <TableCell className="font-medium text-sm">
                        {player.name}
                        {player.tier == 1 && (
                          <span class="ml-4 bg-[#00CCB7] text-[#190211] text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                            {player.badge}
                          </span>
                        )}
                        {player.tier == 2 && (
                          <span class="ml-4 bg-[#747FFF] text-[#190211] text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">
                            {" "}
                            2티어
                          </span>
                        )}
                        {player.tier == 3 && (
                          <span class="ml-4 bg-[#FF52D9] text-[#190211] text-xs font-bold me-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300">
                            {" "}
                            병아리
                          </span>
                        )}
                      </TableCell>
                      <TableCell className="text-sm">
                        {player.matches}
                      </TableCell>
                      <TableCell className="text-sm">{player.wins}</TableCell>
                      <TableCell className="text-sm">
                        {getWinRate(player)}%
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {selectedPlayer && (
        <>
          <Card className="mb-4 bg-gray-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">
                {selectedPlayer.name}의 승률
              </CardTitle>
              <CardDescription className="text-sm">
                게스트와의 경기도 포함
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={chartConfig}
                className="mx-auto aspect-square max-h-[250px]"
              >
                <PieChart>
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Pie
                    data={chartData}
                    dataKey="visitors"
                    nameKey="browser"
                    innerRadius={60}
                    strokeWidth={5}
                  >
                    <Label
                      content={({ viewBox }) => {
                        if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                          return (
                            <text
                              x={viewBox.cx}
                              y={viewBox.cy}
                              textAnchor="middle"
                              dominantBaseline="middle"
                            >
                              <tspan
                                x={viewBox.cx}
                                y={viewBox.cy}
                                className="fill-foreground text-3xl font-bold"
                              >
                                {(
                                  (selectedPlayer.wins /
                                    selectedPlayer.matches) *
                                  100
                                ).toFixed(2)}
                                %
                              </tspan>
                              <tspan
                                x={viewBox.cx}
                                y={(viewBox.cy || 0) + 24}
                                className="fill-muted-foreground"
                              >
                                win rates
                              </tspan>
                            </text>
                          );
                        }
                      }}
                    />
                  </Pie>
                </PieChart>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card className="bg-gray-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">
                {selectedPlayer.name}의 상대전적
              </CardTitle>
              <CardDescription className="text-sm">
                다른 멤버들과의 전적
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table className="text-gray-100">
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-xs">상대</TableHead>
                      <TableHead className="text-xs">승</TableHead>
                      <TableHead className="text-xs">패</TableHead>
                      <TableHead className="text-xs">승률</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {getHeadToHeadRecords(selectedPlayer.id).map(
                      ({ opponent, wins, losses }) => (
                        <TableRow key={opponent.id}>
                          <TableCell className="text-sm">
                            {opponent.name}
                            {opponent.tier == 1 && (
                              <span class="ml-4 bg-[#00CCB7] text-[#190211] text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                                1티어
                              </span>
                            )}
                            {opponent.tier == 2 && (
                              <span class="ml-4 bg-[#747FFF] text-[#190211] text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">
                                2티어
                              </span>
                            )}
                            {opponent.tier == 3 && (
                              <span class="ml-4 bg-[#FF52D9] text-[#190211] text-xs font-bold me-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300">
                                병아리
                              </span>
                            )}
                          </TableCell>
                          <TableCell className="text-sm">{wins}</TableCell>
                          <TableCell className="text-sm">{losses}</TableCell>
                          <TableCell className="text-sm">
                            {((wins / (wins + losses)) * 100).toFixed(2)}%
                          </TableCell>
                        </TableRow>
                      )
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}
