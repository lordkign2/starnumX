// components/ProductCard.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Product } from '@/types/product'

interface Props {
  product: Product
  onClick: (product: Product) => void
}

export default function ProductCard({ product, onClick }: Props) {
  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: '0 0 30px rgba(249,115,22,0.4)' }}
      transition={{ type: 'spring', stiffness: 200 }}
      onClick={() => onClick(product)}
      className="cursor-pointer bg-gradient-to-br from-gray-900/60 to-gray-950/60 border border-gray-800 rounded-2xl p-4 shadow-lg hover:shadow-orange-500/30 transition-all duration-300 "
    >
      <div className="overflow-hidden rounded-xl mb-4">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={300}
          className="object-cover w-full h-48 mb-4 group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <h3 className="text-lg font-bold text-orange-400 mb-2 group-hover:text-orange-300 transition-colors">{product.name}</h3>
      <p className="text-gray-300 text-sm line-clamp-3">{product.description}</p>
    </motion.div>
  )
}
