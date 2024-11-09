import { Card } from "@/components/ui/card";
import { User, Trophy, Star, UserPlus, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { toast } from "sonner";

const ProfilePage = () => {
  // Mock data - in a real app, this would come from your backend
  const friends = [
    { id: 1, username: "Player1", isOnline: true },
    { id: 2, username: "Player2", isOnline: false },
    { id: 3, username: "Player3", isOnline: true },
  ];

  const handleAddFriend = (username: string) => {
    toast.success(`Friend request sent to ${username}`);
  };

  return (
    <div className="space-y-6 animate-slideIn">
      <div className="flex items-start gap-6 flex-col md:flex-row">
        <Card className="p-6 flex-1 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
          <div className="flex items-center gap-4">
            <div className="w-24 h-24 rounded-full bg-accent flex items-center justify-center transition-transform hover:scale-105">
              <User size={48} className="text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Username</h1>
              <p className="text-muted-foreground">Joined on January 1, 2024</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6 flex-1 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
          <h2 className="text-xl font-semibold mb-4">Statistics</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between transition-colors hover:bg-accent/10 p-2 rounded-lg">
              <span className="flex items-center gap-2">
                <Trophy size={20} className="text-primary" />
                Wins
              </span>
              <span className="font-bold">42</span>
            </div>
            <div className="flex items-center justify-between transition-colors hover:bg-accent/10 p-2 rounded-lg">
              <span className="flex items-center gap-2">
                <Star size={20} className="text-primary" />
                Rating
              </span>
              <span className="font-bold">1337</span>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
        <h2 className="text-xl font-semibold mb-4">Friends</h2>
        <div className="space-y-4">
          {friends.map((friend) => (
            <div
              key={friend.id}
              className="flex items-center justify-between p-4 bg-accent/10 rounded-lg transition-colors hover:bg-accent/20"
            >
              <div className="flex items-center gap-3">
                <Circle
                  size={12}
                  fill={friend.isOnline ? "#22c55e" : "#6b7280"}
                  className={friend.isOnline ? "text-green-500" : "text-gray-500"}
                />
                <span className="font-medium">{friend.username}</span>
              </div>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="hover:bg-primary/20"
                    onClick={() => handleAddFriend(friend.username)}
                  >
                    <UserPlus size={18} className="mr-2" />
                    Add Friend
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex justify-between space-x-4">
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">Add {friend.username} as friend</h4>
                      <p className="text-sm text-muted-foreground">
                        Send a friend request to play together and chat!
                      </p>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
        <h2 className="text-xl font-semibold mb-4">Recent Matches</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((match) => (
            <div
              key={match}
              className="flex items-center justify-between p-4 bg-accent/10 rounded-lg transition-colors hover:bg-accent/20"
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