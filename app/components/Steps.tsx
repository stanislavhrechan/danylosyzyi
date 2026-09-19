"use client";

import Link from "next/link";
import AnimatedText from "./IntroText";
const steps = [
    {
        number: "01",
        label: "DISCOVER",
        title: "Find the idea.",
        text: "We look deeper than the brief. Understanding the brand, the people and the feeling behind the project.",
    },
    {
        number: "02",
        label: "CREATE",
        title: "Build the feeling.",
        text: "Strategy becomes visual language. We shape the idea through design, motion, image and detail.",
    },
    {
        number: "03",
        label: "DELIVER",
        title: "Make it move.",
        text: "Everything comes together into something ready to live, communicate and make an impact.",
    },
];

export default function Steps() {
    return (
        <section
            className="
                relative
                bg-orange-300
                md:px-6
                py-10
                text-[#171717]
                md:py-14
            "
        >
            {/* TOP BAR */}
            <div className="flex items-end justify-between mb-8 px-5 md:px-0">
                <span
                    className="
                        font-accent
                        text-[10px]
                        font-black
                        uppercase
                        leading-none
                        tracking-[0.08em]
                    "
                >
                    [02]
                </span>

                <span
                    className="
                        font-accent
                        text-[10px]
                        font-black
                        uppercase
                        leading-none
                        tracking-[0.08em]
                    "
                >
                    ( HOW WE WORK )
                </span>
            </div>
            <div className="px-5 md:px-0">
                <AnimatedText
                    className="
                        md:max-w-[calc(var(--index)*50)]
                        text-[calc(var(--index)*2.8)]
                        md:text-[calc(var(--index)*2.9)]
                        font-medium
                        leading-[1.05]
                        md:leading-[0.94]
                        tracking-[-0.055em]
                        font-heading
                    "
                >
                    <span className="underline">Everything moves fast</span>
                    , with a sharp eye for detail.
                    <span className="underline">Think of us as your own creative team</span>,
                    with extra firepower when you need it.
                </AnimatedText>
            </div>
          
            <div
                className="
                    mt-5
                    md:mt-10
                    relative
                "
            >
                {steps.map((step, index) => (
                    <div
                        key={step.number}
                        className={`
                            sticky top-0
                            bg-orange-300 py-2
                            px-5 md:px-0
                        `}
                    >
                        <div
                            className={`flex md:flex-row gap-5 flex-col md:justify-between ${index === 1 ? "md:flex-row-reverse" : ""}`}
                        >
                            <div className="font-accent font-black text-xs mt-5 md:mt-10">
                                STEP {step.number}
                            </div>
                            <div className="mt-5 md:mt-10">
                                {/* TITLE */}
                                <h3
                                    className="
                                        md:max-w-[400px]
                                        font-heading
                                        text-2xl
                                        font-medium
                                        leading-[0.88]
                                        tracking-[-0.05em]  
                                    "
                                >
                                    {step.title}
                                </h3>

                                {/* DESCRIPTION */}
                                <p
                                    className="
                                        mt-4
                                        max-w-[330px]
                                        font-body
                                        text-[13px]
                                        leading-[1.3]
                                        text-[#171717]/65
                                    "
                                >
                                    {step.text}
                                </p>
                            </div>
                            {/* CUBICS */}
                            <div
                                className="
                                    relative
                                    flex
                                    h-[50vh]
                                    md:h-[480px]
                                    md:w-[800px]
                                "
                            >
                                <div
                                    className={`
                                        relative
                                        h-full
                                        w-full
                                        bg-[#171717]
                                    `}
                                >
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* BOTTOM CTA */}
            <div
                className="
                    flex
                    flex-col
                    gap-6
                    pt-5
                    px-5
                    md:px-0
                    md:flex-row
                    md:items-end
                    md:justify-between
                "
            >
                <div>
                    <span
                        className="
                            font-accent
                            text-[10px]
                            font-black
                            uppercase
                            tracking-[0.08em]
                        "
                    >
                        ( READY WHEN YOU ARE )
                    </span>

                    <p
                        className="
                            mt-3
                            max-w-[650px]
                            font-heading
                            text-[clamp(2rem,3vw,3rem)]
                            font-medium
                            leading-[0.9]
                            tracking-[-0.05em]
                        "
                    >
                        Good work starts with
                        <span className="underline">
                            {" "}a good conversation.
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
}
