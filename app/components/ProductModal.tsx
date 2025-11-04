'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Product } from '@/types/product'

interface Props {
  product: Product | null
  onClose: () => void
}

export default function ProductModal({ product, onClose }: Props) {
  if (!product) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 sm:p-6"
        onClick={onClose}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="relative bg-gray-900 border border-gray-800 rounded-2xl shadow-xl w-full max-w-lg mx-auto overflow-hidden flex flex-col"
        >
          {/* Close button (mobile-friendly) */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-400 hover:text-orange-400 text-2xl font-bold z-20"
            aria-label="Close"
          >
            ×
          </button>

          {/* Image */}
          <div className="w-full bg-black flex items-center justify-center">
            <Image
              src={product.image}
              alt={product.name}
              width={600}
              height={400}
              className="object-contain max-h-[350px] sm:max-h-[400px] w-auto mx-auto rounded-t-2xl"
            />
          </div>

          {/* Content */}
          <div className="p-5 sm:p-6 text-center overflow-y-auto max-h-[60vh] sm:max-h-[65vh]">
            <h3 className="text-2xl sm:text-3xl font-bold text-orange-400 mb-3 border-b border-gray-800 pb-3">{product.name}</h3>
            <p
              className="text-gray-300 text-sm sm:text-base whitespace-pre-line text-left leading-relaxed mt-4"
              dangerouslySetInnerHTML={{ __html: product.description }}
            />

            <div className="mt-8 flex justify-center">
              <button
                onClick={onClose}
                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-full text-white font-semibold transition-all shadow-lg hover:shadow-orange-500/30"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
