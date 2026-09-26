"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import Info from "../components/AboutPage/Info";
import Footer from "../components/Footer";
import CommitMe from "../components/CommitMe";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
    const pageRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(contactRef.current, {
                yPercent: -20,
                ease: "none",

                scrollTrigger: {
                    trigger: pageRef.current,

                    start: "top top",
                    end: "top+=50% top",

                    scrub: 1,
                },
            });
        }, pageRef);

        return () => ctx.revert();
    }, []);

    return (
      <>
        <Info/>
        <section
            ref={pageRef}
            className="relative hidden md:block"
        >
           
            <div className="h-[63vh]" />

            <section className="relative z-10">
                <Footer />
            </section>

            <section
                ref={contactRef}
                className="absolute top-0 left-0 z-20 w-full"
            >
                <div className="w-full h-full bg-black">
                    <CommitMe />
                </div>
            </section>
        </section>

        <section
            className="relative md:hidden block"
        >
            <CommitMe />
            <Footer />
        </section>
      </>
    );
}