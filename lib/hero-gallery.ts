import type { ImageKey } from "./images";
import { imageForServiceSlug } from "./images";
import { PILLAR_SLUG, serviceBaseSlug } from "./pages";

export type HeroTile = { key: ImageKey; href: string; label: string };

export const HERO_HOME_TILES: HeroTile[] = [
  { key: "emergency", href: "/emergency-tire-repair", label: "Emergency" },
  { key: "door", href: "/flat-tire-repair", label: "Flat tire" },
  { key: "storefront", href: "/truck-tire-repair", label: "Truck tires" },
  { key: "commercial-door", href: "/mobile-tire-repair", label: "Mobile repair" },
];

const PAGE_TILE_PRESETS: Record<string, HeroTile[]> = {
  "truck-tire-repair": [
    { key: "commercial", href: "/semi-truck-tire-repair", label: "Semi tires" },
    { key: "board-up", href: "/truck-roadside-assistance", label: "Roadside" },
    { key: "commercial-replacement", href: "/mobile-truck-tire-repair", label: "Mobile truck" },
  ],
  "semi-truck-tire-repair": [
    { key: "storefront", href: "/truck-tire-repair", label: "Fleet truck" },
    { key: "emergency", href: "/emergency-tire-repair", label: "Emergency" },
    { key: "night", href: "/24-hour-tire-repair", label: "24 hour" },
  ],
  "mobile-truck-tire-repair": [
    { key: "commercial-door", href: "/mobile-tire-repair", label: "Mobile car" },
    { key: "storefront", href: "/truck-tire-repair", label: "Truck repair" },
    { key: "board-up", href: "/truck-roadside-assistance", label: "Assistance" },
  ],
  "truck-roadside-assistance": [
    { key: "storefront-window", href: "/roadside-tire-repair", label: "Roadside" },
    { key: "emergency", href: "/emergency-tire-repair", label: "Emergency" },
    { key: "storefront", href: "/truck-tire-repair", label: "Truck tires" },
  ],
  "emergency-tire-repair": [
    { key: "night", href: "/24-hour-tire-repair", label: "24 hour" },
    { key: "storefront-window", href: "/roadside-tire-repair", label: "Roadside" },
    { key: "door", href: "/flat-tire-repair", label: "Flat tire" },
  ],
  "24-hour-tire-repair": [
    { key: "emergency", href: "/emergency-tire-repair", label: "Emergency" },
    { key: "storefront-window", href: "/roadside-tire-repair", label: "Roadside" },
    { key: "commercial-door", href: "/mobile-tire-repair", label: "Mobile" },
  ],
  "roadside-tire-repair": [
    { key: "board-up", href: "/truck-roadside-assistance", label: "Truck roadside" },
    { key: "emergency", href: "/emergency-tire-repair", label: "Emergency" },
    { key: "commercial-door", href: "/mobile-tire-repair", label: "Mobile" },
  ],
  "mobile-tire-repair": [
    { key: "door", href: "/flat-tire-repair", label: "Flat tire" },
    { key: "door-glass-replacement", href: "/tire-puncture-repair", label: "Puncture" },
    { key: "storefront-window", href: "/roadside-tire-repair", label: "Roadside" },
  ],
  "tire-repair": [
    { key: "door", href: "/flat-tire-repair", label: "Flat tire" },
    { key: "door-glass-replacement", href: "/tire-puncture-repair", label: "Puncture" },
    { key: "door-glass-repair", href: "/tire-leak-repair", label: "Slow leak" },
  ],
  "flat-tire-repair": [
    { key: "replacement", href: `/${PILLAR_SLUG}`, label: "Tire repair" },
    { key: "door-glass-replacement", href: "/tire-puncture-repair", label: "Puncture" },
    { key: "commercial-door", href: "/mobile-tire-repair", label: "Mobile" },
  ],
  "tire-puncture-repair": [
    { key: "door", href: "/flat-tire-repair", label: "Flat tire" },
    { key: "door-glass-repair", href: "/tire-leak-repair", label: "Leak repair" },
    { key: "replacement", href: `/${PILLAR_SLUG}`, label: "General repair" },
  ],
  "tire-leak-repair": [
    { key: "door-glass-replacement", href: "/tire-puncture-repair", label: "Puncture" },
    { key: "door", href: "/flat-tire-repair", label: "Flat tire" },
    { key: "commercial-door", href: "/mobile-tire-repair", label: "Mobile" },
  ],
};

const CITY_TILES: HeroTile[] = [
  { key: "emergency", href: "/emergency-tire-repair", label: "Emergency" },
  { key: "commercial-door", href: "/mobile-tire-repair", label: "Mobile" },
  { key: "storefront-window", href: "/roadside-tire-repair", label: "Roadside" },
];

export function heroTilesFor(slug: string | undefined, variant: "home" | "page"): HeroTile[] {
  if (variant === "home") return HERO_HOME_TILES;
  if (!slug) return HERO_HOME_TILES.slice(0, 3);

  const base = serviceBaseSlug(slug);
  if (PAGE_TILE_PRESETS[base]) return PAGE_TILE_PRESETS[base]!;

  if (slug.startsWith("tire-repair-")) return CITY_TILES;

  const main = imageForServiceSlug(slug);
  return [
    { key: main, href: `/${slug}`, label: "This service" },
    ...HERO_HOME_TILES.filter((t) => t.key !== main).slice(0, 2),
  ];
}

export function heroMainImageKey(slug: string | undefined, variant: "home" | "page", fallback: ImageKey): ImageKey {
  if (variant === "home") return "hero-home";
  if (!slug) return fallback;
  if (slug.startsWith("tire-repair-")) return "hero-local";
  return imageForServiceSlug(slug);
}
