"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <h1 className="text-xl font-bold text-foreground">SEC Talk 2025</h1>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground hover:text-primary transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav
          className={`${isOpen ? "flex" : "hidden"} md:flex absolute md:relative top-16 md:top-0 left-0 right-0 md:left-auto flex-col md:flex-row gap-6 bg-background md:bg-transparent border-b md:border-0 border-border p-4 md:p-0 md:gap-8`}
        >
          <a href="#tools" className="text-foreground hover:text-primary transition-colors font-medium">
            Tools
          </a>
          <a href="#mentors" className="text-foreground hover:text-primary transition-colors font-medium">
            Mentors
          </a>
          <a href="#details" className="text-foreground hover:text-primary transition-colors font-medium">
            Details
          </a>
         <a
  href="https://forms.gle/DKKFAvMoHJjrdbmh9"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-2 rounded-full bg-primary text-white hover:bg-primary/90 transition-all font-medium"
>
  Register
</a>

        </nav>
      </div>
    </header>
  )
}
