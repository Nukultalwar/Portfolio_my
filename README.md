# ⚡ Nukul Talwar — 3D Software Engineer & Frontend Developer Portfolio

A premium, modern, futuristic **3D developer portfolio** crafted for **Nukul Talwar** to present his frontend engineering skills, verified repositories, interactive projects, and professional background to recruiters, hiring managers, and clients.

![Portfolio Preview](/og-preview.png)

---

## 🚀 Key Highlights & Architectural Features

- **Futuristic Dark Aesthetics**: Deep cybernetic background (`#07090e`), subtle blue/cyan/violet radial gradients, glassmorphism (`backdrop-filter: blur(16px)`), crisp typography (Plus Jakarta Sans & JetBrains Mono), and glowing micro-interactions.
- **Interactive 3D Three.js Visual**: Custom 60+ FPS Three.js viewport featuring an icosahedron crystal core, glowing cybernetic wireframe, dual orbital rings, orbiting tech nodes, and floating particle constellations that dynamically react to mouse movements with smooth lerping.
- **High Performance & Graceful Fallback**:
  - Automatically pauses Three.js requestAnimationFrame rendering when scrolled off-screen via `IntersectionObserver` to save GPU and battery.
  - Automatically provides a CSS/SVG 3D isometric fallback if WebGL is unsupported or on ultra-low-power screens.
  - Code-split vendor and Three.js chunks via Vite rollup optimizations.
- **Hero Section**:
  - Immediate identification: *"Hi, I'm Nukul Talwar"* & *"Software Engineer & Frontend Developer"*.
  - Core value statement: *"I build modern, responsive and interactive web experiences using JavaScript, React, HTML and CSS"*.
  - Live status indicator: **"Open to Opportunities"** with pulsing green beacon.
  - Quick action CTAs: **View Projects**, **GitHub Profile**, and **Let's Talk**.
- **About Section**:
  - Narrative introducing Nukul as a frontend-focused developer passionate about clean, responsive, and interactive web applications.
  - 4 core focus pillars: Frontend Engineering, Clean Architecture, Responsive & Accessible, API & Data Integration.
- **Skills Section (Zero Fake Percentage Bars)**:
  - Realistic, practical presentation of skills: JavaScript, React.js, HTML5, CSS3, Git, GitHub, REST APIs, Responsive Design, ES6+, Python, and Java.
  - Categorized tabs (Core Frontend, Tools/APIs, Foundations) with proficiency badges (*Core*, *Advanced*, *Proficient*, *Foundation*) and concrete descriptions of what Nukul builds with each.
- **Featured Projects Showcase**:
  - Glass cards with custom visual emblems, category tags, descriptions, tech stack pills, and GitHub repository links.
  - Includes real projects: **Podcast Website** (`https://github.com/Nukultalwar/prodcast-website`), **Netflix Clone**, **Movie Recommendation System**, **Weather App**, **Quick Quiz**, and **Todo App**.
  - **Interactive Project Architecture Modal**: Click "Architecture" on any project to inspect the overview, key engineering features, state management, and direct code links.
  - Zero fabricated URLs: non-invented links link directly to Nukul's GitHub profile or are easily configurable in `src/data/portfolioData.ts`.
- **Live Interactive GitHub Section**:
  - Connects to the public GitHub API (`https://api.github.com/users/Nukultalwar` and `/repos`).
  - Displays real public repo count, followers, recent activity, and verified repository link to `prodcast-website` without fabricating statistics.
  - Graceful fallback with offline caching if API rate-limiting occurs.
- **"How I Build" Section**:
  - 6-step engineering methodology: **Understand → Design → Build → Integrate → Test → Deploy** with actionable outcomes and deliverables.
- **"Why Work With Me" Section**:
  - Highlights Nukul's 4 core advantages: Practical Projects, Strong Frontend Foundation, Problem Solving & UX Empathy, and Continuous Learning.
- **Resume Section**:
  - Prominent **Download Resume (PDF)** button with celebratory confetti effect.
  - Direct LinkedIn profile link: `https://www.linkedin.com/in/nukul-talwar-84a574211/`.
  - Recruiter summary card highlighting target roles, core stack, and work preferences.
- **Validated Contact Section**:
  - Name, Email, Subject, and Message fields with client-side validation.
  - States: idle, loading, success (with confetti), error.
  - Secure integration via `VITE_FORMSPREE_ENDPOINT` environment variable (never exposes private API keys) + instant mail client (`mailto:`) fallback.
- **SEO & Accessibility**:
  - Full Open Graph, Twitter cards, meta description, and JSON-LD Person schema in `index.html`.
  - Accessible semantic markup, keyboard navigable links, ARIA labels, and `prefers-reduced-motion` compliance.

---

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| **Framework & Core** | React 18, TypeScript, Vite 6 |
| **3D & Graphics** | Three.js (WebGL, Custom Shaders, Geometries, Materials) |
| **Styling & Design** | Tailwind CSS, Custom Glassmorphism, CSS Grid / Flexbox |
| **Micro-Interactions** | Lucide React Icons, Canvas Confetti, Custom Cursor |
| **Data & APIs** | GitHub REST API, Vite Environment Variables |

---

## 📂 Project Structure

```
Portfolio/
├── public/
│   ├── favicon.svg             # Futuristic NT monogram favicon
│   ├── robots.txt              # Search engine crawling rules
│   ├── sitemap.xml             # Search engine sitemap
│   └── Nukul_Talwar_Resume.pdf # Configurable resume document
├── src/
│   ├── components/
│   │   ├── 3d/
│   │   │   ├── HeroScene3D.tsx            # Three.js 3D interactive hero scene
│   │   │   ├── FloatingCanvasFallback.tsx # CSS/SVG fallback for mobile/low-power
│   │   │   └── BackgroundStarField.tsx    # Ambient canvas particle starfield
│   │   ├── layout/
│   │   │   ├── Navbar.tsx                 # Glass sticky header with mobile drawer
│   │   │   └── Footer.tsx                 # Footer with navigation & recruiter notes
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx            # Main hero with 3D canvas and CTAs
│   │   │   ├── AboutSection.tsx           # Bio, ethos, and core engineering pillars
│   │   │   ├── SkillsSection.tsx          # Categorized real skills (no fake bars)
│   │   │   ├── ProjectsSection.tsx        # Project grid & filters
│   │   │   ├── GitHubSection.tsx          # Live GitHub API integration & repo cards
│   │   │   ├── HowIBuildSection.tsx       # Understand → Deploy 6-step timeline
│   │   │   ├── WhyWorkWithMeSection.tsx   # 4 value pillars for hiring managers
│   │   │   ├── ResumeSection.tsx          # Resume download & LinkedIn showcase
│   │   │   └── ContactSection.tsx         # Validated contact form & mail fallback
│   │   └── ui/
│   │       ├── GlassCard.tsx              # Reusable glassmorphic container
│   │       ├── ProjectModal.tsx           # Architecture detail modal dialog
│   │       └── CustomCursor.tsx           # Subtle desktop glowing cursor
│   ├── data/
│   │   └── portfolioData.ts               # Centralized configuration (easy to edit)
│   ├── hooks/
│   │   ├── useGitHubData.ts               # Live GitHub API fetch with rate-limit fallback
│   │   └── useScrollSpy.ts                # Section viewport observer
│   ├── styles/
│   │   └── globals.css                    # Tailwind directives & glass tokens
│   ├── types/
│   │   └── index.ts                       # TypeScript definitions
│   ├── App.tsx                            # Root application layout
│   ├── main.tsx                           # React DOM mount
│   └── vite-env.d.ts                      # Vite types
├── .env.example                           # Example environment variables
├── package.json                           # Dependencies & build scripts
├── tailwind.config.js                     # Theme extensions & custom animations
└── vite.config.ts                         # Vite configuration with chunk splitting
```

---

## ⚡ Quick Start & Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` to view the portfolio.

### 3. Build for Production
```bash
npm run build
```
Creates an optimized production bundle inside `dist/`.

### 4. Preview Production Build
```bash
npm run preview
```

---

## ⚙️ Customization Guide

### 1. Update Contact Details, Projects, or Skills
Open [`src/data/portfolioData.ts`](file:///Users/nukultalwargmail.com/Documents/Portfolio/src/data/portfolioData.ts). All information is cleanly centralized:
- **`personal`**: Name, email, location, GitHub URL, LinkedIn URL, resume download path.
- **`projects`**: Add new projects, update live demo URLs, GitHub repository links, descriptions, and feature lists.
- **`skillsCategories`**: Add or modify technical competencies and focus areas.
- **`howIBuild`** and **`whyWorkWithMe`**: Customize workflow steps or strengths.

### 2. Replace the Resume PDF
Drop your updated resume PDF at [`public/Nukul_Talwar_Resume.pdf`](file:///Users/nukultalwargmail.com/Documents/Portfolio/public/Nukul_Talwar_Resume.pdf). The "Download Resume" button will automatically deliver this file.

### 3. Connect Contact Form to Formspree (Optional)
1. Sign up for a free endpoint at [formspree.io](https://formspree.io).
2. Create a `.env` file in the root directory:
   ```env
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id
   ```
3. Restart your dev server. Messages submitted through the form will now be sent directly to your email inbox!

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)
1. Push this repository to your GitHub account (`https://github.com/Nukultalwar/portfolio`).
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Keep default settings (`Build Command: npm run build`, `Output Directory: dist`).
4. Click **Deploy**.

### Deploy to Netlify
1. Drag and drop the `dist/` folder into Netlify, or connect your GitHub repository with build command `npm run build` and publish directory `dist`.
