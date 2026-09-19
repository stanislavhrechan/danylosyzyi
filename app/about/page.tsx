import Info from "../components/AboutPage/Info";
import Footer from "../components/Footer";
import CommitMe from "../components/CommitMe";
export default function About() {
  return (
    <>
    <section className="relative z-30 pb-[calc(var(--index)*42.5)] md:pb-99">
        <Info/>
        <CommitMe></CommitMe>
    </section>
    <section className="fixed -bottom-10 left-0 w-full">
      <Footer/>
    </section>
    </>
  );
}
