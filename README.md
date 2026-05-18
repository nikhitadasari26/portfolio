# Nikhita Dasari — Personal Portfolio Website

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-8b5cf6?style=for-the-badge&logo=vercel)](https://nikhitadasariportfolio.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-nikhitadasari26-181717?style=for-the-badge&logo=github)](https://github.com/nikhitadasari26)
[![React](https://img.shields.io/badge/React-18-61dafb?style=for-the-badge&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646cff?style=for-the-badge&logo=vite)](https://vitejs.dev)

---

## 👩‍💻 About

A fully responsive, animated personal portfolio website for **Sai Manasa Nikhita Dasari** — an aspiring Software Development Engineer with expertise in Flutter, Firebase, and scalable application development.

## 🌐 Live Site

> **[https://nikhitadasariportfolio.vercel.app](https://nikhitadasariportfolio.vercel.app)**

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Framework** | React 18 + Vite |
| **Styling** | Tailwind CSS v4 |
| **Animations** | Framer Motion |
| **Parallax** | react-scroll-parallax |
| **Icons** | React Icons |
| **Fonts** | Google Fonts (Outfit + Inter + JetBrains Mono) |
| **Deployment** | Vercel |

---

## ✨ Features

- 🌙 Light / Dark mode toggle with OS preference detection & localStorage persistence
- 🎨 Premium dark-mode glassmorphism design with gradient accents
- 📱 Fully responsive — mobile (375px), tablet (768px), desktop (1280px)
- 🌊 Parallax scrolling effect on Hero section background blobs
- ✍️ Typewriter role animation in Hero section
- 🎭 5+ on-scroll animations using Framer Motion `useInView`
- ♿ Accessibility — `prefers-reduced-motion` media query included
- 🔍 SEO optimized — meta tags, Open Graph, semantic HTML
- 🏆 Animated counters for competitive programming achievements

### Sections

| # | Section | Description |
|---|---|---|
| 1 | **Hero** | Name, typewriter role, parallax blobs, CTAs, social links |
| 2 | **About** | Bio, animated SVG avatar, timeline, stats grid |
| 3 | **Skills** | Tech stack grouped cards with progress bars, 8 certifications |
| 4 | **Projects** | QLUE, CREATOROS, PLANZO — expandable cards with GitHub links |
| 5 | **Achievements** | LeetCode, GFG, CodeChef, HackerRank with animated counters |
| 6 | **Contact** | Email, GitHub, LinkedIn, contact form (no phone) |
| 7 | **Footer** | Navigation, contact info, back-to-top |

---

## 🚀 Getting Started (Local Development)

### Prerequisites
- Node.js 18+ — [nodejs.org](https://nodejs.org)
- npm 9+

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/nikhitadasari26/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The site will be available at **http://localhost:5173**

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` folder.

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx        # Sticky nav with active section tracking + theme toggle
│   └── BackToTop.jsx     # Floating scroll-to-top button
├── context/
│   └── ThemeContext.jsx  # Light/dark theme state & localStorage
├── sections/
│   ├── Hero.jsx          # Parallax blobs + typewriter effect
│   ├── About.jsx         # Timeline, bio, stats
│   ├── Skills.jsx        # Tech groups, progress bars, certifications
│   ├── Projects.jsx      # Expandable project cards
│   ├── Achievements.jsx  # Competitive programming + animated counters
│   ├── Contact.jsx       # Contact form + social links
│   └── Footer.jsx        # Multi-column footer
├── App.jsx
├── main.jsx
└── index.css             # CSS variables for light + dark themes
```

---

## 📊 Lighthouse Scores (Target)

| Category | Score |
|---|---|
| Performance | >= 80 |
| Accessibility | >= 90 |
| Best Practices | >= 90 |
| SEO | >= 85 |

---

## 🚢 Deployment (Vercel)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import `nikhitadasari26/portfolio`
4. Vercel auto-detects Vite → click **Deploy**
5. Live at [https://nikhitadasariportfolio.vercel.app](https://nikhitadasariportfolio.vercel.app)

---

## 📬 Contact

| Platform | Link |
|---|---|
| Email | [nikhitadasari1@gmail.com](mailto:nikhitadasari1@gmail.com) |
| LinkedIn | [nikhita-dasari-310703291](https://www.linkedin.com/in/nikhita-dasari-310703291/) |
| GitHub | [nikhitadasari26](https://github.com/nikhitadasari26) |
| LeetCode | [Nikhita_dasari](https://leetcode.com/u/Nikhita_dasari/) |

---

*© 2025 Sai Manasa Nikhita Dasari. Built with React + Vite + Framer Motion*
