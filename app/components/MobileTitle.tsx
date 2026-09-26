"use client";

import { useEffect, useState } from "react";

export default function MobileTitle() {
    const first = "CrissCross";
    const second = "Production";

    const [firstText, setFirstText] = useState("");
    const [secondText, setSecondText] = useState("");

    useEffect(() => {
        let index = 0;

        const interval = setInterval(() => {
            if (index < first.length) {
                setFirstText(first.slice(0, index + 1));
            } else if (index - first.length < second.length) {
                const secondIndex = index - first.length;
                setSecondText(second.slice(0, secondIndex + 1));
            } else {
                clearInterval(interval);
            }

            index++;
        }, 80);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="md:hidden block mt-5 pb-5">
            <h1 className=" uppercase text-[calc(var(--index)*4)]">
                <span className="block w-fit">
                    {firstText}
                </span>

                <span className="block w-fit">
                    {secondText}
                </span>
            </h1>
        </div>
    );
}