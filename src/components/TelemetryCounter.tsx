"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface TelemetryCounterProps {
    value: number | string; // Can be "12ms" or 100
    label?: string; // Optional label suffix if value is purely numeric
    className?: string;
}

/**
 * TelemetryCounter
 * A high-performance, GPU-accelerated count-up component.
 * Parses the numeric part of the value and animates it.
 */
export function TelemetryCounter({ value, label, className }: TelemetryCounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

    // Extract number and suffix (e.g., "12ms" -> 12, "ms")
    let numericValue = 0;
    let suffix = "";

    if (typeof value === "number") {
        numericValue = value;
    } else {
        // Basic regex to split number and text
        const match = value.match(/([0-9.]+)(.*)/);
        if (match) {
            numericValue = parseFloat(match[1]);
            suffix = match[2];
        } else {
            // Fallback for non-numeric strings
            return <span className={className}>{value}</span>;
        }
    }

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 30,
        stiffness: 100,
        mass: 1, // Snappy but controlled
    });

    useEffect(() => {
        if (inView) {
            motionValue.set(numericValue);
        }
    }, [inView, numericValue, motionValue]);

    useEffect(() => {
        // Subscribe to spring updates and mutate the DOM directly (performance)
        const unsubscribe = springValue.on("change", (latest) => {
            if (ref.current) {
                // Format: No decimals if integer, 1 decimal if float
                const formatted = Number.isInteger(numericValue)
                    ? Math.round(latest).toString()
                    : latest.toFixed(1);

                ref.current.textContent = `${formatted}${suffix}${label ? label : ''}`;
            }
        });
        return () => unsubscribe();
    }, [springValue, numericValue, suffix, label]);

    return (
        <span ref={ref} className={className} />
    );
}
