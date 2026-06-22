/** Central registry of site imagery with descriptive, SEO-friendly alt text. */
export type SiteImage = { src: string; alt: string; width: number; height: number };

export const images = {
  technician: {
    src: "/images/leak-detection-technician.svg",
    alt: "Bradenton Leak Scan technician performing non-invasive leak detection",
    width: 800,
    height: 600,
  },
  thermal: {
    src: "/images/thermal-imaging-inspection.svg",
    alt: "Thermal imaging inspection revealing a hidden water leak behind a wall",
    width: 800,
    height: 600,
  },
  moisture: {
    src: "/images/moisture-meter-inspection.svg",
    alt: "Moisture meter inspection mapping water intrusion in a Bradenton home",
    width: 800,
    height: 600,
  },
  waterStain: {
    src: "/images/water-stain-inspection.svg",
    alt: "Technician inspecting a ceiling water stain from a hidden pipe leak",
    width: 800,
    height: 600,
  },
  poolTesting: {
    src: "/images/pool-leak-testing.svg",
    alt: "Pool leak detection dye and pressure testing at a Bradenton pool",
    width: 800,
    height: 600,
  },
  undergroundPipe: {
    src: "/images/underground-pipe-inspection.svg",
    alt: "Underground pipe inspection locating a buried water line leak",
    width: 800,
    height: 600,
  },
  serviceVehicle: {
    src: "/images/service-vehicle.svg",
    alt: "Bradenton Leak Scan service vehicle ready for same-day leak detection",
    width: 800,
    height: 600,
  },
  commercial: {
    src: "/images/commercial-inspection.svg",
    alt: "Commercial leak detection inspection at a Manatee County business",
    width: 800,
    height: 600,
  },
  residential: {
    src: "/images/residential-inspection.svg",
    alt: "Residential leak detection inspection at a Bradenton, FL home",
    width: 800,
    height: 600,
  },
} as const satisfies Record<string, SiteImage>;

export type ImageKey = keyof typeof images;
