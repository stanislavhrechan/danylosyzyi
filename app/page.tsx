"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";


import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import CommitMe from "./components/CommitMe";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
   const pageRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(contactRef.current, {
                yPercent: -50,
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
    <section className="md:h-screen relative">
        <Hero />
    </section>
    <section className="relative bg-white z-30">
      <About/>
      <Projects/>
    </section>
    <section
          ref={pageRef}
          className="relative"
      >
          
          <div className="h-[74vh]" />

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
    </>
  );
}
