import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { FindCover } from "@/components/FindCover";
import { ProtectionPlanner } from "@/components/ProtectionPlanner";
import { About } from "@/components/About";
import { Products } from "@/components/Products";
import { ClaimsProcess } from "@/components/ClaimsProcess";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { MobileActions } from "@/components/MobileActions";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "@id": "https://maybaninsurance.com/#organization",
  "name": "Mayban Insurance",
  "url": "https://maybaninsurance.com",
  "telephone": "+254733669260",
  "email": "info@maybaninsurance.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ndovu Close, Ndovu Road, Karen",
    "addressLocality": "Nairobi",
    "addressCountry": "KE"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Kenya"
  }
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <FindCover />
        <ProtectionPlanner />
        <About />
        <Products />
        <ClaimsProcess />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <MobileActions />
      <WhatsAppButton />
    </>
  );
}
