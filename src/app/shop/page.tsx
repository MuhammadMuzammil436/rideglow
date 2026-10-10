import type { Metadata } from "next";
import { ScrollProgress } from "@/components/site/scroll-progress";
import { TopBar } from "@/components/site/top-bar";
import { Navbar } from "@/components/site/navbar";
import { ShopGrid } from "@/components/site/shop-grid";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Shop All Bike Lights | RideGlow",
  description:
    "Front lights, rear lights and combo sets with delivery across Pakistan.",
};

export default function ShopPage() {
  return (
    <>
      <ScrollProgress />
      <TopBar />
      <Navbar />
      <main>
        <ShopGrid />
      </main>
      <Footer />
    </>
  );
}
