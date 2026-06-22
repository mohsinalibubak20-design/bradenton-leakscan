import type { Faq } from "@/lib/site";

export type Location = {
  slug: string; // e.g. leak-detection-lakewood-ranch-fl
  city: string;
  state: "FL";
  zip: string;
  driveTime: string;
  /** 40–70 word featured-snippet answer. */
  quickAnswer: string;
  intro: string[];
  localIssues: { title: string; detail: string }[];
  neighborhoods: string[];
  faqs: Faq[];
};

export const locations: Location[] = [
  {
    slug: "leak-detection-lakewood-ranch-fl",
    city: "Lakewood Ranch",
    state: "FL",
    zip: "34202",
    driveTime: "about 20 minutes from our Bradenton office",
    quickAnswer:
      "Leak detection in Lakewood Ranch, FL locates slab, water line, pool, and irrigation leaks in this fast-growing master-planned community without demolition. Bradenton Leak Scan uses acoustic and thermal equipment to pinpoint leaks in newer slab-on-grade homes and extensive irrigation systems, usually with same-day service across all Lakewood Ranch villages.",
    intro: [
      "Lakewood Ranch is one of the fastest-growing master-planned communities in the country, and almost all of its homes are slab-on-grade construction with extensive irrigation and, very often, a backyard pool. That combination drives the leak calls we see most here: under-slab supply leaks, irrigation main breaks, and pool plumbing losses.",
      "Because Lakewood Ranch spans many villages across Manatee and Sarasota counties — from Greenbrook and Summerfield to Waterside and Lakewood Ranch Country Club — leaks can hide under large lots and long irrigation runs. Our non-invasive leak detection pinpoints the source so HOAs, builders, and homeowners avoid tearing up manicured landscaping.",
    ],
    localIssues: [
      {
        title: "Newer slab homes, early plumbing failures",
        detail:
          "Even newer Lakewood Ranch homes develop slab leaks from fitting failures, abrasion against concrete, and ground settling. We locate them without jackhammering through tile and finished floors.",
      },
      {
        title: "Large lots, long irrigation runs",
        detail:
          "Extensive irrigation across big lots means more buried line and more places to leak. We trace and correlate the line to find the break under turf without trenching.",
      },
      {
        title: "Pool plumbing losses",
        detail:
          "With pools in so many backyards, suction- and return-line leaks are common. We pressure-test each line and dye-test the shell to find the loss.",
      },
    ],
    neighborhoods: [
      "Greenbrook",
      "Summerfield",
      "Waterside",
      "Country Club",
      "Del Webb",
      "Mallory Park",
    ],
    faqs: [
      {
        q: "Do you offer same-day leak detection in Lakewood Ranch?",
        a: "Yes. Lakewood Ranch is about 20 minutes from our Bradenton office, and we offer same-day and next-day leak detection across all villages, plus emergency service for active leaks.",
      },
      {
        q: "Can you find irrigation leaks on large Lakewood Ranch lots?",
        a: "Absolutely. Long irrigation runs on big lots are one of our most common Lakewood Ranch calls. We trace the line and use acoustic correlation to pinpoint the break before any digging.",
      },
      {
        q: "Do newer Lakewood Ranch homes get slab leaks?",
        a: "Yes. Even newer slab-on-grade homes develop under-slab leaks from fitting failures and settling. We locate them non-invasively so finished floors and tile stay intact.",
      },
    ],
  },
  {
    slug: "leak-detection-palmetto-fl",
    city: "Palmetto",
    state: "FL",
    zip: "34221",
    driveTime: "about 15 minutes from our Bradenton office",
    quickAnswer:
      "Leak detection in Palmetto, FL pinpoints slab, water line, and pool leaks across this Manatee River community without tearing up your property. Bradenton Leak Scan uses acoustic listening, thermal imaging, and pressure testing to find hidden leaks in Palmetto's mix of older bungalows and newer waterfront homes, with same-day service available.",
    intro: [
      "Just across the Manatee River from Bradenton, Palmetto blends decades-old bungalows and historic homes with newer waterfront and riverfront construction. That range means we see everything here from aging galvanized and copper supply lines to modern slab leaks and pool losses.",
      "Older Palmetto neighborhoods often have original plumbing that's reached the end of its life, while waterfront properties face extra corrosion from salt air and high water tables. Our non-invasive leak detection finds the source in either case without disturbing mature landscaping or finished interiors.",
    ],
    localIssues: [
      {
        title: "Aging supply lines in older homes",
        detail:
          "Many established Palmetto homes still run original galvanized or early copper pipe that corrodes and leaks. We locate the failing section precisely instead of guessing.",
      },
      {
        title: "High water table near the river",
        detail:
          "Riverfront and low-lying lots have high groundwater that hides underground leaks. We use line tracing and correlation to find leaks that never reach the surface.",
      },
      {
        title: "Salt-air corrosion",
        detail:
          "Proximity to the river and Gulf accelerates corrosion on pool equipment and fittings. We pressure- and dye-test to find the resulting leaks.",
      },
    ],
    neighborhoods: [
      "Historic Palmetto",
      "Riviera Dunes",
      "Northwood",
      "Terra Ceia area",
      "Snead Island",
    ],
    faqs: [
      {
        q: "How fast can you reach Palmetto for leak detection?",
        a: "Palmetto is only about 15 minutes from our Bradenton office, so we routinely offer same-day and next-day leak detection there, with emergency response for active leaks.",
      },
      {
        q: "Do older Palmetto homes need special leak detection?",
        a: "Older Palmetto homes often have aging galvanized or copper pipe. Our acoustic and pressure testing pinpoints the failing section so you replace only what's needed.",
      },
      {
        q: "Can you detect leaks on Palmetto waterfront properties?",
        a: "Yes. We handle riverfront and Snead Island properties where high water tables and salt-air corrosion are common, locating both supply and pool leaks non-invasively.",
      },
    ],
  },
  {
    slug: "leak-detection-sarasota-fl",
    city: "Sarasota",
    state: "FL",
    zip: "34236",
    driveTime: "about 25 minutes from our Bradenton office",
    quickAnswer:
      "Leak detection in Sarasota, FL locates slab leaks, underground water line leaks, and pool leaks without demolition. Bradenton Leak Scan brings acoustic correlation, thermal imaging, and pressure testing to Sarasota's mix of historic homes, downtown condos, and waterfront properties, pinpointing hidden leaks to within inches with same-day appointments available.",
    intro: [
      "Sarasota's housing stock runs from historic Spanish-style homes and mid-century neighborhoods to downtown high-rise condos and barrier-island estates. Each type leaks differently — and each needs a detection approach that won't damage valuable finishes.",
      "We regularly handle Sarasota slab leaks under tile and terrazzo, underground supply leaks on older lots, and pool leaks at waterfront homes. Our equipment finds the leak precisely so repairs stay small, even in high-value or historic properties.",
    ],
    localIssues: [
      {
        title: "Slab leaks under terrazzo and tile",
        detail:
          "Mid-century Sarasota homes often have terrazzo or tile over slab. We use acoustic and thermal detection to find leaks without breaking these hard-to-replace floors.",
      },
      {
        title: "Condo and multi-unit leaks",
        detail:
          "Downtown Sarasota condos share walls and stacked plumbing, making leak sources hard to trace. We isolate and pinpoint the unit and line responsible.",
      },
      {
        title: "Waterfront and island corrosion",
        detail:
          "Keys and bayfront homes face salt-air corrosion on pool and supply lines. We pressure- and dye-test to locate the resulting leaks.",
      },
    ],
    neighborhoods: [
      "Downtown Sarasota",
      "Gillespie Park",
      "Arlington Park",
      "Siesta Key",
      "Lido Key",
      "Southside Village",
    ],
    faqs: [
      {
        q: "Do you serve Sarasota for leak detection?",
        a: "Yes. Sarasota is about 25 minutes from our Bradenton base, and we offer leak detection throughout the city and the keys, including same-day and emergency service.",
      },
      {
        q: "Can you find leaks under terrazzo floors?",
        a: "Yes. Many mid-century Sarasota homes have terrazzo over slab. Our acoustic and thermal equipment locates slab leaks without breaking these hard-to-replace floors.",
      },
      {
        q: "Do you handle condo leak detection in downtown Sarasota?",
        a: "We do. Stacked condo plumbing makes leaks hard to trace; we isolate the responsible unit and line so repairs target the right spot.",
      },
    ],
  },
  {
    slug: "leak-detection-bradenton-beach-fl",
    city: "Bradenton Beach",
    state: "FL",
    zip: "34217",
    driveTime: "about 30 minutes from our Bradenton office",
    quickAnswer:
      "Leak detection in Bradenton Beach, FL finds slab, water line, and pool leaks in this Anna Maria Island community where salt air and sandy soil accelerate pipe corrosion. Bradenton Leak Scan uses non-invasive acoustic and pressure testing to pinpoint leaks in beach cottages, rentals, and waterfront homes without demolition.",
    intro: [
      "Bradenton Beach sits on the south end of Anna Maria Island, where salt air, sandy soil, and a high water table make leaks both more likely and harder to find. Many properties here are vacation rentals and older beach cottages, so quick, non-invasive detection matters.",
      "Corrosion from the coastal environment shortens the life of supply lines, pool fittings, and irrigation. We locate leaks precisely so island homeowners and rental managers can repair fast and keep units in service.",
    ],
    localIssues: [
      {
        title: "Salt-air pipe corrosion",
        detail:
          "Constant salt exposure corrodes copper and pool fittings faster than inland. We pinpoint the corroded, leaking section without opening walls or decks.",
      },
      {
        title: "Sandy soil and high water table",
        detail:
          "Underground leaks rarely surface in beach sand. We trace and correlate buried lines to find leaks that would otherwise stay hidden.",
      },
      {
        title: "Vacation-rental downtime",
        detail:
          "Rentals can't afford long outages. Same-day detection lets managers schedule a targeted repair between guests.",
      },
    ],
    neighborhoods: [
      "Bridge Street district",
      "Cortez Road corridor",
      "Gulf Drive",
      "Bay-side condos",
    ],
    faqs: [
      {
        q: "Do you provide leak detection on Anna Maria Island?",
        a: "Yes. We cover Bradenton Beach and all of Anna Maria Island, about 30 minutes from our office, with same-day and emergency leak detection for homes and rentals.",
      },
      {
        q: "Why do beach homes get more leaks?",
        a: "Salt air corrodes pipes and fittings faster, and sandy soil with a high water table hides underground leaks. Both make professional, non-invasive detection especially valuable.",
      },
      {
        q: "Can you work around vacation rental schedules?",
        a: "Yes. We offer fast, same-day detection so rental managers can book a targeted repair between guests and minimize downtime.",
      },
    ],
  },
  {
    slug: "leak-detection-anna-maria-fl",
    city: "Anna Maria",
    state: "FL",
    zip: "34216",
    driveTime: "about 35 minutes from our Bradenton office",
    quickAnswer:
      "Leak detection in Anna Maria, FL pinpoints slab, water line, and pool leaks in this northern Anna Maria Island city where older cottages and coastal corrosion are common. Bradenton Leak Scan uses acoustic listening, thermal imaging, and pressure testing to find hidden leaks non-invasively, protecting island homes and rentals from water damage.",
    intro: [
      "The City of Anna Maria, at the island's north end, is known for its older cottages, newer luxury rebuilds, and a strong vacation-rental market. The coastal setting means salt-air corrosion and high groundwater are constant factors in the leaks we find here.",
      "Whether it's an original cottage with aging plumbing or a new build with a pool and irrigation, our non-invasive leak detection locates the source without tearing into finished interiors or decking — critical for both year-round residents and rental owners.",
    ],
    localIssues: [
      {
        title: "Aging cottage plumbing",
        detail:
          "Historic Anna Maria cottages often run original pipe near the end of its life. We find the failing run precisely so only that section is replaced.",
      },
      {
        title: "Coastal corrosion on new builds",
        detail:
          "Even new island homes face salt-air corrosion on pool and supply fittings. We pressure- and dye-test to catch leaks early.",
      },
      {
        title: "Rental income protection",
        detail:
          "Active leaks threaten rental income and reviews. Fast, accurate detection keeps repairs small and units bookable.",
      },
    ],
    neighborhoods: [
      "Pine Avenue district",
      "Bean Point area",
      "North Shore Drive",
      "City Pier area",
    ],
    faqs: [
      {
        q: "How far is Anna Maria from your office?",
        a: "The City of Anna Maria is about 35 minutes from our Bradenton base. We schedule same-day and next-day leak detection across the island, including emergency calls.",
      },
      {
        q: "Do older Anna Maria cottages need leak detection often?",
        a: "Yes. Original cottage plumbing combined with salt air leads to frequent leaks. Non-invasive detection lets you replace only the failing section without gutting the home.",
      },
      {
        q: "Can you detect pool leaks on the island?",
        a: "Absolutely. We dye-test the shell and pressure-test plumbing lines to find pool leaks on Anna Maria properties, including newer luxury builds.",
      },
    ],
  },
  {
    slug: "leak-detection-holmes-beach-fl",
    city: "Holmes Beach",
    state: "FL",
    zip: "34217",
    driveTime: "about 30 minutes from our Bradenton office",
    quickAnswer:
      "Leak detection in Holmes Beach, FL finds slab, pool, and underground water line leaks in this central Anna Maria Island city. Bradenton Leak Scan uses acoustic and thermal equipment plus pressure testing to pinpoint leaks in canal-front homes, rentals, and pools without demolition, with same-day island service available.",
    intro: [
      "Holmes Beach is the most populated city on Anna Maria Island, with a dense mix of canal-front homes, duplexes, and vacation rentals. Many properties have pools and irrigation, and nearly all face the island's salt air and high water table.",
      "Canal-front lots add another wrinkle: leaks near seawalls and in pool plumbing can be tricky to locate. Our non-invasive detection isolates and pinpoints the leak so repairs stay small and properties stay in service.",
    ],
    localIssues: [
      {
        title: "Canal-front pool and plumbing leaks",
        detail:
          "Pools and lines near canals and seawalls are common here. We pressure-test plumbing and dye-test shells to find losses precisely.",
      },
      {
        title: "Dense rentals and duplexes",
        detail:
          "Shared and stacked plumbing in duplexes and rentals makes leaks hard to trace. We isolate the responsible line and unit.",
      },
      {
        title: "Salt air and high groundwater",
        detail:
          "Coastal corrosion and high water tables hide leaks. Acoustic correlation finds underground leaks that never surface.",
      },
    ],
    neighborhoods: [
      "Key Royale",
      "Marina Drive",
      "Palm Drive canals",
      "Gulf Drive",
    ],
    faqs: [
      {
        q: "Do you cover Holmes Beach for leak detection?",
        a: "Yes. Holmes Beach is about 30 minutes from our Bradenton office, and we provide same-day and emergency leak detection for homes, rentals, and pools across the city.",
      },
      {
        q: "Can you find leaks on canal-front Holmes Beach homes?",
        a: "We can. Canal-front pools and plumbing near seawalls are common here; we isolate and pinpoint the leak without disturbing decks or landscaping.",
      },
      {
        q: "Do you detect leaks in duplexes and rentals?",
        a: "Yes. Shared plumbing in duplexes and rentals makes leaks tricky; we isolate the responsible line and unit so the repair targets the right spot.",
      },
    ],
  },
  {
    slug: "leak-detection-longboat-key-fl",
    city: "Longboat Key",
    state: "FL",
    zip: "34228",
    driveTime: "about 40 minutes from our Bradenton office",
    quickAnswer:
      "Leak detection in Longboat Key, FL locates slab, pool, and water line leaks in this upscale barrier-island community without damaging high-end finishes. Bradenton Leak Scan uses non-invasive acoustic, thermal, and pressure testing to pinpoint leaks in luxury homes, condos, and waterfront estates, with discreet same-day service.",
    intro: [
      "Longboat Key is an upscale barrier island spanning Manatee and Sarasota counties, with luxury single-family estates, beachfront condos, and waterfront properties. High-value finishes mean detection accuracy is essential — no one wants exploratory demolition in a marble-floored home.",
      "Salt air, high groundwater, and complex pool and irrigation systems make leaks both likely and costly here. Our equipment pinpoints the leak precisely so repairs stay small and discreet in these premium properties.",
    ],
    localIssues: [
      {
        title: "High-end finishes demand precision",
        detail:
          "Marble, stone, and custom flooring make exploratory demolition unacceptable. We locate slab leaks to the inch before anything is opened.",
      },
      {
        title: "Beachfront condo plumbing",
        detail:
          "Stacked condo plumbing on Longboat Key makes leaks hard to trace. We isolate the responsible line and unit non-invasively.",
      },
      {
        title: "Salt corrosion on luxury pools",
        detail:
          "Waterfront pools and spas with complex plumbing corrode over time. We pressure- and dye-test to find leaks discreetly.",
      },
    ],
    neighborhoods: [
      "Bay Isles",
      "Longboat Key Club",
      "Country Club Shores",
      "Gulf of Mexico Drive",
    ],
    faqs: [
      {
        q: "Do you serve Longboat Key for leak detection?",
        a: "Yes. Longboat Key is about 40 minutes from our office. We provide discreet, non-invasive leak detection for luxury homes, condos, and estates, including same-day service.",
      },
      {
        q: "Will detection damage high-end floors?",
        a: "No. The point of our equipment is to avoid demolition. We pinpoint slab and pipe leaks to the inch so any repair is a small, precise opening — critical in premium homes.",
      },
      {
        q: "Can you detect leaks in beachfront condos?",
        a: "Yes. We isolate stacked condo plumbing to find which unit and line is leaking, so repairs target the source without disturbing neighboring units.",
      },
    ],
  },
  {
    slug: "leak-detection-parrish-fl",
    city: "Parrish",
    state: "FL",
    zip: "34219",
    driveTime: "about 25 minutes from our Bradenton office",
    quickAnswer:
      "Leak detection in Parrish, FL pinpoints slab, irrigation, and pool leaks in this fast-growing community of new master-planned neighborhoods. Bradenton Leak Scan uses acoustic and thermal equipment to find leaks in new slab homes and extensive irrigation systems non-invasively, with same-day service throughout Parrish.",
    intro: [
      "Parrish is one of Manatee County's fastest-growing areas, filling with new master-planned communities like North River Ranch and Crosscreek. Almost everything here is newer slab-on-grade construction with builder-installed irrigation and frequent pools.",
      "New construction isn't immune to leaks — fitting failures, abrasion, and settling all cause early slab and irrigation leaks. Our non-invasive detection finds them without tearing up new tile floors or fresh sod.",
    ],
    localIssues: [
      {
        title: "Early leaks in new construction",
        detail:
          "New Parrish homes still develop slab and supply leaks from fitting failures and settling. We locate them without damaging new finishes.",
      },
      {
        title: "Builder irrigation systems",
        detail:
          "Large new communities have extensive irrigation prone to line breaks. We trace and correlate the line to find the leak under fresh landscaping.",
      },
      {
        title: "Pool plumbing in new builds",
        detail:
          "Newly built pools can leak at fittings and plumbing connections. We pressure- and dye-test to catch losses early.",
      },
    ],
    neighborhoods: [
      "North River Ranch",
      "Crosscreek",
      "Forest Creek",
      "Silverleaf",
      "Canoe Creek",
    ],
    faqs: [
      {
        q: "Do you offer leak detection in Parrish?",
        a: "Yes. Parrish is about 25 minutes from our Bradenton office, and we provide same-day and next-day leak detection throughout its new communities, plus emergency service.",
      },
      {
        q: "Can a brand-new Parrish home have a leak?",
        a: "Yes. New slab homes develop leaks from fitting failures, pipe abrasion against concrete, and ground settling. We locate them non-invasively so new floors stay intact.",
      },
      {
        q: "Do you find irrigation leaks in new communities?",
        a: "We do. Builder-installed irrigation across large lots is prone to breaks; we trace and correlate the line to pinpoint the leak under fresh sod.",
      },
    ],
  },
  {
    slug: "leak-detection-ellenton-fl",
    city: "Ellenton",
    state: "FL",
    zip: "34222",
    driveTime: "about 20 minutes from our Bradenton office",
    quickAnswer:
      "Leak detection in Ellenton, FL finds slab, water line, and pool leaks across this Manatee River community of established homes and newer developments. Bradenton Leak Scan uses acoustic listening, thermal imaging, and pressure testing to pinpoint hidden leaks non-invasively, with same-day appointments available throughout Ellenton.",
    intro: [
      "Ellenton, along the Manatee River near the outlets, mixes established neighborhoods and manufactured-home communities with newer development. That means a wide range of plumbing ages and types — and a wide range of leak causes.",
      "Older homes here may have aging supply lines, while newer ones see typical slab and irrigation leaks. River proximity raises groundwater, hiding underground leaks. Our non-invasive detection finds the source precisely in any of these situations.",
    ],
    localIssues: [
      {
        title: "Mixed-age plumbing",
        detail:
          "Ellenton's range of home ages means everything from aging galvanized to modern PEX. We adapt detection methods to find the leak in any system.",
      },
      {
        title: "Manufactured-home plumbing",
        detail:
          "Manufactured and mobile homes have under-floor plumbing prone to leaks. We locate the source without tearing out skirting or floors blindly.",
      },
      {
        title: "River-area groundwater",
        detail:
          "High groundwater near the Manatee River hides underground leaks. Acoustic correlation finds leaks that never surface.",
      },
    ],
    neighborhoods: [
      "Old Ellenton",
      "Covered Bridge",
      "Colony Cove",
      "Gillette area",
    ],
    faqs: [
      {
        q: "Do you provide leak detection in Ellenton?",
        a: "Yes. Ellenton is about 20 minutes from our Bradenton office, with same-day and next-day leak detection available, plus emergency service for active leaks.",
      },
      {
        q: "Can you detect leaks in manufactured homes?",
        a: "Yes. Manufactured and mobile homes have under-floor plumbing that's prone to leaks; we locate the source precisely instead of blindly opening skirting or floors.",
      },
      {
        q: "Do older Ellenton homes need special detection?",
        a: "Older homes may have aging galvanized or copper lines. We pinpoint the failing section with acoustic and pressure testing so only that part is replaced.",
      },
    ],
  },
  {
    slug: "leak-detection-cortez-fl",
    city: "Cortez",
    state: "FL",
    zip: "34215",
    driveTime: "about 25 minutes from our Bradenton office",
    quickAnswer:
      "Leak detection in Cortez, FL pinpoints slab, water line, and pool leaks in this historic fishing village where salt air and older structures are common. Bradenton Leak Scan uses non-invasive acoustic and pressure testing to find hidden leaks in cottages, waterfront homes, and pools without demolition, with same-day service available.",
    intro: [
      "Cortez is a historic working waterfront village between Bradenton and the islands, with older cottages, newer waterfront homes, and a strong coastal character. Salt air and proximity to the water make corrosion and underground leaks frequent concerns here.",
      "Many Cortez structures have aging plumbing, while waterfront properties face high groundwater and salt-driven corrosion on pool and supply fittings. Our non-invasive detection finds the leak source precisely, protecting historic and waterfront homes alike.",
    ],
    localIssues: [
      {
        title: "Historic structure plumbing",
        detail:
          "Older Cortez cottages often run original pipe at the end of its life. We find the failing run precisely to preserve historic structures.",
      },
      {
        title: "Waterfront salt corrosion",
        detail:
          "Salt air corrodes pool and supply fittings on waterfront homes. We pressure- and dye-test to find the resulting leaks early.",
      },
      {
        title: "High coastal groundwater",
        detail:
          "Underground leaks rarely surface near the water. Acoustic correlation locates buried leaks without trenching.",
      },
    ],
    neighborhoods: [
      "Historic Cortez village",
      "Cortez Road corridor",
      "Hunters Point",
      "Bay-side homes",
    ],
    faqs: [
      {
        q: "Do you serve Cortez for leak detection?",
        a: "Yes. Cortez is about 25 minutes from our Bradenton office, and we offer same-day and emergency leak detection for historic cottages and waterfront homes alike.",
      },
      {
        q: "Can you work on historic Cortez homes?",
        a: "We can. We pinpoint leaks in older structures non-invasively so you replace only the failing section and preserve the historic character of the home.",
      },
      {
        q: "Why are waterfront leaks harder to find?",
        a: "Salt-air corrosion and high groundwater near the water hide underground leaks. Our acoustic correlation locates leaks that never reach the surface.",
      },
    ],
  },
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}
