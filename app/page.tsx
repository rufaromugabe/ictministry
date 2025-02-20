"use client"

import Hero from "@/components/hero"
import DigitalPillars from "@/components/digital-pillars"
import Mission from "@/components/mission"
import Departments from "@/components/departments"
import Leadership from "@/components/leadership"
import Documents from "@/components/documents"
import News from "@/components/news"

export default function Home() {
  return (
    <div className="w-full pt-[160px]"> 
          <Hero />
      <DigitalPillars />
      <Mission />
      <Departments />
      <Leadership />
      <Documents />
      <News />
    </div>
  )
}

