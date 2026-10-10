import type { Metadata } from "next";
import { TopBar } from "@/components/site/top-bar";
import { Navbar } from "@/components/site/navbar";
import { CheckoutForm } from "@/components/site/checkout-form";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Checkout | RideGlow",
};

export default function CheckoutPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <CheckoutForm />
      </main>
      <Footer />
    </>
  );
}
