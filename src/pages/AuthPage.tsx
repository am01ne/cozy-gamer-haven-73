import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import PingPongBall from "@/components/PingPongBall";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate loading and redirect
    setTimeout(() => {
      setLoading(false);
      navigate('/profile');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,18,18,0.8)_0%,rgba(29,185,84,0.2)_50%,rgba(18,18,18,0.8)_100%)] animate-pulse" />
      
      <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center p-8 relative">
        {/* Left side content */}
        <div className="lg:w-1/2 p-12 relative z-10">
          <motion.div className="relative">
            <motion.h1 
              className="text-5xl font-bold mb-6 text-foreground"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Welcome to Transcendance 🏓
            </motion.h1>
            <motion.p
              className="text-xl text-foreground/80 mb-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Join the ultimate ping pong community
            </motion.p>
            <motion.p
              className="text-md text-primary"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Where every match tells a story
            </motion.p>

            {/* Animated decorative elements */}
            <motion.div 
              className="absolute -right-20 top-0"
              animate={{ 
                rotate: [0, 180, 360],
                y: [0, -15, 0],
                x: [0, 10, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="w-32 h-32 rounded-full border-2 border-[#1DB954]/20 flex items-center justify-center">
                <motion.div 
                  className="w-24 h-24 rounded-full border-2 border-[#1DB954]/40 flex items-center justify-center"
                  animate={{
                    rotate: [0, -180, -360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <PingPongBall />
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              className="absolute -left-10 bottom-0"
              animate={{ 
                rotate: [360, 180, 0],
                y: [0, 15, 0],
                x: [0, -10, 0]
              }}
              transition={{ 
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="w-24 h-24 rounded-full border-2 border-[#1ed760]/30 flex items-center justify-center">
                <motion.div 
                  className="w-16 h-16 rounded-full border-2 border-[#1ed760]/50 flex items-center justify-center"
                  animate={{
                    rotate: [0, 180, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <PingPongBall />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Right side with auth form */}
        <div className="lg:w-1/2 w-full max-w-md p-8 relative z-10">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="p-8 bg-card/90 backdrop-blur-sm border-[#1DB954]/20 shadow-[0_0_15px_rgba(29,185,84,0.1)]">
              <div className="mb-8">
                <motion.h2 
                  className="text-2xl font-bold text-foreground mb-2"
                  initial={{ y: -20 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {isLogin ? "Welcome Back" : "Sign Up for Free"}
                </motion.h2>
                <motion.p 
                  className="text-muted-foreground"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Let's get you access to greatness
                </motion.p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {!isLogin && (
                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input
                      id="username"
                      placeholder="Enter your username"
                      className="bg-background/50 border-[#1DB954]/20 focus:border-[#1DB954]/50"
                    />
                  </div>
                )}
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="bg-background/50 border-[#1DB954]/20 focus:border-[#1DB954]/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="bg-background/50 border-[#1DB954]/20 focus:border-[#1DB954]/50"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#1DB954] to-[#1ed760] hover:opacity-90"
                  disabled={loading}
                >
                  {loading ? (
                    "Loading..."
                  ) : (
                    isLogin ? "Sign In" : "Create Account"
                  )}
                </Button>

                <div className="text-center mt-4">
                  <button
                    type="button"
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-[#1DB954] hover:text-[#1ed760] text-sm"
                  >
                    {isLogin ? "Need an account? Sign up" : "Already have an account? Sign in"}
                  </button>
                </div>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;