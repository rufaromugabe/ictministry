"use client"

import { motion } from "framer-motion"
import { FileText, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

const documents = [
  {
    title: "Zimbabwe National Policy for ICT 2024",
    description: "Framework for ICT policy development and guidelines",
    downloadUrl: "#",
  },
  {
    title: "Cyber and Data Protection Act",
    description: "Guidelines to secure cyber space and protect data",
    downloadUrl: "#",
  },
  {
    title: "Strategic Plan 2023",
    description: "Ministry's strategic objectives and roadmap",
    downloadUrl: "#",
  },
]

export default function Documents() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Important Documents</h2>
          <p className="text-gray-600">Access key policy documents and guidelines</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc, index) => (
            <motion.div
              key={doc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <FileText className="h-8 w-8 text-green-600 mb-4" />
                  <CardTitle className="mb-2">{doc.title}</CardTitle>
                  <CardDescription>{doc.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full group">
                    <Download className="mr-2 h-4 w-4 group-hover:text-green-600 transition-colors" />
                    Download PDF
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

