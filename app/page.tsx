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
      <Projects/>
    </section>
    </>
  );
}
