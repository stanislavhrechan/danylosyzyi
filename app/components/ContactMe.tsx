"use client";

import { FormEvent, useState } from "react";

import Link from "next/link";
import AnimatedText from "./IntroText";
import AnimatedButton from "./AnimatedButton";
const locations = [
    {
        city: "Bratislava",
        timezone: "CET",
        offset: 1,
    },
    {
        city: "Wien",
        timezone: "GMT+4",
        offset: 4,
    },
];



export default function ContactSection() {

    const [times, setTimes] = useState([]);
    const [loading, setLoading] = useState(false); const [status, setStatus] = useState(""); async function handleSubmit(e: FormEvent<HTMLFormElement>) { e.preventDefault(); setLoading(true); setStatus(""); const form = e.currentTarget; const formData = new FormData(form); const data = { name: formData.get("name"), email: formData.get("email"), message: formData.get("message"), }; try { const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json", }, body: JSON.stringify(data), }); const result = await response.json(); if (!response.ok) { throw new Error(result.error || "Something went wrong."); } setStatus("Message sent successfully."); form.reset(); } catch (error) { setStatus( error instanceof Error ? error.message : "Something went wrong." ); } finally { setLoading(false); } }
    

    return (
        <section
            id="contact"
            className="
                relative
                min-h-screen
                overflow-hidden
                bg-white
                pt-15
                md:pt-20
                px-4
                py-8
                text-[#171717]
                md:px-[34px]
                md:py-10
            "
        >


            {/* =====================================================
                CONTENT
            ===================================================== */}

            <div className="
                relative
                z-10
                flex
                min-h-[calc(100vh-80px)]
                flex-col
            ">


                {/* =================================================
                    TOP LABEL
                ================================================= */}

                <div className="
                    flex
                    w-full
                    items-end
                    justify-between
                ">

                    <span className="
                        font-accent
                        md:text-[10px]
                        text-xs
                        font-black
                        uppercase
                        leading-none
                        tracking-[0.08em]
                    ">
                        Let&apos;s connect
                    </span>

                </div>


                {/* =================================================
                    MAIN HEADING
                ================================================= */}

                <div className="
                    mt-5
                    md:mt-5
                ">
                    <AnimatedText
                        className="
                            max-w-[calc(var(--index)*55)]
                            font-heading
                            text-[calc(var(--index)*2.8)]
                            md:text-[calc(var(--index)*2.9)]
                            
                            leading-[1.05]
                            md:leading-[0.94]
                            font-medium

                            tracking-[-0.055em]
                        "
                    >
                        Your move. Whether you&apos;ve got a wild
                        idea, a tight deadline or just want to
                        explore what&apos;s possible — we&apos;re all ears.
                    </AnimatedText>
                    

                </div>

                <div className="
                    mt-5
                    md:mt-5
                ">

                    <AnimatedText className="
                        max-w-[calc(var(--index)*55)]
                        font-heading
                        text-[calc(var(--index)*2.7)]
                        leading-[1.05]
                        md:leading-[0.94]
                        font-medium
                        tracking-[-0.055em]
                    ">
                        Drop us a line. Or better yet:

                        <span className="
                            text-orange-300 underline cursive
                        ">
                            {" "}let&apos;s meet.
                        </span>
                    </AnimatedText>

                </div>


                {/* =================================================
                    BOTTOM CONTENT
                ================================================= */}

                <div className="
                    mt-5
                    md:mt-10
                    grid
                    grid-cols-1
                    gap-5
                    md:grid-cols-[120px_1fr_1.25fr]
                    md:gap-10
                    lg:grid-cols-[180px_1fr_1.2fr]
                    lg:gap-14
                ">


                    {/* =================================================
                        COLUMN 01
                    ================================================= */}

                    <div>

                        <span className="
                            font-accent
                            text-sm md:text-xs
                            font-black
                            uppercase
                            tracking-[0.08em]
                        ">
                            [ 01 ]
                        </span>

                    </div>


                    {/* =================================================
                        CONTACT INFORMATION
                    ================================================= */}

                    <div className="
                        flex
                        flex-col
                        md:justify-between
                        gap-5
                        md:gap-16
                        md:min-h-[350px]
                    ">




                        {/* -----------------------------------------
                            CONTACT DETAILS
                        ----------------------------------------- */}

                        <div className="
                            flex
                            flex-col
                            font-body
                            text-[14px]
                        ">

                            <span>
                                How to connect:
                            </span>


                            <div className="
                                mt-5
                                flex
                                flex-col
                            ">

                                <a
                                    href="mailto:hello@yourstudio.com"
                                    className="
                                        w-fit
                                        transition-opacity
                                        duration-300
                                        hover:opacity-50
                                        underline
                                    "
                                >
                                    crisscrossprod.office@gmail.com
                                </a>

                                <a
                                    href="tel:+421900000000"
                                    className="
                                        w-fit
                                        transition-opacity
                                        duration-300
                                        hover:opacity-50
                                        underline
                                        mt-0
                                        md:mt-2
                                    "
                                >
                                    +4367761619503
                                </a>

                            </div>

                        </div>


                        {/* -----------------------------------------
                            SOCIALS
                        ----------------------------------------- */}

                        <div className="
                            flex
                            gap-2
                            md:gap-10
                        ">

                            <AnimatedButton
                                href="https://www.instagram.com/jracklooney_o?stkn=dmQ5Z21yemtldmZm"
                                className="
                                    flex
                                   
                                    items-center
                                    justify-center
                                    rounded-full
                                    text-sm
                                    underline
                                    font-body
                                    underline
                                    text-sm
                                    text-black
                                    transition-transform
                                    duration-300
                                    hover:-translate-y-1
                                "
                            >
                                Instagram
                            </AnimatedButton>

                            <AnimatedButton
                                href="https://www.linkedin.com/in/danylo-s-ab4324250/"
                                className="
                                    flex
                                   
                                    items-center
                                    justify-center
                                    rounded-full
                                    text-sm
                                    underline
                                    font-body
                                    underline
                                    text-sm
                                    text-black
                                    transition-transform
                                    duration-300
                                    hover:-translate-y-1
                                "
                            >
                                Linkedln
                            </AnimatedButton>

                        </div>

                    </div>


                    {/* =================================================
                        FORM
                    ================================================= */}

                    <div className="
                        w-full
                        max-w-[650px]
                    ">

                        <div className="
                            mb-5
                            font-body
                            text-[14px]
                        ">
                            Fill in our form:
                        </div>


                        <form
                            onSubmit={handleSubmit}
                            className="
                                flex
                                flex-col
                            "
                        >


                            {/* -----------------------------------------
                                NAME
                            ----------------------------------------- */}

                            <div className="
                                border-b
                                border-[#171717]/50
                                transition-colors
                                duration-300
                                focus-within:border-[#171717]
                            ">

                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Name"
                                    className="
                                        h-[42px]
                                        w-full
                                        bg-transparent
                                        px-3
                                        font-body
                                        text-[16px]
                                        text-[#171717]
                                        outline-none
                                        transition-all
                                        duration-300
                                        placeholder:text-[#171717]/30
                                        focus:pl-5
                                    "
                                />

                            </div>


                            {/* -----------------------------------------
                                EMAIL
                            ----------------------------------------- */}

                            <div className="
                                mt-4
                                border-b
                                border-[#171717]/50
                                transition-colors
                                duration-300
                                focus-within:border-[#171717]
                            ">

                                <input
                                    name="email"
                                    type="email"
                                    placeholder="Email address"
                                    className="
                                        h-[42px]
                                        w-full
                                        bg-transparent
                                        px-3
                                        font-body
                                        text-[16px]
                                        text-[#171717]
                                        outline-none
                                        transition-all
                                        duration-300
                                        placeholder:text-[#171717]/30
                                        focus:pl-5
                                    "
                                />

                            </div>


                            {/* -----------------------------------------
                                MESSAGE
                            ----------------------------------------- */}

                            <div className="
                                mt-4
                                border-b
                                border-[#171717]/50
                                transition-colors
                                duration-300
                                focus-within:border-[#171717]
                            ">

                                <textarea
                                    name="message"
                                    placeholder="Your message"
                                    className="
                                        min-h-[160px]
                                        w-full
                                        resize-none
                                        bg-transparent
                                        px-3
                                        py-5
                                        font-body
                                        text-[16px]
                                        leading-[1.2]
                                        text-[#171717]
                                        outline-none
                                        transition-all
                                        duration-300
                                        placeholder:text-[#171717]/30
                                        focus:pl-5
                                    "
                                />

                            </div>


                            {/* -----------------------------------------
                                BUTTON
                            ----------------------------------------- */}

                            <button
                                type="submit" disabled={loading}
                                className="
                                    group
                                    mt-7
                                    flex
                                    h-[44px]
                                    w-fit
                                    items-center
                                    gap-5
                                    rounded-full
                                    bg-[#171717]
                                    px-5
                                    
                                    font-accent
                                    text-sm
                                    font-black
                                    uppercase
                                    tracking-[0.05em]
                                    text-white
                                    cursor-pointer
                                "
                            >

                                <span>
                                    {loading ? "Sending ..." : "Send message ..."}
                                </span>

                            </button>

                        </form>

                    </div>

                </div>


                {/* =================================================
                    BOTTOM
                ================================================= */}

                <div className="
                    mt-auto
                    pt-16
                ">

                    <div className="
                        flex
                        items-center
                        justify-between
                        border-t
                        border-[#171717]/30
                        pt-4
                    ">

                        <span className="
                            font-accent
                            text-[9px]
                            font-black
                            uppercase
                            tracking-[0.08em]
                        ">
                            Creative studio
                        </span>

                        <span className="
                            font-accent
                            text-[9px]
                            font-black
                            uppercase
                            tracking-[0.08em]
                        ">
                            Based in Salzburg — Working worldwide
                        </span>

                    </div>

                </div>

            </div>

        </section>
    );
}