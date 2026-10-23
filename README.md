# Canada Tire Repair

Next.js 16 programmatic SEO site for **canadatirerepair.com**, generated from `scripts/pseo-tire-canada.xlsx` (source: `pSEO - Canada Tire Repair.xlsx`).

## Stack

- Next.js App Router, standalone Docker output
- 288 pages: 12 national services × 23 metros (+ national hub pages)
- SEO validation via `npm run validate:seo`

## Setup

```bash
npm install
cp .env.example .env.local   # set phone + NEXT_PUBLIC_SITE_URL
npm run dev
```

## Regenerate pages from Excel

```bash
npm run generate:pages
```

Place the workbook at `scripts/pseo-tire-canada.xlsx` (or replace that file with an updated export).

## Production

```bash
npm run build
docker compose up --build
```
