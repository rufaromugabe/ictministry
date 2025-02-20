"use client"

import { Phone } from "lucide-react"
import { motion } from "framer-motion"

export default function Hotline() {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-green-600 text-white py-2 px-4 text-center"
    >
      <div className="container mx-auto flex items-center justify-center">
        <Phone className="mr-2 h-4 w-4" />
        <span className="font-semibold">Hotline:</span>
        <a href="tel:+263242786101" className="ml-2 hover:underline">
          +263 242 786101
        </a>
      </div>
    </motion.div>
  )
}

