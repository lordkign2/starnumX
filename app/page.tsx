"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import AboutPreview from "./components/AboutPreview";
import ServicesSection from "./components/ServiceSection";
import ProductPreview from "./components/ProductPreview";

export default function HomePage() {
  return (
    <main className="bg-gray-950 text-white">
      {/* 🌐 Navbar */}
      <header className="flex items-center justify-between px-6 md:px-16 py-6 bg-gray-950 border-b border-gray-800 sticky top-0 z-50">
        <Link href="/" className="text-2xl font-bold text-orange-500">StarnumX</Link>
        <nav className="hidden md:flex space-x-8 text-gray-300">
          <Link href="/" className="hover:text-orange-500 transition">Home</Link>
          <Link href="/about" className="hover:text-orange-500 transition">About</Link>
          <Link href="/services" className="hover:text-orange-500 transition">Services</Link>
          <Link href="/contact" className="hover:text-orange-500 transition">Contact</Link>
        </nav>
        <Link
          href="/contact"
          className="hidden md:inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2 rounded-full transition"
        >
          Get in Touch
        </Link>
      </header>

     {/* 🦾 Hero Section with Video Background */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-6 md:px-16 overflow-hidden">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/videos/hero-bg2.mp4" 
        />

        {/* Overlay gradient for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90 z-0" />

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-orange-500 drop-shadow-md">
            Hi Intelligence.
            <br />
            <span className="text-white">Innovating for Tomorrow.</span>
          </h1>
          <p className="text-gray-200 max-w-2xl mx-auto mb-8 text-lg">
            Developing innovative, accessible, and sustainable technology solutions that solve real-life problems
            and transform industries across Africa and beyond.
          </p>
          <Link
            href="/about"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full transition"
          >
            Learn More
          </Link>
        </motion.div>
      </section>


      {/* 📊 Stats Bar */}
      <section className="bg-gray-900 py-10 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-3 text-center">
          <div>
            <h3 className="text-3xl font-bold text-orange-500">5+</h3>
            <p className="text-gray-400">Years of Experience</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-orange-500">1.0k+</h3>
            <p className="text-gray-400">Clients Served</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-orange-500">Global</h3>
            <p className="text-gray-400">Reach & Impact</p>
          </div>
        </div>
      </section>

      {/* 🧠 About Preview */}
      <AboutPreview />

      {/* ⚙️ Services Section */}
      <ServicesSection />

      {/* Product preview*/}
      <ProductPreview />

      {/* 💬 Contact Section */}
      <section className="bg-gray-950 text-center py-20 px-6 md:px-16" id="contact">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Have a project or an idea? Let’s build something extraordinary together.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <div className="text-left">
            <p className="text-gray-300">📧 starnumx@gmail.com</p>
            <p className="text-gray-300">📞 09030965812</p>
          </div>
          <Link
            href="/contact"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full transition"
          >
            Send Message
          </Link>
        </div>
      </section>
    </main>
  );
}
