# Aevor Edge — Landing Page Design Plan

## Project Overview

A single-page landing website for Aevor Edge, an AI/LLM/Vibe Coding training company based in Singapore. The site serves as a lead generation tool where visitors learn about offerings and submit inquiry forms.

## Tech Stack

- **Next.js** (App Router) — server-side rendering for SEO
- **Typesript** (TypeScript)
- **Tailwind CSS** — utility-first styling
- **Prettier** — code formatting
- **Supabase** (`@supabase/supabase-js`) — store form submissions + email notifications
- **React Hook Form** (`react-hook-form`) — contact form handling
- **Lucide React** (`lucide-react`) — icons
- **Framer Motion** (`framer-motion`) — React animation library for declarative, layout-aware UI transitions.
- **GSAP** (`gsap`) — framework-agnostic, high-performance animation engine for complex timeline-based animations.

## Project Structure

```
app/
  layout.js          # Root layout with metadata, fonts, Navbar, Footer
  page.js            # Landing page — composes all sections
  globals.css        # Tailwind imports and global styles
  actions/
    contact.js       # Server Action for form submission (Supabase + email)
components/
  Navbar.js          # Top navigation bar with logo + CTA button
  Hero.js            # Hero section
  Offerings.js       # What We Teach section
  HowItWorks.js      # How It Works section
  Testimonials.js    # Testimonials / companies helped
  AboutUs.js         # About Aevor Edge
  FAQ.js             # Frequently asked questions
  ContactForm.js     # Inquiry form
  Footer.js          # Footer with links and copyright
  ui/                # shadcn/ui components (auto-generated)
lib/
  supabase.js        # Supabase server client setup
  utils.js           # Tailwind merge helper (shadcn default)
```

## Visual Style

- **Techy but approachable** — modern and developer-inspired, but not intimidating for non-technical audiences
- Light base with dark accents. Consider a dark navbar/hero with light content sections for contrast
- Subtle gradient accents (blues, purples — tech-forward colors)
- Clean sans-serif font (e.g., Inter or Geist)
- scroll animations using Framer Motion and GSAP — keep it tasteful, not flashy
- Plenty of whitespace to keep it breathable

## Page Sections (Top to Bottom)

### 1. Navbar

- Aevor Edge logo (left)
- Anchor links: What We Teach, How It Works, About, FAQ
- CTA button (right): "Get in Touch" — scrolls to contact form
- Sticky on scroll

### 2. Hero

- Large headline (placeholder): "Learn AI, LLMs, and Vibe Coding"
- Subtext (placeholder): "Hands-on training for teams and individuals. Based in Singapore, available worldwide."
- Primary CTA button: "Get in Touch" — scrolls to contact form
- Secondary CTA button: "See Our Offerings" — scrolls to offerings section
- Optional: subtle animated background or gradient

### 3. What We Teach (Offerings)

Three cards/columns:

| Offering                      | Description (placeholder)                                                                                            |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| **AI Fundamentals**           | Understand how AI works, practical applications for your business, and how to integrate AI tools into your workflow. |
| **LLMs & Prompt Engineering** | Master large language models — from prompt engineering to building AI-powered applications with APIs.                |
| **Vibe Coding**               | Build real web applications using AI coding assistants. No prior coding experience required.                         |

Each card should have:

- An icon (from Lucide)
- Title
- Short description
- Optional: "Learn More" that scrolls to contact form

### 4. How It Works

Show the different delivery formats. Use a simple grid or step-based layout:

| Format                 | Details (placeholder)                                                                       |
| ---------------------- | ------------------------------------------------------------------------------------------- |
| **Corporate Training** | Customized courses for your team. We come to your office or host at our Singapore location. |
| **1-on-1 Coaching**    | Personalized sessions tailored to your learning goals and pace.                             |
| **On-Site**            | Training conducted at your location or ours in Singapore.                                   |
| **Remote (Zoom)**      | Live interactive sessions via Zoom. Available for all course types.                         |

### 5. Testimonials

- Card-based layout with quote, person name, role, company
- Optionally show company logos in a row below
- Use placeholder testimonials for now (3-4 entries)
- Example placeholder:
  - "Aevor Edge transformed how our team thinks about AI. The training was practical and immediately applicable." — Jane Doe, CTO, TechCorp

### 6. About Us

- Brief paragraph about Aevor Edge: who you are, mission, why Singapore
- Placeholder content
- Optional: team photo or illustration placeholder
- Keep it short — 2-3 sentences max

### 7. FAQ

- Accordion-style (use shadcn Accordion component)
- Placeholder questions:
  1. "Who are your courses designed for?"
  2. "Do participants need coding experience?"
  3. "How long are the training sessions?"
  4. "Can you customize the curriculum for our company?"
  5. "What are your pricing options?"
  6. "Do you offer training outside of Singapore?"

### 8. Contact / Inquiry Form

Fields:

- **Name** (required)
- **Email** (required)
- **Company** (optional)
- **I'm interested in...** (dropdown: Corporate Training / 1-on-1 Coaching / Both / Other)
- **Message** (textarea, required)
- **Submit button**: "Send Inquiry"

On submit:

- Validate with React Hook Form
- Call a Next.js Server Action
- Server Action stores the submission in Supabase and sends an email notification
- Show a success message: "Thanks! We'll get back to you within 1-2 business days."

### 9. Footer

- Aevor Edge logo or name
- Links: same anchor links as navbar
- Contact email
- Location: Singapore
- Copyright: "2026 Aevor Edge. All rights reserved."
- Optional: social media links (LinkedIn, etc.)

## SEO & Metadata

Set in `layout.js`:

- **Title**: "Aevor Edge — AI, LLM & Vibe Coding Training in Singapore"
- **Description**: "Hands-on AI, LLM, and Vibe Coding training for teams and individuals. Corporate courses, 1-on-1 coaching, on-site and remote. Based in Singapore."
- **Open Graph tags** for social sharing (title, description, image)
- **Favicon**

## Supabase Setup

### Table: `inquiries`

| Column     | Type        | Notes                                    |
| ---------- | ----------- | ---------------------------------------- |
| id         | uuid        | Primary key, auto-generated              |
| name       | text        | Required                                 |
| email      | text        | Required                                 |
| company    | text        | Nullable                                 |
| interest   | text        | "corporate", "coaching", "both", "other" |
| message    | text        | Required                                 |
| created_at | timestamptz | Auto-generated                           |

### Email Notification

Use Supabase Edge Function or a webhook to send an email to the Aevor Edge inbox when a new row is inserted. Alternatively, use Resend or a similar email service directly in the Server Action.

## Environment Variables

```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

Note: Use `SUPABASE_SERVICE_ROLE_KEY` (no `NEXT_PUBLIC_` prefix) since it is only used in Server Actions — never exposed to the browser.

## Deployment

- **Platform**: Vercel
- **Framework preset**: Next.js (auto-detected)
- **Environment variables**: Set in Vercel dashboard
- **Domain**: Connect custom domain after deployment
- No special configuration needed — Vercel handles Next.js natively
