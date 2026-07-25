import "./about.css";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-overlay"></div>

        <div className="about-hero-content">
          <h1>Discover Elegant Spaces</h1>

          <p>
            We don't just decorate interiors—we design experiences that inspire
            luxury, comfort, and timeless beauty.
          </p>

          <Link href="/" className="hero-btn">
            Back Home
          </Link>
        </div>
      </section>

      {/* Introduction */}
      <section className="intro-section">

        <h2>Beautiful Design Begins Here</h2>

        <p>
          At Elegant Spaces, every room tells a story. We specialize in creating
          interiors that combine functionality with elegance, ensuring every
          project reflects the personality and lifestyle of our clients.
        </p>

      </section>

      {/* Section 1 */}
      <section className="content-section">

        <div className="content-image">
          <img
            src="/images/living-room.jpg"
            alt="Luxury Living Room"
          />
        </div>

        <div className="content-text">

          <h2>Designed Around You</h2>

          <p>
            Every project starts with understanding your vision. Whether it's a
            cozy family home or a luxury apartment, our designers carefully
            combine color, lighting, furniture, and space planning to create
            interiors you'll love for years to come.
          </p>

        </div>

      </section>

      {/* Section 2 */}
      <section className="content-section reverse">

        <div className="content-image">
          <img
            src="/images/bedroom.jpg"
            alt="Modern Bedroom"
          />
        </div>

        <div className="content-text">

          <h2>Luxury Meets Comfort</h2>

          <p>
            True luxury is more than appearance. We focus on comfort,
            functionality, and quality craftsmanship to ensure every design is
            both beautiful and practical.
          </p>

        </div>

      </section>

      {/* Section 3 */}
      <section className="content-section">

        <div className="content-image">
          <img
            src="/images/office.jpg"
            alt="Office Interior"
          />
        </div>

        <div className="content-text">

          <h2>Why Choose Elegant Spaces?</h2>

          <ul>
            <li>✔ Personalized Interior Designs</li>
            <li>✔ Premium Quality Materials</li>
            <li>✔ Experienced Design Team</li>
            <li>✔ Modern & Timeless Concepts</li>
            <li>✔ Attention to Every Detail</li>
            <li>✔ Customer Satisfaction First</li>
          </ul>

        </div>

      </section>

      {/* CTA */}
      <section className="cta-section">

        <h2>Ready to Transform Your Space?</h2>

        <p>
          Let's create an interior that perfectly reflects your vision and
          lifestyle.
        </p>

        <div className="cta-buttons">

          <Link href="/" className="primary-btn">
            View Portfolio
          </Link>

          <Link href="/contact" className="secondary-btn">
            Contact Us
          </Link>

        </div>

      </section>
    </main>
  );
}