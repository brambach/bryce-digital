# Bryce Digital: Operational Systems

Bryce Digital builds **operational frontends** — high-fidelity web interfaces that act as automation hubs, syncing data directly with existing stacks like NetSuite, Salesforce, and Stripe.

## 🚀 The Philosophy: Beyond Digital Brochures

Most websites are passive objects. We build active parts of your workflow. We specialize in:
- **Real-time Sync**: Direct connectivity with ERPs and CRMs.
- **High-Fidelity Engineering**: Cinematic animations and low-latency interaction.
- **Automation Hubs**: Turning the frontend into a trigger for business logic.

---

## 🛠 Tech Stack

- **Core**: Next.js 16 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS 4 (Custom design system)
- **Animations**: Framer Motion (High-fidelity scroll-driven & interactive)
- **Backend/Hooks**: Supabase (Edge Functions, JWT Auth)
- **Integrations**: Resend API, NetSuite, Oracle, Salesforce

---

## 💎 Key Components

### 1. Hero Interface
A professional, engineering-focused cockpit featuring a terminal emulator, interactive system stats, and a high-end "Initialize Audit" shimmer.
- **Refinement**: Optimized for mobile with a compact square aspect ratio and logic-driven element reordering.

### 2. Isometric Process
Visual representation of system connectivity with animated SVG "live wires."
- **Interaction**: Features persistent selection states for mobile touch feedback with yellow glow highlighting.

### 3. Bento Grid (Core Protocols)
A premium display of service offerings with high-fidelity visuals.
- **Interaction**: Implements persistent yellow border glow states across all cards on mobile tap.

### 4. Integration Marquee
High-speed infinite scroll of supported technologies.
- **Customization**: Combined "Oracle NetSuite" grouping with custom SVG pathing.

---

## 📡 Backend Architecture

### Contact Form & SMTP
- **Edge Deployment**: Supabase Edge Functions manage the `send-contact-email` logic.
- **Security**: Uses JWT-based Legancy Anon keys for frontend-to-edge authentication.
- **Provider**: Integrated with Resend for high-deliverability email routing.

---

## 📦 Getting Started

### Prerequisites
- Node.js 20+
- Supabase CLI (for local edge function development)

### Local Development
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Local Supabase development
supabase start
supabase functions serve send-contact-email --no-verify-jwt
```

### Environment Config
Required `.env.local` keys:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

---

## ⚡ Deployment

The frontend is optimized for **Vercel** deployment, utilizing the Latest Next.js features for static generation and server-side rendering. The backend functions are deployed via **Supabase CLI**:

```bash
supabase functions deploy send-contact-email
```

---

*Designed & Engineered by Bryce Digital.*
