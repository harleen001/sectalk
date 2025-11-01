"use client"

import ToolCard from "@/components/tool-card"

const tools = [
  { name: "Grafana", image: "/tools/1.png" },
  { name: "Prometheus", image: "/tools/2.png" },
  { name: "BEEF", image: "/tools/3.png" },
  { name: "Git", image: "/tools/4.jpeg" },
  { name: "GitHub", image: "/tools/5.webp" },
  { name: "Docker", image: "/tools/6.png" },
  { name: "Ollama", image: "/tools/7.webp" },
  { name: "Ghidra", image: "/tools/8.webp" },
]

export default function ToolsSection() {
  return (
    <section id="tools" className="py-12 px-4 bg-background">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-10">
        {tools.map((tool, index) => (
          <ToolCard key={index} image={tool.image} name={tool.name} />
        ))}
      </div>
    </section>
  )
}
