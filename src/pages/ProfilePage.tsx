import { Card } from "@/components/ui/card";
import { User, Trophy, Star, UserPlus, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { toast } from "sonner";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

// Mock data
const mockUser = {
  username: "JohnDoe",
  joinDate: "January 1, 2024",
  avatar: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
  stats: {
    wins: 42,
    rating: 1337
  }
};

const mockFriends = [
  { 
    id: 1, 
    username: "Alice", 
    isOnline: true,
    avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
  },
  { 
    id: 2, 
    username: "Bob", 
    isOnline: false,
    avatar: "https://images.unsplash.com/photo-1582562124811-c09040d0a901"
  },
  { 
    id: 3, 
    username: "Carol", 
    isOnline: true,
    avatar: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  },
];

const mockMatches = [
  { id: 1, opponent: "Alice", score: "5-3", timeAgo: "2 hours ago", won: true },
  { id: 2, opponent: "Bob", score: "2-5", timeAgo: "5 hours ago", won: false },
  { id: 3, opponent: "Carol", score: "5-4", timeAgo: "1 day ago", won: true },
];

const ProfilePage = () => {
  const handleAddFriend = (username: string) => {
    toast.success(`Friend request sent to ${username}`);
  };

  return (
    <div className="space-y-6 animate-slideIn">
      <div className="flex items-start gap-6 flex-col md:flex-row">
        <Card className="p-6 flex-1 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
          <div className="flex items-center gap-4">
            <Avatar className="w-24 h-24">
              <AvatarImage src={mockUser.avatar} alt={mockUser.username} />
              <AvatarFallback>
                <User size={48} className="text-primary" />
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold">{mockUser.username}</h1>
              <p className="text-muted-foreground">Joined on {mockUser.joinDate}</p>
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
              <span className="font-bold">{mockUser.stats.wins}</span>
            </div>
            <div className="flex items-center justify-between transition-colors hover:bg-accent/10 p-2 rounded-lg">
              <span className="flex items-center gap-2">
                <Star size={20} className="text-primary" />
                Rating
              </span>
              <span className="font-bold">{mockUser.stats.rating}</span>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
        <h2 className="text-xl font-semibold mb-4">Friends</h2>
        <div className="space-y-4">
          {mockFriends.map((friend) => (
            <div
              key={friend.id}
              className="flex items-center justify-between p-4 bg-accent/10 rounded-lg transition-colors hover:bg-accent/20"
            >
              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={friend.avatar} alt={friend.username} />
                  <AvatarFallback>{friend.username[0]}</AvatarFallback>
                </Avatar>
                <div className="flex items-center gap-2">
                  <Circle
                    size={8}
                    fill={friend.isOnline ? "#22c55e" : "#6b7280"}
                    className={friend.isOnline ? "text-green-500" : "text-gray-500"}
                  />
                  <span className="font-medium">{friend.username}</span>
                </div>
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
          {mockMatches.map((match) => (
            <div
              key={match.id}
              className="flex items-center justify-between p-4 bg-accent/10 rounded-lg transition-colors hover:bg-accent/20"
            >
              <div className="flex items-center gap-4">
                <span className={`font-bold ${match.won ? 'text-green-500' : 'text-red-500'}`}>You</span>
                <span className="text-2xl">{match.score}</span>
                <span className="font-bold">{match.opponent}</span>
              </div>
              <span className="text-muted-foreground">{match.timeAgo}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default ProfilePage;