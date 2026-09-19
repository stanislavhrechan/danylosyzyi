import Image from "next/image"
import Link from "next/link"
import AnimatedText from "./IntroText"
import AnimatedButton from "./AnimatedButton"
export default function CommitMe() {
    return(
        <>
        <section className="px-5 md:px-6 py-10 pb-20 bg-[#171717] text-orange-300">

            <div className="flex flex-col md:flex-row gap-10 md:gap-15 md:mt-10">

                {/* TESTIMONIAL */}

                <div className="shrink-0 md:sticky top-20 self-start">
                    <div className="
                        text-white
                        md:w-[27vw]
                        md:h-[60vh]
                        overflow-hidden
                    ">
                        <span className="
                            text-sm
                            md:text-[10px]
                            tracking-[0.08em]
                            leading-none
                            uppercase
                            font-accent
                            font-black
                            text-orange-300
                        ">
                            ( REAL CLIENT STORY )
                        </span>

                        <p className="
                            mt-6
                            text-xs
                            md:text-[calc(var(--index)*0.664)]
                            leading-[1.25]
                            tracking-[-0.015em]
                            font-body
                            text-white/95
                            min-w-xs
                        ">
                            "We are very satisfied with Danylo’s motion design work. The videos were delivered quickly and with excellent quality, while fully meeting our expectations. Working with Danylo is easy and enjoyable, he brings fresh ideas and new perspectives to our creative process."
                        </p>

                        <div className="flex items-end gap-3 mt-7">
                            <div className="
                                shrink-0
                                rounded-full
                            ">
                               <img
                                    src="/commit/Valria_Mokr_1.jpg"
                                    className="rounded-full w-11
                                h-11"
                                    alt=""
                                />
                            </div>

                            <div className="leading-[1.1]">
                                <h4 className="
                                    text-[16px]
                                    font-medium
                                    text-white/95
                                ">
                                    Valeriia Mokrytska
                                </h4>

                                <span className="
                                    block
                                    mt-1
                                    text-[13px]
                                    tracking-[0.03em]
                                    uppercase
                                    text-white/85
                                    font-accent
                                ">
                                    Product Manager, <a href="https://outexua.com/"><span className="underline">OUTEX</span></a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="flex flex-col gap-4 md:gap-8 flex-1 min-w-0">

                    <AnimatedText className="
                        text-[calc(var(--index)*2.8)]
                        md:text-[calc(var(--index)*3.2)]
                        font-medium
                        leading-[1.05]
                        md:leading-[0.94]
                        tracking-[-0.055em]
                        font-heading
                    ">
                        <span className="text-orange-300 underline">
                            Let's connect.
                        </span>
                        <br />
                    </AnimatedText>

                    <AnimatedText className="
                        text-[calc(var(--index)*2.8)]
                        md:text-[calc(var(--index)*2.9)]
                        font-medium
                        leading-[1.05]
                        md:leading-[0.94]
                        tracking-[-0.055em]
                        font-heading
                    ">
                        <br />
                        If you're looking for a creative
                        partner that combines
                        craftsmanship, speed and
                        impact, let's make something
                        remarkable.
                    </AnimatedText>

                    <AnimatedText className="
                        max-w-[850px]
                        text-[calc(var(--index)*2.8)]
                        md:text-[calc(var(--index)*2.9)]
                        font-medium
                        leading-[0.98]
                        md:leading-[0.94]
                        tracking-[-0.05em]
                        font-heading
                        text-orange-300
                    ">
                        Built for brands that want to
                        <span className="text-orange-300">
                            {" "}lead.
                        </span>
                    </AnimatedText>

                    <AnimatedButton
                        href="/contact"
                        className="
                            group
                            flex
                            py-2
                            w-fit
                            gap-5
                            items-center
                            rounded-full
                            bg-white
                            px-4
                            font-accent
                            text-black
                            overflow-hidden
                        "
                    >
                        <span className="
                            w-[85px]
                            overflow-hidden
                            whitespace-nowrap
                            text-sm
                            md:text-[calc(var(--index)*0.62)]
                            tracking-[0.04em]
                        ">
                            <p className="inline-block animate-marquee-btn-c font-bold">
                                CONNECT&nbsp;CONNECT&nbsp;CONNECT&nbsp;CONNECT&nbsp;
                            </p>
                        </span>

                        <span
                            className="
                                flex
                                h-[27px]
                                shrink-0
                                items-center
                                justify-center
                                text-[27px]
                                leading-none
                                transition-transform
                                duration-300
                                group-hover:rotate-90
                            "
                        >
                            +
                        </span>
                    </AnimatedButton>

                </div>
            </div>
        </section>

        </>
    )
}