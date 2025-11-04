'use client';
import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
        className="absolute bottom-[-100px] right-[-100px] w-[350px] h-[350px] bg-gradient-to-br from-orange-600/30 to-purple-600/30 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 2.5, repeat: Infinity, repeatType: "mirror", delay: 1 }}
        className="absolute top-[-80px] left-[-80px] w-[300px] h-[300px] bg-gradient-to-tl from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl"
      />
    </>
  );
}
