export const SERVICE_LABELS: Record<string, string> = {
  "truck-tire-repair": "Truck tire repair",
  "semi-truck-tire-repair": "Semi truck tire repair",
  "mobile-truck-tire-repair": "Mobile truck tire repair",
  "truck-roadside-assistance": "Truck roadside assistance",
  "emergency-tire-repair": "Emergency tire repair",
  "24-hour-tire-repair": "24 hour tire repair",
  "roadside-tire-repair": "Roadside tire repair",
  "mobile-tire-repair": "Mobile tire repair",
  "tire-repair": "Tire repair",
  "flat-tire-repair": "Flat tire repair",
  "tire-puncture-repair": "Tire puncture repair",
  "tire-leak-repair": "Tire leak repair",
};

const CITY_SUFFIXES = [
  "calgary",
  "winnipeg",
  "edmonton",
  "ottawa",
  "montreal",
  "laval",
  "hamilton",
  "st-catharines",
  "markham",
  "north-york",
  "london-ontario",
  "surrey-bc",
  "mississauga",
  "toronto",
  "halifax",
  "regina",
  "vancouver",
  "vaughan",
  "etobicoke",
  "barrie",
  "woodbridge",
  "thornhill",
  "abbotsford",
];

export function serviceLabelFromSlug(slug: string) {
  let base = slug;
  for (const city of CITY_SUFFIXES) {
    if (base.endsWith(`-${city}`)) {
      base = base.slice(0, -(city.length + 1));
      break;
    }
  }
  return SERVICE_LABELS[base] ?? base.replace(/-/g, " ");
}
