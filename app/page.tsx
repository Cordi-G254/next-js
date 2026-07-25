"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";
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
      <header className="absolute top-0 left-0 z-30 w-full">
        <nav className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-full bg-white/10 px-8 py-4 backdrop-blur-md shadow-lg">

          {/* Logo */}
          <h1 className="text-2xl font-bold tracking-wider text-white">
            Elegant Spaces
          </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10 text-white">
        <li className="cursor-pointer hover:text-amber-400 transition">
          Home
        </li>
        <li className="cursor-pointer hover:text-amber-400 transition">
          Portfolio
        </li>
        <li className="cursor-pointer hover:text-amber-400 transition">
          Services
        </li>
        <li className="cursor-pointer hover:text-amber-400 transition">
          About
        </li>
        <li className="cursor-pointer hover:text-amber-400 transition">
          Contact
        </li>
      </ul>
  
      {/* Mobile Hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-white"
      >
        {menuOpen ? <X size={32} /> : <Menu size={32} />}
      </button>
    </nav>

    {/* Mobile Menu */}
    {menuOpen && (
      <div className="mx-4 mt-3 rounded-3xl bg-black/70 backdrop-blur-lg p-6 md:hidden">
  
        <ul className="space-y-5 text-center text-white text-lg">
  
          <li className="cursor-pointer hover:text-amber-400 transition">
            Home
          </li>
  
          <li className="cursor-pointer hover:text-amber-400 transition">
            Portfolio
          </li>
  
          <li className="cursor-pointer hover:text-amber-400 transition">
            Services
          </li>
  
          <li className="cursor-pointer hover:text-amber-400 transition">
            About
          </li>
  
          <li className="cursor-pointer hover:text-amber-400 transition">
            Contact
          </li>
  
        </ul>
  
      </div>
    )}
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