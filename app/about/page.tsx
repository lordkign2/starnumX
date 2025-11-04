import Image from "next/image";
import AnimatedBackground from "../components/AnimatedBackground";
import { FaBinoculars, FaBullseye} from "react-icons/fa";

export const metadata = {
  title: "About | StarnumX Technology",
  description:
    "Discover StarnumX Technology — driving innovation, sustainability, and digital transformation across Africa.",
};

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden bg-[#0B1E39] text-gray-100">
      {/* Animated gradient lights */}
      <AnimatedBackground />

      {/* === HERO SECTION === */}
      <section className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-28">
        {/* Left Text */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Empowering <span className="text-orange-500">Innovation</span> <br /> Across Africa and Beyond
          </h1>
          <p className="text-gray-300 text-lg max-w-lg mx-auto md:mx-0 leading-relaxed">
            StarnumX Technology is committed to building sustainable, accessible, and intelligent
            technology solutions that uplift communities and reshape industries.
          </p>
        </div>

        {/* Right Hero Image (PNG/SVG placeholder) */}
        <div className="flex-1 flex justify-center mt-10 md:mt-0">
          <Image
            src="/images/about.png"
            alt="Innovation at StarnumX"
            width={520}
            height={520}
            className="drop-shadow-2xl rounded-2xl"
          />
        </div>
      </section>

      {/* === MISSION / VISION SECTION === */}
      <section className="relative z-10 px-6 md:px-20 py-24 bg-[#112B4A] rounded-t-3xl">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="bg-[#0E2647] p-8 rounded-2xl shadow-lg border border-orange-500/30 hover:border-orange-400/60 transition">
            <div className="flex items-center gap-4 mb-4">
              {/* <Image
                src="/icons/mission.svg"
                alt="Mission Icon"
                width={40}
                height={40}
                className="opacity-90"
              /> */}
              <div className="text-4xl"><FaBullseye/></div>
              <h2 className="text-3xl font-semibold text-orange-400">Our Mission</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              To develop innovative, accessible, and sustainable technology solutions that solve
              real-life problems, empower communities, and transform industries across Africa and
              beyond.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-[#0E2647] p-8 rounded-2xl shadow-lg border border-purple-500/30 hover:border-purple-400/60 transition">
            <div className="flex items-center gap-4 mb-4">
              {/* <Image
                src="/icons/vision.svg"
                alt="Vision Icon"
                width={40}
                height={40}
                className="opacity-90"
              /> */}
              <div className="text-4xl"><FaBinoculars/></div>
              
              <h2 className="text-3xl font-semibold text-purple-400">Our Vision</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              To become a leading force in African tech innovation—powering progress, improving
              lives, and inspiring a smarter, more connected, and self-reliant future through
              technology.
            </p>
          </div>
        </div>
      </section>

      {/* === OUR STORY / INNOVATION SECTION === */}
      <section className="relative z-10 px-6 md:px-20 py-24 bg-[#0B1E39]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/images/illustrations/about-hero.jpg"
              alt="Our Innovation Lab"
              width={500}
              height={400}
              className="rounded-2xl shadow-2xl"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-orange-400 mb-4">
              Driven by Purpose, Powered by People
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We’re more than a tech company — we’re a movement of dreamers, engineers, and
              changemakers redefining what’s possible. Our approach merges local insight with global
              standards to create innovations that matter.
            </p>
            <p className="text-gray-400 leading-relaxed">
              From smart energy systems to digital platforms and AI tools, StarnumX is shaping the
              future one solution at a time.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
