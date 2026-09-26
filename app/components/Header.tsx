"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const NavLink = ({ href, children }: NavLinkProps) => {
    const isActive = pathname === href;

    return (
      <Link
        href={href}
        onClick={() => setMenuOpen(false)}
        className={`
          relative inline-block
          after:absolute after:left-0 after:top-1/2
          after:h-[1px] after:bg-current
          after:transition-all after:duration-300
          ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
        `}
      >
        {children}
      </Link>
    );
  };

  return (
    <>
      {/* DESKTOP */}
      <header className="hidden md:block">
        <div className="fixed top-0 left-0 w-full z-50 grid grid-cols-[1fr_3fr_1fr] px-5 items-center  mix-blend-difference">
          <div className="cursor-pointer">
            <Link href="/">
              <img
                src="/images/logo_new.webp"
                alt="Logo"
                className="w-16"
              />
            </Link>
          </div>

          <div className="flex gap-40 invert mix-blend-difference">
            <div className="uppercase font-body text-[13px]">
              <span>Open (10-6PM)</span>
            </div>

            <div className="uppercase font-body text-[13px]">
              <span>Salzburg, Austria</span>
            </div>
          </div>

          <nav className="flex gap-2 uppercase font-body text-[13px] invert mix-blend-difference">
            <NavLink href="/">Home</NavLink>
            <span>/</span>
            <NavLink href="/about">About</NavLink>
            <span>/</span>
            <NavLink href="/contact">Contact</NavLink>
          </nav>
        </div>
      </header>

      {/* MOBILE */}
      <header className="block md:hidden ">
        <div className="fixed top-0 left-0 w-full z-[100] px-2">
          {/* TOP BAR */}
          <div className="relative z-[110] flex items-center justify-between">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              <img
                src="/images/logo_new.webp"
                alt="Logo"
                className="w-16"
              />
            </Link>

            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative flex h-10 w-10 items-center justify-center"
            >
              <span
                className={`
                  absolute h-[1px] w-7 bg-black
                  transition-all duration-500 ease-in-out
                  ${menuOpen ? "rotate-45" : "-translate-y-[5px]"}
                `}
              />

              <span
                className={`
                  absolute h-[1px] w-7 bg-black
                  transition-all duration-300 ease-in-out
                  ${menuOpen ? "opacity-0" : "opacity-100"}
                `}
              />

              <span
                className={`
                  absolute h-[1px] w-7 bg-black
                  transition-all duration-500 ease-in-out
                  ${menuOpen ? "-rotate-45" : "translate-y-[5px]"}
                `}
              />
            </button>
          </div>

            <div
            className={`
                fixed inset-0 z-[100]
                bg-[#F7F7F7]
                overflow-y-auto
                transition-all duration-700
                ease-[cubic-bezier(0.77,0,0.175,1)]
                ${
                menuOpen
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-full opacity-0 pointer-events-none"
                }
            `}
            >
            <div className="min-h-full px-4 pt-15 pb-10">

                {/* INFO */}
                <div className="space-y-5">

                {/* ABOUT */}
                <div
                    className={`
                    max-w-[320px]
                    transition-all duration-700 delay-100
                    ${
                        menuOpen
                        ? "translate-y-0 opacity-100"
                        : "-translate-y-8 opacity-0"
                    }
                    `}
                >
                    <span className="font-accent text-sm font-black uppercase tracking-wider">
                    Daniel Syzyi
                    </span>

                    <p className="font-body text-sm text-neutral-700 mt-2 leading-relaxed">
                    <span className="font-bold">
                        CrissCrossProduction
                    </span>{" "}
                    is my personal brand created for projects of any type
                    and any difficulty.
                    </p>
                </div>

                {/* WHAT I DO */}
                <div
                    className={`
                    max-w-[320px]
                    transition-all duration-700 delay-150
                    ${
                        menuOpen
                        ? "translate-y-0 opacity-100"
                        : "-translate-y-8 opacity-0"
                    }
                    `}
                >
                    <span className="font-accent text-sm font-black uppercase tracking-wider">
                    What I Do
                    </span>

                    <p className="font-body text-sm text-neutral-700 mt-2 leading-relaxed">
                    Not only do we create beautiful visual designs that
                    capture viewers' attention, but we also tailor our work
                    to each company's unique identity.
                    </p>
                </div>

                {/* SERVICES */}
                <div
                    className={`
                    max-w-[320px]
                    transition-all duration-700 delay-200
                    ${
                        menuOpen
                        ? "translate-y-0 opacity-100"
                        : "-translate-y-8 opacity-0"
                    }
                    `}
                >
                    <span className="font-accent text-sm font-black uppercase tracking-wider">
                    Services
                    </span>

                    <ul className="font-body text-sm text-neutral-900 mt-2 space-y-1 underline">
                    <li>Photo / Video Production</li>
                    <li>3D Motion Design</li>
                    <li>Brand Identity</li>
                    <li>Social Media</li>
                    </ul>
                </div>

                </div>

                <div className="bg-[#111111] rounded px-4 py-2 text-white mt-5 font-accent text-xl">• Links</div>

                {/* NAVIGATION */}
                <nav
                className={`
                    mt-5 flex flex-col
                     font-heading text-3xl
                    transition-all duration-700 delay-300
                    ${
                    menuOpen
                        ? "translate-y-0 opacity-100"
                        : "-translate-y-8 opacity-0"
                    }
                `}
                >
                <Link
                    href="/"
                    onClick={() => setMenuOpen(false)}
                    className="pb-3 flex gap-2 items-center"
                >
                    Home
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="size-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                    </svg>
                </Link>

                <Link
                    href="/about"
                    onClick={() => setMenuOpen(false)}
                    className="border-t border-black/20 py-3 flex gap-2 items-center"
                >
                    About
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="size-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                    </svg>
                </Link>

                <Link
                    href="/contact"
                    onClick={() => setMenuOpen(false)}
                    className="border-y border-black/20 py-3 flex gap-2 items-center"
                >
                    Contact
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="size-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                    </svg>
                </Link>
                </nav>
            </div>
            </div>
        </div>
      </header>
    </>
  );
}
