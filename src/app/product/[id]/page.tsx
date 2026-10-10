import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { ScrollProgress } from "@/components/site/scroll-progress";
import { TopBar } from "@/components/site/top-bar";
import { Navbar } from "@/components/site/navbar";
import { ProductDetail } from "@/components/site/product-detail";
import { ProductCard } from "@/components/site/product-card";
import { Footer } from "@/components/site/footer";
import { products } from "@/data/products";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) return {};
  return { title: product.name, description: product.desc };
}

async function ProductContent({ params }: Props) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) notFound();

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <>
      <ProductDetail product={product} />

      {related.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 pb-20 pt-6">
          <p className="font-mono text-[10px] tracking-widest text-primary">
            KEEP BROWSING
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
            You might also like
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}

export default function ProductPage({ params }: Props) {
  return (
    <>
      <ScrollProgress />
      <TopBar />
      <Navbar />
      <main>
        <Suspense
          fallback={
            <div className="mx-auto h-[600px] max-w-7xl animate-pulse px-4 py-10" />
          }
        >
          <ProductContent params={params} />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
