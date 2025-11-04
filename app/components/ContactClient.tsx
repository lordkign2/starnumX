"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Mail, Phone, Send } from "lucide-react";

export default function ContactClient() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) setStatus("✅ Message sent successfully!");
      else setStatus("❌ Failed to send message. Try again.");
    } catch (err) {
      setStatus("❌ Something went wrong.");
    }
  };

  return (
    <main className="relative overflow-hidden bg-[#0B1E39] text-gray-100 min-h-screen">
      {/* === DECORATIVE BACKGROUND === */}
      <div className="absolute inset-0 bg-[url('/images/contact-grid.svg')] opacity-10 bg-cover bg-center" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-orange-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-400/10 blur-[130px] rounded-full" />

      {/* === HERO SECTION === */}
      <section className="relative z-10 pt-28 pb-16 flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold text-orange-500 mb-4"
        >
          Let&apos;s Build Something <span className="text-white">Great</span> Together
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-300 text-lg max-w-xl mx-auto leading-relaxed mb-12"
        >
          Have a project, partnership, or innovative idea? Reach out — we&apos;re always excited to
          collaborate and create transformative solutions together.
        </motion.p>

        <Image
          src="/images/illustrations/contact-hero2.png"
          alt="Contact illustration"
          width={420}
          height={420}
          className="drop-shadow-2xl mb-12"
        />
      </section>

      {/* === CONTACT FORM === */}
      <section className="relative z-10 px-6 md:px-12">
        <div className="max-w-4xl mx-auto bg-[#112B4A]/70 backdrop-blur-md border border-orange-400/20 rounded-3xl p-10 shadow-2xl">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm mb-2 font-medium text-gray-200">Name</label>
              <input
                name="name"
                type="text"
                placeholder="Your full name"
                onChange={handleChange}
                required
                className="w-full rounded-lg px-4 py-3 bg-gray-100 text-gray-900 focus:ring-2 focus:ring-orange-500 outline-none transition-all duration-300 focus:shadow-lg"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 font-medium text-gray-200">Email</label>
              <input
                name="email"
                type="email"
                placeholder="your@email.com"
                onChange={handleChange}
                required
                className="w-full rounded-lg px-4 py-3 bg-gray-100 text-gray-900 focus:ring-2 focus:ring-orange-500 outline-none transition-all duration-300 focus:shadow-lg"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 font-medium text-gray-200">Message</label>
              <textarea
                name="message"
                rows={5}
                placeholder="Tell us about your project, idea, or inquiry..."
                onChange={handleChange}
                required
                className="w-full rounded-lg px-4 py-3 bg-gray-100 text-gray-900 focus:ring-2 focus:ring-orange-500 outline-none transition-all duration-300 focus:shadow-lg"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition"
            >
              <Send size={18} /> Send Message
            </motion.button>

            {status && <p className="mt-4 text-sm text-center text-gray-300">{status}</p>}
          </form>
        </div>

        {/* === CONTACT INFO === */}
        <div className="mt-16 text-center space-y-3">
          <p>
            <Mail className="inline-block text-orange-400 mr-2" />
            <span className="font-semibold">starnumx@gmail.com</span>
          </p>
          <p>
            <Phone className="inline-block text-orange-400 mr-2" /> 09030965812
          </p>
        </div>
      </section>

      {/* Decorative SVGs */}
      <Image
        src="/images/contact-lines.svg"
        alt="Decorative tech lines"
        width={400}
        height={400}
        className="absolute bottom-0 right-0 opacity-10"
      />
       <Image
        src="/images/contact-lines.svg"
        alt="Decorative tech lines"
        width={400}
        height={400}
        className="absolute bottom-0 left-0 opacity-10"
      />
       <Image
        src="/images/contact-lines.svg"
        alt="Decorative tech lines"
        width={400}
        height={400}
        className="absolute top-0 right-0 opacity-10"
      />
       <Image
        src="/images/contact-lines.svg"
        alt="Decorative tech lines"
        width={400}
        height={400}
        className="absolute top-0 left-0 opacity-10"
      />
    </main>
  );
}
