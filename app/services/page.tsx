import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld";
import { FaqSection } from "@/components/faq-section";
import { JsonLd } from "@/components/visuals";
import { getPhoto, imageForServiceSlug } from "@/lib/images";
import { NATIONAL_PAGES, PHONE_DISPLAY, PHONE_E164, SITE_NAME, absoluteUrl } from "@/lib/pages";
import { pageLinkLabel } from "@/lib/link-labels";
import { trimDescription, trimTitle } from "@/lib/seo-meta";

export const metadata: Metadata = {
  title: trimTitle(`Tire Repair Services Canada | ${SITE_NAME}`),
  description: trimDescription(
    `Mobile tire repair, flat tires, truck roadside assistance, and emergency puncture service across Canada. Pick a service below or call ${PHONE_DISPLAY}.`,
  ),
  alternates: { canonical: "/services" },
};

const servicesIntro =
  "Every national service page below covers one job type—mobile flats, puncture repair, semi truck tires, or 24-hour roadside. " +
  "Start with the closest match; if you have a steer tire issue and a slow leak, tell dispatch on the same call so we load the right gear. " +
  "Drivers, fleets, and owner-operators share one Canada-wide line—share your location, tire size, and whether you are on a highway shoulder.";

const indexFaqs = [
  {
    q: "Repair vs spare swap—which comes first?",
    a: "Safety first. If the casing is damaged or you are in traffic, we stabilize the vehicle and install your spare when possible, then repair or replace as appropriate.",
  },
  {
    q: "Can one visit cover truck and trailer tires?",
    a: "Often yes—tell dispatch how many axles are affected so we bring enough air and torque equipment.",
  },
  {
    q: "How do I book?",
    a: "Pick the closest service below, then call " + PHONE_DISPLAY + " with your location and photos of the tire.",
  },
];

const breadcrumbs = [
  { name: "Home", href: absoluteUrl() },
  { name: "Services", href: absoluteUrl("services") },
];

export default function ServicesPage() {
  const hero = getPhoto("hero-service");

  return (
    <main>
      <BreadcrumbJsonLd crumbs={breadcrumbs} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: indexFaqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        }}
      />

      <nav className="breadcrumb wrap" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden="true"> / </span>
        <span aria-current="page">Services</span>
      </nav>

      <header className="page-intro">
        <div className="wrap">
          <div className="inline-photo">
            <Image src={hero.src} alt={hero.alt} fill sizes="100vw" priority />
          </div>
          <p className="eyebrow">Services</p>
          <h1>Tire repair services in Canada</h1>
          <p className="lede">{servicesIntro}</p>
          <a className="btn btn-beacon" href={`tel:${PHONE_E164}`}>
            <span className="btn-label">Call</span>
            <span className="btn-value">{PHONE_DISPLAY}</span>
          </a>
        </div>
      </header>

      <div className="wrap">
        <h2 className="content-section">All national services</h2>
        <div className="service-list">
          {NATIONAL_PAGES.map((page) => {
            const key = imageForServiceSlug(page.slug);
            const img = getPhoto(key);
            return (
              <Link href={`/${page.slug}`} key={page.slug} className="service-row">
                <div className="service-row-thumb">
                  <Image src={img.src} alt="" fill sizes="120px" />
                </div>
                <div>
                  <h3>{pageLinkLabel(page)}</h3>
                  <p>{img.caption}</p>
                </div>
                <span className="service-row-arrow" aria-hidden="true">→</span>
              </Link>
            );
          })}
        </div>
        <FaqSection title="Services FAQ" items={indexFaqs} />
      </div>
    </main>
  );
}
