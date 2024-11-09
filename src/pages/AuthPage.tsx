import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const AuthPage = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate login
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Welcome back!",
        description: "Successfully logged in.",
      });
    }, 1000);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate registration
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Account created!",
        description: "Welcome to Transcendance.",
      });
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-[10px] opacity-50">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl" />
        </div>
      </div>

      <div className="text-center mb-8 relative">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-pulse">
          Transcendance
        </h1>
        <p className="text-muted-foreground mt-2">Enter the next level of gaming</p>
      </div>

      <Card className="w-full max-w-md p-6 animate-slideIn backdrop-blur-lg bg-card/90 border-primary/20 shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300">
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger 
              value="login"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Login
            </TabsTrigger>
            <TabsTrigger 
              value="register"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Register
            </TabsTrigger>
            <TabsTrigger 
              value="oauth"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              42 OAuth
            </TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  required 
                  className="bg-muted/50 border-primary/20 focus:border-primary/50 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  type="password" 
                  required 
                  className="bg-muted/50 border-primary/20 focus:border-primary/50 transition-colors"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="register">
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="register-username">Username</Label>
                <Input 
                  id="register-username" 
                  required 
                  className="bg-muted/50 border-primary/20 focus:border-primary/50 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="register-email">Email</Label>
                <Input 
                  id="register-email" 
                  type="email" 
                  required 
                  className="bg-muted/50 border-primary/20 focus:border-primary/50 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="register-password">Password</Label>
                <Input 
                  id="register-password" 
                  type="password" 
                  required 
                  className="bg-muted/50 border-primary/20 focus:border-primary/50 transition-colors"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                disabled={loading}
              >
                {loading ? "Creating account..." : "Register"}
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="oauth">
            <div className="space-y-4">
              <p className="text-center text-muted-foreground">
                Connect with your 42 account
              </p>
              <Button
                onClick={() => {
                  toast({
                    title: "42 OAuth",
                    description: "Redirecting to 42 authentication...",
                  });
                }}
                className="w-full bg-gradient-to-r from-secondary to-primary hover:opacity-90 transition-opacity"
              >
                Connect with 42
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default AuthPage;