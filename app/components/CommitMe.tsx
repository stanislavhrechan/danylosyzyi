import Image from "next/image"
export default function CommitMe() {
    return(
        <>
            <section className="px-5 py-10">
                <span className="text-xs font-accent font-black">( LISTEN PEOPLE ABOUT STUDIO )</span>
                <div className="flex justify-between items-center mt-5">
                    <div className="">
                        <p className="font-body text-sm w-[calc(var(--index)*27)]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966</p>
                    </div>
                    <div className="">
                        <button className="font-body bg-[#242424] px-4 py-2 rounded-full text-white text-sm">
                            GO BUILD YOUR PROJECT
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-15 mt-10">
                    <div className="space-y-5">
                        <div className="relative h-[450px] flex items-center justify-center w-full">
                            <Image
                                src="/images/commit/idealist.png"
                                alt=""
                                fill
                                className=""
                                priority
                            />
                        </div>
                        <div className="space-y-3">
                            <p className="text-xs font-body ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966</p>
                            <span className="font-black font-accent">Maxim Goshak<br/><span className="font-body text-xs font-medium">\ Founder Mitsuri </span></span>
                        </div>
                    </div>
                    <div className="space-y-5">
                        <div className="h-[450px] flex items-center justify-center">
                            <Image
                                src="/images/commit/outex.png"
                                alt=""
                                width={450}
                                height={450}
                                className="object-cover"
                                priority
                            />
                        </div>
                        <div className="space-y-3">
                            <p className="text-xs font-body ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966</p>
                            <span className="font-black font-accent">Lera Da <br/><span className="font-body text-xs font-medium">\ SSM specialist </span></span>
                        </div>
                    </div>
                    <div className="space-y-5">
                        <div className="relative  h-[450px] flex items-center justify-center w-full">
                            <Image
                                src="/images/commit/university_new.png"
                                alt=""
                                fill
                                className=""
                                priority
                            />
                        </div>
                        <div className="space-y-3">
                            <p className="text-xs font-body ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966</p>
                            <span className="font-black font-accent">Oleg Borodach <br/><span className="font-body text-xs font-medium">\ Prostoj paren s rajona</span></span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}