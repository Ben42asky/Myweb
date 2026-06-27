"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: "Fear Fighter",
      description: "Interactive web application for overcoming fears and phobias",
      tags: ["React", "Next.js", "TypeScript", "CSS"],
      image: "/e-commerce-platform.jpg",
      details:
        "An interactive web application designed to help users overcome fears and phobias through guided exercises and progress tracking. Built with Next.js and TypeScript for optimal performance and type safety. Features include personalized fear assessments, coping strategies, and real-time progress visualization to support users on their journey to conquering fears.",
      github: "https://github.com/Ben42asky/fear-fighter",
      demo: "https://fearfighter.vercel.app/",
    },
    {
      id: 2,
      title: "Memory Game",
      description: "Engaging memory card matching game with difficulty levels",
      tags: ["JavaScript", "TypeScript", "CSS", "Next.js"],
      image: "/task-management-app.jpg",
      details:
        "An engaging memory card matching game built with modern web technologies. Features multiple difficulty levels, score tracking, responsive design, and smooth animations. The game challenges users to match pairs while tracking their performance, making it both entertaining and beneficial for cognitive training.",
      github: "https://github.com/Ben42asky/Memory-game",
      demo: "https://memory-game-liart-mu.vercel.app/",
    },
    {
      id: 3,
      title: "KICD AI Learning Materials",
      description: "AI-powered educational content aligned with Kenya's curriculum",
      tags: ["AI", "Education", "KICD", "ChatGPT", "Midjourney"],
      image: "/ai-chat-dashboard.jpg",
      details:
        "Integrated AI with KICD (Kenya Institute of Curriculum Development) syllabus to create engaging learning materials for schools. This project combines artificial intelligence with educational content to provide interactive and personalized learning experiences that align with Kenya's national curriculum standards.",
      demo: "https://docs.google.com/document/d/e/2PACX-1vRm0tyAJ-pAPZ8LP-lAl4H1m_ls5AyVSxo7nJdGZauXfNwKaYtb6OTzQhPFSwC1eBIeNyqXrU4p23hx/pub",
    },
    {
      id: 4,
      title: "Coming Soon",
      description: "New project coming soon",
      tags: ["Future Project"],
      image: "/professional-developer-workspace.jpg",
      details: "Stay tuned for more exciting projects. New developments are in progress.",
      github: "#",
      demo: "#",
      isPlaceholder: true,
    },
    {
      id: 5,
      title: "Coming Soon",
      description: "Another project in development",
      tags: ["Future Project"],
      image: "/task-management-app.jpg",
      details: "More amazing projects are being built. Check back soon for updates.",
      github: "#",
      demo: "#",
      isPlaceholder: true,
    },
  ]

  const skills = [
    { category: "Frontend", items: ["React", "JavaScript", "HTML/CSS", "Responsive Design", "Figma", "UI/UX"] },
    { category: "Backend", items: ["Node.js", "Python", "MySQL", "REST APIs", "Git"] },
    { category: "Tools & AI", items: ["ChatGPT", "Midjourney", "Perplexity", "VS Code", "Google Workspace", "Claude", "Cursor AI"] },
    { category: "Cybersecurity Learning", items: ["Networking Fundamentals", "Linux Basics", "Vulnerability Analysis", "Ethical Hacking", "Web Security"] },
  ]

  return (
    <main>
      <Header />

      {/* Projects Section */}
      <section className="min-h-screen py-20 px-4 pt-32">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Projects</h1>
          <p className="text-muted-foreground text-lg mb-12">A selection of my recent work and creative endeavors</p>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group cursor-pointer animate-fade-in-up"
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="bg-card rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:opacity-70 transition-opacity">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 rounded-full"
                          style={{ backgroundColor: "rgba(12, 30, 63, 0.1)", color: "#0C1E3F" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Project Modal */}
          {selectedProject !== null && (
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedProject(null)}
            >
              <div
                className="bg-card rounded-lg max-w-2xl w-full p-8 animate-fade-in-up"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const project = projects.find((p) => p.id === selectedProject)
                  return project ? (
                    <>
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-64 object-cover rounded-lg mb-6"
                      />
                      <h2 className="text-3xl font-bold mb-4 text-foreground">{project.title}</h2>
                      <p className="text-muted-foreground mb-6 leading-relaxed">{project.details}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-sm px-4 py-2 rounded-full"
                            style={{ backgroundColor: "rgba(12, 30, 63, 0.1)", color: "#0C1E3F" }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        {!project.isPlaceholder && (
                          <>
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-6 py-2 rounded font-semibold transition-colors"
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
                              <Github size={20} />
                              View Code
                            </a>
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-6 py-2 rounded border-2 font-semibold transition-colors"
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
                              <ExternalLink size={20} />
                              Live Demo
                            </a>
                          </>
                        )}
                      </div>
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="mt-6 w-full text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Close
                      </button>
                    </>
                  ) : null
                })()}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-card py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-foreground">Skills</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="bg-background rounded-lg p-8 animate-fade-in-up border border-border"
              >
                <h3 className="text-2xl font-semibold mb-6" style={{ color: "#0C1E3F" }}>
                  {skillGroup.category}
                </h3>
                <ul className="space-y-4">
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className="flex items-center text-foreground hover:opacity-70 transition-opacity">
                      <span className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: "#6B5B4A" }}></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
