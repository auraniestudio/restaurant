import { DishCard } from './DishCard'
import { featuredDishes } from '../data/dishes'

export function FeaturedDishes() {
  return (
    <section id="dishes" className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-serif text-gold text-sm tracking-[0.2em] uppercase mb-4">From the Kitchen</p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-charcoal">
            Featured Dishes
          </h2>
          <p className="mt-4 text-charcoal/70 max-w-xl mx-auto">
            A selection of our most beloved creations, crafted with the finest ingredients.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredDishes.map((dish) => (
            <DishCard key={dish.name} {...dish} />
          ))}
        </div>
      </div>
    </section>
  )
}
