"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Navigation */}
      <header className="absolute top-0 left-0 z-30 w-full px-4 py-4">

        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/20 bg-black/20 px-6 py-4 backdrop-blur-xl">
      
          {/* Logo */}
          <h1 className="text-xl font-bold tracking-widest text-white md:text-2xl">
            Elegant Spaces
          </h1>
      
          {/* Desktop Menu */}
          <ul className="hidden items-center gap-10 text-white md:flex">
            <Link
              href="/login"
              className="rounded-full border border-white px-5 py-2 transition hover:bg-white hover:text-black"
            >
              Login
            </Link>
            <li className="cursor-pointer transition hover:text-amber-400">
              Home
            </li>
            <li className="cursor-pointer transition hover:text-amber-400">
              Portfolio
            </li>
            <li className="cursor-pointer transition hover:text-amber-400">
              Services
            </li>
            <li className="cursor-pointer transition hover:text-amber-400">
              About
            </li>
            <li className="cursor-pointer transition hover:text-amber-400">
              Contact
            </li>
          </ul>
      
          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-full p-2 text-white transition hover:bg-white/10 md:hidden"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
      
        </nav>
      
        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            menuOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-3xl border border-white/20 bg-black/40 p-6 backdrop-blur-xl">
      
            <ul className="space-y-6 text-center text-lg text-white">
              <li>
                <Link
                  href="/login"
                  className="block rounded-full border border-white py-3 text-center hover:bg-white hover:text-black transition"
                >
                  Login
                </Link>
              </li>
              <li className="cursor-pointer hover:text-amber-400">
                Home
              </li>
      
              <li className="cursor-pointer hover:text-amber-400">
                Portfolio
              </li>
      
              <li className="cursor-pointer hover:text-amber-400">
                Services
              </li>
      
              <li className="cursor-pointer hover:text-amber-400">
                About
              </li>
      
              <li className="cursor-pointer hover:text-amber-400">
                Contact
              </li>
      
            </ul>
      
          </div>
        </div>
      
      </header>

     {/* Hero Section */}
     <section className="relative z-10 flex min-h-screen items-center justify-center px-6">
       <div className="max-w-4xl text-center text-white">
         <p className="mb-4 text-lg uppercase tracking-[0.4em] text-amber-400">
           Luxury Interior Design
         </p>
     
         <h1 className="text-6xl font-extrabold leading-tight md:text-8xl">
           Elegant Spaces
         </h1>
     
         <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-200 md:text-2xl">
           Transforming interiors into timeless, functional, and beautiful
           spaces. From modern living rooms to luxurious commercial interiors,
           we bring your vision to life through thoughtful design and exceptional
           craftsmanship.
         </p>
     
         <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">
                <button className="rounded-full bg-amber-500 px-8 py-4 text-lg font-semibold text-white transition duration-300 hover:bg-amber-600 hover:scale-105">
             Explore Designs
           </button>
     
           <button className="rounded-full border-2 border-white px-8 py-4 text-lg font-semibold text-white transition duration-300 hover:bg-white hover:text-black hover:scale-105">
             Book Consultation
           </button>
         </div>
       </div>
     </section>     

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce">
        ↓
      </div>
    </main>
  );
}