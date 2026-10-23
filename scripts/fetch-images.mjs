/**
 * Downloads visually-verified tire/wheel/tire-repair stock photos → WebP (Pexels + Unsplash).
 * Run: npm run fetch:images
 */
import { createHash } from "node:crypto";
import { mkdir, readdir, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const outDir = path.join(process.cwd(), "public/images");
const UA = "canadatirerepair-image-fetch/1.0";

/**
 * @typedef {{ label: string; crop?: { left: number; top: number; width: number; height: number } }} Base
 * @typedef {Base & { provider: "pexels"; id: number }} PexelsAsset
 * @typedef {Base & { provider: "unsplash"; id: string }} UnsplashAsset
 */

/**
 * Every photo ID below has been visually verified to show tires, wheels, or active tire repair.
 * @type {Record<string, PexelsAsset | UnsplashAsset>}
 */
const assets = {
  "hero-home": {
    provider: "pexels",
    id: 3806249,
    label: "Mechanic installing a car tire and alloy wheel on a lifted vehicle with an impact wrench",
  },
  "hero-service": {
    provider: "pexels",
    id: 17600886,
    label: "Mechanic crouching with an impact wrench changing a car tire and wheel",
  },
  "hero-local": {
    provider: "pexels",
    id: 6720537,
    label: "Mechanic in blue overalls inspecting a commercial semi-truck wheel and tire",
  },
  emergency: {
    provider: "pexels",
    id: 8815990,
    label: "Man crouched on pavement changing a jacked-up car wheel with a cross lug wrench",
  },
  night: {
    provider: "pexels",
    id: 11790285,
    label: "Tall stacks of black tires with chalk size markings in a tire warehouse",
  },
  storefront: {
    provider: "pexels",
    id: 29206473,
    label: "Close-up of dual Goodyear commercial semi-truck tires and polished chrome rims",
  },
  commercial: {
    provider: "pexels",
    id: 7019607,
    label: "Close-up of a heavy-duty semi-truck chassis frame and dually rear tires",
  },
  "commercial-replacement": {
    provider: "pexels",
    id: 5578887,
    label: "Close-up of heavy-duty commercial truck wheels and deep-lug tires",
  },
  replacement: {
    provider: "pexels",
    id: 6870311,
    label: "Mechanic in blue coveralls mounting a car tire on a tire-changing machine",
  },
  "board-up": {
    provider: "pexels",
    id: 34261459,
    label: "Technician kneeling roadside repairing the front tire and wheel of a blue pickup truck",
  },
  "commercial-door": {
    provider: "pexels",
    id: 8231243,
    label: "Roadside flat tire inspection and pressure check on a detached wheel",
  },
  "emergency-commercial-door": {
    provider: "pexels",
    id: 9576099,
    label: "Close-up of stacked heavy-duty tires showing deep tread patterns",
  },
  door: {
    provider: "unsplash",
    id: "1665345957500-fa0296cc8fa7",
    label: "Rear pickup truck wheel and rugged all-terrain tire on pavement",
  },
  "door-glass-replacement": {
    provider: "pexels",
    id: 34357290,
    label: "Detailed close-up of car tire tread grooves, blocks, and sipes",
  },
  "door-glass-repair": {
    provider: "pexels",
    id: 8886305,
    label: "Close-up of car tire tread and sidewall resting on asphalt",
  },
  "storefront-window": {
    provider: "pexels",
    id: 8231101,
    label: "Roadside spare tire change on the street next to a van",
  },
  "aluminum-door": {
    provider: "pexels",
    id: 37534895,
    label: "Close-up of a BFGoodrich rugged truck tire and polished wheel on gravel",
  },
};

function sourceUrl(asset) {
  if (asset.provider === "pexels") {
    return `https://images.pexels.com/photos/${asset.id}/pexels-photo-${asset.id}.jpeg?auto=compress&cs=tinysrgb&w=1600`;
  }
  return `https://images.unsplash.com/photo-${asset.id}?auto=format&fit=crop&w=1600&q=85`;
}

function sourceLink(asset) {
  if (asset.provider === "pexels") {
    return `https://www.pexels.com/photo/${asset.id}/`;
  }
  return `https://unsplash.com/photos/${asset.id}`;
}

await mkdir(outDir, { recursive: true });

for (const file of await readdir(outDir)) {
  if (file.endsWith(".svg")) await unlink(path.join(outDir, file));
}

const entries = Object.entries(assets);
const results = await Promise.all(
  entries.map(async ([name, asset]) => {
    const url = sourceUrl(asset);
    const res = await fetch(url, { headers: { "User-Agent": UA }, signal: AbortSignal.timeout(25000) });
    if (!res.ok) throw new Error(`${name}: HTTP ${res.status} from ${asset.provider} ${asset.id}`);
    let pipeline = sharp(Buffer.from(await res.arrayBuffer()));
    if (asset.crop) {
      const meta = await pipeline.metadata();
      const w = meta.width ?? 1600;
      const h = meta.height ?? 1200;
      pipeline = pipeline.extract({
        left: Math.min(asset.crop.left, Math.max(0, w - asset.crop.width - 1)),
        top: Math.min(asset.crop.top, Math.max(0, h - asset.crop.height - 1)),
        width: Math.min(asset.crop.width, w),
        height: Math.min(asset.crop.height, h),
      });
    }
    const webp = await pipeline.resize(1400, null, { withoutEnlargement: true }).webp({ quality: 86 }).toBuffer();
    const hash = createHash("sha256").update(webp).digest("hex");
    await writeFile(path.join(outDir, `${name}.webp`), webp);
    await writeFile(path.join(outDir, `tire-${name}.webp`), webp);
    console.log(`wrote tire-${name}.webp ← ${asset.provider} ${asset.id}`);
    return { name, hash };
  }),
);

const hashes = new Map();
for (const { name, hash } of results) {
  if (hashes.has(hash)) throw new Error(`${name} duplicates bytes of ${hashes.get(hash)}`);
  hashes.set(hash, name);
}

const attribution = `# Images

Visually-verified free stock photos of **tires, wheels, and tire repair** ([Pexels](https://www.pexels.com) & [Unsplash](https://unsplash.com)).
Refresh: \`npm run fetch:images\`

| File | Source |
|------|--------|
${entries
  .map(([k, v]) => `| tire-${k}.webp | [${v.provider} ${v.id}](${sourceLink(v)}) — ${v.label} |`)
  .join("\n")}
`;

await writeFile(path.join(outDir, "ATTRIBUTION.md"), attribution);
console.log(`done — ${hashes.size} verified tire photos`);
