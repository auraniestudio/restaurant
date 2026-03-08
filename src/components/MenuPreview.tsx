import { menuPreview } from '../data/dishes'

export function MenuPreview() {
  return (
    <section id="menu" className="py-16 md:py-24 bg-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-serif text-gold text-sm tracking-[0.2em] uppercase mb-4">Discover</p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-charcoal">
            Menu Preview
          </h2>
          <p className="mt-4 text-charcoal/70 max-w-xl mx-auto">
            A glimpse of our seasonal offerings. Full menu available at the restaurant.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {menuPreview.map((category) => (
            <div
              key={category.title}
              className="bg-cream rounded-sm p-6 shadow-md border border-stone/40 hover:shadow-lg hover:border-gold/20 transition-all duration-300"
            >
              <h3 className="font-serif text-xl font-semibold text-charcoal mb-6 pb-2 border-b border-gold/30">
                {category.title}
              </h3>
              <ul className="space-y-4">
                {category.items.map((item) => (
                  <li key={item.name} className="flex flex-col gap-0.5">
                    <div className="flex justify-between items-start gap-2">
                      <span className="font-medium text-charcoal">{item.name}</span>
                      <span className="font-serif text-charcoal-light text-sm whitespace-nowrap">{item.price}</span>
                    </div>
                    {item.description && (
                      <span className="text-sm text-charcoal-light">{item.description}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
