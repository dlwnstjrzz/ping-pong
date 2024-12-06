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
  { id: 1, name: "이동민", matches: 60, wins: 35, tier: 1, badge: "1티어" },
  { id: 2, name: "신승철", matches: 65, wins: 40, tier: 1, badge: "1티어" },
  { id: 3, name: "여진성", matches: 65, wins: 30, tier: 1, badge: "1티어" },
  { id: 4, name: "오민우", matches: 65, wins: 22, tier: 2, badge: "2티어" },
  { id: 5, name: "이준석", matches: 20, wins: 11, tier: 2, badge: "2티어" },
  { id: 6, name: "이찬혁", matches: 45, wins: 22, tier: 2, badge: "2티어" },
  { id: 7, name: "윤정현", matches: 45, wins: 22, tier: 2, badge: "2티어" },
  { id: 8, name: "유성민", matches: 45, wins: 22, tier: 2, badge: "2티어" },
  { id: 9, name: "하준영", matches: 45, wins: 22, tier: 2, badge: "2티어" },
  { id: 10, name: "민정윤", matches: 45, wins: 22, tier: 2, badge: "2티어" },
  { id: 11, name: "정지원", matches: 45, wins: 22, tier: 2, badge: "2티어" },
  { id: 12, name: "이석우", matches: 35, wins: 22, tier: 2, badge: "2티어" },
  { id: 13, name: "김수진", matches: 50, wins: 28, tier: 2, badge: "2티어" },
  { id: 14, name: "이현수", matches: 50, wins: 28, tier: 2, badge: "2티어" },
  { id: 15, name: "김령은", matches: 50, wins: 28, tier: 3, badge: "3티어" },
  { id: 16, name: "최에스더", matches: 50, wins: 28, tier: 3, badge: "3티어" },
  { id: 17, name: "손지우", matches: 25, wins: 14, tier: 3, badge: "3티어" },
  { id: 18, name: "안효진", matches: 50, wins: 28, tier: 3, badge: "3티어" },
  { id: 19, name: "구유진", matches: 45, wins: 22, tier: 3, badge: "3티어" },
];

export const headToHeadRecords: HeadToHead[] = [
  { player1Id: 17, player2Id: 8, player1Wins: 2, player2Wins: 2 },
  { player1Id: 17, player2Id: 19, player1Wins: 2, player2Wins: 1 },
  { player1Id: 17, player2Id: 16, player1Wins: 2, player2Wins: 0 },
  { player1Id: 17, player2Id: 18, player1Wins: 4, player2Wins: 1 },
  { player1Id: 17, player2Id: 15, player1Wins: 3, player2Wins: 3 },
  { player1Id: 17, player2Id: 1, player1Wins: 1, player2Wins: 2 },
  { player1Id: 17, player2Id: 9, player1Wins: 0, player2Wins: 2 },
  { player1Id: 5, player2Id: 6, player1Wins: 1, player2Wins: 2 },
  { player1Id: 5, player2Id: 10, player1Wins: 2, player2Wins: 3 },
  { player1Id: 5, player2Id: 15, player1Wins: 2, player2Wins: 0 },
  { player1Id: 5, player2Id: 12, player1Wins: 2, player2Wins: 1 },
  { player1Id: 5, player2Id: 2, player1Wins: 0, player2Wins: 2 },
];
