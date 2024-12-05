export interface Player {
  id: number;
  name: string;
  matches: number;
  wins: number;
  tier: number;
  badge: string;
}

export interface HeadToHead {
  player1Id: number;
  player2Id: number;
  player1Wins: number;
  player2Wins: number;
}

export const players: Player[] = [
  { id: 1, name: "Alice", matches: 50, wins: 35, tier: 1, badge: "1티어" },
  { id: 2, name: "Bob", matches: 45, wins: 30, tier: 2, badge: "2티어" },
  { id: 3, name: "Charlie", matches: 40, wins: 28, tier: 3, badge: "3티어" },
  { id: 4, name: "David", matches: 55, wins: 40, tier: 1, badge: "1티어" },
  { id: 5, name: "Eve", matches: 35, wins: 22, tier: 2, badge: "2티어" },
];

export const headToHeadRecords: HeadToHead[] = [
  { player1Id: 1, player2Id: 2, player1Wins: 7, player2Wins: 5 },
  { player1Id: 1, player2Id: 3, player1Wins: 6, player2Wins: 4 },
  { player1Id: 1, player2Id: 4, player1Wins: 5, player2Wins: 8 },
  { player1Id: 1, player2Id: 5, player1Wins: 8, player2Wins: 3 },
  { player1Id: 2, player2Id: 3, player1Wins: 6, player2Wins: 6 },
  { player1Id: 2, player2Id: 4, player1Wins: 4, player2Wins: 7 },
  { player1Id: 2, player2Id: 5, player1Wins: 7, player2Wins: 2 },
  { player1Id: 3, player2Id: 4, player1Wins: 5, player2Wins: 6 },
  { player1Id: 3, player2Id: 5, player1Wins: 8, player2Wins: 1 },
  { player1Id: 4, player2Id: 5, player1Wins: 9, player2Wins: 2 },
];
