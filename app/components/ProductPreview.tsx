// components/ProductPreview.tsx
'use client'

import Link from 'next/link'
import { useState } from 'react'
import ProductCard from './ProductCard'
import ProductModal from './ProductModal'
import { Product } from '@/types/product'

const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Readiehub',
    description:
      `ReadieHub is a 4-in-1 multifunctional device designed to support students and researchers, especially in low-resource environments.

It features an 80,000mAh battery, providing extended backup for studying and device charging.

It also includes a mini ring light for night reading or virtual meetings, a cooling fan, and an external USB light for flexible lighting needs.

Powered via solar and DC charging, ReadieHub ensures productivity anytime, anywhere, making learning and research more accessible and uninterrupted.`,
    image: '/products/readiehub.jpg',
  },
  {
    id: '2',
    name: 'Ecostove',
    description:
      `Ecostove is an innovative charcoal stove designed to generate electricity during the cooking process while significantly reducing charcoal consumption.

It captures heat energy and converts it into usable electricity, perfect for off-grid and low-power areas.

Ecostove also features enhanced heat retention, ensuring faster cooking with less fuel.

This eco-friendly solution combines clean energy generation with efficient cooking — ideal for sustainable households and rural communities.`,
    image: '/products/ecostove.jpg',
  },
  {
    id: '3',
    name: 'Automatic Water Pump Control System',
    description:
      `The Automatic Water Pump Control System is an intelligent device designed to protect and optimize water pump operations.

**Features:**
- 🔥 Overheating Sensor — Monitors temperature to prevent damage.
- 🚨 Overheating Alert — Notifies users when the pump is at risk.
- 💡 LED Indicator — Displays system status at a glance.
- ⚡ Input Voltage Monitor — Ensures safe voltage levels.
- 🌱 Environmentally Friendly — Reduces energy waste and extends lifespan.

Ideal for homes, farms, and industries — it enhances safety, efficiency, and pump durability.`,
    image: '/products/waterpump.jpg',
  },
]


export default function ProductPreview() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 to-black text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/tech-pattern.svg')] opacity-5 bg-cover"></div>
      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-orange-500 mb-8">Our <span className="text-white">Innovative</span> Products</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {sampleProducts.map((p) => (
          <ProductCard key={p.id} product={p} onClick={setSelectedProduct} />
        ))}
      </div>
      <div className="mt-10">
        <Link
          href="/products"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full transition"
        >
          View All Products
        </Link>
      </div>

      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </section>
  )
}
