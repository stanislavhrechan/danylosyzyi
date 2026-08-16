"use client";

import Image from "next/image";

const projects = [
    {
        id: 1,
        position: "left",
    },
    {
        id: 2,
        type: "video",
        position: "center",
    },
    {
        id: 3,
        type: "image",
        position: "top-right",
    },
    {
        id: 4,
        type: "image",
        src: "/images/portfolio/photo_1.jpg",
        position: "right",
    },
    {
        id: 5,
        position: "bottom-left",
    },
    {
        id: 6,
        position: "bottom-right",
    },
];

const positions = {
    left: `
        left-[10%]
        top-[250px]
        w-[285px]
        h-[210px]
    `,

    center: `
        left-[28%]
        top-[565px]
        w-[320px]
        h-[450px]
    `,

    "top-right": `
        right-[28%]
        top-[65px]
        w-[385px]
        h-[285px]
    `,

    right: `
        right-[0%]
        top-[390px]
        w-[340px]
        h-[525px]
    `,

    "bottom-left": `
        left-[0%]
        top-[850px]
        w-[330px]
        h-[530px]
    `,

    "bottom-right": `
        right-[20%]
        top-[1120px]
        w-[250px]
        h-[250px]
    `,
};
export default function AllProjects() {
    return(
        <>
            <section className="relative">
                <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                    <img
                        src="/images/logo.svg"
                        alt=""
                        className="w-63 hover:scale-110 transition-transform duration-250 z-30"
                    />
                </div>
            </section>
            <section className="relative w-full px-5">

            {/* PROJECTS AREA */}
            <div className="relative w-full min-h-[200vh] z-50">

                {projects.map((project) => (
                    <article
                        key={project.id}
                        className={`
                            absolute
                            ${positions[project.position]}
                            group
                            cursor-pointer
                        `}
                    >

                        {/* IMAGE / VIDEO */}
                        <div
                            className="
                                relative
                                w-full
                                h-full
                                overflow-hidden
                                rounded-[8px]
                                bg-[#212121]
                            "
                        >
                            {project.type === "video" ? (
                                <video
                                    src={project.src}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            ) : (
                                <Image
                                    src={project.src}
                                    alt=""
                                    fill
                                    className="object-cover"
                                />
                            )}

                            {/* HOVER */}
                            <div
                                className="
                                    absolute
                                    inset-0
                                    bg-black/0
                                    transition-all
                                    duration-500
                                    group-hover:bg-black/20
                                "
                            />

                        </div>

                        {/* INFO */}
                        <div
                            className="
                                flex
                                justify-between
                                items-start
                                mt-4
                                text-xs
                            "
                        >
                            <div>
                                <p className="font-medium">
                                    {project.title}
                                </p>

                                <p className="opacity-50">
                                    {project.category}
                                </p>
                            </div>

                            <span className="opacity-50">
                                {project.year}
                            </span>
                        </div>

                    </article>
                ))}

            </div>

        </section>
        </>
    )
}