"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const newsItems = [
  {
    title: "Digital Innovation Hub Launch",
    description: "New technology zone opens to boost digital innovation in Harare",
    image: "/images/story.png",
    date: "March 15, 2024",
  },
  {
    title: "ICT Policy Update",
    description: "Ministry announces new ICT policy to promote digital growth",
    image: "/images/story.png",
    date: "March 10, 2024",
  },
  {
    title: "Rural Connectivity Project",
    description: "Expanding internet access to rural communities nationwide",
    image: "/images/story.png",
    date: "March 5, 2024",
  },
]

export default function News() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Latest News & Updates</h2>
          <p className="text-gray-600">Stay informed about our latest initiatives and developments</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                  <CardTitle className="mb-2">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="link" className="p-0 h-auto font-semibold text-green-600 hover:text-green-700">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

