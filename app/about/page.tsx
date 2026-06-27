"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"

export default function About() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
    <section className="min-h-screen flex flex-col md:flex-row">
      
      {/* LEFT - Text */}
      <div className="flex-1 flex items-center justify-center px-10 py-20 pt-24">
        <div className="max-w-lg animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">About Me</h1>
          <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
            Self-taught Full-Stack Engineer with hands-on experience in web development, AI integration, and UI/UX design.
          </p>
          <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
            I build and deploy full-stack applications using React, JavaScript, Node.js, Python, and MySQL — and pair technical skills with strong client engagement and project management.
          </p>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            I'm currently deepening my expertise in cybersecurity, with a focus on ethical hacking and system security, to create digital products that are impactful and secure by design.
          </p>
            <a
              href="/projects"
              className="inline-block px-6 py-2 rounded font-semibold transition-colors"
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
              View My Projects
            </a>
          </div>
        </div>
          <div className="flex-1 min-h-64 md:min-h-screen">
           <img
        src="/professional-portrait.jpg"
        alt="Benjamin Otieno"
        className="w-full h-full object-cover object-top"
      />
          </div>
      </section>

      {/* CV Section */}
      <section className="bg-card py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-foreground">Education & Experience</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Experience */}
            <div>
              <h3 className="text-2xl font-semibold mb-6" style={{ color: "#0C1E3F" }}>
                Experience
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 pl-6 pb-6" style={{ borderColor: "#6B5B4A" }}>
                  <h4 className="text-lg font-semibold text-foreground">KENBEL Company • Caretaker/FarmBoy</h4>
                  <p className="text-sm" style={{ color: "#6B5B4A" }}>
                    August 2025 - present
                  </p>
                  <p className="text-muted-foreground mt-2">
                    Worked on farm, managing livestock and crops, ensuring proper care and maintenance. Gained hands-on experience in agricultural practices and farm management.
                  </p>
                </div>
                <div className="border-l-4 pl-6 pb-6" style={{ borderColor: "#0C1E3F" }}>
                  <h4 className="text-lg font-semibold text-foreground">Full Stack Engineer</h4>
                  <p className="text-sm" style={{ color: "#0C1E3F" }}>
                    Fikia Company • March 2024 - 2025
                  </p>
                  <p className="text-muted-foreground mt-2">Designed and developed websites for rural businesses. Managed client consultation, UI/UX design, and development using HTML, CSS, JavaScript, and AI tools.</p>
                </div>
                <div className="border-l-4 pl-6 pb-6" style={{ borderColor: "#6B5B4A" }}>
                  <h4 className="text-lg font-semibold text-foreground">AI Content Creator</h4>
                  <p className="text-sm" style={{ color: "#6B5B4A" }}>
                    2023 - 2024
                  </p>
                  <p className="text-muted-foreground mt-2">
                    Created AI-generated educational and health resources. Automated content generation workflows and collaborated with educators.
                  </p>
                </div>
                <div className="border-l-4 pl-6" style={{ borderColor: "#0C1E3F" }}>
                  <h4 className="text-lg font-semibold text-foreground">Website Builder</h4>
                  <p className="text-sm" style={{ color: "#0C1E3F" }}>
                    2023
                  </p>
                  <p className="text-muted-foreground mt-2">Built functional websites as projects for learning and skill development. Focused on responsive design, user experience, and integrating modern web technologies.</p>
                </div>
              </div>
            </div>

            {/* Skills & Learning */}
            <div>
              <h3 className="text-2xl font-semibold mb-6" style={{ color: "#6B5B4A" }}>
                Technical Skills & Learning
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 pl-6 pb-6" style={{ borderColor: "#6B5B4A" }}>
                  <h4 className="text-lg font-semibold text-foreground">Languages & Frameworks</h4>
                  <p className="text-muted-foreground mt-2">Python, JavaScript, HTML, CSS • React, Node.js • MySQL • Git, VS Code, Figma</p>
                </div>
                <div className="border-l-4 pl-6 pb-6" style={{ borderColor: "#0C1E3F" }}>
                  <h4 className="text-lg font-semibold text-foreground">AI & Tools</h4>
                  <p className="text-muted-foreground mt-2">ChatGPT, Midjourney, Perplexity • Google Workspace, Office 365</p>
                </div>
                <div className="border-l-4 pl-6" style={{ borderColor: "#6B5B4A" }}>
                  <h4 className="text-lg font-semibold text-foreground">Cybersecurity Learning</h4>
                  <p className="text-muted-foreground mt-2">Networking fundamentals, Linux basics, vulnerability analysis, ethical hacking concepts, secure application development
                    currently being explored through self-learning and online resources.(e.g Coursera, youtube, and other cybersecurity platforms)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Interests Section */}
          <div className="mt-16 pt-12 border-t border-border">
            <h3 className="text-2xl font-semibold mb-6" style={{ color: "#0C1E3F" }}>
              Interests & Hobbies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div
                  className="p-3 rounded-lg flex-shrink-0"
                  style={{
                    backgroundColor: "rgba(12, 30, 63, 0.1)",
                  }}
                >
                  <span style={{ fontSize: "24px" }}>💪</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Gym & Fitness</h4>
                  <p className="text-muted-foreground">Passionate about maintaining physical health and wellness. Regular gym-goer who believes in the balance between mental and physical fitness for productivity and well-being.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div
                  className="p-3 rounded-lg flex-shrink-0"
                  style={{
                    backgroundColor: "rgba(107, 91, 74, 0.1)",
                  }}
                >
                  <span style={{ fontSize: "24px" }}>🏃</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Outdoor Activities</h4>
                  <p className="text-muted-foreground">Enjoy exploring nature, running, and engaging in outdoor sports. These activities help me stay energized and maintain a healthy lifestyle while enjoying beautiful landscapes.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Download CV */}
          <div className="mt-12 text-center">
            <a
              href="/cv/BenjaminCv.pdf"
              download="BenjaminCv.pdf"
              className="inline-block px-6 py-2 rounded font-semibold transition-colors"
              style={{ backgroundColor: "#0C1E3F", color: "#F1F0E8" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#1a2f52" }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#0C1E3F" }}
            >
              Download My CV
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
