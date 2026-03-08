export interface DishCardProps {
  image: string
  name: string
  description: string
  price: string
}

export function DishCard({ image, name, description, price }: DishCardProps) {
  return (
    <article className="group bg-cream rounded-sm overflow-hidden shadow-md border border-stone/40 hover:shadow-lg hover:border-gold/20 transition-all duration-300">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5 md:p-6">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-serif text-xl font-semibold text-charcoal">{name}</h3>
          <span className="font-serif text-charcoal-light font-medium whitespace-nowrap">{price}</span>
        </div>
        <p className="text-charcoal-light text-sm leading-relaxed">{description}</p>
      </div>
    </article>
  )
}
