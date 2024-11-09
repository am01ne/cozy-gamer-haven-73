import { Link, useLocation } from "react-router-dom";
import { Trophy, User, GamepadIcon, LogOut } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const isAuth = location.pathname === "/auth";

  if (isAuth) return null;

  return (
    <nav className="relative z-10 bg-card/50 backdrop-blur-md border-b border-primary/20">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-primary text-2xl font-bold hover:text-secondary transition-colors">
            Transcendance
          </Link>
          <div className="flex items-center space-x-6">
            <Link
              to="/profile"
              className="text-foreground hover:text-primary transition-colors flex items-center gap-2 group"
            >
              <User className="group-hover:animate-glow" size={20} />
              Profile
            </Link>
            <Link
              to="/leaderboard"
              className="text-foreground hover:text-primary transition-colors flex items-center gap-2 group"
            >
              <Trophy className="group-hover:animate-glow" size={20} />
              Leaderboard
            </Link>
            <Link
              to="/game"
              className="text-foreground hover:text-primary transition-colors flex items-center gap-2 group"
            >
              <GamepadIcon className="group-hover:animate-glow" size={20} />
              Play
            </Link>
            <button
              onClick={() => {
                // Handle logout
              }}
              className="text-foreground hover:text-destructive transition-colors flex items-center gap-2 group"
            >
              <LogOut className="group-hover:animate-glow" size={20} />
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;