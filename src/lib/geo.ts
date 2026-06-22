/**
 * Generative Engine Optimization (GEO) content: entity-rich definitions and
 * comparison sections used across the site and on /leak-detection-guide.
 */

export type Definition = {
  id: string;
  term: string;
  /** 40–70 word featured-snippet definition. */
  answer: string;
  body: string[];
};

export const definitions: Definition[] = [
  {
    id: "what-is-leak-detection",
    term: "What Is Leak Detection?",
    answer:
      "Leak detection is the process of locating a hidden water leak in a building's plumbing, slab, pool, or underground lines without unnecessary demolition. Specialists like Bradenton Leak Scan use acoustic equipment, thermal imaging, and pressure testing to pinpoint the exact source so repairs are targeted, fast, and far less destructive than exploratory digging.",
    body: [
      "Leak detection is a diagnostic service, distinct from leak repair. Its goal is to find precisely where water is escaping — to within inches — before any concrete is opened or any ground is dug.",
      "In Bradenton and Manatee County, leak detection covers slab leaks, water line leaks, pool leaks, and sewer line problems. The technician confirms a leak exists, locates it with electronic equipment, and documents it in a report you can hand to a plumber.",
    ],
  },
  {
    id: "what-is-water-leak-detection",
    term: "What Is Water Leak Detection?",
    answer:
      "Water leak detection is the process of finding leaks in pressurized water supply lines — inside walls, under slabs, or buried in the yard — using acoustic listening, line tracing, and pressure testing. It pinpoints the leak location so a plumber can make a single targeted repair instead of opening walls or trenching the entire line.",
    body: [
      "Water leak detection focuses on the pressurized side of your plumbing: the lines that carry potable water from the meter into and through your home, plus irrigation supply lines.",
      "Because these lines are under constant pressure, even a small leak runs continuously, making early water leak detection in Bradenton one of the best ways to control water waste and prevent property damage.",
    ],
  },
  {
    id: "what-is-slab-leak-detection",
    term: "What Is Slab Leak Detection?",
    answer:
      "Slab leak detection locates water leaks in pipes running beneath a home's concrete foundation. Using acoustic sensors, thermal imaging, and pressure testing, a specialist pinpoints the leak through the slab — within inches — so only a small section of concrete is opened for repair, protecting the foundation, flooring, and structure from further water damage.",
    body: [
      "A slab leak occurs in the supply, hot-water, or drain lines embedded in or beneath the concrete slab a home sits on. These leaks are hidden and can cause major structural and mold damage if left undetected.",
      "Slab leak detection is especially common in Bradenton's many slab-on-grade homes, where shifting sandy soil and aging copper plumbing make under-slab leaks frequent.",
    ],
  },
  {
    id: "what-is-pool-leak-detection",
    term: "What Is Pool Leak Detection?",
    answer:
      "Pool leak detection finds where a swimming pool or spa is losing water using bucket tests, dye testing, pressure testing, and equipment inspection. It separates real leaks from normal evaporation and pinpoints cracks, plumbing breaks, or failed fittings — saving water, chemicals, and heat, and preventing erosion around the pool.",
    body: [
      "Pool leak detection examines both the pool shell (cracks, tile line, fittings) and the underground plumbing (suction and return lines, skimmer, returns, lights).",
      "In Florida's long swim season, even a small pool leak wastes thousands of gallons and significant chemical and heating costs, so accurate detection pays for itself quickly.",
    ],
  },
  {
    id: "what-is-underground-leak-detection",
    term: "What Is Underground Leak Detection?",
    answer:
      "Underground leak detection locates leaks in buried water, irrigation, or sewer lines without trenching. Technicians trace the pipe's path electronically, then use acoustic correlation and ground microphones to pinpoint the leak to a single dig spot — limiting excavation and protecting lawns, driveways, and foundations from water erosion.",
    body: [
      "Underground leaks are difficult to find because water travels through soil before surfacing, often far from the actual break. Sandy Manatee County soil makes this especially true.",
      "By locating the leak precisely before digging, underground leak detection turns a whole-yard excavation into a single small repair hole.",
    ],
  },
  {
    id: "what-is-acoustic-leak-detection",
    term: "What Is Acoustic Leak Detection?",
    answer:
      "Acoustic leak detection finds leaks by listening for the sound of pressurized water escaping a pipe. Using ground microphones and electronic amplifiers, a technician traces the leak noise to its loudest point — its source — through concrete, soil, or flooring, allowing precise location without breaking anything until the spot is confirmed.",
    body: [
      "Water forced through a leak creates a distinct hiss or rushing sound that travels along the pipe and through surrounding material. Acoustic equipment amplifies and filters that sound.",
      "Acoustic leak detection is the core method for slab leaks and underground water lines, often combined with correlation and thermal imaging for accuracy.",
    ],
  },
  {
    id: "what-is-thermal-imaging-leak-detection",
    term: "What Is Thermal Imaging Leak Detection?",
    answer:
      "Thermal imaging leak detection uses an infrared camera to reveal temperature differences caused by escaping water. A hot- or cold-water leak changes the surface temperature of floors, walls, or slabs, showing up as a distinct pattern on the camera — helping a technician narrow down a hidden leak quickly and non-invasively.",
    body: [
      "Thermal imaging doesn't see water directly; it sees the heat signature water creates or removes. A hot-water slab leak warms the floor above it, while evaporation can cool a surface.",
      "It's a fast scanning method used to narrow the search area before confirming the exact point with acoustic equipment.",
    ],
  },
  {
    id: "what-is-pressure-testing",
    term: "What Is Pressure Testing?",
    answer:
      "Pressure testing confirms whether a plumbing or pool line is leaking by isolating a section, sealing it, and applying measured pressure. If the pressure drops, that line is leaking. It tells the technician which line is at fault — supply, hot, drain, or a specific pool plumbing run — before pinpointing the exact location.",
    body: [
      "Pressure testing is a confirmation and isolation step. It answers \"is there a leak, and which line is it in?\" before acoustic and thermal tools answer \"exactly where?\"",
      "For pools, each suction and return line is pressure-tested separately to isolate underground plumbing leaks.",
    ],
  },
  {
    id: "what-is-moisture-mapping",
    term: "What Is Moisture Mapping?",
    answer:
      "Moisture mapping uses moisture meters and infrared cameras to chart where water has spread through floors, walls, and building materials. It shows the extent of water intrusion from a leak, helping identify the likely source and document affected areas for repair and insurance claims — without opening up the structure.",
    body: [
      "Moisture mapping complements leak detection by showing how far water has migrated from the source, which guides both the search and the eventual drying and repair.",
      "The resulting map and readings are valuable documentation for homeowners insurance and restoration claims.",
    ],
  },
];

export function getDefinition(id: string): Definition | undefined {
  return definitions.find((d) => d.id === id);
}

export type Comparison = {
  id: string;
  title: string;
  intro: string;
  left: { label: string; points: string[] };
  right: { label: string; points: string[] };
  takeaway: string;
};

export const comparisons: Comparison[] = [
  {
    id: "leak-detection-vs-general-plumbing",
    title: "Leak Detection vs General Plumbing",
    intro:
      "Both deal with pipes, but they solve different problems. Leak detection finds the precise source of a hidden leak; general plumbing installs, maintains, and repairs visible plumbing.",
    left: {
      label: "Leak Detection",
      points: [
        "Specializes in locating hidden leaks non-invasively",
        "Uses acoustic, thermal, and pressure equipment",
        "Pinpoints the leak to within inches before any digging",
        "Delivers a documented report for repair and insurance",
      ],
    },
    right: {
      label: "General Plumbing",
      points: [
        "Installs and repairs fixtures, water heaters, and visible pipes",
        "Handles clogs, replacements, and new construction",
        "May locate leaks by exploratory access (cutting/digging)",
        "Performs the physical repair once the leak is found",
      ],
    },
    takeaway:
      "Call a leak detection specialist first to find the exact source, then a plumber for the targeted repair — it's faster and far less destructive than having a generalist dig to find it.",
  },
  {
    id: "leak-detection-vs-leak-repair",
    title: "Leak Detection vs Leak Repair",
    intro:
      "Detection and repair are two sequential steps. Detection answers \"where exactly is the leak?\" Repair answers \"how do we fix it?\"",
    left: {
      label: "Leak Detection",
      points: [
        "Diagnostic, non-invasive service",
        "Locates and documents the leak",
        "Keeps any opening small and precise",
        "Performed by a detection specialist",
      ],
    },
    right: {
      label: "Leak Repair",
      points: [
        "Physical fix of the located leak",
        "May involve re-piping, epoxy, or fitting replacement",
        "Requires access to the marked spot only",
        "Performed by a licensed plumber",
      ],
    },
    takeaway:
      "Accurate detection makes repair cheaper and cleaner. Bradenton Leak Scan focuses on detection and provides a report any plumber can use for the repair.",
  },
  {
    id: "slab-leak-vs-pipe-leak",
    title: "Slab Leak vs Pipe Leak",
    intro:
      "A slab leak is a specific type of pipe leak located beneath the concrete foundation. \"Pipe leak\" is the broader category that also includes leaks in walls, ceilings, and underground lines.",
    left: {
      label: "Slab Leak",
      points: [
        "Occurs in lines under or within the concrete slab",
        "Signs: warm floor spots, cracked tile, high bill",
        "Risks foundation movement and mold",
        "Found with acoustic + thermal through the slab",
      ],
    },
    right: {
      label: "Pipe Leak (General)",
      points: [
        "Can occur in walls, ceilings, crawlspaces, or yard",
        "Signs vary: stains, drips, low pressure, wet patches",
        "Risk depends on location",
        "Found with acoustic, thermal, or visual methods",
      ],
    },
    takeaway:
      "Every slab leak is a pipe leak, but not every pipe leak is under the slab. Detection identifies which you have and exactly where it is.",
  },
  {
    id: "pool-leak-vs-normal-evaporation",
    title: "Pool Leak vs Normal Evaporation",
    intro:
      "Every Florida pool loses some water to evaporation. The question is whether you're losing more than evaporation alone explains.",
    left: {
      label: "Pool Leak",
      points: [
        "Loses more than ~1/4 inch per day",
        "Often loses water faster with pump running (or off)",
        "May show wet ground, air in returns, or shell cracks",
        "Loss continues regardless of weather",
      ],
    },
    right: {
      label: "Normal Evaporation",
      points: [
        "Roughly 1/4 inch per day in Florida",
        "Increases with heat, wind, and low humidity",
        "Even loss across the whole pool surface",
        "Confirmed equal to a floating bucket test",
      ],
    },
    takeaway:
      "A bucket test settles it: if the pool drops faster than the reference bucket, you have a leak worth detecting before it wastes a season of water and chemicals.",
  },
  {
    id: "water-damage-company-vs-leak-detection-company",
    title: "Water Damage Company vs Leak Detection Company",
    intro:
      "After a leak, you may deal with two different companies. One finds and stops the source; the other dries out and rebuilds what got wet.",
    left: {
      label: "Leak Detection Company",
      points: [
        "Finds the exact source of the leak",
        "Non-invasive diagnostic specialists",
        "Documents location for repair and claims",
        "Engaged first, before damage spreads",
      ],
    },
    right: {
      label: "Water Damage / Restoration Company",
      points: [
        "Dries, dehumidifies, and remediates mold",
        "Repairs drywall, flooring, and finishes",
        "Works after the leak is stopped",
        "Often coordinates the insurance rebuild",
      ],
    },
    takeaway:
      "Start with leak detection to stop the source accurately; involve a restoration company for the cleanup. Using detection first prevents paying to dry areas that didn't need to be opened.",
  },
];

export function getComparison(id: string): Comparison | undefined {
  return comparisons.find((c) => c.id === id);
}
