import { site, services, serviceAreas, faqs, type Faq } from "@/lib/site";
import { locations } from "@/lib/locations";
import { landingServices } from "@/lib/landingServices";

export const SITE_URL = "https://bradentonleakscan.com";

const ORG_ID = `${SITE_URL}/#organization`;
const BUSINESS_ID = `${SITE_URL}/#business`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: site.address.street,
  addressLocality: site.address.city,
  addressRegion: site.address.state,
  postalCode: site.address.zip,
  addressCountry: "US",
};

/** Organization schema — corporate identity, reused via @id. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: site.name,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/images/og.svg`,
    email: site.email,
    telephone: site.phone,
    foundingDate: String(site.foundingYear),
    address: postalAddress,
    areaServed: serviceAreas.map((name) => ({ "@type": "City", name })),
    sameAs: [
      site.social.facebook,
      site.social.youtube,
      site.social.instagram,
      site.social.pinterest,
      site.social.x,
    ],
  };
}

/** WebSite schema with SearchAction. */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: site.name,
    description: site.description,
    publisher: { "@id": ORG_ID },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/** LocalBusiness / PlumbingService schema. */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "PlumbingService",
    "@id": BUSINESS_ID,
    name: site.name,
    description: site.description,
    url: SITE_URL,
    telephone: site.phone,
    email: site.email,
    image: `${SITE_URL}/images/og.svg`,
    logo: `${SITE_URL}/logo.png`,
    priceRange: "$$",
    parentOrganization: { "@id": ORG_ID },
    address: postalAddress,
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    areaServed: serviceAreas.map((name) => ({ "@type": "City", name })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "16:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Leak Detection Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.summary,
          url: `${SITE_URL}/services/${s.slug}`,
        },
      })),
    },
  };
}

export function serviceSchema(slug: string) {
  const s = services.find((x) => x.slug === slug);
  if (!s) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    serviceType: s.title,
    description: s.summary,
    url: `${SITE_URL}/services/${s.slug}`,
    provider: { "@id": BUSINESS_ID, "@type": "PlumbingService", name: site.name },
    areaServed: serviceAreas.map((name) => ({ "@type": "City", name })),
  };
}

/** Service schema for a flat-URL landing service (e.g. /water-leak-detection-bradenton-fl). */
export function landingServiceSchema(slug: string) {
  const s = landingServices.find((x) => x.slug === slug);
  if (!s) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    serviceType: s.navLabel,
    description: s.quickAnswer,
    url: `${SITE_URL}/${s.slug}`,
    provider: { "@id": BUSINESS_ID, "@type": "PlumbingService", name: site.name },
    areaServed: serviceAreas.map((name) => ({ "@type": "City", name })),
  };
}

/** Service schema scoped to a specific location (used on location pages). */
export function locationServiceSchema(slug: string) {
  const loc = locations.find((l) => l.slug === slug);
  if (!loc) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Leak Detection in ${loc.city}, ${loc.state}`,
    serviceType: "Leak Detection",
    description: loc.quickAnswer,
    url: `${SITE_URL}/locations/${loc.slug}`,
    provider: { "@id": BUSINESS_ID, "@type": "PlumbingService", name: site.name },
    areaServed: { "@type": "City", name: `${loc.city}, ${loc.state}` },
  };
}

export function faqSchema(items: Faq[] = faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export function articleSchema(args: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: args.title,
    description: args.description,
    datePublished: args.datePublished,
    url: `${SITE_URL}/blog/${args.slug}`,
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: `${SITE_URL}/blog/${args.slug}`,
  };
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
