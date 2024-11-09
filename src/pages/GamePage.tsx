import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const GamePage = () => {
  const [message, setMessage] = useState("");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-slideIn">
      <Card className="lg:col-span-2 aspect-video bg-accent/10 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ping Pong Game</h2>
          <p className="text-muted-foreground">Game implementation will go here</p>
        </div>
      </Card>

      <Card className="flex flex-col h-[60vh] lg:h-auto">
        <div className="p-4 border-b">
          <h2 className="font-bold">Live Chat</h2>
        </div>
        
        <div className="flex-1 p-4 space-y-4 overflow-auto">
          {[1, 2, 3].map((msg) => (
            <div
              key={msg}
              className="bg-accent/10 p-3 rounded-lg"
            >
              <p className="font-bold text-sm">Player {msg}</p>
              <p>Message {msg}</p>
            </div>
          ))}
        </div>

        <div className="p-4 border-t">
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
              className="flex-1"
            />
            <Button type="submit" size="icon">
              <Send size={18} />
            </Button>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default GamePage;