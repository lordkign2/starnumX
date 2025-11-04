"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="bg-white text-gray-900 py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-orange-500">StarnumX</span> Technology
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            StarnumX Technology is a visionary tech startup committed to solving
            real-world problems through practical and scalable innovations. Our
            mission is to bridge the gap between communities and impactful
            technology by creating accessible, affordable, and reliable
            solutions.
          </p>

          <Link
            href="/about"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full transition"
          >
            Discover More
          </Link>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Image
            src="/images/about.png"
            alt="About StarnumX"
            width={500}
            height={400}
            className="rounded-2xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
