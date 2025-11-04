"use client";

import { motion } from "framer-motion";
import {
  FaBolt,
  FaCogs,
  FaCar,
  FaGlobe,
  FaMobileAlt,
  FaGamepad,
  FaLightbulb,
} from "react-icons/fa";
import ServiceCard from "../components/ServiceCard";
import Image from "next/image";

const services = [
  {
    icon: <FaBolt />,
    title: "Electrical System Design & Fabrication",
    description:
      "Custom power systems, control panels, and renewable energy integration tailored to your needs.",
  },
  {
    icon: <FaCogs />,
    title: "Electronics Development",
    description:
      "We design and build embedded systems, smart devices, and automation solutions for modern industries.",
  },
  {
    icon: <FaCar />,
    title: "Automotive Systems",
    description:
      "Innovative vehicle systems focused on safety, performance, and intelligent diagnostics.",
  },
  {
    icon: <FaGlobe />,
    title: "Web Development",
    description:
      "Responsive websites and full-stack web applications using modern frameworks and best practices.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile App Development",
    description:
      "We build Android and cross-platform apps focused on usability, reliability, and performance.",
  },
  {
    icon: <FaGamepad />,
    title: "Game Development",
    description:
      "Educational, mobile, and PC games that combine fun, creativity, and interactive storytelling.",
  },
  {
    icon: <FaLightbulb />,
    title: "Innovation & Product Prototyping",
    description:
      "Hardware-software integration and user-focused inventions that bring bold ideas to life.",
  },
];

export default function ServicesPage() {
  return (
    <main className="relative overflow-hidden bg-[#0B1E39] text-gray-100 min-h-screen">
      {/* === Animated background === */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-10rem] left-[-10rem] w-[400px] h-[400px] bg-orange-500/10 blur-[150px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10rem] right-[-10rem] w-[400px] h-[400px] bg-blue-500/10 blur-[150px] rounded-full animate-pulse"></div>
      </div>

      {/* === Header Section === */}
      <section className="relative z-10 text-center pt-32 pb-16 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-extrabold text-orange-500 mb-6"
        >
          What We Do
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-gray-300 max-w-2xl mx-auto leading-relaxed"
        >
          Discover our comprehensive range of innovative solutions built to empower communities,
          drive technological progress, and redefine what&apos;s possible through cutting-edge technology.
        </motion.p>

        {/* Decorative SVG */}
        <div className="mt-10 flex justify-center">
          <Image
            src="/images/illustrations/services-hero.png"
            alt="Tech illustration"
            width={480}
            height={400}
            className="opacity-90 drop-shadow-2xl"
          />
        </div>
      </section>

      {/* === Services Grid === */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {services.map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </motion.div>
      </section>

      {/* === Subtle Circuit Overlay === */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
        <Image
          src="/images/illustrations/tech-grid.jpg"
          alt="Circuit background"
          fill
          className="object-cover"
        />
      </div>
    </main>
  );
}
