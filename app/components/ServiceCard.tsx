"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-gradient-to-br from-gray-900 to-gray-950 text-white p-8 rounded-2xl shadow-xl border border-gray-800 hover:border-orange-500 hover:shadow-orange-400/30 transition-all duration-300 group"
    >
      <div className="text-orange-500 text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-orange-400">{title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}
