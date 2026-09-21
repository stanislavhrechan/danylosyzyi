import Link from "next/link";
import AnimatedText from "./IntroText";
import AnimatedButton from "./AnimatedButton";
export default function About() {
    return(
        <>
          <section
            className="
                relative
                min-h-screen
                overflow-hidden
                bg-orange-300
                px-5
                py-8
                md:px-6
                md:py-13
                text-[#171717]
                z-30
            "
        >
            <div
                className="
                    hidden
                    md:flex
                    w-full
                    items-end
                    justify-between
                "
            >
                <span className="text-[10px] md:text-xs font-accent font-black">
                    ( ABOUT ME AND MY STUDIO )
                </span>

                <span className="text-[10px] md:text-xs font-accent font-black">
                    [01]
                </span>
            </div>

            <div
                className="
                    md:hidden
                    flex
                    flex-col
                    w-full
                    items-start
                    justify-between
                    gap-2
                "
            >
                <span className="text-sm md:text-xs font-accent font-black">
                    [01]
                </span>
                <span className="text-sm md:text-xs font-accent font-black">
                    ( ABOUT ME AND MY STUDIO )
                </span>
            </div>

            <div
                className="
                    mt-8
                    ml-0
                    md:ml-[25%]
                "
            >
                <AnimatedText
                    className="
                        max-w-[1160px]
                        md:max-w-[calc(var(--index)*50)]
                        leading-[0.98]
                        tracking-[-0.045em]
                        text-[calc(var(--index)*2.6)]
                        md:text-[calc(var(--index)*1.9)]
                        md:leading-[1.05]
                        font-medium
                        font-heading
                    "
                >
                    Trusted by many companies, not because we chase quality, but because
                    we craft stories with intention and using DNA of brands so everybody
                    will feel it. From social media promotion and photography to high-end
                    3D animation of <span className="underline">{" "}your product</span>
                    , every detail is carefully crafted to create impact,
                    <span className="underline">
                        {" "}from the first concept to global rollout
                    </span>
                    .
                </AnimatedText>

                {/* BUTTONS */}
                <div
                    className="
                        mt-7
                        flex
                        flex-wrap
                        items-center
                        gap-3
                        md:mt-[calc(var(--index)*1.5)]
                    "
                >
                    <AnimatedButton
                        href="/contact"
                        className="
                            group
                            flex
                            h-[42px]
                            w-fit
                            items-center
                            
                            gap-4
                            overflow-hidden
                            rounded-full
                            bg-[#171717]
                            px-4
                            font-accent
                            font-black
                            text-white
                            md:h-[44px]
                            md:text-[calc(var(--index)*0.62)]
                            md:gap-5
                        "
                    >
                        <span className="w-[75px] overflow-hidden whitespace-nowrap md:w-[85px]">
                            <span className="inline-block animate-marquee-btn-c">
                                CONNECT&nbsp;CONNECT&nbsp;CONNECT&nbsp;CONNECT&nbsp;
                            </span>
                        </span>

                        <span
                            className="
                                flex
                                h-[27px]
                                shrink-0
                                items-center
                                justify-center
                                text-[27px]
                                font-light
                                leading-none
                                transition-transform
                                duration-300
                                group-hover:rotate-90
                            "
                        >
                            +
                        </span>
                    </AnimatedButton>

                    <AnimatedButton
                        href="/about"
                        delay={120}
                        className="
                            flex
                            h-[42px]
                            w-fit
                            items-center
                            justify-between
                            rounded-full
                            border
                            border-[#171717]
                            px-5
                            text-sm
                            font-accent
                            font-black
                            transition-all
                            duration-300
                            hover:bg-[#171717]
                            hover:text-white
                            md:h-[44px]
                            md:px-[24px]
                            md:text-[calc(var(--index)*0.62)]
                        "
                    >
                        <span className="w-[75px] overflow-hidden whitespace-nowrap md:w-[85px]">
                            <span className="inline-block animate-marquee-btn-c">
                                ABOUT&nbsp;ABOUT&nbsp;ABOUT&nbsp;ABOUT&nbsp;
                            </span>
                        </span>
                    </AnimatedButton>
                </div>
            </div>

            <div
                className="
                    mt-8
                    md:mt-12
                    flex
                    flex-col
                    gap-8
                    md:mt-[calc(var(--index)*2)]
                    md:flex-row
                    md:items-end
                    md:justify-between
                    md:gap-0
                "
            >
                <div
                    className="
                        w-full
                        md:w-[35%]
                    "
                >
                    <AnimatedText
                        className="
                            text-[calc(var(--index)*1.7)]
                            leading-[0.94]
                            tracking-[-0.04em]
                            font-heading
                            md:text-[calc(var(--index)*1.05)]
                        "
                    >
                        • In addition: AI creative tools to improve and accelerate manual
                        with human-controlled workflow to achieve any desired clients
                        result.
                    </AnimatedText>
                </div>

                <div
                    className="
                        relative
                        h-[180px]
                        w-[180px]
                        shrink-0
                        bg-[#171717]
                        md:h-[30vh]
                        md:w-[15vw]
                    "
                >
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="
                            absolute
                            inset-0
                            h-full
                            w-full
                            object-cover
                        "
                    >
                        <source
                            src="/videos/project_idealist.mp4"
                            type="video/mp4"
                        />
                    </video>
                </div>

                <div
                    className="
                        w-full
                        md:w-auto
                    "
                >
                    <Link
                        href="/projects"
                        className="
                            flex
                            h-[44px]
                            w-full
                            items-center
                            justify-center
                            rounded-full
                            bg-[#171717]
                            px-5
                            text-xs
                            font-accent
                            font-black
                            text-white
                            md:w-auto
                            md:px-[25px]
                            md:text-[calc(var(--index)*0.62)]
                        "
                    >
                        EXPLORE MADE BY CCP
                        <span className="ml-2 text-xl rotate-90">
                            ➬
                        </span>
                    </Link>
                </div>
            </div>
        </section>
           
        </>
    )
}