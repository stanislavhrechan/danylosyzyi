"use client";

import { useEffect, useState } from "react";

export default function Title() {
    const text = "CrissCrossProduction";
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        let index = 0;

        const interval = setInterval(() => {
            setDisplayText(text.slice(0, index + 1));
            index++;

            if (index >= text.length) {
                clearInterval(interval);
            }
        }, 80);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="hidden md:block">
            <h1 className="font-heading uppercase font-bold text-[calc(var(--index)*1.88)] md:text-[calc(var(--index)*4.24)]">
                {displayText}
                <span className="text-orange-300">|</span>
            </h1>
        </div>
    );
}