export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video background with overlay */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          aria-hidden
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-charcoal/50" aria-hidden />
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <p className="font-serif text-lg md:text-xl tracking-[0.3em] uppercase text-gold/90 mb-4">
          Welcome
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-4">
          Lumière Restaurant
        </h1>
        <p className="font-sans text-lg md:text-xl text-white/90 mb-12 max-w-xl mx-auto font-light">
          A refined dining experience
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#menu"
            className="inline-flex items-center justify-center px-8 py-4 bg-gold text-white font-medium rounded-sm hover:bg-gold/90 transition-all duration-300 hover:shadow-lg"
          >
            View Menu
          </a>
          <a
            href="#reservation"
            className="inline-flex items-center justify-center px-8 py-4 border border-white/80 text-white font-medium rounded-sm hover:bg-white/10 transition-all duration-300"
          >
            Book a Table
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="block text-white/70 hover:text-white transition-colors" aria-label="Scroll to about">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  )
}
