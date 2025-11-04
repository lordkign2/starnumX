import Link from "next/link";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">StarnumX</h2>
          <p className="text-sm text-gray-400 mb-4">
            Hi Intelligence. Building accessible, reliable, and innovative technology
            solutions for Africa and beyond.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-orange-500">Home</Link></li>
            <li><Link href="/about" className="hover:text-orange-500">About</Link></li>
            <li><Link href="/services" className="hover:text-orange-500">Services</Link></li>
            <li><Link href="/contact" className="hover:text-orange-500">Contact</Link></li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <p className="text-sm text-gray-400">starnumx@gmail.com</p>
          <p className="text-sm text-gray-400 mb-4">09030965812</p>

          <div className="flex space-x-4 text-xl">
            <Link
              href="https://www.facebook.com/profile.php?id=61582786303948"
              target="_blank"
              className="hover:text-orange-500"
            >
              <FaFacebook />
            </Link>
            <Link
              href="https://www.instagram.com/starnum_x"
              target="_blank"
              className="hover:text-orange-500"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://tiktok.com/@starnumx"
              target="_blank"
              className="hover:text-orange-500"
            >
              <FaTiktok />
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} StarnumX Technology. All rights reserved.
      </div>
    </footer>
  );
}
