# Dt. Neelam - Diabetes & Weight Loss Reversal Landing Page

A modern, high-converting Next.js landing page built for **Dt. Neelam** (Master's in Medical Physiology, Diabetes & Weight Loss Expert), focusing on sustainable HbA1c reversal and personalized lifestyle medicine.

## 🚀 Key Sections & Features
- **Sticky Navbar:** Smooth frosted-glass blur with brand credentials, quick anchors, and "Book Free Consultation" button.
- **Hero Section:**
  - Headline: *"Reverse Your HbA1c of 7.5 or Above Back to Normal"*
  - Subhead: *"Without Starving or Giving Up Roti"*
  - 3 Rotating Conic-Border Animated Badges (10+ years experience, Personalised plan, Online consultation from home)
  - 16:9 Responsive VSL Video container with interactive preview/playback.
  - Primary CTA with real-time urgency notice ("Only 10 free consultation slots this week").
- **Trust Strip Marquee:** Seamless infinite ticker highlighting credentials and patient assurances.
- **Sound Familiar? (4 Pain Points):** Empathetic cards covering sugar cuts, medication spikes, diet chart burnout, and organ health worries.
- **Why It Happens:** The 4 physiological pillars (Food Reaction, Sleep, Stress/Cortisol, Routine) + comparison vs. generic crash diets.
- **The Method (3 Steps):** Understand reports & habits -> Personalise home food -> Track & adjust weekly.
- **Meet Dt. Neelam:** Qualifications (Master’s in Medical Physiology, 17+ Diploma & Certificates, 10 Years Experience).
- **Interactive FAQ Accordion:** Clean animated accordion with full medical clarity.
- **Final Urgency Call-To-Action:** High-contrast conversion banner with slot counter.
- **Interactive Consultation Booking Modal:** Direct lead capture (Name, Phone/WhatsApp, Email, HbA1c Level, Preferred Time) integrated with CRM Lead Tracker.
- **Sticky Mobile Bottom Bar:** Frictionless 1-tap booking for mobile users.
- **Footer:** Complete medical & nutritional disclaimer and copyright.

## 🛠️ Tech Stack
- **Framework**: [Next.js](https://nextjs.org/) 16 (App Router)
- **UI Library**: [React 19](https://react.dev/)
- **Animation**: [Framer Motion](https://motion.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 📂 Project Structure

```text
├── public/                # Static assets, logos, and tracking scripts
│   └── crm-lead-tracker.js# Lead capture & analytics tracking
├── src/
│   ├── app/               # Next.js App Router (Layout & Home)
│   │   ├── globals.css    # Global Tailwind styles & tokens
│   │   ├── layout.tsx     # Root layout with fonts & metadata
│   │   └── page.tsx       # Landing page structure
│   └── components/        # Modular UI components
│       ├── BookingModal.tsx
│       ├── FAQSection.tsx
│       ├── FinalCtaSection.tsx
│       ├── Footer.tsx
│       ├── HeroSection.tsx
│       ├── HowItWorksSection.tsx
│       ├── MeetSection.tsx
│       ├── Navbar.tsx
│       ├── PainPointsSection.tsx
│       ├── StickyBottomBar.tsx
│       ├── TrustStrip.tsx
│       ├── VslPlayer.tsx
│       └── WhyItHappensSection.tsx
```

## 🏁 Quick Commands
```bash
# Install dependencies
npm install

# Dev Server
npm run dev

# Production Build
npm run build

# Start Production Server
npm run start
```
