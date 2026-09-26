"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Footer from "../components/Footer";
import ContactSection from "../components/ContactMe";

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
        <section
            ref={pageRef}
            className="relative hidden md:block"
        >
           
           <div className="h-[84vh]" />

            <section className="relative z-10">
                <Footer />
            </section>

            <section
                ref={contactRef}
                className="absolute top-0 left-0 z-40 w-full"
            >
                <div className="w-full h-full bg-black">
                    <ContactSection />
                </div>
            </section>
        </section>
        <section
            className="relative md:hidden block"
        >
            <ContactSection />
            <Footer />
        </section>
      </>
    );
}