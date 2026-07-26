import Link from "next/link"
import { Mail, Github, Linkedin, MessageCircle } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Ben42asky", label: "GitHub" },
    { icon: Mail, href: "mailto:odedebenjamin7@gmail.com", label: "Email" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/benjamin-odede-a7151a353/", label: "LinkedIn" },
    { icon: MessageCircle, href: "https://wa.me/+254114292224", label: "WhatsApp" },
  ]

  return (
    <footer className="bg-card border-t border-border py-12 mt-5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <p className="text-muted-foreground text-sm">© 2026 Benjamin Otieno Odede. All rights reserved.</p>
          </div>

          <div className="flex gap-6">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:opacity-70 transition-opacity"
                  aria-label={social.label}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLElement).style.color = "#90EE90"
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLElement).style.color = "inherit"
                  }}
                >
                  <Icon size={20} />
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
