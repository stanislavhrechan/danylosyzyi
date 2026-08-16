"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ParallaxImage from "./ParallaxGallery";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    video: "/videos/project_porshe.mp4",
  },
  {
    id: 2,
    video: "/videos/project_idealist.mp4",
  },
];

export default function Projects() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>(".project-section");

      sections.forEach((section, index) => {
        const video = section.querySelector("video");

        if (!video) return;

        gsap.set(video, {
          scaleX: 0.5,
          scaleY: 0.5,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        // 1. Сначала раскрываем ширину
        tl.to(video, {
          scaleX: 0.6,
          scaleY: 0.6,
          duration: 1.5,
          ease: "none",
        });

        // 2. Потом раскрываем высоту
        tl.to(video, {
          scaleX: 1,
          scaleY: 1,
          duration: 1.5,
          ease: "none",
        });

        // 3. После этого видео уже полностью раскрыто
        // и некоторое время просто остается fullscreen
        tl.to(video, {
          scaleX: 1,
          scaleY: 1,
          duration: 1.8,
          ease: "none",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef}>

      {projects.map((project, index) => (
        <div
          key={project.id}
          className="bg-[#181818] project-section relative h-[300vh]"
          style={{
            zIndex: index + 1,
          }}
        >
          <div className="sticky top-0 h-screen w-full overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover z-20"
            >
              <source
                src={project.video}
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      ))}
      <ParallaxImage/>
    </section>
  );
}