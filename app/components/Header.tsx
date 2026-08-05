"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
interface NavLinkProps {
    href: string;
    children: React.ReactNode;
}
export default function Header() {
    const pathname = usePathname();
   const NavLink = ({ href, children }: NavLinkProps) => {
        const isActive = pathname === href;

    return (
        <a
            href={href}
            className={`
                relative inline-block
                after:absolute after:left-0 after:top-1/2 
                after:h-[1px] after:bg-current
                after:transition-all after:duration-300
                ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
            `}
        >
            {children}
        </a>
    );
};
    return (
        <>
        <header>
            <div className="fixed top-0 left-0 w-full z-50 grid grid-cols-[1fr_3fr_1fr] px-3 mt-5 items-center invert mix-blend-difference ">
                <div className="cursor-pointer">
                    <a href="/">
                        <img src="./images/logo.png" alt="" className="w-16 hover:scale-110 transition-scale duration-250"/>
                    </a>
                </div>
                <div className="flex gap-40">
                    <div className="uppercase font-body text-xs"><span>Open (10-6PM)</span></div>
                    <div className="uppercase font-body text-xs"><span>Salzburg,Austria</span></div>
                </div>
                <div className="">
                    <nav className="flex gap-2 uppercase font-body text-xs ">
                        <NavLink href="/">Home</NavLink>
                        <span>/</span>
                        <NavLink href="/works">Works</NavLink>
                        <span>/</span>
                        <NavLink href="/about">About</NavLink>
                        <span>/</span>
                        <NavLink href="/contact">Contact</NavLink>
                    </nav>
                </div>
            </div>
        </header>
        </>
    )
}