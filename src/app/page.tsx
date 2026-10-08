import { ScrollProgress } from "@/components/site/scroll-progress";
import { TopBar } from "@/components/site/top-bar";
import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { Categories } from "@/components/site/categories";
import { BestSellers } from "@/components/site/best-sellers";
import { DualBanner } from "@/components/site/dual-banner";
import { WhyRideGlow } from "@/components/site/why-rideglow";
import { UrbanCta } from "@/components/site/urban-cta";
import { Testimonials } from "@/components/site/testimonials";
import { Faq } from "@/components/site/faq";
import { Newsletter } from "@/components/site/newsletter";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <BestSellers />
        <DualBanner />
        <WhyRideGlow />
        <UrbanCta />
        <Testimonials />
        <Faq />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
