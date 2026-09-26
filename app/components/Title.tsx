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
            <h1 className="font-heading uppercase font-bold text-6xl mx-5">
               
            </h1>
            <h1 className="
                font-heading
                uppercase
                font-bold
                text-[calc(var(--index)*4.2)]
                max-md:text-[13vw]
                max-md:leading-[0.9]
                max-md:tracking-[-0.06em]
                whitespace-nowrap
            ">
                {displayText}
            </h1>
        </div>
    );
}