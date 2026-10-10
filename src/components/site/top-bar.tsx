import { CITY, WHATSAPP_DISPLAY, WHATSAPP_NUMBER } from "@/lib/config";

export function TopBar() {
  return (
    <div className="border-b border-border bg-card">
      <div className="mx-auto flex h-9 max-w-7xl items-center justify-center gap-3 px-4 font-mono text-[10px] tracking-wider text-primary sm:text-xs">
        <span>PREMIUM BIKE LIGHTS.</span>
        <span className="hidden sm:inline">
          DELIVERY IN {CITY.toUpperCase()}.
        </span>
        <span className="hidden text-muted-foreground md:inline">|</span>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noreferrer"
          className="hidden hover:underline md:inline"
        >
          WhatsApp {WHATSAPP_DISPLAY}
        </a>
      </div>
    </div>
  );
}
