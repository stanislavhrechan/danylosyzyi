export default function About() {
    return(
        <>
            <section className="px-5 my-10 pt-10">
                <div className="flex justify-between items-end">
                    <div className="">
                        <h2 className="font-heading text-5xl  font-semibold uppercase">We are CrissCrossProduction.<br/> We are marketing agency,<br/>mostly focusing on <span>3D</span> Motion Design.</h2>
                    </div>
                    <div className="">
                        <span className="text-xs font-accent font-black flex w-full justify-end">( ABOUT ME AND MY STUDIO )</span>
                    </div>
                </div>
                <div className="min-h-[65vh] flex mt-40 justify-center px-5">
                    <div className="flex gap-5 max-w-7xl w-full justify-center">
                        <div className="bg-[#111111] w-[270px] h-[350px]"></div>

                        <div className="text-sm space-y-4 w-[35%] font-body">
                            <p>
                                Trusted by many companies, not because we chase quality, but because we craft stories with intention and using DNA of brands so everybody will feel it. From social media promotion and photography to high-end 3D animation of your product, every detail is carefully crafted to create impact, from the first concept to global rollout.
                            </p>
                            <p>
                                In addition: AI creative tools to improve and accelerate manual and human-controlled workflow to achieve any desired clients result.
                            </p>
                            <button className="mt-23 text-lg underline cursor-pointer">
                                Get to know us
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}