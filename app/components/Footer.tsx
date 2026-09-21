import Image from "next/image"
import AnimatedText from "./IntroText"
import Title from "./Title"
export default function Footer() {
    return (
        <>
            <footer className="
                relative
                w-full
                bg-orange-300
                py-4
                px-5
                max-md:px-4
                max-md:py-5

            ">

                {/* DESCRIPTION */}
                <p className="
                    font-heading
                    leading-[1.2]
                    tracking-[-0.04em]
                    text-lg
                    w-[calc(var(--index)*27)]
                    max-md:w-full
                    max-md:max-w-[520px]
                    max-md:text-[18px]
                    max-md:leading-[1.12]
                ">
                    If you are interested in collaborating, please feel free to
                    reach out—I would be happy to discuss your ideas. You can call
                    or email me. My contact details are listed below, and I will
                    get back to you as soon as possible.
                </p>


                {/* CONNECT / SOCIAL */}
                <div className="
                    flex
                    justify-between
                    items-end
                    max-md:flex-col
                    max-md:items-start
                    max-md:gap-9
                ">

                    {/* CONNECT */}
                    <div className="
                        flex
                        flex-col
                        mt-10
                        max-md:mt-8
                    ">
                        <span className="
                            text-xs
                            font-accent
                            font-black
                            mb-5
                            max-md:mb-4
                        ">
                            ( CONNECT )
                        </span>

                        <a
                            href=""
                            className="
                                mb-2
                                text-lg
                                max-md:text-[17px]
                            "
                        >
                            +44 (0)20 3012312
                        </a>

                        <a
                            href=""
                            className="
                                text-lg
                                underline
                                max-md:text-[17px]
                                break-all
                            "
                        >
                            danylo.syzyi@gmail.com
                        </a>
                    </div>


                    {/* SOCIAL */}
                    <div className="
                        flex
                        flex-col
                        mt-10
                        max-md:mt-0
                    ">
                        <span className="
                            text-xs
                            font-accent
                            font-black
                            mb-5
                            max-md:mb-4
                        ">
                            ( SOCIAL )
                        </span>

                        <div className="
                            flex
                            gap-5
                            max-md:gap-4
                        ">
                            <a
                                href=""
                                className="
                                    font-body
                                    underline
                                    text-sm
                                "
                            >
                                Instagram
                            </a>

                            <a
                                href=""
                                className="
                                    font-body
                                    underline
                                    text-sm
                                "
                            >
                                Linkedln
                            </a>
                        </div>
                    </div>

                </div>


                {/* LOGO */}
                <div className="
                    mt-2
                    max-md:mt-12
                    overflow-hidden
                    hidden md:block
                ">
                    <h1 className="
                        font-heading
                        uppercase
                        font-bold
                        text-[calc(var(--index)*4.2)]
                        max-md:text-[13vw]
                        max-md:leading-[0.9]
                        max-md:tracking-[-0.06em]
                        whitespace-nowrap
                    ">
                        CrissCrossProduction
                    </h1>
                </div>

                <div className="
                    mt-5
                    overflow-hidden
                    md:hidden
                ">
                    <h1 className="
                        font-heading
                        uppercase
                        font-bold
                        text-[calc(var(--index)*3.8)]
                        max-md:leading-[0.9]
                        max-md:tracking-[-0.06em]
                        whitespace-nowrap
                    ">
                        <span className="block w-fit">
                            CrissCross
                        </span>

                        <span className="block w-fit">
                            Production
                        </span>
                    </h1>
                </div>


                {/* BOTTOM */}
                <div className="
                    flex
                    justify-between
                    items-center
                    max-md:flex-col
                    max-md:items-start
                    max-md:gap-5
                    mt-5
                    md:mt-8
                ">

                    {/* POLICIES */}
                    <div className="
                        flex
                        gap-5
                        max-md:gap-4
                    ">
                        <a
                            href=""
                            className="
                                font-body
                                text-sm
                                max-md:text-xs
                            "
                        >
                            Privacy Policy
                        </a>

                        <a
                            href=""
                            className="
                                font-body
                                text-sm
                                max-md:text-xs
                            "
                        >
                            Cookie Policy
                        </a>
                    </div>


                    {/* COPYRIGHT */}
                    <div className="
                        flex
                        max-md:w-full
                    ">
                        <span className="
                            font-body
                            text-xs
                            max-md:text-[9px]
                            max-md:leading-[1.2]
                            max-md:max-w-[280px]
                        ">
                            COPYRIGHT 2026 THE DANYLO SYZYI | ALL RIGHTS RESERVED
                        </span>
                    </div>

                </div>

            </footer>
        </>
    )
}