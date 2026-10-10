import type { Metadata } from "next";
import { TopBar } from "@/components/site/top-bar";
import { Navbar } from "@/components/site/navbar";
import { ContactContent } from "@/components/site/contact-content";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <ContactContent />
      </main>
      <Footer />
    </>
  );
}
