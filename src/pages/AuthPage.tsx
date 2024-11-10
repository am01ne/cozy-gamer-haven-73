import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { motion, AnimatePresence } from "framer-motion";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: isLogin ? "Welcome back!" : "Account created!",
        description: isLogin ? "Successfully logged in." : "Welcome to Transcendance.",
      });
    }, 1000);
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Section - Hero/Branding */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="hidden lg:flex w-1/2 bg-gradient-to-br from-primary/20 via-primary to-secondary relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="relative flex flex-col items-center justify-center w-full p-12 text-white">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80"
          >
            Transcendance
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-white/80 text-center max-w-md"
          >
            Enter the next level of gaming. Challenge players, climb the leaderboard, and become a legend.
          </motion.p>
        </div>
      </motion.div>

      {/* Right Section - Auth Forms */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-8 bg-background/95">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md space-y-8"
        >
          {/* OAuth Button */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Button 
              variant="outline"
              className="w-full py-6 text-lg border-primary/20 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
              onClick={() => {
                toast({
                  title: "42 OAuth",
                  description: "Redirecting to 42 authentication...",
                });
              }}
            >
              <img src="/42_Logo.svg" alt="42" className="w-8 h-8 mr-4 group-hover:animate-float" />
              Continue with 42
            </Button>
          </motion.div>

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
              <Card className="p-6 backdrop-blur-lg bg-card/30 border-primary/20 hover:border-primary/30 transition-colors duration-300">
                <form onSubmit={handleSubmit} className="space-y-4">
                  {!isLogin && (
                    <div className="space-y-2">
                      <Label htmlFor="username">Username</Label>
                      <Input
                        id="username"
                        required
                        className="bg-muted/50 border-primary/20 focus:border-primary/50 transition-colors"
                      />
                    </div>
                  )}
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

                  {isLogin && (
                    <div className="text-sm text-right">
                      <button 
                        type="button"
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
                      </button>
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity animate-glow"
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
        </motion.div>
      </div>
    </div>
  );
};

export default AuthPage;