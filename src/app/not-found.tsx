import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-4 text-center">
      <div>
        <p className="font-mono text-xs tracking-widest text-primary">
          ERROR 404
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight">
          Lost in the dark?
        </h1>
        <p className="mt-3 text-muted-foreground">
          We couldn't find that page.
        </p>
        <Button asChild className="mt-6 rounded-full">
          <Link href="/shop">Back to the shop</Link>
        </Button>
      </div>
    </main>
  );
}
