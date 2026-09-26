"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function VisualOverlay() {
    const overlayRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const blocks = gsap.utils.toArray<HTMLElement>(
                ".visual-overlay .visual-block-one, .visual-overlay [class*='translate-x-']"
            );

            gsap.set(blocks, {
                transformOrigin: "center center",
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: overlayRef.current,
                    start: "top 15%",
                    end: "bottom 10%",
                    scrub: 1,
                },
            });

            tl.to(blocks, {
                x: 0,
                duration: 0.6,
                ease: "none",
            });

            tl.to(blocks, {
                scaleX: 0,
                duration: 0.4,
                ease: "none",
            });
        }, overlayRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <svg
                className="absolute w-0 h-0"
                aria-hidden="true"
            >
                <defs>
                    <filter id="gooey">
                        <feGaussianBlur
                            in="SourceGraphic"
                            stdDeviation="5"
                            result="blur"
                        />

                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="
                                1 0 0 0 0
                                0 1 0 0 0
                                0 0 1 0 0
                                0 0 0 20 -10
                            "
                            result="goo"
                        />

                        <feComposite
                            in="SourceGraphic"
                            in2="goo"
                            operator="atop"
                        />
                    </filter>
                </defs>
            </svg>

            <div
                ref={overlayRef}
                className="visual-overlay absolute w-full -top-5 right-10 md:right-28"
            >
                <div
                    className="w-full md:gap-0 flex justify-between"
                    style={{
                        filter: "url(#gooey)",
                    }}
                >
                    <div className="visual-col shrink-0">
                        <div className="visual-block-one bg-white w-0 h-[calc(var(--index)*35)] md:h-[calc(var(--index)*9.5)]" />

                        <div className="visual-block-two bg-white w-10 md:w-30 h-[10vh] translate-x-[40%]" />

                        <div className="visual-block-three bg-white w-10 md:w-30 h-[10vh] translate-x-[80%]" />

                        <div className="visual-block-four bg-white w-10 translate-x-[160%] md:w-20 h-[10vh]  md:translate-x-[250%]" />
                    </div>

                    <div className="visual-col shrink-0">
                        <div className="visual-block-one bg-white w-10 md:w-[calc(var(--index)*4)] h-[calc(var(--index)*35)] md:h-[calc(var(--index)*9.5)]" />

                        <div className="visual-block-two bg-white w-10 md:w-[calc(var(--index)*4)] h-[10vh] translate-x-[60%]" />

                        <div className="visual-block-three bg-white w-10 md:w-[calc(var(--index)*4)] h-[10vh] translate-x-[120%]" />

                        <div className="visual-block-four bg-white w-10 md:w-[calc(var(--index)*4)] h-[10vh] translate-x-[180%]" />
                    </div>

                    <div className="visual-col shrink-0">
                        <div className="visual-block-one bg-white  w-10 md:w-[calc(var(--index)*4)] h-[calc(var(--index)*35)] md:h-[calc(var(--index)*9.5)]" />

                        <div className="visual-block-two bg-white w-10 md:w-[calc(var(--index)*4)] h-[10vh] translate-x-[60%]" />

                        <div className="visual-block-three bg-white w-10 md:w-[calc(var(--index)*4)] h-[10vh] translate-x-[120%]" />

                        <div className="visual-block-four bg-white w-10 md:w-[calc(var(--index)*4)] h-[10vh] translate-x-[180%]" />
                    </div>

                    <div className="visual-col shrink-0">
                        <div className="visual-block-one bg-white  w-10 md:w-[calc(var(--index)*4)] h-[calc(var(--index)*35)] md:h-[calc(var(--index)*9.5)]" />

                        <div className="visual-block-two bg-white w-10 md:w-[calc(var(--index)*4)] h-[10vh] translate-x-[60%]" />

                        <div className="visual-block-three bg-white w-10 md:w-[calc(var(--index)*4)] h-[10vh] translate-x-[120%]" />

                        <div className="visual-block-four bg-white w-10 md:w-[calc(var(--index)*4)] h-[10vh] translate-x-[180%]" />
                    </div>

                    <div className="visual-col shrink-0">
                        <div className="visual-block-one bg-white  w-10 md:w-[calc(var(--index)*4)] h-[calc(var(--index)*35)] md:h-[calc(var(--index)*9.5)]" />

                        <div className="visual-block-two bg-white w-10 md:w-[calc(var(--index)*4)] h-[10vh] translate-x-[60%]" />

                        <div className="visual-block-three bg-white w-10 md:w-[calc(var(--index)*4)] h-[10vh] translate-x-[120%]" />

                        <div className="visual-block-four bg-white w-10 md:w-[calc(var(--index)*4)] h-[10vh] translate-x-[180%]" />
                    </div>

                    <div className="hidden md:block visual-col shrink-0">
                        <div className="visual-block-one bg-white md:w-[calc(var(--index)*4)] md:h-[calc(var(--index)*9.5)]" />

                        <div className="visual-block-two bg-white md:w-[calc(var(--index)*4)] h-[10vh] translate-x-[60%]" />

                        <div className="visual-block-three bg-white md:w-[calc(var(--index)*4)] h-[10vh] translate-x-[120%]" />

                        <div className="visual-block-four bg-white md:w-[calc(var(--index)*4)] h-[10vh] translate-x-[180%]" />
                    </div>


                    <div className="hidden md:block visual-col shrink-0">
                        <div className="visual-block-one bg-white md:w-[calc(var(--index)*4)] md:h-[calc(var(--index)*9.5)]" />

                        <div className="visual-block-two bg-white md:w-[calc(var(--index)*4)] h-[10vh] translate-x-[60%]" />

                        <div className="visual-block-three bg-white md:w-[calc(var(--index)*4)] h-[10vh] translate-x-[120%]" />

                        <div className="visual-block-four bg-white md:w-[calc(var(--index)*4)] h-[10vh] translate-x-[180%]" />
                    </div>

                    <div className="hidden md:block visual-col shrink-0">
                        <div className="visual-block-one bg-white md:w-[calc(var(--index)*4)] md:h-[calc(var(--index)*9.5)]" />

                        <div className="visual-block-two bg-white md:w-[calc(var(--index)*4)] h-[10vh] translate-x-[60%]" />

                        <div className="visual-block-three bg-white md:w-[calc(var(--index)*4)] h-[10vh] translate-x-[120%]" />

                        <div className="visual-block-four bg-white md:w-[calc(var(--index)*4)] h-[10vh] translate-x-[180%]" />
                    </div>

                    <div className="hidden md:block visual-col shrink-0">
                        <div className="visual-block-one bg-white md:w-[calc(var(--index)*4)] md:h-[calc(var(--index)*9.5)]" />

                        <div className="visual-block-two bg-white md:w-[calc(var(--index)*4)] h-[10vh] translate-x-[60%]" />

                        <div className="visual-block-three bg-white md:w-[calc(var(--index)*4)] h-[10vh] translate-x-[120%]" />

                        <div className="visual-block-four bg-white md:w-[calc(var(--index)*4)] h-[10vh] translate-x-[180%]" />
                    </div>

                    
                </div>
            </div>
        </>
    );
}