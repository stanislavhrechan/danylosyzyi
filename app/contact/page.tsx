import Footer from "../components/Footer";
import ContactSection from "../components/ContactMe";
export default function Contact() {
  return (
    <>
    <section className="relative z-30 pb-[calc(var(--index)*42.5)] md:pb-99">
        <ContactSection></ContactSection>
    </section>
    <section className="fixed -bottom-10 left-0 w-full">
      <Footer/>
    </section>
    </>
  );
}
