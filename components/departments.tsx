"use client"

import { motion } from "framer-motion"
import { Network, Shield, LineChart, Scale, Briefcase, FileText, Building, Users } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const departments = [
  {
    icon: Network,
    title: "Infrastructure Development and Management",
    description: "Oversees the development, management, and maintenance of ICT infrastructure across the nation.",
  },
  {
    icon: Shield,
    title: "Cyber Security",
    description: "Provides oversight and strategic direction on information security matters and cyber threats.",
  },
  {
    icon: LineChart,
    title: "Strategic Policy Planning, Monitoring, and Evaluation",
    description: "Evaluates the impact of ICT implementation policies and plans.",
  },
  {
    icon: Scale,
    title: "Legal",
    description: "Handles legal and regulatory matters in ICT sector development.",
  },
  {
    icon: Briefcase,
    title: "Procurement Management Unit",
    description: "Manages all procurement activities and contract documentation.",
  },
  {
    icon: FileText,
    title: "ICT Applications Development and Management",
    description: "Develops and maintains government ICT applications.",
  },
  {
    icon: Building,
    title: "Internal Audit Unit",
    description: "Conducts financial and performance audits across departments.",
  },
  {
    icon: Users,
    title: "Finance, Administration, and Human Resources",
    description: "Manages financial and administrative functions of the ministry.",
  },
]

export default function Departments() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-50">
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
            Our Departments and Units
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Serving our nation through specialized services and dedicated expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <motion.div
              key={dept.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="h-full group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 bg-white/80 hover:bg-gradient-to-br hover:from-green-50 hover:to-white backdrop-blur-sm border border-green-100 hover:border-green-300">
                <CardHeader>
                  <div className="mb-6 w-16 h-16 rounded-lg bg-green-50 flex items-center justify-center group-hover:bg-green-200/50 transition-colors duration-500">
                    <dept.icon className="h-8 w-8 text-green-600 group-hover:text-green-700 group-hover:scale-110 transition-all duration-500" />
                  </div>
                  <CardTitle className="text-xl mb-3 text-gray-800 group-hover:text-green-700 transition-colors duration-500">
                    {dept.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 group-hover:text-gray-700 leading-relaxed transition-colors duration-500">
                    {dept.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

