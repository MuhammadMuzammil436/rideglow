import Image from "next/image";
import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="M1 Lights home"
      className={`relative block h-10 w-[170px] shrink-0 overflow-hidden ${className}`}
    >
      <Image
        src="/site-logo/header.png"
        alt="M1 Lights"
        fill
        priority
        sizes="250px"
        className="origin-center scale-[1.6] object-cover"
      />
    </Link>
  );
}
