import { motion } from "framer-motion";

const PingPongBall = () => (
  <motion.div
    className="w-8 h-8 bg-white rounded-full shadow-lg"
    animate={{
      scale: [1, 1.1, 1],
      rotate: [0, 360],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "linear"
    }}
  />
);

export default PingPongBall;