"use client";

import "../styles/auth.css";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";


export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-100 via-[#F8F6F2] to-gray-200 flex items-center justify-center p-6">
            
      <div className="w-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl md:grid md:grid-cols-2">

        {/* LEFT SIDE */}
        <div
          className="relative hidden md:flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/login.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/65"></div>

          <div className="relative z-10 px-10 text-center text-white">

            <h1 className="text-5xl font-bold tracking-wide">
              welcome Back!
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-200">
              Creating timeless interiors that blend luxury,
              comfort and functionality.
            </p>

            <Link href="/about" className="home-btn">
                Explore Website
            </Link>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center justify-center p-10">

          <div className="w-full max-w-md">

            <h2 className="text-center text-4xl font-bold text-[#1F1F1F]">
              Welcome Back
            </h2>

            <p className="mt-3 text-center text-gray-500">
              Sign in to continue.
            </p>

            <form className="mt-10 space-y-6">

              <div>
                <label className="mb-2 block font-medium text-[#1F1F1F]">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-slate-400 bg-slate-50 px-4 py-3 text-gray-900 outline-none transition-all duration-300 focus:border-[#C9A227] focus:bg-white focus:ring-4 focus:ring-[#C9A227]/20"
                />
              </div>

              <div>

                <label className="mb-2 block font-medium text-[#1F1F1F]">
                  Password
                </label>

                <div className="relative">

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full rounded-xl border border-slate-400 bg-slate-50 px-4 py-3 text-gray-900 outline-none transition-all duration-300 focus:border-[#C9A227] focus:bg-white focus:ring-4 focus:ring-[#C9A227]/20"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-600 hover:text-[#C9A227] transition"
                  >
                    {showPassword ? (
                      <EyeOff size={22} />
                    ) : (
                      <Eye size={22} />
                    )}
                  </button>

                </div>

              </div>

              <div className="flex items-center justify-between">

                <label className="flex items-center gap-2 text-sm">

                  <input
                    type="checkbox"
                    className="accent-[#C9A227]"
                  />

                  Remember me

                </label>

                <a
                  href="#"
                  className="text-sm text-[#C9A227] hover:underline"
                >
                  Forgot Password?
                </a>

              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-[#C9A227] py-3 text-lg font-semibold text-white transition duration-300 hover:scale-105 hover:bg-[#b08b1f]"
              >
                Login
              </button>

            </form>

            <div className="auth-links">
                <p>
                    Don't have an account?{" "}
                    <Link href="/signup" className="gold-link">
                        Create one
                    </Link>
                </p>
            </div>

            <p className="mt-8 text-center text-gray-500">
              ←{" "}
              <Link
                href="/"
                className="font-semibold text-[#C9A227] hover:underline"
              >
                Back to Home
              </Link>
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}