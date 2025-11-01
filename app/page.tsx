"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import ToolsSection from "@/components/tools-section"
import MentorsSection from "@/components/mentors-section"
import EventDetails from "@/components/event-details"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className="bg-background text-foreground overflow-hidden">
      <Header />
      <Hero isLoaded={isLoaded} />
      <ToolsSection />
      <MentorsSection />
      <EventDetails />

    </main>
  )
}
