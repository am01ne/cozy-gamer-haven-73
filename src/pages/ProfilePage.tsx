import { Card } from "@/components/ui/card";
import { User, Trophy, Star } from "lucide-react";

const ProfilePage = () => {
  return (
    <div className="space-y-6 animate-slideIn">
      <div className="flex items-start gap-6 flex-col md:flex-row">
        <Card className="p-6 flex-1">
          <div className="flex items-center gap-4">
            <div className="w-24 h-24 rounded-full bg-accent flex items-center justify-center">
              <User size={48} className="text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Username</h1>
              <p className="text-muted-foreground">Joined on January 1, 2024</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6 flex-1">
          <h2 className="text-xl font-semibold mb-4">Statistics</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Trophy size={20} className="text-primary" />
                Wins
              </span>
              <span className="font-bold">42</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Star size={20} className="text-primary" />
                Rating
              </span>
              <span className="font-bold">1337</span>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Matches</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((match) => (
            <div
              key={match}
              className="flex items-center justify-between p-4 bg-accent/10 rounded-lg"
            >
              <div className="flex items-center gap-4">
                <span className="font-bold">You</span>
                <span className="text-2xl">5 - 3</span>
                <span className="font-bold">Opponent</span>
              </div>
              <span className="text-muted-foreground">2 hours ago</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default ProfilePage;