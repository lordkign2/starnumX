'use client';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-[#0B1E39]/80 backdrop-blur-md fixed w-full top-0 z-50">
      <Link href="/" className="text-xl font-bold text-orange-500 flex items-center">
        <span>StarnumX</span>
        <span className="ml-2 text-xs bg-orange-500 text-white px-2 py-1 rounded-full">Hi Intelligence</span>
      </Link>

      <div className="hidden md:flex gap-8">
        <Link href="/" className="hover:text-orange-400">Home</Link>
        <Link href="/about" className="hover:text-orange-400">About</Link>
        <Link href="/services" className="hover:text-orange-400">Services</Link>
        <Link href="/contact" className="hover:text-orange-400">Contact</Link>
      </div>

      <button onClick={() => setOpen(!open)} className="md:hidden text-orange-400">
        ☰
      </button>

      {open && (
        <div className="absolute top-16 right-4 bg-[#0B1E39] border border-gray-700 rounded-lg p-4 flex flex-col gap-3">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
