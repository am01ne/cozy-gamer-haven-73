import { motion } from "framer-motion";
import PingPongBall from "@/components/PingPongBall";

export const WelcomeSection = () => {
  return (
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
  );
};