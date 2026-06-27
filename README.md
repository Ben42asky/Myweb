# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS. Showcase your projects, skills, and experience with a clean and professional design.

## Features

- 🎨 Modern, responsive design
- ⚡ Built with Next.js 16 for optimal performance
- 🎯 Four main pages: Home, About, Projects, Contact
- 📱 Mobile-first responsive layout
- 🌙 Dark mode design
- ✨ Smooth animations and transitions
- 🔍 SEO optimized
- ⚙️ Easy to customize

## Pages

- **Home**: Landing page with introduction
- **About**: Detailed information about you, education, and experience
- **Projects**: Showcase your projects with descriptions and links
- **Contact**: Contact form and social media links

## Tech Stack

- **Framework**: Next.js 16
- **UI Library**: React 19
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter, Playfair Display)
- **Hosting**: Vercel

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Customization

### Update Personal Information

Edit the following files to add your information:

1. **Header/Navigation** - `components/header.tsx`
2. **Home Page** - `app/page.tsx`
3. **About Page** - `app/about/page.tsx`
4. **Projects** - `app/projects/page.tsx`
5. **Contact** - `app/contact/page.tsx`

### Update Styling

The color scheme and design tokens are defined in `app/globals.css`. Customize the CSS variables:

```css
--color-background: #0f172a;
--color-surface: #1e293b;
--color-accent: #3b82f6;
/* ... more variables ... */
```

### Add Your Images

Replace placeholder images with your own:
- Update hero images in page components
- Add your profile image in the About section
- Replace project screenshots in the Projects page

## Project Structure

```
portfolio/
├── app/
│   ├── page.tsx           # Home page
│   ├── about/
│   │   └── page.tsx       # About page
│   ├── projects/
│   │   └── page.tsx       # Projects page
│   ├── contact/
│   │   └── page.tsx       # Contact page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   ├── header.tsx         # Navigation header
│   ├── footer.tsx         # Footer
│   └── hero-section.tsx   # Hero section component
├── public/                # Static files
└── package.json
```

## Building for Production

```bash
npm run build
npm start
```

## Deploying to Vercel

The easiest way to deploy is using Vercel:

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your repository
5. Click "Deploy"

Your portfolio will be live!

## Environment Variables

No environment variables are required for this portfolio to run locally.

## Contributing

Feel free to fork this project and customize it for your needs!

## License

This project is open source and available under the MIT License.

## Support

If you have any questions or issues, please open an issue on GitHub.
