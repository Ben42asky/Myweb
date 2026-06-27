╔═══════════════════════════════════════════════════════════════════════════╗
║                    PERSONAL PORTFOLIO WEBSITE                             ║
║                    Setup & GitHub Deployment Guide                        ║
╚═══════════════════════════════════════════════════════════════════════════╝

PROJECT OVERVIEW
================
A modern, responsive personal portfolio website built with:
- Next.js 16 (React framework)
- TypeScript (Type-safe development)
- Tailwind CSS (Styling)
- shadcn/ui (UI Components)

Features:
✓ Home Page - Hero section with call-to-action
✓ About Page - Personal background & CV download
✓ Projects Page - Project showcase with modal details & skills grid
✓ Contact Page - Contact form & social media links
✓ Responsive Design - Mobile, tablet, and desktop optimized
✓ Color Scheme - Light green (#90EE90), light blue (#ADD8E6), black fonts

DIRECTORY STRUCTURE
===================
portfolio-website/
├── app/
│   ├── layout.tsx                    # Root layout
│   ├── page.tsx                      # Home page
│   ├── globals.css                   # Global styles & color tokens
│   ├── about/
│   │   └── page.tsx                  # About page
│   ├── projects/
│   │   └── page.tsx                  # Projects & skills page
│   └── contact/
│       └── page.tsx                  # Contact form page
├── components/
│   ├── header.tsx                    # Navigation header
│   ├── footer.tsx                    # Footer with social links
│   ├── hero-home.tsx                 # Home page hero section
│   ├── hero-section.tsx              # Reusable hero component
│   └── ui/                           # shadcn/ui components
├── public/                           # Static assets
├── package.json                      # Dependencies
├── next.config.mjs                   # Next.js configuration
└── tsconfig.json                     # TypeScript configuration

SETUP INSTRUCTIONS
==================

1. PREREQUISITES
   - Node.js 18+ (download from nodejs.org)
   - npm or yarn package manager
   - Git (download from git-scm.com)

2. LOCAL SETUP (on your computer)

   Step 1: Clone or download the project
   
   If you have the GitHub repo:
   $ git clone https://github.com/YOUR_USERNAME/portfolio-website.git
   $ cd portfolio-website
   
   Or if you downloaded the ZIP file:
   - Extract the ZIP to your desired folder
   - Open terminal/command prompt in that folder

   Step 2: Install dependencies
   $ npm install
   
   Step 3: Run the development server
   $ npm run dev
   
   Step 4: Open in browser
   - Visit http://localhost:3000
   - Your portfolio is now running locally!

3. CUSTOMIZING YOUR PORTFOLIO

   Edit These Files:
   
   - app/page.tsx
     Change hero title, description, and button text
   
   - app/about/page.tsx
     Update your bio, experience, education, and CV link
   
   - app/projects/page.tsx
     Add your actual projects, technologies, and links
   
   - app/contact/page.tsx
     Update email, location, GitHub, LinkedIn URLs
   
   - components/header.tsx
     Customize the "Portfolio" logo text
   
   - components/footer.tsx
     Update social media links and copyright year
   
   - app/globals.css
     Modify color scheme, fonts, and animations

   Add Your Images:
   
   - Place images in the public/ folder
   - Replace placeholder URLs with your image paths
   - Example: src="/images/your-photo.jpg"

4. GITHUB SETUP (Cloud Repository)

   Step 1: Create GitHub account
   - Go to github.com
   - Sign up if you don't have an account
   
   Step 2: Create a new repository
   - Click "+" icon → "New repository"
   - Name it: "portfolio-website"
   - Description: "My personal portfolio website"
   - Choose "Public" (visible to everyone)
   - Do NOT initialize with README, .gitignore, or license
   - Click "Create repository"
   
   Step 3: Connect local project to GitHub
   
   In your terminal (in the project folder):
   
   $ git config --global user.name "Your Name"
   $ git config --global user.email "your@email.com"
   
   $ git init
   $ git add .
   $ git commit -m "Initial commit: Portfolio website"
   $ git branch -M main
   $ git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
   $ git push -u origin main
   
   Replace YOUR_USERNAME with your actual GitHub username

5. DEPLOY TO VERCEL (Free Hosting)

   Vercel is the easiest way to host Next.js apps (completely free):
   
   Step 1: Go to vercel.com
   - Click "Sign up"
   - Choose "Continue with GitHub"
   - Authorize Vercel to access your GitHub
   
   Step 2: Import your repository
   - Click "New Project"
   - Select "portfolio-website" from your repositories
   - Click "Import"
   
   Step 3: Deploy
   - Vercel automatically configures Next.js settings
   - Click "Deploy"
   - Wait 1-2 minutes for deployment to complete
   - Your portfolio is now live! You'll get a URL like:
     https://portfolio-website.vercel.app
   
   Step 4: Custom domain (optional)
   - In Vercel dashboard, go to "Settings" → "Domains"
   - Add your custom domain (myname.com)
   - Follow DNS instructions from your domain registrar

6. MAKING CHANGES & UPDATES

   To update your portfolio:
   
   $ git add .
   $ git commit -m "Update projects section"
   $ git push
   
   Your changes will automatically deploy to Vercel!

BUILD FOR PRODUCTION
====================
To create a production build:
$ npm run build
$ npm run start

This creates an optimized version ready for deployment.

USEFUL COMMANDS
===============
npm install          # Install dependencies
npm run dev          # Start development server
npm run build        # Create production build
npm run start        # Run production server
npm run lint         # Check code quality
git status          # Check git changes
git add .           # Stage all changes
git commit -m "msg" # Commit changes
git push            # Push to GitHub
git pull            # Pull latest from GitHub

TROUBLESHOOTING
===============

Issue: "npm: command not found"
Solution: Install Node.js from nodejs.org

Issue: "Port 3000 already in use"
Solution: $ npm run dev -- -p 3001
(Changes port to 3001)

Issue: Changes not reflecting on Vercel
Solution: Wait 2-3 minutes for automatic deployment
Or manually redeploy in Vercel dashboard

Issue: Images not showing
Solution: Ensure images are in public/ folder
Use correct path: /images/filename.jpg

SUPPORT & RESOURCES
===================
Next.js Docs: https://nextjs.org/docs
Tailwind CSS: https://tailwindcss.com/docs
GitHub Docs: https://docs.github.com
Vercel Docs: https://vercel.com/docs
shadcn/ui: https://ui.shadcn.com

COMMIT MESSAGE EXAMPLES
======================
git commit -m "Add new project to portfolio"
git commit -m "Update about page bio"
git commit -m "Fix contact form styling"
git commit -m "Add dark mode support"
git commit -m "Optimize images for performance"

SECURITY NOTES
==============
✓ Never commit .env files with secrets
✓ Keep npm packages updated: npm update
✓ Use strong passwords for GitHub
✓ Enable 2FA on GitHub for security
✓ Don't share GitHub personal access tokens

PERFORMANCE TIPS
================
✓ Optimize images (use next/image component)
✓ Enable gzip compression
✓ Use lazy loading for images
✓ Minimize CSS/JavaScript
✓ Cache static content

Next.js automatically handles most of these!

CUSTOMIZATION CHECKLIST
=======================
□ Update your name throughout the site
□ Change email and contact info
□ Add your real projects
□ Update skills and technologies
□ Replace placeholder images
□ Update social media links
□ Customize color scheme if desired
□ Add your CV/resume PDF
□ Test on mobile devices
□ Deploy to Vercel
□ Set up custom domain (optional)

GIT WORKFLOW SUMMARY
====================
1. Make changes to files
2. $ git add .
3. $ git commit -m "Describe changes"
4. $ git push
5. Wait for Vercel auto-deployment
6. Check your live site!

FREQUENTLY ASKED QUESTIONS
==========================

Q: Is Vercel really free?
A: Yes! Free tier includes unlimited projects and bandwidth.

Q: Can I use my own domain?
A: Yes, connect via Vercel's domain settings (may have registration cost).

Q: How do I add a blog section?
A: Create new app/blog folder with blog pages and markdown files.

Q: Can I add animations?
A: Yes, Tailwind CSS includes animation utilities and custom animations.

Q: How do I add dark mode?
A: Use Tailwind's dark: prefix. See globals.css for dark theme.

Q: Is my code secure on GitHub?
A: Yes, if you don't commit passwords or API keys.

Q: How often do I need to update?
A: Update npm packages monthly: npm update

Q: Can I monetize my portfolio?
A: Yes, add sponsorship links, affiliate links, or paid services.

For more help, check the official Next.js documentation!

Last updated: January 2026
Version: 1.0.0
