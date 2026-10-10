export type CategoryKey = "front" | "rear" | "combo";

export type Product = {
  id: string;
  name: string;
  desc: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  badge?: { label: string; tone: "primary" | "accent" | "muted" };
  spec: string;
  image: string;
  category: CategoryKey;
  bestSeller?: boolean;
  gallery?: string[]; // <- add this
};

export const categories: { key: "all" | CategoryKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "front", label: "Front Lights" },
  { key: "rear", label: "Rear Lights" },
  { key: "combo", label: "Light Combos" },
];

export const products: Product[] = [
  {
    id: "front-beam",
    name: "RideGlow Front Beam",
    desc: "High-lumen optical lens with wide road illumination and rechargeable battery.",
    price: 3499,
    oldPrice: 4299,
    rating: 4.8,
    reviews: 128,
    badge: { label: "FLASH SALE", tone: "accent" },
    spec: "800 LM",
    image: "/products/front-beam.jpg",
    category: "front",
    bestSeller: true,
  },
  {
    id: "rear-signal",
    name: "RideGlow Rear Signal",
    desc: "Compact aerodynamic taillight with outstanding visible safety modes.",
    price: 1999,
    rating: 4.6,
    reviews: 94,
    badge: { label: "BEAM AUDIO", tone: "muted" },
    spec: "120 LM",
    image: "/products/rear-signal.jpg",
    category: "rear",
    bestSeller: true,
  },
  {
    id: "night-rider-set",
    name: "RideGlow Night Rider Set",
    desc: "Front & rear synchronized dual combo pack with verified USB-C cables.",
    price: 4999,
    oldPrice: 5999,
    rating: 4.9,
    reviews: 210,
    badge: { label: "BEST VALUE", tone: "primary" },
    spec: "COMBO",
    image: "/products/night-rider-set.jpg",
    category: "combo",
    bestSeller: true,
  },
  {
    id: "ultra-beam",
    name: "RideGlow Ultra Beam",
    desc: "Premium CNC aluminum housing, 1800 lumens heavy-duty trail performance.",
    price: 6299,
    rating: 4.7,
    reviews: 76,
    badge: { label: "PRO SERIES", tone: "muted" },
    spec: "1800 LM",
    image: "/products/ultra-beam.jpg",
    category: "front",
    bestSeller: true,
  },
  {
    id: "front-lite",
    name: "RideGlow Front Lite",
    desc: "Lightweight 400 lumen commuter headlight with quick-release bracket.",
    price: 2299,
    rating: 4.5,
    reviews: 61,
    spec: "400 LM",
    image: "/products/front-lite.jpg",
    category: "front",
  },
  {
    id: "rear-flash",
    name: "RideGlow Rear Flash",
    desc: "Ultra-bright strobe taillight that clips onto seat posts and backpacks.",
    price: 1499,
    oldPrice: 1799,
    rating: 4.4,
    reviews: 52,
    badge: { label: "SALE", tone: "accent" },
    spec: "80 LM",
    image: "/products/rear-flash.jpg",
    category: "rear",
  },
];