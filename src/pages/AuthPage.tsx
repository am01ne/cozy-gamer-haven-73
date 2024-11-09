import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { motion, AnimatePresence } from "framer-motion";

// First, let's install framer-motion for smooth transitions
<lov-add-dependency>framer-motion@latest</lov-add-dependency>

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
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
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Account created!",
        description: "Welcome to Transcendance.",
      });
    }, 1000);
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Section - Hero/Branding */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-primary/20 via-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:30px_30px]" />
        <div className="relative flex flex-col items-center justify-center w-full p-12 text-white">
          <h1 className="text-6xl font-bold mb-6">Transcendance</h1>
          <p className="text-xl text-white/80 text-center max-w-md">
            Enter the next level of gaming. Challenge players, climb the leaderboard, and become a legend.
          </p>
        </div>
      </div>

      {/* Right Section - Auth Forms */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-8 bg-background/95">
        <div className="w-full max-w-md space-y-8">
          {/* OAuth Button */}
          <div className="mb-8">
            <Button 
              variant="outline"
              className="w-full py-6 text-lg border-primary/20 hover:bg-primary/5"
              onClick={() => {
                toast({
                  title: "42 OAuth",
                  description: "Redirecting to 42 authentication...",
                });
              }}
            >
              <img src="/42_Logo.svg" alt="42" className="w-8 h-8 mr-4" />
              Continue with 42
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-primary/10" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={isLogin ? "login" : "register"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="p-6 backdrop-blur-lg bg-card/30 border-primary/20">
                <form onSubmit={isLogin ? handleLogin : handleRegister} className="space-y-4">
                  {!isLogin && (
                    <div className="space-y-2">
                      <Label htmlFor="username">Username</Label>
                      <Input
                        id="username"
                        required
                        className="bg-muted/50 border-primary/20 focus:border-primary/50"
                      />
                    </div>
                  )}
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      className="bg-muted/50 border-primary/20 focus:border-primary/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      required
                      className="bg-muted/50 border-primary/20 focus:border-primary/50"
                    />
                  </div>

                  {isLogin && (
                    <div className="text-sm text-right">
                      <a 
                        href="#" 
                        className="text-primary hover:text-primary/80 transition-colors"
                        onClick={(e) => {
                          e.preventDefault();
                          toast({
                            title: "Password Reset",
                            description: "Check your email for reset instructions.",
                          });
                        }}
                      >
                        Forgot password?
                      </a>
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                    disabled={loading}
                  >
                    {loading ? (
                      isLogin ? "Logging in..." : "Creating account..."
                    ) : (
                      isLogin ? "Login" : "Register"
                    )}
                  </Button>
                </form>
              </Card>

              <div className="mt-4 text-center text-sm">
                <span className="text-muted-foreground">
                  {isLogin ? "Don't have an account? " : "Already have an account? "}
                </span>
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  {isLogin ? "Sign up" : "Login"}
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;