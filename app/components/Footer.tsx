import Image from "next/image"
export default function Footer() {
    return (
        <>
        <footer className="relative w-full z-20 bg-[#C8FF00] py-9 px-5">
            <p className="font-body text-xs w-[calc(var(--index)*27)] ">If you are interested in collaborating, please feel free to reach out—I would be happy to discuss your ideas. You can call or email me. My contact details are listed below, and I will get back to you as soon as possible.</p>
            <div className="flex justify-between items-end">
                <div className="flex flex-col  mt-20">
                    <span className="text-xs font-accent font-black mb-5">( CONNECT )</span>
                    <a href="" className="mb-2 text-lg">+44 (0)20 3012312</a>
                    <a href="" className="text-lg">danylo.syzyi@gmail.com</a>
                </div>
                <div className="flex flex-col mt-20">
                    <span className="text-xs font-accent font-black mb-5">( SOCIAL)</span>
                    <div className="flex gap-5">
                        <a href="" className="font-body underline text-sm">Instagram</a>
                        <a href="" className="font-body underline text-sm">Linkedln</a>
                    </div>
                </div>
            </div>
            <div className="">
                <h1 className="font-heading uppercase font-bold text-[calc(var(--index)*4.2)] ">CrissCrossProduction</h1>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex gap-5 ">
                    <a href="" className="font-body text-sm">Privacy Policy</a>
                    <a href="" className="font-body text-sm">Cookie Policy</a>
                </div>
                <div className="flex ">
                    <span className="font-body text-xs">COPYRIGHT 2026 THE DANYLO SYZYI | ALL RIGHTS RESERVED</span>
                </div>
            </div>
            
        </footer>
        </>
    )
}