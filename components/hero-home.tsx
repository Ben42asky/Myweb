"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function HeroHome() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text Content */}
        <div className="animate-fade-in-up">

          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
            Hi, I'm Benjamin Otieno
          </h1>
          <p className="text-lg mb-3 font-semibold" style={{ color: "#6B5B4A" }}>
            Full-Stack Engineer & Aspiring Cybersecurity Specialist
          </p>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            I'm a self-taught Full-Stack Developer skilled in building modern, user-friendly web applications using JavaScript, Python, React, Node.js, and MySQL. I integrate AI tools into real-world solutions and . . . . . . .
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 group px-6 py-2 rounded font-semibold transition-colors"
              style={{
                backgroundColor: "#0C1E3F",
                color: "#F1F0E8",
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.backgroundColor = "#1a2f52"
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.backgroundColor = "#0C1E3F"
              }}
            >
              Learn More
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-2 rounded border-2 font-semibold transition-colors"
              style={{
                borderColor: "#6B5B4A",
                color: "#6B5B4A",
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.backgroundColor = "#6B5B4A"
                ;(e.currentTarget as HTMLElement).style.color = "#F1F0E8"
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.backgroundColor = "transparent"
                ;(e.currentTarget as HTMLElement).style.color = "#6B5B4A"
              }}
            >
              Get In Touch
            </Link>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="animate-slide-in-left">
          <img
            src="/professional-developer-workspace.jpg"
            alt="Developer workspace"
            className="w-full rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}
