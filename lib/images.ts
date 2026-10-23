export type ImageKey =
  | "hero-home"
  | "hero-service"
  | "hero-local"
  | "emergency"
  | "night"
  | "storefront"
  | "commercial"
  | "commercial-replacement"
  | "replacement"
  | "board-up"
  | "commercial-door"
  | "emergency-commercial-door"
  | "door"
  | "door-glass-replacement"
  | "door-glass-repair"
  | "storefront-window"
  | "aluminum-door";

type Photo = { src: string; alt: string; caption: string; credit: string };

const photos: Record<ImageKey, Photo> = {
  "hero-home": {
    src: "/images/tire-hero-home.webp",
    alt: "Mechanic installing a car tire and alloy wheel with an impact wrench",
    caption: "Highway flats and blowouts—we dispatch to shoulders, ramps, and rest stops.",
    credit: "Pexels",
  },
  "hero-service": {
    src: "/images/tire-hero-service.webp",
    alt: "Mechanic crouching with an impact wrench changing a car tire on the wheel",
    caption: "On-site tire work for cars, SUVs, and light trucks.",
    credit: "Pexels",
  },
  "hero-local": {
    src: "/images/tire-hero-local.webp",
    alt: "Mechanic in blue overalls inspecting a commercial semi-truck wheel and tire",
    caption: "Metro crews know local highways, depots, and parking rules.",
    credit: "Pexels",
  },
  emergency: {
    src: "/images/tire-emergency.webp",
    alt: "Man crouched on pavement changing a jacked-up car wheel with a lug wrench",
    caption: "Emergency tire repair—cone the lane and stabilize before you roll.",
    credit: "Pexels",
  },
  night: {
    src: "/images/tire-night.webp",
    alt: "Tall stacks of black tires with chalk size markings in a tire warehouse",
    caption: "24-hour tire repair for night shifts and winter storms.",
    credit: "Pexels",
  },
  storefront: {
    src: "/images/tire-storefront.webp",
    alt: "Close-up of dual Goodyear commercial semi-truck tires and polished chrome rims",
    caption: "Truck tire repair—steer, drive, and trailer positions.",
    credit: "Pexels",
  },
  commercial: {
    src: "/images/tire-commercial.webp",
    alt: "Close-up of a heavy-duty semi-truck chassis frame and dually rear tires",
    caption: "Semi truck tires—correct ply, load range, and torque specs.",
    credit: "Pexels",
  },
  "commercial-replacement": {
    src: "/images/tire-commercial-replacement.webp",
    alt: "Close-up of heavy-duty commercial truck wheels and deep-lug tires",
    caption: "Fleet programs—document size, axle, and DOT notes on every call.",
    credit: "Pexels",
  },
  replacement: {
    src: "/images/tire-replacement.webp",
    alt: "Mechanic in blue coveralls mounting a car tire on a tire-changing machine",
    caption: "Repair or spare swap when the casing is still safe.",
    credit: "Pexels",
  },
  "board-up": {
    src: "/images/tire-board-up.webp",
    alt: "Technician kneeling roadside repairing the front tire and wheel of a pickup truck",
    caption: "Truck roadside assistance—staging safe work zones on active roads.",
    credit: "Pexels",
  },
  "commercial-door": {
    src: "/images/tire-commercial-door.webp",
    alt: "Roadside flat tire inspection and pressure check on a detached wheel",
    caption: "Mobile tire repair—we come to your lot, dock, or driveway.",
    credit: "Pexels",
  },
  "emergency-commercial-door": {
    src: "/images/tire-emergency-commercial-door.webp",
    alt: "Close-up of stacked heavy-duty tires showing deep tread patterns",
    caption: "Emergency truck tire help when a steer or drive goes down.",
    credit: "Pexels",
  },
  door: {
    src: "/images/tire-door.webp",
    alt: "Rear pickup truck wheel and rugged all-terrain tire",
    caption: "Flat tire repair—stop driving on zero pressure to save the sidewall.",
    credit: "Unsplash",
  },
  "door-glass-replacement": {
    src: "/images/tire-door-glass-replacement.webp",
    alt: "Detailed close-up of car tire tread grooves and sipes",
    caption: "Puncture repair—plug or patch only when injury is in the tread belt.",
    credit: "Pexels",
  },
  "door-glass-repair": {
    src: "/images/tire-door-glass-repair.webp",
    alt: "Close-up of car tire tread and sidewall resting on asphalt",
    caption: "Slow leak repair—valves, beads, and rim corrosion checks.",
    credit: "Pexels",
  },
  "storefront-window": {
    src: "/images/tire-storefront-window.webp",
    alt: "Roadside spare tire change on the street next to a van",
    caption: "Roadside tire repair—note shoulder width and traffic speed.",
    credit: "Pexels",
  },
  "aluminum-door": {
    src: "/images/tire-aluminum-door.webp",
    alt: "Close-up of a BFGoodrich rugged truck tire and polished wheel on gravel",
    caption: "Mobile truck and equipment tires—share tire size and axle position.",
    credit: "Pexels",
  },
};

/** One distinct image per national service — no two services share a file. */
const NATIONAL_SLUG_IMAGE: Record<string, ImageKey> = {
  "truck-tire-repair": "storefront",
  "semi-truck-tire-repair": "commercial",
  "mobile-truck-tire-repair": "aluminum-door",
  "truck-roadside-assistance": "board-up",
  "emergency-tire-repair": "emergency",
  "24-hour-tire-repair": "night",
  "roadside-tire-repair": "storefront-window",
  "mobile-tire-repair": "commercial-door",
  "tire-repair": "replacement",
  "flat-tire-repair": "door",
  "tire-puncture-repair": "door-glass-replacement",
  "tire-leak-repair": "door-glass-repair",
};

const CITY_ROTATION: ImageKey[] = ["replacement", "door", "commercial-door", "storefront-window", "emergency"];

export function imageForServiceSlug(slug: string): ImageKey {
  const national = NATIONAL_SLUG_IMAGE[slug];
  if (national) return national;
  if (slug.startsWith("tire-repair-")) {
    let hash = 0;
    for (let i = 0; i < slug.length; i++) hash = (hash + slug.charCodeAt(i)) % CITY_ROTATION.length;
    return CITY_ROTATION[hash]!;
  }
  if (slug.includes("emergency") || slug.includes("roadside") || slug.includes("24-hour")) return "emergency";
  return "hero-service";
}

export function getPhoto(key: ImageKey): Photo {
  return photos[key];
}

/** All national services use unique image keys (for SEO / QA scripts). */
export function nationalServiceImageKeys(): ImageKey[] {
  return Object.values(NATIONAL_SLUG_IMAGE);
}
