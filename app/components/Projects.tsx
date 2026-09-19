"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ParallaxImage from "./ParallaxGallery";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "PORSHE",
    tags: "#3D #3D Animation #CGI #Art Direction #Cinema4D #Unreal Engine 5 #Blender #After Effects #Substance Painter #Lightning #Materials #Camera Movement #SFX #Pre Production #Post Production",
    video: "/videos/project_porshe_new.mp4",
    description: "PORSCHE CGI / Animation is my coursework for university made in 2026. There was no rules/restrictions set fot this project, so I decided to do something I've wanted to do for a long time: create a CGI about cars. Everything from art direction, content architecture, animations, lightning and material flow were fine tuned to help reach goals of the project.",

  },
  {
    id: 2,
    title: "IDEALIST",
    tags: "#Photo shooting #Commercial #Marketing #Social Media #Promotion #Content",
    video: "/videos/project_idealist_new.mp4",
    description: "Commercial photo shooting for Ukrainian Coffee house called 'Idealist' in the middle of Salzburg city. Content promotion in Social Media such as Instagramm posts and stories and Facebook.",

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
            className="
                project-section
                relative
                h-[300vh]
                bg-[#181818]
            "
            style={{
                zIndex: index + 1,
            }}
        >
            <div
                className="
                    sticky
                    top-0
                    h-screen
                    w-full
                    overflow-hidden
                "
            >
                {/* MARQUEE TITLE */}
                <div
                    className="
                        absolute
                        top-8
                        md:top-13
                        left-0
                        w-full
                        overflow-hidden
                        z-30
                    "
                >
                    <div className="flex w-max animate-marquee">

                        <div className="flex shrink-0">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <h3
                                    key={i}
                                    className="
                                        font-heading
                                        text-white
                                        uppercase
                                        font-bold
                                        text-[18vw]
                                        leading-[0.8]
                                        tracking-[-0.06em]
                                        mr-5

                                        md:text-[calc(var(--index)*4.2)]
                                        md:mr-10
                                    "
                                >
                                    {project.title}
                                </h3>
                            ))}
                        </div>

                        <div className="flex shrink-0 ">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <h3
                                    key={i}
                                    className="
                                        font-heading
                                        text-white
                                        uppercase
                                        font-bold
                                        text-[18vw]
                                        leading-[0.8]
                                        tracking-[-0.06em]
                                        mr-5
                                        
                                        md:text-[calc(var(--index)*4.2)]
                                        md:mr-10
                                    "
                                >
                                    {project.title}
                                </h3>
                            ))}
                        </div>

                    </div>
                </div>

                {/* VIDEO */}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="
                        absolute
                        inset-0
                        z-20
                        h-full
                        w-full
                        object-cover
                    "
                >
                    <source
                        src={project.video}
                        type="video/mp4"
                    />
                </video>

                {/* TAGS */}
                <p
                    className="
                        absolute
                        top-1/2
                        left-4
                        z-40
                        max-w-[130px]
                        -translate-y-1/2

                        text-[10px]
                        leading-[1.1]
                        text-white
                        uppercase
                        font-accent
                        font-bold
                        md:left-8
                        md:max-w-[calc(var(--index)*15)]
                        md:text-[calc(var(--index)*0.62)]
                        md:translate-y-0
                    "
                >
                    {project.tags}
                </p>

                {/* SEE PROJECT */}
                <p
                    className="
                        absolute
                        top-1/2
                        right-4
                        z-40
                        flex
                        -translate-y-1/2
                        items-center
                        gap-1

                        text-[10px]
                        text-right
                        text-white
                        uppercase
                        underline
                        font-accent
                        font-bold

                        md:right-8
                        md:text-[calc(var(--index)*0.62)]
                        md:translate-y-0
                        md:gap-2
                    "
                >
                    SEE PROJECT

                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="16px"
                            viewBox="0 -960 960 960"
                            width="20px"
                            fill="#ffffff"
                            className="md:h-[16px] md:w-[24px]"
                        >
                            <path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z" />
                        </svg>
                    </span>
                </p>

                {/* DESCRIPTION */}
                <p
                    className="
                        absolute
                        bottom-8
                        left-1/2
                        z-40
                        w-[calc(100%-32px)]
                        -translate-x-1/2

                        text-center
                        md:text-[calc(var(--index)*0.705)]
                        leading-[0.98]
                        tracking-[-0.04em]
                        text-white
                        font-heading

                        md:bottom-20
                        md:max-w-[calc(var(--index)*25)]
                        md:text-base
                    "
                >
                    {project.description}
                </p>
            </div>
        </div>

    ))}
    <ParallaxImage/>

</section>
  );
}