"use client";

import Image from "next/image";

const projects = [
    {
        id: 1,
        title: "Tesla in Blender",
        category: "University",
        year: 2024,
        image: "/images/projects/tesla.jpg",
    },
    {
        id: 2,
        title: "Mixbox",
        category: "University",
        year: 2024,
        image: "/images/projects/mixbox.jpg",
    },
    {
        id: 3,
        title: "Corrib",
        category: "Client",
        year: 2025,
        image: "/images/projects/corrib.jpg",
    },
    {
        id: 4,
        title: "Dom Služieb",
        category: "Client",
        year: 2025,
        image: "/images/projects/dom.jpg",
    },
    {
        id: 5,
        title: "Slovak.Me",
        category: "Lab",
        year: 2026,
        image: "/images/projects/slovakme.jpg",
    },
    {
        id: 6,
        title: "Mirai Cache",
        category: "Lab",
        year: 2026,
        image: "/images/projects/mirai.jpg",
    },
];

const layout = [
    { col: "col-span-7", height: "h-[720px]" },
    { col: "col-span-5", height: "h-[460px] mt-24" },

    { col: "col-span-5", height: "h-[460px]" },
    { col: "col-span-7", height: "h-[720px] mt-24" },

    { col: "col-span-7", height: "h-[720px]" },
    { col: "col-span-5", height: "h-[460px] mt-24" },
];
export default function AllProjects() {
    return(
        <>
            <section className="px-5 mb-10">
                <div className="flex justify-between">
                    <div className="flex gap-1 text-sm">
                        <div className="bg-black px-4 py-1 rounded text-white">All</div>
                        <div className="bg-gray-100 px-4 py-1 rounded">Client</div>
                        <div className="bg-gray-100 px-4 py-1 rounded">Lab</div>
                        <div className="bg-gray-100 px-4 py-1 rounded">University</div>
                    </div>
                    <div className="flex gap-1 text-sm">
                        <div className="bg-black px-4 py-1 rounded text-white">List</div>
                        <div className="bg-gray-100 px-4 py-1 rounded">Grid</div>
                    </div>
                </div>
                <section className="mt-16">

                    <div className="grid grid-cols-12 gap-10">

                        {projects.map((project, index) => {

                            const item = layout[index % layout.length];

                            return (
                                <article
                                    key={project.id}
                                    className={item.col}
                                >

                                    <div
                                        className={`relative w-full ${item.height} bg-[#111111] overflow-hidden group cursor-pointer`}
                                    >
                                       

                                        <div className="absolute inset-0 bg-black/0 duration-500 group-hover:bg-black/20" />
                                    </div>

                                    <div className="flex justify-between items-center mt-5">

                                        

                                    </div>

                                </article>
                            );

                        })}

                    </div>

                </section>
            </section>
        </>
    )
}