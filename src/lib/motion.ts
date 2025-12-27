import { Variants } from "framer-motion";

/**
 * MOTION PRIMITIVES
 * The physics of the "System Dashboard".
 * Mechanical, snappy, and precise.
 */

// "Expo Out" - snappy start, soft landing
export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const DURATION = {
    fast: 0.15,   // Hover, Click, Micro-interactions
    medium: 0.3,  // Panel slides, content mounting
    slow: 0.5,    // Initial page load stagger
    boot: 0.8,    // Heavy initialization
};

export const STAGGER = 0.05; // Standard stagger delay

export const systemTransition = {
    ease: EASE,
    duration: DURATION.medium,
};

/**
 * REUSABLE VARIANTS
 */

// 1. PAGE LOAD / SYSTEM BOOT
// Staggers the entry of children variants
export const pageWrapperVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2, // Wait for hydration
        },
    },
};

// 2. HERO TEXT REVEAL
// precise line reveals with a distinct vertical translation
export const heroTextVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: DURATION.boot,
            ease: EASE,
        },
    },
};

// 3. NAV BAR SLIDE DOWN
// "Locking into place" from the top
export const navVariants: Variants = {
    hidden: { y: "-100%" },
    visible: {
        y: 0,
        transition: {
            duration: 0.4,
            ease: EASE,
        },
    },
};

// 4. COMMAND CARD (INTERACTIVE)
// Scale down on press, dim brightness. "Mechanical" feel.
export const cardVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: DURATION.slow, ease: EASE }
    },
    hover: {
        borderColor: "rgba(250, 204, 21, 0.4)", // Accent color glow
        y: -2,
        transition: { duration: DURATION.fast, ease: "easeOut" }
    },
    tap: {
        scale: 0.98,
        filter: "brightness(0.9)",
        transition: { duration: 0.05, ease: "linear" } // Instant feedback
    }
};

// 5. SYSTEM DRAWER (SLIDE-OVER)
// Slides in from the RIGHT edge. Heavy shadow.
export const drawerVariants: Variants = {
    hidden: { x: "100%" },
    visible: {
        x: "0%",
        transition: {
            duration: 0.5,
            ease: EASE,
        },
    },
    exit: {
        x: "100%",
        transition: {
            duration: 0.3,
            ease: [0.32, 0, 0.67, 0], // Faster exit (Cubic In)
        },
    },
};

export const backdropVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
};

// 6. CONTENT FADE
// Useful for fading in content *inside* a drawer after it opens
export const contentFadeVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { delay: 0.2, duration: 0.4 }
    }
};
