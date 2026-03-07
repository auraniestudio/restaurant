const galleryImages = [
  '/images/gallery/1.jpg',
  '/images/gallery/2.jpg',
  '/images/gallery/3.jpg',
  '/images/gallery/4.jpg',
  '/images/gallery/5.jpg',
  '/images/gallery/6.jpg',
]

export function Gallery() {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-stone/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-serif text-gold text-sm tracking-[0.2em] uppercase mb-4">Atmosphere</p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-charcoal">
            Gallery
          </h2>
          <p className="mt-4 text-charcoal/70 max-w-xl mx-auto">
            A glimpse into our space and the moments we create.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {galleryImages.map((src, i) => (
            <div
              key={i}
              className="aspect-square overflow-hidden rounded-sm group"
            >
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
