"use client"

import type React from "react"

import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { Building2, Lightbulb, Brain, Sprout } from "lucide-react"
import { useCallback, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

const pillars = [
  {
    icon: Building2,
    title: "Digital Government",
    description: "Integrated solutions digitizing service delivery and governance processes",
  },
  {
    icon: Lightbulb,
    title: "FinTech",
    description: "Promoting digital financial services and mobile banking",
  },
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description: "Optimizing technology with cognitive and intelligent systems",
  },
  {
    icon: Sprout,
    title: "AgriTech",
    description: "Applying technology to agriculture for enhanced productivity",
  },
]

interface MagicCardProps extends React.HTMLAttributes<HTMLDivElement> {
  gradientSize?: number
  gradientColor?: string
  gradientOpacity?: number
  gradientFrom?: string
  gradientTo?: string
}

function MagicCard({
  children,
  className,
  gradientSize = 200,
  gradientColor = "rgba(34, 197, 94, 0.2)", // Light green color
  gradientOpacity = 0.8,
  gradientFrom = "#22c55e", // Green-500
  gradientTo = "#16a34a", // Green-600
}: MagicCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(-gradientSize)
  const mouseY = useMotionValue(-gradientSize)

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (cardRef.current) {
        const { left, top } = cardRef.current.getBoundingClientRect()
        const clientX = e.clientX
        const clientY = e.clientY
        mouseX.set(clientX - left)
        mouseY.set(clientY - top)
      }
    },
    [mouseX, mouseY],
  )

  const handleMouseOut = useCallback(
    (e: MouseEvent) => {
      if (!e.relatedTarget) {
        document.removeEventListener("mousemove", handleMouseMove)
        mouseX.set(-gradientSize)
        mouseY.set(-gradientSize)
      }
    },
    [handleMouseMove, mouseX, gradientSize, mouseY],
  )

  const handleMouseEnter = useCallback(() => {
    document.addEventListener("mousemove", handleMouseMove)
    mouseX.set(-gradientSize)
    mouseY.set(-gradientSize)
  }, [handleMouseMove, mouseX, gradientSize, mouseY])

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseout", handleMouseOut)
    document.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseout", handleMouseOut)
      document.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [handleMouseEnter, handleMouseMove, handleMouseOut])

  useEffect(() => {
    mouseX.set(-gradientSize)
    mouseY.set(-gradientSize)
  }, [gradientSize, mouseX, mouseY])

  return (
    <div ref={cardRef} className={cn("group relative flex size-full rounded-xl", className)}>
      <div className="absolute inset-px z-10 rounded-xl bg-white" />
      <div className="relative z-30">{children}</div>
      <motion.div
        className="pointer-events-none absolute inset-px z-10 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientColor}, transparent 100%)
          `,
          opacity: gradientOpacity,
        }}
      />
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-xl bg-border duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px,
              ${gradientFrom}, 
              ${gradientTo}, 
              transparent 100%
            )
          `,
        }}
      />
    </div>
  )
}

export default function DigitalPillars() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Main Pillars of Digital Economy
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <MagicCard className="h-full p-6">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <pillar.icon className="h-6 w-6 text-green-700" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{pillar.title}</h3>
                <p className="text-gray-600">{pillar.description}</p>
              </MagicCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

