---
name: Register
description: Transformation Digitale & Artisanat Numérique
colors:
  primary: "#1D4ED8"
  neutral-bg: "#F8FAFC"
  neutral-text: "#0F172A"
  neutral-border: "#E2E8F0"
typography:
  display:
    fontFamily: "var(--font-space), sans-serif"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "var(--font-space), sans-serif"
    fontWeight: 700
    lineHeight: 1.2
  body:
    fontFamily: "var(--font-sans), sans-serif"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  full: "9999px"
  xl: "1rem"
  md: "0.5rem"
spacing:
  sm: "0.5rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#FFFFFF"
    rounded: "{rounded.full}"
    padding: "0.5rem 1.5rem"
  button-glass:
    backgroundColor: "rgba(255, 255, 255, 0.04)"
    textColor: "{colors.neutral-text}"
    rounded: "{rounded.full}"
    padding: "1rem 3rem"
---

# Design System: Register

## 1. Overview

**Creative North Star: "Trajectoire Digitale"**

The Register design system is built for traditional B2B profiles—small business owners and artisans who need clarity, reassurance, and pragmatism. The aesthetic philosophy is direct, minimal, and highly legible, prioritizing cognitive clarity above all else. We embrace the "Artisanat numérique" (digital craftsmanship) approach, conveying expertise through transparency and structured, high-contrast design. We explicitly reject marketing jargon, "growth hacking" aesthetics, opaque formats, and performance-killing features.

**Key Characteristics:**
- High cognitive clarity and legibility
- Pragmatic and transparent B2B tone
- Tactile, confident interactive elements
- Layered depth to establish hierarchy without visual friction

## 2. Colors

A trustworthy, pragmatic palette designed for maximum legibility and professional reassurance.

### Primary
- **Pragmatic Blue** (#1D4ED8): Used for primary actions, critical highlights, and indicating progression (the "Trajectoire").

### Neutral
- **Slate Background** (#F8FAFC): The default canvas. Clean, reduces eye strain compared to pure white.
- **Slate Text** (#0F172A): Primary typography. Ensures high contrast and readability.
- **Subtle Border** (#E2E8F0): Used for structural dividers and glassmorphism edges.

### Named Rules
**The Legibility First Rule.** All text must comfortably pass WCAG AAA contrast ratios against its background. The focus is on reading, not decorating.

## 3. Typography

**Display Font:** Space Grotesk (with sans-serif fallback)
**Body Font:** Inter (with sans-serif fallback)

**Character:** A pairing that balances technical precision (Space Grotesk) with effortless readability (Inter).

### Hierarchy
- **Display** (700, 5xl-7xl, 1.05): Hero sections and major value propositions.
- **Headline** (700, 2xl-4xl, 1.2): Section titles and case study headers.
- **Title** (600, xl, 1.4): Component headers and feature highlights.
- **Body** (400, lg/base, 1.6): Paragraphs, descriptions, and audit details. Max line length 65–75ch.
- **Label** (500, sm, uppercase): Form fields, metadata, and button labels.

### Named Rules
**The Artisan Craft Rule.** Typography is our primary design tool. Rely on font scale, weight, and whitespace to organize information before reaching for boxes or colors.

## 4. Elevation

The system is layered, utilizing glassmorphism and structural shadows to define spatial hierarchy.

### Shadow Vocabulary
- **Ambient Glass** (`box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); backdrop-filter: blur(24px)`): Used for floating containers, toast notifications, and inputs floating above the background.
- **Action Lift** (`box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1)`): Used when a tactile element (like a button) is hovered or focused.

### Named Rules
**The Purposeful Depth Rule.** Shadows and glass effects are not merely decorative. They must explain the Z-axis hierarchy, showing what content is above other content (e.g., sticky navs, toast notifications).

## 5. Components

Tactile, confident components that guide the user clearly toward booking a digital audit.

### Buttons
- **Shape:** Fully rounded pill (9999px)
- **Primary:** Pragmatic Blue background with white text. 
- **Hover / Focus:** Lifts slightly on the Y-axis with a deepened shadow.
- **Glass / Secondary:** Semi-transparent background with a subtle border and backdrop blur.

### Cards / Containers
- **Corner Style:** Rounded (1rem)
- **Background:** White or subtle Slate
- **Shadow Strategy:** Ambient Glass or Action Lift on hover (for clickable case studies)
- **Border:** 1px solid Subtle Border (#E2E8F0)
- **Internal Padding:** Generous (1.5rem to 2rem)

### Inputs / Fields
- **Style:** Glassmorphism input (rounded-full, backdrop blur, translucent background)
- **Focus:** Strong, highly visible focus ring
- **Error / Disabled:** High contrast error states; disabled states drop opacity but maintain legibility.

### Navigation
- **Style:** Sticky top nav, bold legible links, explicit primary CTA button on the right.

## 6. Do's and Don'ts

### Do:
- **Do** prioritize cognitive clarity by ensuring high-contrast elements and clean typography.
- **Do** use tactile and confident component sizes with clear tap targets for mobile users.
- **Do** emphasize concrete ROI and transparency in the UI layout (e.g., clear pricing/service boxes).

### Don't:
- **Don't** use heavy animations, complex scroll-jacking, or unoptimized assets that degrade site speed and Core Web Vitals.
- **Don't** use "Growth Hacking" buzzwords, excessive anglicisms, or generic corporate communication tropes.
- **Don't** use "Black Box" formats like opaque subscription models or vague service descriptions.
