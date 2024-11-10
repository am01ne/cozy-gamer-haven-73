import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { WelcomeSection } from "@/components/auth/WelcomeSection";
import { AuthForms } from "@/components/auth/AuthForms";

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
    <div className="min-h-[calc(100vh-4rem)] w-full bg-background">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,18,18,0.8)_0%,rgba(29,185,84,0.2)_50%,rgba(18,18,18,0.8)_100%)] animate-pulse" />
      
      <div className="min-h-[calc(100vh-4rem)] w-full flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 lg:px-8 relative">
        <WelcomeSection />

        {/* Right side with auth form */}
        <div className="w-full lg:w-1/2 max-w-md p-4 sm:p-6 lg:p-8 relative z-10">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="p-6 sm:p-8 bg-card/90 backdrop-blur-sm border-[#1DB954]/20 shadow-[0_0_15px_rgba(29,185,84,0.1)]">
              <div className="mb-6 sm:mb-8">
                <motion.h2 
                  className="text-xl sm:text-2xl font-bold text-foreground mb-2"
                  initial={{ y: -20 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {isLogin ? "Welcome Back" : "Sign Up for Free"}
                </motion.h2>
                <motion.p 
                  className="text-sm sm:text-base text-muted-foreground"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Let's get you access to greatness
                </motion.p>
              </div>

              <AuthForms 
                isLogin={isLogin}
                loading={loading}
                onSubmit={handleSubmit}
                setIsLogin={setIsLogin}
              />
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;