"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Target, Lightbulb, Rocket, ChevronDown, ChevronUp } from "lucide-react"

const missionPoints = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To develop and manage ICT policies and services that enable a knowledge-based society",
    color: "bg-blue-500",
    details: [
      "Formulate and implement national ICT policies",
      "Promote digital literacy and skills development",
      "Foster innovation and technological advancement",
    ],
  },
  {
    icon: Lightbulb,
    title: "Our Vision",
    description: "To be the leader in driving Zimbabwe's digital transformation and innovation",
    color: "bg-yellow-500",
    details: [
      "Create a fully digitized and connected Zimbabwe",
      "Establish a thriving digital economy",
      "Position Zimbabwe as a regional ICT hub",
    ],
  },
  {
    icon: Rocket,
    title: "Our Values",
    description: "Innovation, Integrity, Excellence, Collaboration, and Accountability",
    color: "bg-green-500",
    details: [
      "Embrace cutting-edge technologies and ideas",
      "Uphold ethical standards in all our operations",
      "Strive for excellence in service delivery",
      "Foster partnerships across sectors",
      "Take responsibility for our actions and decisions",
    ],
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const detailsVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
}

export default function Mission() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Mission & Vision</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Driving Zimbabwe's digital transformation through innovative policies and services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {missionPoints.map((point, index) => (
            <motion.div
              key={point.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`${point.color} rounded-lg p-8 text-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}
              onClick={() => setExpandedCard(expandedCard === index ? null : index)}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <point.icon className="h-8 w-8 text-gray-800" />
                </div>
                {expandedCard === index ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
              </div>
              <h3 className="text-2xl font-bold mb-4">{point.title}</h3>
              <p className="text-lg mb-4">{point.description}</p>
              <AnimatePresence>
                {expandedCard === index && (
                  <motion.ul
                    variants={detailsVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="list-disc list-inside space-y-2"
                  >
                    {point.details.map((detail, detailIndex) => (
                      <motion.li
                        key={detailIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: detailIndex * 0.1 }}
                      >
                        {detail}
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="max-w-3xl mx-auto bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Commitment</h3>
            <p className="text-gray-700 leading-relaxed">
              We are dedicated to fostering digital innovation, ensuring universal access to ICT services, and creating
              an enabling environment for sustainable digital growth in Zimbabwe.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

