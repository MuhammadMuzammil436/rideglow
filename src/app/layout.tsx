import { Providers } from "@/components/providers";
import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import { CartDrawer } from "@/components/site/cart-drawer";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-label",
});

export const metadata: Metadata = {
  title: "RideGlow | Premium Bike Lights Pakistan",
  description: "Own the night. Ride with confidence.",
  icons: {
    icon: "/site-logo/favicon.png",
    apple: "/site-logo/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geist.variable} ${mono.variable} font-sans antialiased`}
      >
        <Providers>
          {children}
          <CartDrawer />
        </Providers>
      </body>
    </html>
  );
}
