"use client";

import { FaBolt, FaCogs, FaCar, FaGlobe, FaMobileAlt, FaGamepad, FaLightbulb } from "react-icons/fa";
import ServiceCard from "./ServiceCard";

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

export default function ServicesSection() {
  return (
    <section className="bg-gray-950 text-white py-20 px-6 md:px-16" id="services">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-orange-500">Our <span className="text-white">Services</span></h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Discover our comprehensive range of innovative solutions built to empower communities, drive technological progress, and redefine what&apos;s possible.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <ServiceCard key={i} {...service} />
        ))}
      </div>
    </section>
  );
}
