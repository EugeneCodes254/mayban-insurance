import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FindCover } from "@/components/FindCover";
import { About } from "@/components/About";
import { Products } from "@/components/Products";
import { ClaimsProcess } from "@/components/ClaimsProcess";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <FindCover />
        <About />
        <Products />
        <ClaimsProcess />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
