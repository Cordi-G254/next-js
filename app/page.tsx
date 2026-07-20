export default function Home() {
  return (
    <main
      className="min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="max-w-3xl text-center text-white">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-wide">
            Elegant Spaces
          </h1>

          <p className="mt-6 text-lg md:text-2xl text-gray-200">
            Transforming interiors into timeless, functional, and beautiful
            spaces. From modern living rooms to luxurious commercial designs,
            we bring your vision to life.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <button className="rounded-lg bg-amber-500 px-8 py-4 text-lg font-semibold text-white transition hover:bg-amber-600">
              Explore Designs
            </button>

            <button className="rounded-lg border border-white px-8 py-4 text-lg font-semibold text-white transition hover:bg-white hover:text-black">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}