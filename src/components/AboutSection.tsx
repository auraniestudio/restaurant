export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-stone/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <img
              src="/public/about.jpg"
              alt="Lumière Restaurant interior"
              className="w-full aspect-[4/3] object-cover rounded-sm shadow-md"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="font-serif text-gold text-sm tracking-[0.2em] uppercase mb-4">Our Story</p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-charcoal mb-6">
              Where craft meets elegance
            </h2>
            <p className="text-charcoal/80 leading-relaxed mb-4">
              Lumière Restaurant has been a beacon of refined dining since our doors opened. We believe in the art of the table - where every dish is thoughtfully composed, every ingredient sourced with care, and every moment designed to linger.
            </p>
            <p className="text-charcoal/80 leading-relaxed">
              Our chef brings decades of experience from kitchens around the world, blending classic technique with seasonal inspiration. Whether you join us for a celebration or a quiet evening, we invite you to experience dining as it was meant to be.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
