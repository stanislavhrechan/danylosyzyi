import Image from "next/image"
export default function Projects() {
    return(
        <>
            <section className="my-10 pt-10">
                <div className="px-5 flex justify-between items-end">
                    <div className="flex flex-col w-[30%]">
                        <span className="text-xs font-accent font-black uppercase">
                            ( featured projects )
                        </span>

                        <p className="font-body text-sm mt-5">
                            Each project begins with a different question and ends in the same place — something that couldn't look any other way.
                        </p>
                    </div>
                    <div className="">
                        <h2 className="font-heading text-7xl  font-semibold uppercase">selected work</h2>
                    </div>
                </div>
                <div className="bg-[#111111] my-5">
                     <div className="">
                        <div className="sticky top-0 h-[100vh] text-white">
                            <div className="h-full bg-neutral-900 overflow-hidden">
                                
                            </div>
                        </div>

                        <div className="sticky top-0 h-[100vh] text-white">
                            <div className="h-full bg-neutral-800 overflow-hidden">
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}