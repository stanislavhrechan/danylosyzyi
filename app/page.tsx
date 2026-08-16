import Image from "next/image";
import Hero from "./components/Hero";
import CommitMe from "./components/CommitMe";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <section className="h-screen relative">
        <Hero />
    </section>
    <section className="relative bg-white z-30">
      <About/>
      {/* <div className="overflow-hidden bg-[#F2EFE8] py-4">
        <div className="whitespace-nowrap animate-marquee">
          <span className="text-7xl font-heading font-black  text-black uppercase">
            We create bold digital experiences through Photo / Video, 3D Motion,
            Brand Identity and Social Media. ✦ Let’s work together. ✦ 
          </span>
          <span className="text-7xl font-heading font-black  text-black uppercase">
             We create bold digital experiences through Photo / Video, 3D Motion,
            Brand Identity and Social Media. ✦ Let’s work together. ✦
          </span>
        </div>
      </div> */}
      <Projects/>
    </section>
    </>
  );
}
