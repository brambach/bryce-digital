"use client";

import { useEffect } from "react";

export function AuraBackground() {
    useEffect(() => {
        // Load Unicorn Studio script
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";
        script.onload = () => {
            // @ts-ignore
            if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
                // @ts-ignore
                window.UnicornStudio.init();
                // @ts-ignore
                window.UnicornStudio.isInitialized = true;
            }
        };
        document.body.appendChild(script);

        return () => {
            // Cleanup if necessary, though Unicorn Studio might not have a destroy method exposed easily
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return (
        <div className="aura-background-component fixed top-0 w-full h-screen -z-10 pointer-events-none" data-alpha-mask="80" style={{ maskImage: "linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)", WebkitMaskImage: "linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)" }}>
            <div className="aura-background-component w-full absolute top-0 hue-rotate-15 saturate-150 brightness-125 h-[700px]" data-alpha-mask="80" style={{ maskImage: "linear-gradient(transparent, black 0%, black 80%, transparent)" }}>
                <div className="aura-background-component top-0 w-full -z-10 absolute h-full">
                    <div data-us-project="opxjeAzlg0dkUUVGEZri" className="absolute w-full h-full left-0 top-0 -z-10"></div>
                </div>
            </div>
        </div>
    );
}
