import Link from "next/link";

export default function About() {
    return(
        <>
           <section className="relative min-h-screen overflow-hidden bg-[#C8FF00] px-[34px] py-13 text-[#171717]">
                <div className="flex justify-between items-end mt-5">

                    {/* <p className="font-body text-sm mt-5">
                        Halo! We are <span className="font-bold">CrissCrossProduction</span>. We are marketing agency, mostly focusing on 3D Motion Design.
                    </p> */}

                    <span className="text-xs font-accent font-black flex w-full justify-end">( ABOUT ME AND MY STUDIO )</span>
                </div>
                <div className="ml-[25%]  mt-10">
                    <h2 className="
                        max-w-[1160px]
                        text-5xl
                        font-medium
                        leading-[1.05]
                        tracking-[-0.045em] font-heading
                    ">
                        Trusted by many companies, not because we chase quality, but because we craft stories with intention and using DNA of brands so everybody will feel it. From social media promotion and photography to high-end 3D animation of <span className="underline">your product</span>, every detail is carefully crafted to create impact, <span className="underline">from the first concept to global rollout</span>.
                    </h2>
                    <div className="mt-8 flex items-center gap-3">
                        <Link
                            href="#contact"
                            className="
                                group
                                flex
                                h-[44px]
                                items-center
                                justify-between
                                rounded-full
                                bg-[#171717]
                                px-[24px]
                                text-md
                                font-accent
                                font-black
                                text-white
                                transition-transform
                                duration-300
                            "
                        >
                            <span>CONNECT</span>

                            <span className="
                                ml-5
                                flex
                                h-[27px]
                                w-[27px]
                                items-center
                                justify-center
                                text-[27px]
                                font-light
                                leading-none
                                transition-transform
                                duration-300
                                group-hover:rotate-90
                            ">
                                +
                            </span>
                        </Link>

                        <Link
                            href="#culture"
                            className="
                                flex
                                h-[44px]
                                items-center
                                justify-between
                                rounded-full
                                border
                                border-[#171717]
                                px-[24px]
                                text-md
                                font-accent
                                font-black
                                transition-all
                                duration-300
                                hover:bg-[#171717]
                                hover:text-white
                            "
                        >
                            <span>OUR CULTURE</span>
                        </Link>
                    </div>
                </div>
                <div className="flex justify-between items-end mt-10">
                    <div className="
                        w-[35%]
                    ">
                        <p className="
                            text-3xl
                            leading-[0.94]
                            tracking-[-0.04em]
                            font-heading
                        ">
                            In addition: AI creative tools to improve and accelerate manual and human-controlled workflow to achieve any desired clients result.
                        </p>
                    </div>
                    <div className="
                        relative
                        h-[220px]
                        w-[220px]

                        bg-[#171717]

                        flex
                        items-center
                        justify-center
                    ">
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="absolute inset-0 h-full w-full object-cover"
                        >
                            <source src="/videos/project_idealist.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className="">
                        <Link
                            href="/projects"
                            className="
                                flex
                                h-[44px]

                                items-center
                                justify-center

                                rounded-full

                                bg-[#171717]
                                px-[25px]
                                text-sm
                                font-accent
                                font-black
                                text-white
                            "
                        >
                            EXPLORE MADE BY CCP <span className="ml-2 text-xl rotate-90">➬</span>
                        </Link>
                    </div>
                </div>
            </section>
           
        </>
    )
}