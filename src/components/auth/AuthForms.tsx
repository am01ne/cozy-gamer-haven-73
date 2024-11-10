import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";

interface AuthFormsProps {
  isLogin: boolean;
  loading: boolean;
  onSubmit: (e: React.FormEvent) => void;
  setIsLogin: (value: boolean) => void;
}

export const AuthForms = ({ isLogin, loading, onSubmit, setIsLogin }: AuthFormsProps) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {!isLogin && (
        <>
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              placeholder="Enter your first name"
              className="bg-background/50 border-[#1DB954]/20 focus:border-[#1DB954]/50"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              placeholder="Enter your last name"
              className="bg-background/50 border-[#1DB954]/20 focus:border-[#1DB954]/50"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              placeholder="Enter your username"
              className="bg-background/50 border-[#1DB954]/20 focus:border-[#1DB954]/50"
            />
          </div>
        </>
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
        {loading ? "Loading..." : (isLogin ? "Sign In" : "Create Account")}
      </Button>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-[#1DB954]/20" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
        </div>
      </div>

      <Button 
        type="button"
        variant="outline"
        className="w-full border-[#1DB954]/20 hover:bg-[#1DB954]/10"
        onClick={() => window.location.href = "https://api.intra.42.fr/oauth/authorize?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code"}
      >
        <img src="/42_Logo.svg" alt="42 Logo" className="w-5 h-5 mr-2" />
        Continue with 42 Network
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
  );
};