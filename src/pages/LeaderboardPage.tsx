import { Card } from "@/components/ui/card";
import { Trophy, Medal, Award } from "lucide-react";

const LeaderboardPage = () => {
  const topPlayers = [
    { rank: 1, name: "Player1", rating: 2000, wins: 150 },
    { rank: 2, name: "Player2", rating: 1900, wins: 140 },
    { rank: 3, name: "Player3", rating: 1800, wins: 130 },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="text-yellow-500" size={24} />;
      case 2:
        return <Medal className="text-gray-400" size={24} />;
      case 3:
        return <Award className="text-amber-600" size={24} />;
      default:
        return <span className="font-bold">{rank}</span>;
    }
  };

  return (
    <div className="animate-slideIn">
      <h1 className="text-3xl font-bold mb-6 text-center">Leaderboard</h1>
      <Card className="p-6">
        <div className="space-y-4">
          {topPlayers.map((player) => (
            <div
              key={player.rank}
              className="flex items-center justify-between p-4 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-8">{getRankIcon(player.rank)}</div>
                <span className="font-bold">{player.name}</span>
              </div>
              <div className="flex items-center gap-8">
                <div>
                  <span className="text-muted-foreground">Rating</span>
                  <p className="font-bold">{player.rating}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Wins</span>
                  <p className="font-bold">{player.wins}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default LeaderboardPage;