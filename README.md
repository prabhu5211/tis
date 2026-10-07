# Tulas International School (TIS) - Homepage Redesign

A modern, high-converting, animated redesign of the **Tula's International School (TIS)** homepage focusing on fluid micro-interactions, dark/light theme switching, responsive design, and seamless user conversion pathways.

---

## 🚀 Live Demo & Links
- **Live URL:** [TIS Homepage Redesign Live Demo](https://tis.vercel.app) *(Connected to Vercel GitHub Integration)*
- **Repository:** [https://github.com/prabhu5211/tis.git](https://github.com/prabhu5211/tis.git)

---

## 🛠️ Tech Stack
- **Framework:** React 19 + TypeScript (Vite 8)
- **Styling:** Tailwind CSS v4 (with custom luxury glassmorphism utilities)
- **Animations:** Framer Motion (Smooth springs, scroll triggers, modal transitions) & Canvas Confetti
- **Icons:** Lucide React & Custom SVG Social Primitives
- **Deployment:** Vercel / Netlify / GitHub Pages

---

## ✨ Standout Features Implemented (All 4 Bonus Features Included!)

### 1. 🎯 Feature A: Custom Spring Precision Cursor
- **Concept:** A circular follower ring and inner precision dot tracking mouse movements with 60 FPS spring physics.
- **UX Rules:** Automatically hides on touch/mobile devices (`pointer: coarse`). Dynamically scales, alters opacity, and highlights when hovering over interactive elements (`<a>`, `<button>`, inputs, selects).

### 2. 📜 Feature B: Scroll-Triggered Staggered Reveals
- **Concept:** Page elements smoothly float and stagger into view as the user scrolls down the landing page.
- **UX Rules:** Entrance durations strictly calibrated between 0.3s and 0.6s to keep page scrolling swift and engaging using Framer Motion's `whileInView` with `viewport={{ once: true }}`.

### 3. 🌓 Feature C: Animated Dark / Light Theme Switcher
- **Concept:** A toggle button with rotational sun/moon micro-animations that switches between crisp light mode and a deep midnight obsidian dark mode.
- **Implementation:** React state persisted in `localStorage` and synchronized with system color preferences.

### 4. 📊 Feature D: Top Scroll Progress Bar
- **Concept:** A sleek gold gradient progress bar fixed to the top of the viewport tracking exact scroll depth.
- **Implementation:** Smoothly animated using Framer Motion's `useScroll` and `useSpring` hooks.

---

## 🏛️ Additional High-Converting Features
- **Admission Inquiry Modal:** Interactive form with celebration confetti upon submission.
- **360° Virtual Campus Tour Modal:** Responsive video walkthrough embed.
- **Interactive Fee Structure Calculator:** Allows parents to estimate annual tuition & boarding fees by grade level.
- **Filterable Visual Campus Gallery:** Categorized tabs (Infrastructure, Sports, Academics, Campus Life) with modal lightbox viewing.
- **Parent & Alumni Testimonial Slider:** Auto-rotating testimonial carousel with 5-star ratings and verified quotes.

---

## 📦 Getting Started Locally

### 1. Clone the repository
```bash
git clone https://github.com/your-username/tis-homepage-redesign.git
cd tis-homepage-redesign
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for production
```bash
npm run build
```

---

## 📁 Component Architecture Overview

```plaintext
src/
├── components/
│   ├── ui/           # Atomic UI primitives (Button, Card, Badge, Modal)
│   ├── layout/       # Navbar, AnnouncementBar, Footer
│   ├── sections/     # HeroSection, AboutSection, AcademicPrograms, BoardingLife, CampusGallery, StatisticsCounter, TestimonialsSection, AdmissionProcess, FAQSection, InquiryModal, VirtualTourModal
│   └── animation/    # ScrollProgress, CustomCursor, AnimatedToggle, ScrollReveal
├── hooks/            # Custom React hooks (useScrollProgress, useMousePosition, useDarkMode)
├── data/             # Static school content, navigation items, curriculum, statistics
└── styles/           # Global CSS and Tailwind CSS configuration
```

---

## 🎨 Brand Identity Retained
- **Official Brand Colors:** Deep Royal Navy (`#0B192C`), Warm Gold (`#F59E0B`), and Eco Emerald accents.
- **Typography:** Google Fonts `Outfit` for bold modern headings and `Plus Jakarta Sans` for body copy.
- **Core Copy & Copywriting:** Authentic text, accreditations ("Ranked #1 Boarding School in Uttarakhand"), location details, contact info, and official assets from [tis.edu.in](https://tis.edu.in/).
