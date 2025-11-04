"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";
import { Product } from "@/types/product";

const allProducts: Product[] = [
  {
    id: "1",
    name: "Readiehub",
    description:
      "ReadieHub is a 4-in-1 multifunctional device designed to support students and researchers, especially in low-resource environments. It features an 80,000mAh battery, providing extended backup for studying and device charging. It also includes a mini ring light, cooling fan, and external USB light, powered via solar and DC charging — ensuring productivity anytime, anywhere.",
    image: "/products/readiehub.jpg",
  },
  {
    id: "2",
    name: "Ecostove",
    description:
      "Ecostove is an innovative charcoal stove that generates electricity during cooking while reducing charcoal use. It captures heat and converts it into power for off-grid areas — combining clean energy with efficient, sustainable cooking.",
    image: "/products/ecostove.jpg",
  },
  {
    id: "3",
    name: "Automatic Water Pump Control System",
    description:
      "An intelligent system that optimizes water pump operation with overheating sensors, LED indicators, and voltage monitoring. Designed for efficiency, safety, and energy conservation — ideal for homes, farms, and industries.",
    image: "/products/waterpump.jpg",
  },
];

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <main className="relative min-h-screen bg-gray-950 text-white py-20 px-6 md:px-16 overflow-hidden">
      {/* Decorative background layers */}
      <div className="absolute inset-0 opacity-5 bg-[url('/svgs/tech-pattern.svg')] bg-cover bg-center pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 via-gray-950 to-black/90 pointer-events-none" />

      {/* Page Header */}
      <div className="relative text-center mb-16 z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold text-orange-500 mb-4"
        >
          Our Products
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 max-w-2xl mx-auto"
        >
          Explore our cutting-edge collection of innovative technologies designed to improve lives, empower communities, and power sustainable progress.
        </motion.p>
      </div>

      {/* Product Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {allProducts.map((p, index) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ProductCard product={p} onClick={setSelectedProduct} />
          </motion.div>
        ))}
      </div>

      {/* Product Modal */}
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </main>
  );
}
