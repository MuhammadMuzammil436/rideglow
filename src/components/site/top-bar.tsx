export function TopBar() {
  return (
    <div className="border-b border-border bg-card">
      <div className="mx-auto flex h-9 max-w-7xl items-center justify-center gap-3 px-4 font-mono text-[10px] tracking-wider text-primary sm:text-xs">
        <span>PREMIUM BIKE LIGHTS.</span>
        <span className="hidden sm:inline">DELIVERY ACROSS PAKISTAN.</span>
        <span className="hidden text-muted-foreground md:inline">|</span>
        <a
          href="tel:+920000000000"
          className="hidden hover:underline md:inline"
        >
          +92-300-0000000
        </a>
      </div>
    </div>
  );
}
