"use client"

import { motion } from "framer-motion"

interface Profile {
  avatar: string
  name: string
  role: string
  description: string
}

interface ProfileCardProps extends Profile {}

function ProfileCard({ avatar, name, role, description }: ProfileCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-center gap-4 mb-4">
        <img
          src={avatar}
          alt={name}
          className="w-16 h-16 rounded-full object-cover border border-border"
        />
        <div>
          <h3 className="text-lg font-semibold text-foreground">{name}</h3>
          <p className="text-sm text-primary font-medium">{role}</p>
        </div>
      </div>
      <p className="text-sm text-foreground/70 leading-relaxed text-justify">
        {description}
      </p>
    </motion.div>
  )
}

function ProfilesGrid({ profiles }: { profiles: Profile[] }) {
  return (
    <section id="mentors" className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
          Meet the <span className="text-primary">Team</span>
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {profiles.map((profile, index) => (
            <ProfileCard key={index} {...profile} />
          ))}
        </div>
      </div>
    </section>
  )
}

const profiles: Profile[] = [
  {
    avatar: "https://avatar.vercel.sh/harleen",
    name: "Harleen Singh",
    role: "Software Developer",
    description: "Working with Next.js, Servers, Docker",
  },
  {
    avatar: "https://avatar.vercel.sh/iman",
    name: "Imanpal Singh",
    role: "Ethical Hacker",
    description: "Building security systems and vulnerabilities.",
  },
  
  {
    avatar: "https://avatar.vercel.sh/kartik",
    name: "Kartik Atrri",
    role: "FTE Developer",
    description: "Creating immersive web platforms.",
  },
]

export default function MentorsSection() {
  return <ProfilesGrid profiles={profiles} />
}
