import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const GamePage = () => {
  const [message, setMessage] = useState("");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-slideIn">
      <Card className="lg:col-span-2 aspect-video bg-card/50 backdrop-blur-sm border border-primary/20 flex items-center justify-center shadow-lg hover:shadow-primary/20 transition-shadow">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-primary">Ping Pong Game</h2>
          <p className="text-muted-foreground">Game implementation will go here</p>
        </div>
      </Card>

      <Card className="flex flex-col h-[60vh] lg:h-auto bg-card/50 backdrop-blur-sm border border-primary/20 shadow-lg">
        <div className="p-4 border-b border-primary/20">
          <h2 className="font-bold text-primary">Live Chat</h2>
        </div>
        
        <div className="flex-1 p-4 space-y-4 overflow-auto scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
          {[1, 2, 3].map((msg) => (
            <div
              key={msg}
              className="bg-accent/10 p-3 rounded-lg border border-primary/10 hover:border-primary/20 transition-colors"
            >
              <p className="font-bold text-sm text-primary">Player {msg}</p>
              <p className="text-foreground/80">Message {msg}</p>
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-primary/20">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setMessage("");
            }}
            className="flex gap-2"
          >
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 bg-background/50 border-primary/20 focus:border-primary"
            />
            <Button type="submit" size="icon" className="bg-primary hover:bg-primary/80">
              <Send size={18} />
            </Button>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default GamePage;