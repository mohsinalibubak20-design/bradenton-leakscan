export const site = {
  name: "Bradenton Leak Scan",
  shortName: "BLS",
  tagline: "Leak Detection in Bradenton, FL",
  description:
    "Bradenton Leak Scan provides non-invasive leak detection in Bradenton, FL and across Manatee County. We pinpoint slab leaks, water leaks, pool leaks, and underground pipe leaks using acoustic listening, thermal imaging, and pressure testing — no guesswork, no unnecessary digging.",
  phone: "(941) 555-0142",
  phoneHref: "tel:+19415550142",
  email: "service@bradentonleakscan.com",
  emailHref: "mailto:service@bradentonleakscan.com",
  address: {
    street: "1204 Manatee Ave W",
    city: "Bradenton",
    state: "FL",
    zip: "34205",
  },
  geo: { lat: 27.4989, lng: -82.5748 },
  county: "Manatee County",
  hours: [
    { days: "Mon – Fri", time: "7:00 AM – 7:00 PM" },
    { days: "Saturday", time: "8:00 AM – 4:00 PM" },
    { days: "Sunday", time: "Emergency calls only" },
  ],
  license: "FL CFC# 1428857",
  foundingYear: 2014,
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    google: "https://google.com",
  },
} as const;

/** Target keyword set used for on-page SEO across the site. */
export const keywords = {
  primary: "Leak Detection Bradenton",
  secondary: [
    "water leak detection Bradenton",
    "slab leak detection Bradenton",
    "hidden leak detection Bradenton",
    "underground leak detection Bradenton",
    "emergency leak detection Bradenton",
    "pipe leak detection Bradenton FL",
    "pool leak detection Bradenton",
    "leak detection near me",
    "water leak repair Bradenton",
    "slab leak repair Bradenton",
  ],
} as const;

export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Locations", href: "/service-areas" },
  { label: "Pricing", href: "/pricing" },
  { label: "Insurance", href: "/insurance" },
  { label: "Guide", href: "/leak-detection-guide" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export type Faq = { q: string; a: string };

export type DetectionMethod = { name: string; detail: string };

export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: string;
  keyword: string;
  image: { src: string; alt: string };
  /** 40–70 word featured-snippet answer. */
  quickAnswer: string;
  /** "What is this service?" */
  definition: string[];
  /** "Who needs it?" */
  whoNeeds: string;
  summary: string;
  signs: string[];
  process: { title: string; detail: string }[];
  detectionMethods: DetectionMethod[];
  /** "Why act quickly?" */
  whyFast: string;
  /** Bradenton/Manatee relevance. */
  bradentonRelevance: string;
  /** "What happens next?" */
  whatNext: string;
  faqs: Faq[];
};

export const services: Service[] = [
  {
    slug: "slab-leak-detection",
    title: "Slab Leak Detection",
    short:
      "Slab leak detection in Bradenton — find leaks under concrete without tearing up your home.",
    icon: "🏠",
    keyword: "slab leak detection Bradenton",
    image: {
      src: "/images/water-stain-inspection.svg",
      alt: "Technician performing slab leak detection on a Bradenton home foundation",
    },
    quickAnswer:
      "Slab leak detection in Bradenton locates water leaks in pipes beneath your concrete foundation without demolition. Using acoustic sensors, thermal imaging, and pressure testing, Bradenton Leak Scan pinpoints the leak to within inches — usually the same day — so repairs are targeted, fast, and far cheaper than exploratory jackhammering.",
    definition: [
      "A slab leak is a water leak in a pressurized pipe running beneath your home's concrete foundation (the \"slab\"). Slab leak detection is the non-invasive process of finding exactly where that pipe is leaking before any concrete is opened.",
      "Left undetected, a slab leak in a Bradenton home can undermine the foundation, warp flooring, spike your water bill, and grow mold inside walls. Detection comes first; targeted slab leak repair follows.",
    ],
    whoNeeds:
      "Homeowners with a sudden water-bill spike, warm or damp spots on the floor, the sound of running water when everything is off, or cracks appearing in tile and drywall. Common in Bradenton's many slab-on-grade homes built from the 1970s onward.",
    summary:
      "Hidden leaks beneath your foundation can rot framing, crack tile, and spike your water bill. We locate them to the inch — no demolition required.",
    signs: [
      "An unexplained spike in your water bill",
      "The sound of running water when everything is off",
      "Warm or damp spots on the floor",
      "Cracks in tile, baseboards, or drywall",
      "A water meter that keeps moving with no fixtures running",
      "Low water pressure throughout the house",
    ],
    process: [
      {
        title: "Pressure test",
        detail:
          "We isolate the plumbing system to confirm a leak exists and measure how fast it's losing water.",
      },
      {
        title: "Acoustic & thermal scan",
        detail:
          "Sensitive ground microphones and infrared cameras narrow the leak down to a small area of the slab.",
      },
      {
        title: "Pinpoint & mark",
        detail:
          "We mark the precise spot and give you a written report with photos for your plumber.",
      },
    ],
    detectionMethods: [
      {
        name: "Acoustic Leak Detection",
        detail:
          "Ground microphones amplify the sound of pressurized water escaping the pipe, letting us trace it to a single point under the slab.",
      },
      {
        name: "Thermal Imaging",
        detail:
          "Infrared cameras reveal temperature differences from a hot- or cold-water line leak beneath flooring.",
      },
      {
        name: "Pressure Testing",
        detail:
          "Isolating and pressurizing lines confirms whether the supply, hot, or drain line is the culprit.",
      },
      {
        name: "Line Tracing",
        detail:
          "Electronic tracing maps where the pipe actually runs under the concrete so we search the right area.",
      },
    ],
    whyFast:
      "A slab leak runs 24/7. Every day it continues, it wastes water, raises your bill, saturates the soil under your foundation, and increases the risk of structural movement and mold. Fast detection limits damage and keeps the eventual slab leak repair small.",
    bradentonRelevance:
      "Bradenton and Manatee County are full of slab-on-grade homes built on sandy, shifting soil. Combined with hard water and decades-old copper, that makes slab leaks one of the most common calls we get across Bradenton, West Bradenton, and Lakewood Ranch.",
    whatNext:
      "After we pinpoint and mark the leak, you receive a written report with photos and the exact location. You can hand it to any licensed plumber for a targeted repair, and we're happy to refer trusted local repair partners.",
    faqs: [
      {
        q: "How do you find a slab leak without breaking the concrete?",
        a: "We use acoustic ground microphones, thermal imaging, and pressure testing to locate the leak through the slab. Nothing is opened until we've marked the exact spot, so any repair is a small, targeted cut rather than guesswork demolition.",
      },
      {
        q: "How much does slab leak detection cost in Bradenton?",
        a: "Most residential slab leak detection visits in Bradenton fall between $300 and $500 depending on home size and access. You get an exact flat quote before any work begins, so there are no hourly surprises.",
      },
      {
        q: "What are the first signs of a slab leak?",
        a: "The earliest signs are usually a jump in your water bill, the sound of running water when fixtures are off, and warm or damp spots on the floor. Cracked tile and low water pressure often follow.",
      },
      {
        q: "Can a slab leak cause foundation damage?",
        a: "Yes. Water escaping under the slab erodes and softens the soil supporting your foundation, which can lead to settling, cracks, and uneven floors. Early slab leak detection prevents most structural damage.",
      },
      {
        q: "Do you also repair the slab leak?",
        a: "Our specialty is fast, accurate detection. We provide a detailed report you can give to any licensed plumber, and we can refer trusted Bradenton repair partners for the slab leak repair itself.",
      },
      {
        q: "How long does slab leak detection take?",
        a: "Most slab leak detection appointments take one to two hours. We can often schedule same-day or next-day visits across Bradenton and Manatee County.",
      },
      {
        q: "Will my homeowners insurance cover a slab leak?",
        a: "Many Florida policies cover the cost of accessing and repairing a slab leak (and resulting damage), even if not the pipe itself. Our written detection report with photos helps support your insurance claim.",
      },
      {
        q: "Is slab leak detection available for emergencies?",
        a: "Yes. If water is actively flooding or you've shut off your main, call us for emergency leak detection in Bradenton. We prioritize active-leak calls for same-day response.",
      },
    ],
  },
  {
    slug: "water-line-leak-detection",
    title: "Water Line Leak Detection",
    short:
      "Water leak detection in Bradenton — track down supply and irrigation line leaks underground.",
    icon: "💧",
    keyword: "water leak detection Bradenton",
    image: {
      src: "/images/underground-pipe-inspection.svg",
      alt: "Underground water line leak detection equipment locating a buried pipe in Bradenton",
    },
    quickAnswer:
      "Water line leak detection in Bradenton finds leaks in buried supply and irrigation pipes without trenching your yard. Bradenton Leak Scan uses line tracing, acoustic correlation, and ground microphones to pinpoint underground leaks to a single dig spot — stopping water waste and protecting your landscaping, driveway, and foundation.",
    definition: [
      "Water line leak detection is the process of locating leaks in the pressurized water pipes that run underground between your meter, your home, and your irrigation system. Underground leak detection finds the break electronically so digging is limited to one targeted spot.",
      "A leaking main or irrigation line wastes water around the clock and can wash out soil, crack driveways, and flood landscaping long before you see surface water.",
    ],
    whoNeeds:
      "Homeowners with a constantly running water meter, unexplained wet or extra-green patches in the yard, dropping water pressure, or a water bill that keeps climbing. Also property managers and HOAs across Manatee County tracking irrigation losses.",
    summary:
      "Buried supply and irrigation lines can leak for months unnoticed. We trace and locate them without trenching your yard.",
    signs: [
      "Constantly running water meter",
      "Wet or unusually green patches in the yard",
      "Low water pressure in the house",
      "Pooling water in the lawn or driveway cracks",
      "Irrigation zones that never fully dry out",
      "A water bill that keeps climbing with no change in use",
    ],
    process: [
      {
        title: "Trace the line",
        detail:
          "We map where your underground water lines actually run so we search the right path.",
      },
      {
        title: "Correlate the leak",
        detail:
          "Acoustic correlators measure the leak sound between two points to calculate its exact position.",
      },
      {
        title: "Mark for repair",
        detail:
          "We flag the precise dig location and depth so your plumber opens one small hole.",
      },
    ],
    detectionMethods: [
      {
        name: "Acoustic Correlation",
        detail:
          "Two sensors on the pipe measure the time difference of the leak sound to calculate its exact location underground.",
      },
      {
        name: "Line Tracing",
        detail:
          "Electronic transmitters map the route and depth of buried metal and plastic water lines.",
      },
      {
        name: "Ground Microphones",
        detail:
          "Highly sensitive surface microphones listen for the hiss of pressurized water escaping below grade.",
      },
      {
        name: "Pressure Testing",
        detail:
          "Isolating sections of line confirms which run is leaking before we narrow it down.",
      },
    ],
    whyFast:
      "An underground water leak runs continuously and silently. Beyond the wasted water and rising bill, it erodes soil, can crack driveways and walkways, undermine foundations, and kill landscaping. Locating it quickly keeps both the water loss and the repair small.",
    bradentonRelevance:
      "Sandy Manatee County soil hides underground leaks well — water often travels far before surfacing. With many homes running extensive irrigation through Bradenton's dry season, irrigation and main-line leaks are a frequent and costly problem here.",
    whatNext:
      "We mark the exact location and depth of the leak and provide a written report. Your plumber can then make a single targeted excavation and repair, instead of trenching the whole line.",
    faqs: [
      {
        q: "How do you find an underground water leak without digging?",
        a: "We use line tracing to map the pipe, then acoustic correlation and ground microphones to pinpoint the leak. Only after we mark the exact spot is a single small hole dug for the repair.",
      },
      {
        q: "How much does water leak detection cost in Bradenton?",
        a: "Underground water leak detection in Bradenton typically runs $250 to $450 depending on line length and access. We provide a flat quote up front before any work starts.",
      },
      {
        q: "How do I know if my water line is leaking underground?",
        a: "Watch for a water meter that spins with everything off, soggy or extra-green patches in the yard, low pressure, and a rising bill. Any of these can signal an underground water line leak.",
      },
      {
        q: "Can you find irrigation system leaks too?",
        a: "Yes. Irrigation leaks are one of our most common calls in Bradenton. We isolate and test each zone, then locate the leak so only the failed section is dug up and repaired.",
      },
      {
        q: "Does a meter that moves always mean a leak?",
        a: "If every fixture, appliance, and irrigation valve is off and the meter still moves, you almost certainly have a leak somewhere on your side of the meter. We can find exactly where.",
      },
      {
        q: "How long does underground leak detection take?",
        a: "Most underground water leak detection visits take one to two hours depending on how much line we need to trace. Same-day appointments are often available in Manatee County.",
      },
      {
        q: "Will you damage my lawn or driveway?",
        a: "No. The whole point of our equipment is to avoid trenching. We locate the leak first so any excavation is a single small spot rather than the entire pipe run.",
      },
      {
        q: "Do you offer emergency water leak detection?",
        a: "Yes. For active leaks flooding a yard or driveway, call us for emergency leak detection in Bradenton and we'll prioritize a same-day response.",
      },
    ],
  },
  {
    slug: "pool-leak-detection",
    title: "Pool Leak Detection",
    short:
      "Pool leak detection in Bradenton — stop losing water, chemicals, and heat from your pool or spa.",
    icon: "🏊",
    keyword: "pool leak detection Bradenton",
    image: {
      src: "/images/pool-leak-testing.svg",
      alt: "Pool leak detection dye testing at a Bradenton, FL backyard swimming pool",
    },
    quickAnswer:
      "Pool leak detection in Bradenton finds where your pool or spa is losing water using dye testing, pressure testing, and equipment inspection. Bradenton Leak Scan distinguishes a real leak from normal Florida evaporation and pinpoints cracks, plumbing breaks, or fitting failures — saving thousands of gallons of water, chemicals, and heat each season.",
    definition: [
      "Pool leak detection is the process of finding where a swimming pool, spa, or its plumbing is losing water. It separates a genuine leak from normal evaporation, then locates the source in the shell, plumbing lines, skimmer, returns, or lights.",
      "Florida pools always lose some water to evaporation, but more than about a quarter-inch a day usually means a leak that wastes water, chemicals, and heat — and can erode the ground around the pool.",
    ],
    whoNeeds:
      "Pool owners adding water more than once a week, seeing cracks in the deck or shell, soggy areas around the pool, air bubbles from return jets, or chemical and heating costs that keep rising.",
    summary:
      "Florida pools lose water to evaporation, but more than about a quarter-inch a day usually means a leak. We find it.",
    signs: [
      "Adding water more than once a week",
      "Cracks in the deck or pool shell",
      "Soggy or sinking areas around the pool",
      "Air bubbles from return jets",
      "Algae growth despite balanced chemicals",
      "Rising water, chemical, or heating costs",
    ],
    process: [
      {
        title: "Bucket & dye test",
        detail:
          "We confirm a true leak versus normal evaporation and dye-test the shell for cracks.",
      },
      {
        title: "Pressure test the lines",
        detail:
          "Each plumbing line is isolated and pressurized to find underground breaks.",
      },
      {
        title: "Locate & report",
        detail:
          "We mark the leak location and recommend the least invasive repair.",
      },
    ],
    detectionMethods: [
      {
        name: "Bucket Test",
        detail:
          "Comparing pool water loss to a reference bucket confirms whether you have a real leak or just evaporation.",
      },
      {
        name: "Dye Testing",
        detail:
          "Colored dye near suspected cracks and fittings reveals exactly where water is being drawn out of the shell.",
      },
      {
        name: "Pressure Testing",
        detail:
          "Isolating and pressurizing each plumbing line locates breaks in the suction and return lines underground.",
      },
      {
        name: "Equipment Inspection",
        detail:
          "We inspect the skimmer, returns, lights, and pad equipment where leaks frequently hide.",
      },
    ],
    whyFast:
      "A leaking pool wastes thousands of gallons of water and dollars in chemicals and heat every season. It also saturates and erodes the ground around the pool, which can crack decking and even shift the pool shell. The sooner it's found, the less it costs.",
    bradentonRelevance:
      "With backyard pools in nearly every Bradenton, Lakewood Ranch, and island neighborhood, and a long swim season driving high water and chemical use, pool leaks are both common and expensive here. Salt-chlorinated pools near the coast add extra wear on fittings.",
    whatNext:
      "Once we locate the leak, you get a clear report and the least-invasive repair recommendation. We can refer trusted pool repair partners, and many fixes — like a fitting or skimmer seal — are quick and inexpensive once the source is known.",
    faqs: [
      {
        q: "How do I know if my pool is leaking or just evaporating?",
        a: "Run a bucket test: float a bucket of pool water on a step and compare the drop inside the bucket to the pool over 24 hours. If the pool drops noticeably more, you have a leak — and we can find it.",
      },
      {
        q: "How much does pool leak detection cost in Bradenton?",
        a: "Pool leak detection in Bradenton generally runs $300 to $500 depending on pool size, features, and plumbing complexity. You get a flat quote before we begin.",
      },
      {
        q: "How much water loss is normal for a Florida pool?",
        a: "Normal evaporation is roughly a quarter-inch per day. Losing half an inch or more daily, or needing to add water more than weekly, usually points to a leak.",
      },
      {
        q: "Where do pool leaks usually happen?",
        a: "The most common spots are the skimmer, return fittings, light niches, plumbing lines, and cracks in the shell or tile line. We test all of these systematically.",
      },
      {
        q: "Can you detect a leak in the pool plumbing lines?",
        a: "Yes. We isolate and pressure-test each suction and return line to find underground plumbing leaks, then mark the exact spot for repair.",
      },
      {
        q: "Will I have to drain my pool for detection?",
        a: "Usually not. Most pool leak detection is done with the pool full using dye and pressure testing. We'll tell you in advance if any draining is needed.",
      },
      {
        q: "Do air bubbles from the returns mean a leak?",
        a: "Often, yes. Air in the return jets usually means the suction side is drawing air through a leak, commonly at the pump, valves, or an underground suction line. It's worth testing.",
      },
      {
        q: "How quickly can you come out for pool leak detection?",
        a: "We offer same-day and next-day pool leak detection across Bradenton and Manatee County, including the island communities of Anna Maria, Holmes Beach, and Longboat Key.",
      },
    ],
  },
  {
    slug: "sewer-camera-inspection",
    title: "Sewer Camera Inspection",
    short:
      "Sewer camera inspection in Bradenton — see inside your drains and sewer lines with HD video.",
    icon: "📹",
    keyword: "sewer camera inspection Bradenton",
    image: {
      src: "/images/commercial-inspection.svg",
      alt: "HD sewer camera inspection of a drain line at a Bradenton property",
    },
    quickAnswer:
      "A sewer camera inspection in Bradenton sends an HD camera through your drain and sewer lines to reveal roots, cracks, bellies, and blockages without digging. Bradenton Leak Scan locates and records each problem on video, giving you a clear diagnosis for repairs, real-estate inspections, and insurance or warranty claims.",
    definition: [
      "A sewer camera inspection uses a waterproof HD push camera fed through your drain or sewer line to show its interior on a live monitor. A sonde transmitter on the camera marks the depth and location of any defect from the surface.",
      "It turns hidden underground problems — roots, cracks, separated joints, sagging \"bellies,\" and blockages — into clear video you can see, without any digging.",
    ],
    whoNeeds:
      "Homeowners with drains that clog repeatedly, gurgling toilets, sewage odors, or soggy spots over the sewer line — plus anyone buying or selling an older Bradenton home who wants to verify the sewer line before closing.",
    summary:
      "Recurring clogs, sewage smells, or yard sink-holes often trace back to a broken sewer line. We send a camera to see it.",
    signs: [
      "Drains that clog repeatedly",
      "Gurgling toilets or slow drains throughout the house",
      "Sewage odors indoors or in the yard",
      "Soggy spots or extra-green grass over the sewer line",
      "Multiple fixtures backing up at once",
      "Buying or selling a home built before 1990",
    ],
    process: [
      {
        title: "Camera the line",
        detail:
          "We feed an HD camera through the clean-out to inspect the full run of the line.",
      },
      {
        title: "Locate problem spots",
        detail:
          "A sonde transmitter marks the depth and location of any defect from the surface.",
      },
      {
        title: "Deliver the footage",
        detail:
          "You receive the recording plus a plain-English summary and next steps.",
      },
    ],
    detectionMethods: [
      {
        name: "HD Push Camera",
        detail:
          "A waterproof camera travels the line sending live high-definition video of the pipe interior to our monitor.",
      },
      {
        name: "Sonde Locating",
        detail:
          "A transmitter in the camera head lets us mark the exact depth and ground location of any defect.",
      },
      {
        name: "Recorded Reporting",
        detail:
          "We record the full inspection so you, your plumber, or your inspector can review the findings.",
      },
    ],
    whyFast:
      "A small root intrusion or hairline crack becomes a full blockage or collapse over time — and a collapsed sewer line is a major, costly excavation. Catching it early on camera lets you plan a targeted, far cheaper repair.",
    bradentonRelevance:
      "Many established Bradenton neighborhoods have clay or cast-iron sewer lines decades old, plus mature trees whose roots invade joints. A sewer camera inspection is especially valuable before buying any older home in Manatee County.",
    whatNext:
      "You receive the recorded video and a written summary identifying any defects and their location. That documentation supports repair quotes, real-estate negotiations, and insurance or home-warranty claims.",
    faqs: [
      {
        q: "What does a sewer camera inspection show?",
        a: "It shows the inside of your sewer and drain lines in HD — revealing tree roots, cracks, separated joints, sagging bellies, grease buildup, and blockages — and pinpoints exactly where each problem is.",
      },
      {
        q: "How much does a sewer camera inspection cost in Bradenton?",
        a: "A sewer camera inspection in Bradenton typically costs $200 to $400 depending on access and line length. We quote a flat rate before starting and include the recorded footage.",
      },
      {
        q: "Should I get a sewer inspection before buying a house?",
        a: "Yes, especially for homes built before 1990. A sewer camera inspection reveals costly hidden problems before closing, giving you leverage to negotiate repairs or walk away.",
      },
      {
        q: "Why does my toilet gurgle or drains run slow?",
        a: "Gurgling and slow drains across multiple fixtures usually mean a partial blockage or venting issue in the main line. A camera inspection shows the cause and its exact location.",
      },
      {
        q: "Can a camera inspection find tree root intrusion?",
        a: "Absolutely. Roots entering pipe joints are one of the most common findings, especially in older Bradenton neighborhoods with mature trees. The camera shows the extent and location.",
      },
      {
        q: "Do you locate the depth of the problem?",
        a: "Yes. A sonde transmitter in the camera head lets us mark the exact depth and surface location of any defect, so repairs are precise.",
      },
      {
        q: "Will I get a copy of the video?",
        a: "Yes. You receive the recorded inspection plus a plain-English summary you can share with a plumber, inspector, insurer, or home-warranty company.",
      },
      {
        q: "Can a camera inspection clear my clog?",
        a: "The camera diagnoses the problem; it doesn't clear it. We identify the cause and location so the right repair or cleaning method can be used instead of guesswork.",
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

/** Headline service areas shown as chips and used for cross-linking. */
export const serviceAreas: string[] = [
  "Bradenton",
  "Palmetto",
  "Ellenton",
  "Parrish",
  "Lakewood Ranch",
  "Sarasota",
  "Anna Maria",
  "Holmes Beach",
  "Bradenton Beach",
  "Longboat Key",
  "Cortez",
  "Myakka City",
];

/** General, site-wide FAQs (used on /faq and homepage teaser). */
export const faqs: Faq[] = [
  {
    q: "How does non-invasive leak detection in Bradenton work?",
    a: "We combine acoustic listening equipment, thermal imaging, pressure testing, and line tracing to find the source of a leak without breaking concrete or digging up your yard. Any repair is then targeted to a single, marked location.",
  },
  {
    q: "How much does leak detection cost in Bradenton?",
    a: "Most residential leak detection visits in the Bradenton area fall between $250 and $500 depending on the type of leak and property size. We give you an exact, flat quote before any work begins — no surprises.",
  },
  {
    q: "Do you repair the leak too, or only detect it?",
    a: "Our specialty is finding the leak fast and accurately. We provide a detailed report you can hand to any licensed plumber for water leak repair or slab leak repair, and we can refer trusted local repair partners.",
  },
  {
    q: "How quickly can you come out for leak detection near me?",
    a: "We offer same-day and next-day appointments in most of Manatee County, plus emergency leak detection in Bradenton for active leaks that are flooding or causing damage.",
  },
  {
    q: "Are you licensed and insured?",
    a: `Yes. Bradenton Leak Scan is fully licensed (${site.license}) and carries liability insurance. Our technicians are background-checked and trained on the latest detection equipment.`,
  },
  {
    q: "Will you damage my property to find the leak?",
    a: "No. The entire point of our equipment is to avoid demolition. We locate the leak first so that when a repair is made, it's a small, precise opening rather than tearing out floors or trenching the whole yard.",
  },
  {
    q: "What areas do you serve for leak detection?",
    a: "We provide leak detection across Bradenton and all of Manatee County, including Lakewood Ranch, Palmetto, Parrish, Ellenton, Cortez, and the island communities of Anna Maria, Holmes Beach, Bradenton Beach, and Longboat Key.",
  },
  {
    q: "Does leak detection help with insurance claims?",
    a: "Yes. Our written report with photos and leak locations documents the source and damage, which supports homeowners insurance and home-warranty claims for covered water damage.",
  },
];
