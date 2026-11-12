# Dt. Neelam - Diabetes & Weight Loss Reversal Landing Page

[![Next.js 16](https://img.shields.io/badge/Next.js-16.3.5-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.2.8-blue?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-13.x-black?style=flat&logo=framer)](https://motion.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-emerald.svg)](LICENSE)

A modern, high-converting Next.js landing page built for **Dt. Neelam** (Master's in Medical Physiology, Diabetes & Weight Loss Specialist). Designed around science-backed lifestyle physiology, sustainable HbA1c reversal (7.5+ to normal ranges), and personalized nutrition without starvation or giving up staple home foods like roti.

---

## 🌟 Clinical Methodology & Core Value Proposition

- **No Starvation or Extreme Deprivation**: Reversing insulin resistance using everyday home meals rather than unsustainable crash diets.
- **Rooted in Medical Physiology**: Led by Dt. Neelam's Master's background in Medical Physiology and 10+ years of clinical nutrition experience (17+ diplomas & certifications).
- **The 4 Physiological Pillars**:
  1. *Food Reaction Dynamics*: Understanding individual glucose response curves instead of generic calorie counting.
  2. *Circadian Sleep Architecture*: Optimizing restorative deep sleep for hormonal insulin sensitivity.
  3. *Cortisol & Stress Management*: Regulating adrenal stress hormones that silently drive hepatic glucose spikes.
  4. *Metabolic Daily Routine*: Practical timing habits for sustainable long-term blood sugar stability.
- **The 3-Step Reversal Process**:
  - **Step 1 — Diagnostic Deep Dive**: Comprehensive review of blood panels, HbA1c history, and lifestyle patterns.
  - **Step 2 — Home Food Personalization**: Tailored meal blueprints incorporating cultural staples without insulin spikes.
  - **Step 3 — Weekly Iterative Tracking**: Continuous fine-tuning of glucose levels and body composition.

---

## 🚀 Key Sections & Architecture

### 1. Header & Navigation
- **Frosted Glass Sticky Navbar**: Backdrop-blur navigation with brand credentials, quick section anchors, and direct "Book Free Consultation" action.

### 2. Hero & Value Architecture
- **Hook & Subheadline**: High-intent headline targeting HbA1c 7.5+ reversal without giving up daily staples.
- **Conic-Border Animated Badges**: 3 rotating gradient badges highlighting 10+ years experience, 100% home-food protocol, and online home consultations.
- **16:9 VSL Video Container**: Interactive video player preview with play trigger and smooth overlays.
- **Real-Time Urgency Badge**: Live weekly consultation slot counter encouraging immediate action.

### 3. Trust & Social Proof
- **Infinite Marquee Trust Strip**: Smooth continuous ticker displaying patient outcomes, verified credentials, and safety guarantees.
- **"Sound Familiar?" Diagnostic Cards**: Empathetic pain point breakdown covering crash diet burnout, fear of organ complications, and escalating medications.

### 4. Expert Credentials & FAQs
- **Meet Dt. Neelam**: Detailed clinical profile, degrees, certifications, and clinical philosophy.
- **Interactive FAQ Accordion**: Expandable Q&A answering common medical, dietary, and consultation queries.

### 5. Conversion & Lead Capture Flow
- **Interactive Consultation Booking Modal**: Multi-field capture form (Full Name, Phone/WhatsApp, Email, HbA1c Range, Preferred Time Slot).
- **CRM Integration**: Pre-wired with the BooClient CRM Lead Tracker script for instantaneous lead attribution.
- **Sticky Mobile Bottom Bar**: 1-tap mobile booking strip ensuring high conversion rates on mobile devices.
- **Medical Disclaimer**: Full regulatory compliance and disclaimer in the footer.

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Framework** | [Next.js](https://nextjs.org/) 16 (App Router with Webpack) |
| **UI Library** | [React](https://react.dev/) 19 |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) & PostCSS |
| **Animations** | [Framer Motion](https://motion.dev/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **CRM Integration** | BooClient CRM Lead Tracker |

---

## 📂 Project Structure

```text
Neelam_Landing_Page/
├── public/
│   ├── crm-lead-tracker.js    # Client-side analytics & CRM lead tracker
│   └── images/                # Clinical assets, badges & portraits
├── src/
│   ├── app/
│   │   ├── globals.css        # Global CSS & Tailwind design tokens
│   │   ├── layout.tsx         # Root layout with fonts & CRM tracker script
│   │   └── page.tsx           # Assembled single-page landing architecture
│   └── components/
│       ├── Navbar.tsx         # Sticky frosted-glass navbar
│       ├── HeroSection.tsx    # Impactful hero with VSL & animated badges
│       ├── TrustStrip.tsx     # Infinite marquee ticker
│       ├── SoundFamiliarSection.tsx # "Sound Familiar?" 4-point diagnostic cards
│       ├── WhyItHappensSection.tsx  # 4 Physiological Pillars & comparison
│       ├── MethodSection.tsx  # 3-Step Reversal protocol
│       ├── MeetCoachSection.tsx # Dt. Neelam credentials & experience
│       ├── FAQSection.tsx     # Interactive FAQ accordion
│       ├── FinalCtaSection.tsx# High-urgency closing conversion banner
│       ├── BookingModal.tsx   # Multi-step consultation booking modal
│       ├── StickyMobileBar.tsx# Mobile-first floating consultation bar
│       └── Footer.tsx         # Medical disclaimer & copyright
├── next.config.ts             # Next.js build configuration
├── package.json               # Dependencies and scripts
├── postcss.config.mjs         # PostCSS configuration
├── tsconfig.json              # TypeScript compiler settings
└── README.md                  # Comprehensive project documentation
```

---

## 🏁 Getting Started

### Prerequisites

- **Node.js**: `v18.18+` or `v20+`
- **Package Manager**: `npm`, `pnpm`, or `yarn`

### Installation

1. Clone the repository:
   ```bash
   git clone git@github-tws:connecttws/Neelam_Landing_Page.git
   cd Neelam_Landing_Page
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Production Build & Deployment

```bash
# Build for production
npm run build

# Start production server
npm run start
```

### Deploy to Vercel

1. Push your repository to GitHub.
2. Import the project in [Vercel](https://vercel.com/).
3. Vercel automatically detects Next.js build configuration (`next build --webpack`).
4. Click **Deploy**.

---

## 📊 CRM Lead Tracker Setup

The consultation booking form is integrated with the **BooClient CRM Lead Tracker**:
- Script located at `public/crm-lead-tracker.js`.
- Injected asynchronously in `src/app/layout.tsx`.
- Form inputs in `src/components/BookingModal.tsx` include semantic `name` and `data-question` attributes for reliable lead extraction and attribution.

---

## 📄 License

This project is licensed under the MIT License — feel free to customize and extend for your clinical & wellness landing page requirements.
