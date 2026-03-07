import type { DishCardProps } from '../components/DishCard'

export const featuredDishes: DishCardProps[] = [
  {
    image: '/images/dishes/heirloom-tomato-salad.jpg',
    name: 'Heirloom Tomato Salad',
    description: 'Peak-season tomatoes with burrata, basil oil, and aged balsamic. Light, bright, and perfectly balanced.',
    price: '$27',
  },
  {
    image: '/images/dishes/truffle-risotto.jpg',
    name: 'Truffle Risotto',
    description: 'Creamy Arborio rice with black truffle shavings, Parmesan, and a touch of white wine.',
    price: '$42',
  },
  {
    image: '/images/dishes/wagyu-ribeye.jpg',
    name: 'Grilled Wagyu Ribeye',
    description: 'A5 Japanese Wagyu, 8 oz, with roasted bone marrow butter and seasonal vegetables.',
    price: '$98',
  },
  {
    image: '/images/dishes/berry-dessert.jpg',
    name: 'Berry Dessert',
    description: 'Classic cheesecake crowned with vibrant seasonal berries and a hint of vanilla.',
    price: '$24',
  },
]

export interface MenuItem {
  name: string
  description?: string
  price: string
}

export interface MenuCategory {
  title: string
  items: MenuItem[]
}

export const menuPreview: MenuCategory[] = [
  {
    title: 'Starters',
    items: [
      { name: 'Oysters on the Half Shell', price: '$24' },
      { name: 'Foie Gras Torchon', description: 'Sourdough, fig jam', price: '$32' },
      { name: 'Crispy Artichokes', description: 'Lemon aioli, herbs', price: '$16' },
      { name: 'Beet & Goat Cheese', description: 'Walnuts, honey', price: '$18' },
    ],
  },
  {
    title: 'Main Courses',
    items: [
      { name: 'Pan-Roasted Halibut', description: 'Spring vegetables, beurre blanc', price: '$44' },
      { name: 'Herb-Crusted Lamb Rack', description: 'Mint jus, dauphine potatoes', price: '$52' },
      { name: 'Duck Two Ways', description: 'Confit leg, seared breast, cherry reduction', price: '$48' },
      { name: 'Wild Mushroom Risotto', description: 'Parmesan, truffle oil', price: '$38' },
    ],
  },
  {
    title: 'Desserts',
    items: [
      { name: 'Crème Brûlée', price: '$14' },
      { name: 'Seasonal Sorbet Trio', price: '$12' },
      { name: 'Apple Tarte Tatin', description: 'Vanilla ice cream', price: '$16' },
      { name: 'Cheese Selection', description: 'Three cheeses, accompaniments', price: '$24' },
    ],
  },
  {
    title: 'Drinks',
    items: [
      { name: 'Sommelier\'s Selection', description: 'Wine pairing, 4 glasses', price: '$65' },
      { name: 'Craft Cocktails', price: '$16' },
      { name: 'Espresso & Digestifs', price: '$8 – $18' },
      { name: 'Tea Selection', price: '$8' },
    ],
  },
]
