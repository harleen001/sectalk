"use client"

interface ToolCardProps {
  image: string
  name?: string
}

export default function ToolCard({ image, name }: ToolCardProps) {
  return (
    <div className="flex items-center justify-center p-3">
      <img
        src={image}
        alt={name || "tool"}
        className="w-24 h-24 object-contain transition-transform duration-300 hover:scale-110"
      />
    </div>
  )
}
