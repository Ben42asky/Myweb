"use client"

import { type FormEvent, useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Mail, Linkedin, Github, MapPin } from "lucide-react"

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
      setLoading(false)
      setTimeout(() => setIsSubmitted(false), 5000)
    }, 1000)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "odedebenjamin7@gmail.com",
      href: "mailto:odedebenjamin7@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Migori, Kenya 🇰🇪",
      href: "#",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/benjaminotieno",
      href: "https://github.com/Ben42asky",
    },
    {
      icon: Linkedin,
      label: "Phone",
      value: "+254 114292224",
      href: "tel:+254114292224",
    },
  ]

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-4" style={{ backgroundColor: "rgba(196, 89, 89, 0)" }}>
        <div className="container mx-auto max-w-2xl">
          <div className="animate-fade-in-up mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Let's Get in Touch</h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Whether you have a question, want to collaborate on a project, or just want to say hello, feel free to
              reach out. I'll get back to you as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in-up">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-foreground font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-card border border-border rounded px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none transition-colors"
                    placeholder="Your Name"
                    onFocus={(e) => {
                      ; (e.currentTarget as HTMLElement).style.borderColor = "#0C1E3F"
                    }}
                    onBlur={(e) => {
                      ; (e.currentTarget as HTMLElement).style.borderColor = "inherit"
                    }}
                  />
                </div>

                <div>
                  <label className="block text-foreground font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-card border border-border rounded px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none transition-colors"
                    placeholder="your@email.com"
                    onFocus={(e) => {
                      ; (e.currentTarget as HTMLElement).style.borderColor = "#0C1E3F"
                    }}
                    onBlur={(e) => {
                      ; (e.currentTarget as HTMLElement).style.borderColor = "inherit"
                    }}
                  />
                </div>

                <div>
                  <label className="block text-foreground font-semibold mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full bg-card border border-border rounded px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none transition-colors resize-none"
                    placeholder="Your message here..."
                    onFocus={(e) => {
                      ; (e.currentTarget as HTMLElement).style.borderColor = "#0C1E3F"
                    }}
                    onBlur={(e) => {
                      ; (e.currentTarget as HTMLElement).style.borderColor = "inherit"
                    }}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-6 py-2 rounded font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    backgroundColor: "#0C1E3F",
                    color: "#F1F0E8",
                  }}
                  onMouseEnter={(e) => {
                    ; (e.currentTarget as HTMLElement).style.backgroundColor = "#1a2f52"
                  }}
                  onMouseLeave={(e) => {
                    ; (e.currentTarget as HTMLElement).style.backgroundColor = "#0C1E3F"
                  }}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

                {isSubmitted && (
                  <p className="text-center font-semibold animate-fade-in-up" style={{ color: "#0C1E3F" }}>
                    Message sent successfully! Thanks for reaching out.
                  </p>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {contactInfo.map((info) => {
                const Icon = info.icon
                return (
                  <a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 group animate-fade-in-up hover:translate-x-2 transition-transform"
                  >
                    <div
                      className="rounded-lg p-4 transition-colors"
                      style={{
                        backgroundColor: "rgba(12, 30, 63, 0.1)",
                        color: "#0C1E3F",
                      }}
                      onMouseEnter={(e) => {
                        ; (e.currentTarget as HTMLElement).style.backgroundColor = "#0C1E3F"
                          ; (e.currentTarget as HTMLElement).style.color = "#F1F0E8"
                      }}
                      onMouseLeave={(e) => {
                        ; (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(12, 30, 63, 0.1)"
                          ; (e.currentTarget as HTMLElement).style.color = "#0C1E3F"
                      }}
                    >
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-foreground font-semibold mb-1">{info.label}</h3>
                      <p className="text-muted-foreground group-hover:opacity-70 transition-opacity">{info.value}</p>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
