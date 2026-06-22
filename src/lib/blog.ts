export type BlogSection = { heading: string; paragraphs: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  readMinutes: number;
  category: string;
  /** 40–70 word featured-snippet answer near the top. */
  quickAnswer: string;
  sections: BlogSection[];
  relatedServices: string[]; // service slugs
};

export const posts: BlogPost[] = [
  {
    slug: "signs-of-a-slab-leak-in-bradenton",
    title: "7 Signs of a Slab Leak in Your Bradenton Home",
    excerpt:
      "Warm spots on the floor, a spiking water bill, the sound of running water — here's how to spot a slab leak early before it damages your foundation.",
    date: "2026-05-12",
    readMinutes: 6,
    category: "Slab Leaks",
    quickAnswer:
      "The most common signs of a slab leak in Bradenton are an unexplained water-bill spike, the sound of running water when everything is off, warm or damp spots on the floor, cracked tile or drywall, low water pressure, and a water meter that moves with no fixtures running. Any one warrants professional slab leak detection.",
    sections: [
      {
        heading: "Why slab leaks are common in Bradenton",
        paragraphs: [
          "Bradenton and Manatee County are full of slab-on-grade homes built on sandy, shifting soil. Combined with hard water and decades-old copper plumbing, that makes slab leaks one of the most frequent problems local homeowners face.",
          "Because the leaking pipe is sealed beneath concrete, the warning signs are indirect — which is exactly why knowing them matters.",
        ],
      },
      {
        heading: "The 7 warning signs",
        paragraphs: [
          "1. A sudden, unexplained jump in your water bill. 2. The sound of running water when every fixture is off. 3. Warm or damp spots on the floor, especially on tile. 4. Cracks appearing in tile, baseboards, or drywall. 5. Low water pressure throughout the house. 6. A water meter that keeps moving with nothing running. 7. A musty smell or visible mold from moisture under the slab.",
          "If you notice even one of these, it's worth scheduling slab leak detection before the damage spreads to your foundation.",
        ],
      },
      {
        heading: "What to do next",
        paragraphs: [
          "Shut off your main if water is actively pooling, then call a leak detection specialist. Non-invasive detection pinpoints the leak to within inches so the repair is a small, targeted opening rather than guesswork demolition.",
        ],
      },
    ],
    relatedServices: ["slab-leak-detection", "water-line-leak-detection"],
  },
  {
    slug: "is-my-pool-leaking-or-evaporating",
    title: "Is My Pool Leaking or Just Evaporating? (Bradenton Bucket Test)",
    excerpt:
      "Florida pools always lose some water. Here's the simple bucket test to tell normal evaporation from a real leak — and when to call for pool leak detection.",
    date: "2026-04-28",
    readMinutes: 5,
    category: "Pool Leaks",
    quickAnswer:
      "To tell if your Bradenton pool is leaking or evaporating, run a bucket test: float a bucket of pool water on a step, mark the water levels inside and out, and wait 24 hours. If the pool drops noticeably more than the bucket, you have a leak. Normal Florida evaporation is about a quarter-inch per day.",
    sections: [
      {
        heading: "How much water loss is normal?",
        paragraphs: [
          "In Florida's climate, a pool typically loses around a quarter-inch of water per day to evaporation, more in hot, dry, or windy weather. Losing half an inch or more daily, or topping off more than once a week, usually signals a leak.",
        ],
      },
      {
        heading: "The bucket test, step by step",
        paragraphs: [
          "Fill a bucket with pool water and set it on a pool step so it's partially submerged. Mark the water level inside the bucket and the pool level outside it. Turn off the pump and wait 24 hours. If the pool level dropped more than the bucket, the difference is your leak.",
          "Repeat with the pump running to help tell a plumbing-side leak from a shell leak.",
        ],
      },
      {
        heading: "When to call for detection",
        paragraphs: [
          "If the bucket test points to a leak, professional pool leak detection uses dye testing and pressure testing to find exactly where — in the shell, fittings, or underground plumbing — so the repair is quick and inexpensive.",
        ],
      },
    ],
    relatedServices: ["pool-leak-detection"],
  },
  {
    slug: "how-much-does-leak-detection-cost-bradenton",
    title: "How Much Does Leak Detection Cost in Bradenton?",
    excerpt:
      "A clear breakdown of leak detection pricing in Bradenton by leak type, what affects the price, and how detection saves money versus exploratory digging.",
    date: "2026-04-10",
    readMinutes: 4,
    category: "Pricing",
    quickAnswer:
      "Leak detection in Bradenton typically costs $250 to $500 for residential properties, depending on the leak type, home size, and access. Slab and pool leak detection sit at the higher end; sewer camera inspections start lower. Reputable companies quote a flat rate before any work begins, so there are no hourly surprises.",
    sections: [
      {
        heading: "Typical price ranges by service",
        paragraphs: [
          "Sewer camera inspection generally runs $200–$400. Underground water line detection runs $250–$450. Slab leak and pool leak detection typically run $300–$500. Exact pricing depends on property size, access, and plumbing complexity.",
        ],
      },
      {
        heading: "What affects the price",
        paragraphs: [
          "Home and pool size, how much line must be traced, ease of access to clean-outs and equipment, and whether multiple leak types are suspected all influence the quote. A good company inspects, then gives a flat price up front.",
        ],
      },
      {
        heading: "Why detection saves money",
        paragraphs: [
          "Paying for accurate detection first means the repair targets a single spot. That avoids the far greater cost of jackhammering floors or trenching a whole yard to find a leak by trial and error — and limits water damage.",
        ],
      },
    ],
    relatedServices: ["slab-leak-detection", "pool-leak-detection"],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
