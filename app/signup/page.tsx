"use client";

import "../styles/auth.css";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="auth-page">

      <div className="auth-card">

        {/* Left Side */}
        <div
          className="auth-left"
          style={{
            backgroundImage: "url('/images/hero.jpg')",
          }}
        >
          <div className="auth-overlay"></div>

          <div className="auth-content">

            <h1>Elegant Spaces</h1>

            <p>
              Creating timeless interiors that blend luxury,
              comfort and functionality.
            </p>

            <Link href="/about" className="home-btn">
                Explore Website
            </Link>

          </div>
        </div>

        {/* Right Side */}

        <div className="auth-right">

          <div className="auth-form">

            <h2>Create Account</h2>

            <p className="auth-subtitle">
              Join Elegant Spaces today.
            </p>

            <form>

              <div className="form-group">

                <label>Full Name</label>

                <input
                  type="text"
                  placeholder="John Doe"
                  className="auth-input"
                />

              </div>

              <div className="form-group">

                <label>Email Address</label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="auth-input"
                />

              </div>

              <div className="form-group">

                <label>Password</label>

                <div className="password-box">

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    className="auth-input"
                  />

                  <button
                    type="button"
                    className="eye-btn"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff size={22} />
                    ) : (
                      <Eye size={22} />
                    )}
                  </button>

                </div>

              </div>

              <button
                type="submit"
                className="auth-btn"
              >
                Create Account
              </button>

            </form>

            <div className="auth-links">

              <p>

                Already have an account?{" "}

                <Link href="/login">

                  Sign In

                </Link>

              </p>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}