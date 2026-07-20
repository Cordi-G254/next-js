export default function Home() {
  return (
    <main
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

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