# 

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=rect&color=0A0A0A&height=220&section=header&text=BRYCE%20DIGITAL&fontSize=70&fontColor=FACC15&fontAlign=50&fontAlignY=42&desc=OPERATIONAL%20WEB%20INFRASTRUCTURE&descAlign=50&descAlignY=62&descSize=20&descColor=A3A3A3&stroke=FACC15&strokeWidth=1&animation=fadeIn" width="100%" alt="Bryce Digital Header" />

  <br/>
  <br/>

  <a href="https://brycedigital.io">
    <img src="https://img.shields.io/badge/SYSTEM_STATUS-OPERATIONAL-22c55e?style=for-the-badge&logo=statuspage&logoColor=white" alt="System Operational" />
  </a>
  <a href="https://vercel.com">
    <img src="https://img.shields.io/badge/DEPLOYMENT-VERCEL-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Deployed on Vercel" />
  </a>
  <a href="https://brycedigital.io">
    <img src="https://img.shields.io/badge/LICENSE-PROPRIETARY-FACC15?style=for-the-badge&labelColor=000000&logoColor=000000" alt="Proprietary License" />
  </a>

  <br/>
  <br/>
  
  <p align="center">
    <samp>Hardwired frontends. Automated backends. Zero latency.</samp>
  </p>
</div>

---

## 📡 System Overview

**Bryce Digital** engineers **operational frontends**—high-fidelity interfaces that act as automation hubs for modern business. Unlike passive "brochure" websites, this system is hardwired directly into the operational stack (NetSuite, Stripe, Salesforce) to act as a real-time command center.

> "We don't just build websites; we build the digital infrastructure that powers your revenue."

### ⚡ Core Capabilities
* **Real-time Synchronization:** Bi-directional data flow with Enterprise ERPs.
* **Cinematic Engineering:** Framer Motion-driven interactions with 60fps performance.
* **System Interaction Panels:** Custom modal logic for technical deep-dives without navigating away.
* **Edge-Computed Logic:** Serverless form handling via Supabase Edge Functions.

---

## 🛠 Technical Specifications

| Category | Technology | Protocol / Usage |
| :--- | :--- | :--- |
| **Core Engine** | ![Next.js](https://img.shields.io/badge/Next.js_15-000000?style=flat-square&logo=nextdotjs&logoColor=white) | App Router, Server Components |
| **Language** | ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) | Strict Typing, Data Safety |
| **Styling** | ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white) | Custom Design System, Glassmorphism |
| **Motion** | ![Framer](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white) | Scroll-driven animations, Layout Id |
| **Backend** | ![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat-square&logo=supabase&logoColor=white) | Database, Auth, Edge Functions |
| **Comms** | ![Resend](https://img.shields.io/badge/Resend-000000?style=flat-square&logo=resend&logoColor=white) | Transactional Email API |

---

## 📐 Architecture Diagram

This system utilizes a **Composable Architecture** to ensure security and speed. API keys never touch the client-side.

```mermaid
graph LR
    A[Client / Frontend] -->|Transmit Data| B{Supabase Gateway}
    B -->|Authenticate| C[Edge Function]
    C -->|Secure Injection| D((Environment Variables))
    C -->|Payload| E[Resend API]
    E -->|Delivery| F[Operations Inbox]
    
    style A fill:#0A0A0A,stroke:#FACC15,stroke-width:2px,color:#fff
    style B fill:#0A0A0A,stroke:#3ECF8E,stroke-width:2px,color:#fff
    style C fill:#0A0A0A,stroke:#FACC15,stroke-width:2px,color:#fff
    style E fill:#000,stroke:#fff,stroke-width:2px,color:#fff
    style F fill:#FACC15,stroke:#000,stroke-width:2px,color:#000