"use client"

import { MapPin, Calendar, Clock, Users } from "lucide-react"

export default function EventDetails() {
  return (
    <section id="details" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Event <span className="text-primary">Information</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="p-8 rounded-2xl border border-border bg-card hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">Date</h3>
                <p className="text-foreground/70">November 6, 2025</p>
                <p className="text-sm text-primary mt-1">Single Day Event</p>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-2xl border border-border bg-card hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">Location</h3>
                <p className="text-foreground/70">Computer Lab</p>
                <p className="text-sm text-secondary mt-1">GNDU Regional Campus, Jalandhar</p>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-2xl border border-border bg-card hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">Time</h3>
                <p className="text-foreground/70">10:00 AM - 2:00 PM IST</p>
                <p className="text-sm text-accent mt-1">Full Day Workshop</p>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-2xl border border-border bg-card hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">Audience</h3>
                <p className="text-foreground/70">Students & Professionals</p>
                <p className="text-sm text-primary mt-1">All Levels Welcome</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 rounded-2xl border border-border bg-primary/5">
          <h3 className="text-2xl font-bold text-foreground mb-4">What You'll Learn</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <p className="text-foreground/80">Cybersecurity Fundamentals & Best Practices</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <p className="text-foreground/80">Hands-on Tool Usage & Configuration</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <p className="text-foreground/80">Monitoring & Logging with Grafana & Prometheus</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <p className="text-foreground/80">Reverse Engineering with Ghidra</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <p className="text-foreground/80">AI Integration with Langchain & Ollama</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <p className="text-foreground/80">DevSecOps with Docker & Git</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
