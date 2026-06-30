/**
 * Central registry of site photography.
 *
 * Every entry points to a real, ultra-realistic photograph in /public/images/
 * (.webp). Placeholders of the exact dimensions below ship in the repo so the
 * site builds and renders; replace each file in place with the final Higgsfield
 * photo using the SAME filename and dimensions — no code changes needed.
 *
 * Style for the real photos: ultra-realistic photography, real Bradenton
 * LeakScan technician, branded navy/blue/white/cyan uniform and van, natural
 * lighting, real tools, no text overlays, no illustration/vector/3D/emoji.
 */
export type SiteImage = { src: string; alt: string; width: number; height: number };

export const images = {
  heroThermal: {
    src: "/images/hero-technician-thermal.webp",
    alt: "Bradenton LeakScan technician inspecting a Florida home wall with a thermal imaging camera",
    width: 1600,
    height: 1200,
  },
  waterMoisture: {
    src: "/images/water-leak-moisture-meter.webp",
    alt: "Technician checking a wall and baseboard with a moisture meter for a water leak in Bradenton",
    width: 1200,
    height: 900,
  },
  slabAcoustic: {
    src: "/images/slab-leak-acoustic.webp",
    alt: "Technician using an acoustic listening device on a tile floor to locate a slab leak",
    width: 1200,
    height: 900,
  },
  emergencyVan: {
    src: "/images/emergency-van-arrival.webp",
    alt: "Bradenton LeakScan service van arriving at a Florida home for emergency leak detection",
    width: 1200,
    height: 900,
  },
  hiddenThermal: {
    src: "/images/hidden-leak-thermal-wall.webp",
    alt: "Technician scanning an interior wall with a thermal imaging camera to find a hidden leak",
    width: 1200,
    height: 900,
  },
  undergroundLocator: {
    src: "/images/underground-locator-yard.webp",
    alt: "Technician locating an underground water line in a Florida yard with pipe locator equipment",
    width: 1200,
    height: 900,
  },
  pipeUnderSink: {
    src: "/images/pipe-leak-under-sink.webp",
    alt: "Technician inspecting exposed pipes under a sink with leak detection tools",
    width: 1200,
    height: 900,
  },
  ceilingStain: {
    src: "/images/ceiling-leak-inspection.webp",
    alt: "Technician inspecting a ceiling water stain with a moisture meter and flashlight",
    width: 1200,
    height: 900,
  },
  wallDrywall: {
    src: "/images/wall-leak-drywall.webp",
    alt: "Technician checking wet drywall and bubbling paint with a moisture meter",
    width: 1200,
    height: 900,
  },
  poolDyeTest: {
    src: "/images/pool-leak-dye-test.webp",
    alt: "Technician performing a dye test beside a residential pool to find a leak",
    width: 1200,
    height: 900,
  },
  commercialMechanical: {
    src: "/images/commercial-mechanical-room.webp",
    alt: "Technician inspecting a commercial building mechanical room with leak detection equipment",
    width: 1200,
    height: 900,
  },
  sewerCamera: {
    src: "/images/sewer-camera-line.webp",
    alt: "Technician running an HD sewer camera through a drain line cleanout in Bradenton",
    width: 1200,
    height: 900,
  },
  locationVan: {
    src: "/images/location-van-neighborhood.webp",
    alt: "Bradenton LeakScan service van in a Manatee County residential neighborhood",
    width: 1600,
    height: 1066,
  },
} as const satisfies Record<string, SiteImage>;

export type ImageKey = keyof typeof images;
