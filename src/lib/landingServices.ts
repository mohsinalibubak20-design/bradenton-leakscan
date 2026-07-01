import type { Faq } from "@/lib/site";
import type { ImageKey } from "@/lib/images";

/**
 * Keyword-targeted landing services that live at flat, top-level URLs
 * (e.g. /water-leak-detection-bradenton-fl). These complement the
 * detailed pages under /services/[slug] and power the homepage grid,
 * the navbar dropdown, the mobile menu, and the footer services list.
 */
export type LandingService = {
  /** Full flat slug, e.g. "water-leak-detection-bradenton-fl". */
  slug: string;
  /** Short label for nav menus, cards, and footer. */
  navLabel: string;
  /** Page H1 / card-free full title. */
  title: string;
  /** One-line card description. */
  short: string;
  icon: string;
  keyword: string;
  metaDescription: string;
  /** 40–70 word featured-snippet answer. */
  quickAnswer: string;
  /** Intro / definition paragraphs. */
  intro: string[];
  /** Warning signs. */
  signs: string[];
  /** What the visit covers. */
  whatWeDo: { title: string; detail: string }[];
  /** Why act quickly. */
  whyFast: string;
  faqs: Faq[];
  /** Cross-links to detailed /services/[slug] pages. */
  relatedServices: string[];
  imageKey: ImageKey;
  /** Optional per-service hero alt text; falls back to the registry alt. */
  imageAlt?: string;
};

export const landingServices: LandingService[] = [
  {
    slug: "water-leak-detection-bradenton-fl",
    navLabel: "Water Leak Detection",
    title: "Water Leak Detection in Bradenton, FL",
    short:
      "Pinpoint supply, irrigation, and household water leaks without trenching or demolition.",
    icon: "💧",
    keyword: "water leak detection Bradenton",
    metaDescription:
      "Non-invasive water leak detection in Bradenton, FL. We pinpoint supply, irrigation, and underground water line leaks fast — no trenching. Same-day service.",
    quickAnswer:
      "Water leak detection in Bradenton locates hidden leaks in your supply, irrigation, and underground water lines without trenching. Bradenton Leak Scan uses acoustic listening, line tracing, and pressure testing to pinpoint the leak to a single spot — usually the same day — so repairs are targeted and your yard and walls stay intact.",
    intro: [
      "Water leak detection is the non-invasive process of finding where pressurized water is escaping your plumbing — buried mains, irrigation lines, or supply pipes inside walls and ceilings. Because the leak is located electronically first, any repair is limited to one small, marked spot.",
      "Across Bradenton and Manatee County, sandy soil hides underground leaks and lets water travel far before it surfaces, so a meter that keeps moving or a climbing bill is often the only early clue.",
    ],
    signs: [
      "A water meter that keeps moving with everything off",
      "An unexplained jump in your water bill",
      "Low or dropping water pressure",
      "Soggy or unusually green patches in the yard",
      "The sound of running water when nothing is on",
    ],
    whatWeDo: [
      {
        title: "Confirm and isolate",
        detail:
          "We verify a leak exists and isolate the affected line so we search the right run, not the whole system.",
      },
      {
        title: "Trace and pinpoint",
        detail:
          "Line tracing, acoustic correlation, and ground microphones narrow the leak to a single point.",
      },
      {
        title: "Mark and report",
        detail:
          "We flag the exact location and depth and hand you a written report with photos for the repair.",
      },
    ],
    whyFast:
      "A pressurized water leak runs around the clock, wasting water and money while it erodes soil, undermines foundations, and rots framing. Locating it quickly keeps both the loss and the eventual repair small.",
    faqs: [
      {
        q: "How do you find a water leak without digging?",
        a: "We trace the line, then use acoustic correlation and ground microphones to pinpoint the leak through the surface. Only after the exact spot is marked is a single small hole opened for the repair — no trenching the entire line.",
      },
      {
        q: "How much does water leak detection cost in Bradenton?",
        a: "Water leak detection in Bradenton typically runs $250 to $450 depending on line length and access. You receive a flat quote before any work begins, so there are no hourly surprises.",
      },
      {
        q: "How do I know my water line is leaking?",
        a: "Watch for a meter that spins with everything off, soggy or extra-green yard patches, dropping pressure, and a rising bill. Any one of these can signal a hidden water line leak we can locate.",
      },
      {
        q: "Can you detect irrigation leaks too?",
        a: "Yes. Irrigation leaks are one of our most common calls in Bradenton. We isolate and test each zone, then pinpoint the leak so only the failed section needs to be dug up and repaired.",
      },
      {
        q: "How fast can you come out?",
        a: "We offer same-day and next-day water leak detection across Bradenton and Manatee County, and we prioritize active leaks that are flooding or causing damage.",
      },
      {
        q: "Do you repair the leak too?",
        a: "Our specialty is fast, accurate detection. We provide a written report you can hand to any licensed plumber, and we can coordinate the repair with trusted local partners once the leak is pinpointed.",
      },
    ],
    relatedServices: ["water-line-leak-detection", "water-leak-repair"],
    imageKey: "waterMoisture",
  },
  {
    slug: "slab-leak-detection-bradenton-fl",
    navLabel: "Slab Leak Detection",
    title: "Slab Leak Detection in Bradenton, FL",
    short:
      "Find leaks under your concrete foundation to the inch — no jackhammering required.",
    icon: "🏠",
    keyword: "slab leak detection Bradenton",
    metaDescription:
      "Slab leak detection in Bradenton, FL. We locate leaks under your concrete foundation to within inches using acoustic, thermal, and pressure testing. Same-day.",
    quickAnswer:
      "Slab leak detection in Bradenton locates water leaks in pipes beneath your concrete foundation without demolition. Bradenton Leak Scan uses acoustic sensors, thermal imaging, and pressure testing to pinpoint the leak to within inches — usually the same day — so repairs are targeted and far cheaper than exploratory jackhammering.",
    intro: [
      "A slab leak is a leak in a pressurized pipe running beneath your home's concrete slab. Slab leak detection is the non-invasive process of finding exactly where that pipe is leaking before any concrete is opened.",
      "Bradenton and Manatee County are full of slab-on-grade homes on sandy, shifting soil, often plumbed with aging copper — a combination that makes slab leaks one of the most common calls we get.",
    ],
    signs: [
      "An unexplained spike in your water bill",
      "Warm or damp spots on the floor",
      "The sound of running water when everything is off",
      "Cracks in tile, baseboards, or drywall",
      "Low water pressure throughout the house",
    ],
    whatWeDo: [
      {
        title: "Pressure test",
        detail:
          "We isolate the plumbing to confirm a leak and measure how fast it is losing water.",
      },
      {
        title: "Acoustic & thermal scan",
        detail:
          "Ground microphones and infrared cameras narrow the leak to a small area of the slab.",
      },
      {
        title: "Pinpoint & mark",
        detail:
          "We mark the precise spot and provide a written report with photos for your plumber.",
      },
    ],
    whyFast:
      "A slab leak runs 24/7, wasting water while it saturates the soil under your foundation and feeds mold inside walls. Fast detection limits the damage and keeps the eventual slab leak repair small.",
    faqs: [
      {
        q: "How do you find a slab leak without breaking the concrete?",
        a: "We use acoustic ground microphones, thermal imaging, and pressure testing to locate the leak through the slab. Nothing is opened until we've marked the exact spot, so any repair is a small, targeted cut rather than guesswork demolition.",
      },
      {
        q: "How much does slab leak detection cost in Bradenton?",
        a: "Most residential slab leak detection visits in Bradenton fall between $300 and $500 depending on home size and access. You get an exact flat quote before any work begins.",
      },
      {
        q: "What are the first signs of a slab leak?",
        a: "The earliest signs are usually a jump in your water bill, the sound of running water when fixtures are off, and warm or damp spots on the floor. Cracked tile and low water pressure often follow.",
      },
      {
        q: "Can a slab leak damage my foundation?",
        a: "Yes. Water escaping under the slab erodes the soil supporting your foundation, which can lead to settling, cracks, and uneven floors. Early detection prevents most structural damage.",
      },
      {
        q: "How long does slab leak detection take?",
        a: "Most slab leak detection appointments take one to two hours. We can often schedule same-day or next-day visits across Bradenton and Manatee County.",
      },
      {
        q: "Do you also repair the slab leak?",
        a: "Our specialty is fast, accurate detection. We provide a detailed report and can coordinate the slab leak repair with trusted licensed partners once the leak is pinpointed.",
      },
    ],
    relatedServices: ["slab-leak-detection", "slab-leak-repair"],
    imageKey: "slabAcoustic",
    imageAlt:
      "Bradenton LeakScan technician using acoustic equipment for slab leak detection in Bradenton FL",
  },
  {
    slug: "emergency-leak-detection-bradenton-fl",
    navLabel: "Emergency Leak Detection",
    title: "Emergency Leak Detection in Bradenton, FL",
    short:
      "Active leak flooding your home or yard? Same-day, priority leak location across Manatee County.",
    icon: "🚨",
    keyword: "emergency leak detection Bradenton",
    metaDescription:
      "Emergency leak detection in Bradenton, FL. Active leak flooding your home? We prioritize same-day, non-invasive leak location across Manatee County. Call now.",
    quickAnswer:
      "Emergency leak detection in Bradenton is priority, same-day location of an active leak that is flooding or damaging your property. Bradenton Leak Scan responds fast, shuts down guesswork with acoustic, thermal, and pressure equipment, and pinpoints the source so the leak can be stopped and repaired before the damage spreads.",
    intro: [
      "When water is actively flooding a floor, wall, or yard, every hour matters. Emergency leak detection prioritizes your call so the source is found and isolated before more damage is done.",
      "Bradenton Leak Scan serves all of Manatee County, and we move active-leak calls to the front of the schedule for the fastest possible response.",
    ],
    signs: [
      "Water actively pooling on floors or in the yard",
      "You've had to shut off your main to stop flooding",
      "A sudden, dramatic drop in water pressure",
      "Water coming through a ceiling or wall",
      "A water meter spinning fast with everything off",
    ],
    whatWeDo: [
      {
        title: "Rapid response",
        detail:
          "We prioritize active-leak calls for same-day arrival across Bradenton and Manatee County.",
      },
      {
        title: "Locate and isolate",
        detail:
          "We pinpoint the source fast so the right line can be shut off and the flooding stopped.",
      },
      {
        title: "Document for the claim",
        detail:
          "You get photos and a written report to support insurance and the repair that follows.",
      },
    ],
    whyFast:
      "An active leak can ruin flooring, drywall, and belongings within hours and quickly grows into a mold problem. Immediate detection is the difference between a small repair and a major restoration.",
    faqs: [
      {
        q: "What should I do first during a water emergency?",
        a: "Shut off your main water valve to stop the flooding, move valuables away from the water, and call us. We'll prioritize your call and locate the source so it can be repaired before more damage occurs.",
      },
      {
        q: "Do you offer same-day emergency service?",
        a: "Yes. We move active-leak calls to the front of the schedule for same-day response across Bradenton and Manatee County, including the island communities.",
      },
      {
        q: "How much does emergency leak detection cost?",
        a: "Emergency and after-hours scheduling can carry a priority fee on top of standard detection pricing. We give you a clear quote up front so you know the cost before we begin.",
      },
      {
        q: "Will this help my insurance claim?",
        a: "Yes. Our written report with photos and the exact leak location documents the source and damage, which supports homeowners insurance and home-warranty claims for covered water damage.",
      },
      {
        q: "Can you find the leak if my main is already off?",
        a: "Yes. We can pressurize and test individual lines to locate the leak even after you've shut the main, then mark the spot for a targeted repair.",
      },
      {
        q: "Do you repair the emergency leak too?",
        a: "We specialize in locating the leak fast. We provide a report for any licensed plumber and can coordinate emergency repair with trusted local partners once the source is pinpointed.",
      },
    ],
    relatedServices: ["slab-leak-detection", "water-line-leak-detection"],
    imageKey: "emergencyVan",
  },
  {
    slug: "hidden-leak-detection-bradenton-fl",
    navLabel: "Hidden Leak Detection",
    title: "Hidden Leak Detection in Bradenton, FL",
    short:
      "Find concealed leaks behind walls, under floors, and inside ceilings before they cause damage.",
    icon: "🔍",
    keyword: "hidden leak detection Bradenton",
    metaDescription:
      "Hidden leak detection in Bradenton, FL. We find concealed leaks behind walls, under floors, and in ceilings using thermal imaging and moisture mapping. Same-day.",
    quickAnswer:
      "Hidden leak detection in Bradenton finds concealed leaks behind walls, under floors, and inside ceilings without tearing things open. Bradenton Leak Scan combines thermal imaging, moisture mapping, and acoustic listening to reveal the exact source of a hidden leak — so you fix one small spot instead of guessing.",
    intro: [
      "A hidden leak is one you can't see — water escaping behind drywall, beneath flooring, or above a ceiling, often showing up only as a stain, a smell, or a higher bill. Hidden leak detection locates the source without opening walls on a hunch.",
      "Bradenton's humidity makes concealed moisture especially damaging, feeding mold quickly once a hidden leak takes hold.",
    ],
    signs: [
      "Water stains or discoloration on walls or ceilings",
      "A musty smell with no visible source",
      "Peeling paint, bubbling drywall, or warped flooring",
      "A water bill that climbed with no change in use",
      "Mold or mildew returning after you clean it",
    ],
    whatWeDo: [
      {
        title: "Thermal scan",
        detail:
          "Infrared cameras reveal temperature differences from moisture hidden behind surfaces.",
      },
      {
        title: "Moisture mapping",
        detail:
          "Moisture meters trace the wettest path back to the source of the hidden leak.",
      },
      {
        title: "Confirm & mark",
        detail:
          "Acoustic and pressure testing confirm the source, which we mark and document for repair.",
      },
    ],
    whyFast:
      "A hidden leak works silently behind your finishes, rotting framing and feeding mold long before you see damage. Finding it early keeps the repair to a small patch instead of a wall rebuild.",
    faqs: [
      {
        q: "How do you find a leak hidden behind a wall?",
        a: "We use thermal imaging to spot the cool, damp signature of moisture behind the surface, then moisture meters and acoustic listening to trace it to the exact source — all without opening the wall until the spot is marked.",
      },
      {
        q: "What causes hidden leaks in a home?",
        a: "Common causes are failed supply lines inside walls, leaking shower pans and drain connections, roof and window intrusions, and condensation from HVAC lines. We identify which one is behind your stain or smell.",
      },
      {
        q: "How much does hidden leak detection cost in Bradenton?",
        a: "Hidden leak detection in Bradenton generally runs $250 to $450 depending on access and how much area we need to scan. You get a flat quote before we start.",
      },
      {
        q: "Can a small hidden leak really cause mold?",
        a: "Yes. In Florida's humidity, even a slow concealed leak keeps drywall and framing damp enough to grow mold within days. Early detection is the best way to prevent it.",
      },
      {
        q: "Will you damage my walls to find it?",
        a: "No. The entire point of our equipment is to locate the leak non-invasively. Any opening for repair is a small, precise cut at the marked spot rather than exploratory demolition.",
      },
      {
        q: "How quickly can you come out?",
        a: "We offer same-day and next-day hidden leak detection across Bradenton and Manatee County, and prioritize active leaks causing visible damage.",
      },
    ],
    relatedServices: ["water-line-leak-detection", "slab-leak-detection"],
    imageKey: "hiddenThermal",
  },
  {
    slug: "underground-leak-detection-bradenton-fl",
    navLabel: "Underground Leak Detection",
    title: "Underground Leak Detection in Bradenton, FL",
    short:
      "Locate buried main, service, and irrigation line leaks to a single dig spot.",
    icon: "🌐",
    keyword: "underground leak detection Bradenton",
    metaDescription:
      "Underground leak detection in Bradenton, FL. We trace and pinpoint buried water main and irrigation line leaks to a single spot — no trenching. Same-day service.",
    quickAnswer:
      "Underground leak detection in Bradenton finds leaks in buried water mains, service lines, and irrigation pipes without trenching your yard. Bradenton Leak Scan uses line tracing, acoustic correlation, and ground microphones to pinpoint the leak to one dig spot — stopping water waste and protecting your landscaping, driveway, and foundation.",
    intro: [
      "Underground leak detection locates breaks in the pressurized pipes buried between your meter, your home, and your irrigation system. Finding the leak electronically means digging is limited to one targeted spot.",
      "Sandy Manatee County soil hides underground leaks well — water often travels far before it surfaces — so a leak can waste thousands of gallons before you notice.",
    ],
    signs: [
      "A constantly running water meter",
      "Wet or extra-green patches in the lawn",
      "Pooling water in the yard or driveway cracks",
      "Low water pressure in the house",
      "Irrigation zones that never fully dry out",
    ],
    whatWeDo: [
      {
        title: "Trace the line",
        detail:
          "We map where your buried lines actually run so we search the correct path.",
      },
      {
        title: "Correlate the leak",
        detail:
          "Acoustic correlators measure the leak sound between two points to calculate its exact position.",
      },
      {
        title: "Mark depth & spot",
        detail:
          "We flag the precise dig location and depth so your plumber opens one small hole.",
      },
    ],
    whyFast:
      "An underground leak runs continuously and silently, eroding soil, cracking driveways, undermining foundations, and killing landscaping. Locating it quickly keeps both the water loss and the repair small.",
    faqs: [
      {
        q: "How do you find an underground leak without digging up the yard?",
        a: "We trace the buried line, then use acoustic correlation and ground microphones to pinpoint the leak. Only after the spot is marked is a single small hole dug — never the whole line.",
      },
      {
        q: "How much does underground leak detection cost in Bradenton?",
        a: "Underground leak detection in Bradenton typically runs $250 to $450 depending on line length and access. We provide a flat quote up front before any work starts.",
      },
      {
        q: "Does a moving meter always mean an underground leak?",
        a: "If every fixture, appliance, and irrigation valve is off and the meter still moves, you almost certainly have a leak on your side of the meter. We can find exactly where it is.",
      },
      {
        q: "Can you locate irrigation line leaks?",
        a: "Yes. We isolate and test each irrigation zone, then pinpoint the leak so only the failed section is dug up and repaired rather than the entire system.",
      },
      {
        q: "How deep can you locate a leak?",
        a: "Our line tracing and correlation equipment marks both the position and the depth of buried leaks, so the excavation is precise and the repair targeted.",
      },
      {
        q: "Will you also repair the underground line?",
        a: "We specialize in locating the leak. We provide a written report and can coordinate the excavation and repair with trusted licensed partners once it's pinpointed.",
      },
    ],
    relatedServices: ["water-line-leak-detection", "water-leak-repair"],
    imageKey: "undergroundLocator",
  },
  {
    slug: "pipe-leak-detection-bradenton-fl",
    navLabel: "Pipe Leak Detection",
    title: "Pipe Leak Detection in Bradenton, FL",
    short:
      "Locate leaking supply and drain pipes inside walls, under slabs, and underground.",
    icon: "🔧",
    keyword: "pipe leak detection Bradenton FL",
    metaDescription:
      "Pipe leak detection in Bradenton, FL. We pinpoint leaking supply and drain pipes inside walls, under slabs, and underground using acoustic and pressure testing.",
    quickAnswer:
      "Pipe leak detection in Bradenton pinpoints leaks in supply and drain pipes — inside walls, under the slab, or buried in the yard — without demolition. Bradenton Leak Scan uses acoustic listening, pressure testing, and line tracing to find the failed pipe to within inches so the repair targets one small spot.",
    intro: [
      "Pipe leak detection is the process of finding exactly where a water or drain pipe has failed, wherever it runs. Locating it first means a plumber repairs one marked section instead of opening walls or floors by guesswork.",
      "Many Bradenton homes have decades-old copper and galvanized pipe that hard water has worn thin, making pinhole pipe leaks a frequent problem across Manatee County.",
    ],
    signs: [
      "Damp spots or stains on walls, floors, or ceilings",
      "A drop in water pressure",
      "The sound of running or dripping water in walls",
      "A water bill creeping up over time",
      "Corrosion, rust, or moisture at exposed pipe joints",
    ],
    whatWeDo: [
      {
        title: "Isolate the line",
        detail:
          "Pressure testing confirms which pipe — supply, hot, or drain — is leaking.",
      },
      {
        title: "Acoustic pinpoint",
        detail:
          "Ground microphones and correlators trace the escaping water to a single point.",
      },
      {
        title: "Mark & document",
        detail:
          "We mark the failed section and provide a report with photos for the repair.",
      },
    ],
    whyFast:
      "A leaking pipe rarely heals — it worsens, soaking framing, raising your bill, and inviting mold. Locating it early keeps the repair to a single coupling or short section instead of a repipe.",
    faqs: [
      {
        q: "How do you locate a leaking pipe inside a wall?",
        a: "We pressure-test to confirm which line is leaking, then use acoustic listening and correlation to trace the escaping water to one point. The wall is only opened at the marked spot for repair.",
      },
      {
        q: "How much does pipe leak detection cost in Bradenton?",
        a: "Pipe leak detection in Bradenton generally runs $250 to $450 depending on the pipe's location and access. You receive a flat quote before any work begins.",
      },
      {
        q: "What causes pinhole pipe leaks?",
        a: "Pinhole leaks usually come from corrosion in aging copper or galvanized pipe, accelerated by hard water and high pressure — both common in Bradenton's older homes.",
      },
      {
        q: "Can you tell which pipe is leaking?",
        a: "Yes. By isolating and pressure-testing the supply, hot, and drain lines separately, we identify exactly which pipe has failed before pinpointing the spot.",
      },
      {
        q: "Should I repair or repipe a leaking line?",
        a: "A single leak in otherwise sound pipe is usually best spot-repaired. If the line is old and likely to leak again, repiping that run can cost less over time. We help you weigh the pipe's age and condition.",
      },
      {
        q: "How fast can you respond?",
        a: "We offer same-day and next-day pipe leak detection across Bradenton and Manatee County and prioritize active leaks causing damage.",
      },
    ],
    relatedServices: ["water-line-leak-detection", "water-leak-repair"],
    imageKey: "pipeUnderSink",
  },
  {
    slug: "ceiling-leak-detection-bradenton-fl",
    navLabel: "Ceiling Leak Detection",
    title: "Ceiling Leak Detection in Bradenton, FL",
    short:
      "Trace ceiling stains back to their true source — plumbing, roof, or HVAC — before they spread.",
    icon: "🏚️",
    keyword: "ceiling leak detection Bradenton",
    metaDescription:
      "Ceiling leak detection in Bradenton, FL. We trace ceiling stains and drips to the true source — plumbing, roof, or HVAC — with thermal imaging and moisture mapping.",
    quickAnswer:
      "Ceiling leak detection in Bradenton traces water stains and drips back to their real source — a supply line, drain, roof, or HVAC condensate line — without tearing out the ceiling. Bradenton Leak Scan uses thermal imaging and moisture mapping to find exactly where the water enters so one targeted repair solves it.",
    intro: [
      "A ceiling stain is a symptom, not the source — water often travels along joists before it drips, so the wet spot is rarely above the leak. Ceiling leak detection finds where the water actually originates.",
      "Between second-floor plumbing, roof intrusions, and sweating AC lines in Bradenton's humidity, ceiling leaks have several possible causes that we systematically rule in or out.",
    ],
    signs: [
      "Brown or yellow stains spreading on the ceiling",
      "Active dripping or sagging drywall overhead",
      "Bubbling paint or texture on the ceiling",
      "A musty smell in an upstairs room or hallway",
      "Stains that reappear after rain or AC use",
    ],
    whatWeDo: [
      {
        title: "Rule out the source",
        detail:
          "We check plumbing above, the roof, and HVAC condensate lines to find the true origin.",
      },
      {
        title: "Thermal & moisture scan",
        detail:
          "Infrared and moisture meters trace the wet path back to where water enters.",
      },
      {
        title: "Pinpoint & report",
        detail:
          "We mark the source and document it so the repair is targeted, not exploratory.",
      },
    ],
    whyFast:
      "A ceiling leak threatens drywall, insulation, and the structure above it, and a saturated ceiling can eventually collapse. Finding the source early keeps repairs to a small patch.",
    faqs: [
      {
        q: "Why is my ceiling stain not directly under the leak?",
        a: "Water travels along joists, ducts, and wiring before it drips, so it often surfaces feet away from the actual source. That's why we trace the moisture back rather than open the ceiling under the stain.",
      },
      {
        q: "Is my ceiling leak from plumbing or the roof?",
        a: "It can be either — or HVAC condensate. We test the plumbing above, inspect for roof intrusion, and check AC lines, then use thermal imaging to confirm which one is the source.",
      },
      {
        q: "How much does ceiling leak detection cost in Bradenton?",
        a: "Ceiling leak detection in Bradenton generally runs $250 to $450 depending on access and area scanned. You get a flat quote before we begin.",
      },
      {
        q: "Should I cut open the ceiling to find the leak?",
        a: "Not blindly. Our thermal and moisture equipment locates the source first, so any opening is a small, precise cut at the marked spot rather than guesswork that may miss the true origin.",
      },
      {
        q: "Can a ceiling leak cause a collapse?",
        a: "Yes. Saturated drywall loses strength and can sag and fall, especially with repeated wetting. Early detection prevents both collapse and mold in the cavity above.",
      },
      {
        q: "How soon can you come out?",
        a: "We offer same-day and next-day ceiling leak detection across Bradenton and Manatee County and prioritize active drips.",
      },
    ],
    relatedServices: ["water-line-leak-detection", "slab-leak-detection"],
    imageKey: "ceilingStain",
  },
  {
    slug: "wall-leak-detection-bradenton-fl",
    navLabel: "Wall Leak Detection",
    title: "Wall Leak Detection in Bradenton, FL",
    short:
      "Find leaks inside walls — supply lines, shower pans, and intrusions — without opening drywall.",
    icon: "🧱",
    keyword: "wall leak detection Bradenton",
    metaDescription:
      "Wall leak detection in Bradenton, FL. We locate leaks inside walls — supply lines, shower pans, and intrusions — with thermal imaging and moisture mapping. Same-day.",
    quickAnswer:
      "Wall leak detection in Bradenton locates water leaking inside your walls — from supply lines, shower pans, or exterior intrusions — without opening the drywall. Bradenton Leak Scan uses thermal imaging, moisture meters, and acoustic listening to pinpoint the source so a single, precise repair stops the damage.",
    intro: [
      "Wall leak detection finds water escaping inside a wall cavity, where it can soak studs and insulation unseen. Locating it precisely means the drywall is only opened at the source, not torn out section by section.",
      "Common culprits in Bradenton homes include corroded in-wall supply lines, failing shower pans and tile, and stucco or window intrusions driven by storms and humidity.",
    ],
    signs: [
      "Damp, discolored, or bubbling drywall",
      "Peeling paint or wallpaper on one area of wall",
      "A musty smell near a wall or baseboard",
      "Warm spots on a wall over a hot-water line",
      "Mold or staining at the base of a wall",
    ],
    whatWeDo: [
      {
        title: "Scan the cavity",
        detail:
          "Thermal imaging reveals the cool, damp signature of moisture inside the wall.",
      },
      {
        title: "Map the moisture",
        detail:
          "Moisture meters trace the wettest path to isolate where water is entering.",
      },
      {
        title: "Confirm & mark",
        detail:
          "Pressure and acoustic testing confirm the source, which we mark for a targeted repair.",
      },
    ],
    whyFast:
      "Water inside a wall rots studs, ruins insulation, and grows mold in the enclosed cavity — all hidden from view. Early detection turns a wall rebuild into a small, targeted repair.",
    faqs: [
      {
        q: "How do you detect a leak inside a wall?",
        a: "We scan the wall with thermal imaging to spot hidden moisture, then use moisture meters and acoustic listening to trace it to the source. The drywall is only opened at the marked spot.",
      },
      {
        q: "What usually causes a leak inside a wall?",
        a: "The most common causes are corroded in-wall supply lines, failed shower pans and tile grout, drain connections, and exterior intrusions through stucco or around windows. We identify which applies.",
      },
      {
        q: "How much does wall leak detection cost in Bradenton?",
        a: "Wall leak detection in Bradenton generally runs $250 to $450 depending on access and the area scanned. You receive a flat quote before any work begins.",
      },
      {
        q: "Will you have to tear out my wall?",
        a: "No. Our equipment locates the leak non-invasively, so any opening is a small, precise cut at the source rather than removing whole sections of drywall to search.",
      },
      {
        q: "Is a damp wall a sign of a plumbing leak?",
        a: "Often, yes — but it can also be an intrusion or condensation. We confirm the source with thermal and pressure testing so you repair the right problem.",
      },
      {
        q: "How fast can you come out?",
        a: "We offer same-day and next-day wall leak detection across Bradenton and Manatee County and prioritize leaks causing active damage.",
      },
    ],
    relatedServices: ["water-line-leak-detection", "slab-leak-detection"],
    imageKey: "wallDrywall",
  },
  {
    slug: "pool-leak-detection-bradenton-fl",
    navLabel: "Pool Leak Detection",
    title: "Pool Leak Detection in Bradenton, FL",
    short:
      "Stop losing water, chemicals, and heat — we find pool and spa leaks fast.",
    icon: "🏊",
    keyword: "pool leak detection Bradenton",
    metaDescription:
      "Pool leak detection in Bradenton, FL. We find where your pool or spa loses water using dye testing, pressure testing, and equipment inspection. Same-day service.",
    quickAnswer:
      "Pool leak detection in Bradenton finds where your pool or spa is losing water using dye testing, pressure testing, and equipment inspection. Bradenton Leak Scan separates a real leak from normal Florida evaporation and pinpoints cracks, plumbing breaks, or fitting failures — saving thousands of gallons of water, chemicals, and heat each season.",
    intro: [
      "Pool leak detection finds where a swimming pool, spa, or its plumbing is losing water, separating a true leak from evaporation and locating the source in the shell, lines, skimmer, returns, or lights.",
      "With backyard pools in nearly every Bradenton neighborhood and a long swim season, pool leaks are both common and expensive here — especially salt-chlorinated pools near the coast.",
    ],
    signs: [
      "Adding water more than once a week",
      "Cracks in the deck or pool shell",
      "Soggy or sinking areas around the pool",
      "Air bubbles from the return jets",
      "Rising water, chemical, or heating costs",
    ],
    whatWeDo: [
      {
        title: "Bucket & dye test",
        detail:
          "We confirm a true leak versus evaporation and dye-test the shell for cracks.",
      },
      {
        title: "Pressure test lines",
        detail:
          "Each plumbing line is isolated and pressurized to find underground breaks.",
      },
      {
        title: "Locate & report",
        detail:
          "We mark the leak location and recommend the least-invasive repair.",
      },
    ],
    whyFast:
      "A leaking pool wastes thousands of gallons and dollars in chemicals and heat every season while it erodes the ground around the shell, which can crack decking. The sooner it's found, the less it costs.",
    faqs: [
      {
        q: "Is my pool leaking or just evaporating?",
        a: "Run a bucket test: float a bucket of pool water on a step and compare the drop inside it to the pool over 24 hours. If the pool drops noticeably more, you have a leak — and we can find it.",
      },
      {
        q: "How much does pool leak detection cost in Bradenton?",
        a: "Pool leak detection in Bradenton generally runs $300 to $500 depending on pool size, features, and plumbing complexity. You get a flat quote before we begin.",
      },
      {
        q: "How much water loss is normal in Florida?",
        a: "Normal evaporation is roughly a quarter-inch per day. Losing half an inch or more daily, or adding water more than weekly, usually points to a leak.",
      },
      {
        q: "Where do pool leaks usually happen?",
        a: "The most common spots are the skimmer, return fittings, light niches, plumbing lines, and cracks in the shell or tile line. We test all of these systematically.",
      },
      {
        q: "Do I have to drain my pool for detection?",
        a: "Usually not. Most pool leak detection is done with the pool full using dye and pressure testing. We'll tell you in advance if any draining is needed.",
      },
      {
        q: "How quickly can you come out?",
        a: "We offer same-day and next-day pool leak detection across Bradenton and Manatee County, including Anna Maria, Holmes Beach, and Longboat Key.",
      },
    ],
    relatedServices: ["pool-leak-detection"],
    imageKey: "poolDyeTest",
  },
  {
    slug: "commercial-leak-detection-bradenton-fl",
    navLabel: "Commercial Leak Detection",
    title: "Commercial Leak Detection in Bradenton, FL",
    short:
      "Minimize downtime — fast, non-invasive leak location for businesses and multi-unit properties.",
    icon: "🏢",
    keyword: "commercial leak detection Bradenton",
    metaDescription:
      "Commercial leak detection in Bradenton, FL. Fast, non-invasive leak location for businesses, HOAs, and multi-unit properties — minimize downtime and water loss.",
    quickAnswer:
      "Commercial leak detection in Bradenton locates leaks in businesses, HOAs, and multi-unit properties without disrupting operations. Bradenton Leak Scan uses acoustic, thermal, and pressure equipment to pinpoint slab, supply, and underground leaks fast — minimizing downtime, water loss, and the liability of an undiagnosed leak on your property.",
    intro: [
      "Commercial leak detection serves offices, retail, restaurants, HOAs, and multi-unit buildings, where a hidden leak means rising bills, tenant complaints, and liability. We locate the source quickly and discreetly so operations keep running.",
      "Across Manatee County we work with property managers and business owners to trace leaks through complex commercial plumbing and large irrigation systems.",
    ],
    signs: [
      "A commercial water bill that keeps climbing",
      "Tenant or staff reports of damp spots or low pressure",
      "Constant flow on the meter after hours",
      "Stained ceilings or floors in common areas",
      "Soggy ground around the building or parking lot",
    ],
    whatWeDo: [
      {
        title: "Scope the system",
        detail:
          "We map the commercial plumbing and isolate the zone or unit that's losing water.",
      },
      {
        title: "Pinpoint discreetly",
        detail:
          "Acoustic, thermal, and pressure testing locate the leak with minimal disruption to operations.",
      },
      {
        title: "Document for stakeholders",
        detail:
          "You get a written report with photos for owners, tenants, and insurers.",
      },
    ],
    whyFast:
      "In a commercial setting a leak compounds quickly — water loss, property damage, downtime, and liability all grow by the day. Fast, discreet detection protects both the building and the business inside it.",
    faqs: [
      {
        q: "Do you work with property managers and HOAs?",
        a: "Yes. We regularly serve property managers, HOAs, and business owners across Manatee County, tracing leaks through complex commercial plumbing and large irrigation systems and reporting to all stakeholders.",
      },
      {
        q: "How much does commercial leak detection cost in Bradenton?",
        a: "Commercial leak detection is quoted per project based on the building size, system complexity, and access. We provide a clear, flat quote up front before any work begins.",
      },
      {
        q: "Can you detect leaks without closing the business?",
        a: "Usually, yes. Our equipment is non-invasive, so we can locate most leaks with minimal disruption and schedule around your hours when needed to avoid downtime.",
      },
      {
        q: "Can you locate leaks in a multi-unit building?",
        a: "Yes. We isolate and test individual units and risers to determine which one is leaking, then pinpoint the source so the repair is targeted to one spot.",
      },
      {
        q: "Will I get documentation for insurance?",
        a: "Yes. You receive a written report with photos and the exact leak location, which supports commercial insurance claims and tenant or owner communications.",
      },
      {
        q: "How fast can you respond to a commercial leak?",
        a: "We prioritize active commercial leaks for same-day response across Bradenton and Manatee County to limit downtime and damage.",
      },
    ],
    relatedServices: ["water-line-leak-detection", "sewer-camera-inspection"],
    imageKey: "commercialMechanical",
  },
];

export function getLandingService(slug: string): LandingService | undefined {
  return landingServices.find((s) => s.slug === slug);
}
