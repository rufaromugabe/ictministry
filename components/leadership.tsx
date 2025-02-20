"use client"

import { motion } from "framer-motion"
import { LinkedinIcon as LinkedIn, Twitter } from "lucide-react"

const leaders = [
  {
    name: "Hon. DR. T. Mavetera",
    role: "Minister",
    image: "/images/Hon-Minister.png",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/",
  },
  {
    name: "Dr. B. Chirume",
    role: "Secretary",
    image: "/images/B. CHIRUME.png",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/",
  },
  {
    name: "Hon. D. Phuti",
    role: "Deputy Minister",
    image: "/images/DM-Phuti.png",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/",
  },
  {
    name: "Mr. P. Sibanda",
    role: "Chief Director",
    image: "/images/mr. p Sibanda.png",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/",
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const imageVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
}

const socialVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
}

export default function Leadership() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Leadership and Principals</h2>
          <p className="text-gray-600">Meet the team driving Zimbabwe's digital transformation</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl"
            >
              <div className="relative overflow-hidden group">
                <motion.img
                  variants={imageVariants}
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-64 object-cover object-center transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.div
                    variants={socialVariants}
                    initial="hidden"
                    whileHover="visible"
                    className="flex space-x-4"
                  >
                    <a
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      <LinkedIn size={24} />
                    </a>
                    <a
                      href={leader.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      <Twitter size={24} />
                    </a>
                  </motion.div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{leader.name}</h3>
                <p className="text-gray-600">{leader.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

