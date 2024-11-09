import { Link, useLocation } from "react-router-dom";
import { Trophy, User, GamepadIcon, LogOut } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const isAuth = location.pathname === "/auth";

  if (isAuth) return null;

  return (
    <nav className="bg-primary shadow-md">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-white text-2xl font-bold">
            Transcendance
          </Link>
          <div className="flex items-center space-x-6">
            <Link
              to="/profile"
              className="text-white hover:text-accent transition-colors flex items-center gap-2"
            >
              <User size={20} />
              Profile
            </Link>
            <Link
              to="/leaderboard"
              className="text-white hover:text-accent transition-colors flex items-center gap-2"
            >
              <Trophy size={20} />
              Leaderboard
            </Link>
            <Link
              to="/game"
              className="text-white hover:text-accent transition-colors flex items-center gap-2"
            >
              <GamepadIcon size={20} />
              Play
            </Link>
            <button
              onClick={() => {
                // Handle logout
              }}
              className="text-white hover:text-accent transition-colors flex items-center gap-2"
            >
              <LogOut size={20} />
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;