// Content shared across more than one route — the landing page composes most of
// it, and the sub-pages and footer pull from the same source so the two can't
// drift apart.

export type Service = {
  slug: string;
  title: string;
  image: string;
  tag: string;
  desc: string;
  href: string;
};

export const SERVICES: Service[] = [
  {
    slug: "interior",
    title: "Interior Painting",
    image: "/images/service-interior.jpg",
    tag: "Residential",
    desc: "Interior painting tailored to the unique needs and desires of homeowners like yourself — whether you're refreshing a single room, running a full-scale renovation, or enhancing cabinetry with precision and premium materials.",
    href: "/residential#interior",
  },
  {
    slug: "exterior",
    title: "Exterior Painting",
    image: "/images/service-exterior.jpg",
    tag: "Residential",
    desc: "Exterior painting designed to enhance and protect your home's outer beauty. We restore curb appeal and refresh tired facades with durable finishes built to stand up to San Diego sun, salt air, and coastal weather.",
    href: "/residential#exterior",
  },
  {
    slug: "staining",
    title: "Wood Staining & Painting",
    image: "/images/service-stain.jpg",
    tag: "Specialty",
    desc: "At PaintRite, no one can do custom stain-work quite like us. From hardwood floors to outdoor furniture restoration, our team brings artisan-level craftsmanship to every grain.",
    href: "/residential#staining",
  },
  {
    slug: "commercial-interior",
    title: "Commercial Interior",
    image: "/images/service-comm-interior.jpg",
    tag: "Commercial",
    desc: "Your premier destination for expert commercial interior painting. The look of your space shapes how customers judge your business — we deliver customized solutions with minimal disruption to operations.",
    href: "/commercial#interior",
  },
  {
    slug: "commercial-exterior",
    title: "Commercial Exterior",
    image: "/images/service-comm-exterior.jpg",
    tag: "Commercial",
    desc: "Your trusted partner for professional commercial exterior painting. Your exterior makes the first impression — we tailor every scope specifically to the needs of your building, on your schedule.",
    href: "/commercial#exterior",
  },
  {
    slug: "repairs",
    title: "Prep & Repair Work",
    image: "/images/service-repair.jpg",
    tag: "Repairs",
    desc: "Wood and drywall repair, stucco patching, acoustic ceiling and wallpaper removal, decorative concrete coating. The unglamorous work that makes the finish coat last.",
    href: "/contact",
  },
];

// The 15 cities PaintRite serves, grouped by region so the service-area block
// can be browsed a few at a time instead of as one long wall of names.
export const AREA_REGIONS: { region: string; cities: string[] }[] = [
  { region: "Coastal", cities: ["Oceanside", "Carlsbad", "Encinitas", "Solana Beach", "Del Mar"] },
  { region: "North County", cities: ["Escondido", "San Marcos", "Vista", "Fallbrook", "Ramona"] },
  { region: "East County", cities: ["El Cajon", "La Mesa", "Lemon Grove"] },
  { region: "South Bay", cities: ["Chula Vista", "National City"] },
];

export const ALL_CITIES = AREA_REGIONS.flatMap((r) => r.cities);

export const SERVICE_OPTIONS = [
  "Interior Painting",
  "Exterior Painting",
  "Wood Staining & Painting",
  "Cabinetry",
  "Commercial — Interior",
  "Commercial — Exterior",
  "Repairs & Prep Work",
  "Not sure yet",
];

export const PROPERTY_TYPES = ["Residential", "Commercial", "Multi-family / HOA"];

export type Testimonial = {
  quote: string;
  author: string;
  detail: string;
  initial: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Extremely professional, courteous, and punctual. They went above and beyond the original request — replaced rotten wood, fascia, and the balcony on a large apartment building. The tenants love the result and the quality of paint used.",
    author: "Property Manager",
    detail: "Apartment building · San Diego",
    initial: "M",
  },
  {
    quote:
      "Prompt, efficient, and the quality of the work speaks for itself. They handled a complicated project without cutting a single corner, and the crew was respectful of our home the entire time.",
    author: "Homeowner",
    detail: "Interior repaint · Chula Vista",
    initial: "R",
  },
  {
    quote:
      "A family business that still acts like one. Honest pricing, clear communication, and they finished on the day they said they would. We've already booked them for the exterior next spring.",
    author: "Homeowner",
    detail: "Cabinetry & interior · La Mesa",
    initial: "D",
  },
];

export const FAQS: { q: string; a: string }[] = [
  {
    q: "Are you licensed and insured?",
    a: "Yes — fully licensed and insured. We carry CSLB License #684193 and Insurance Policy #A9WC2295, and we're a PCA Accredited Contractor, Google Guaranteed provider, and HomeAdvisor screened & approved.",
  },
  {
    q: "How much does a painting project cost?",
    a: "It depends on square footage, surface condition, prep and repair needs, and the finish you choose. That's why estimates are free and specific to your property — we walk the job, talk through your goals, and give you a clear number with no obligation.",
  },
  {
    q: "Do you handle repairs, or only painting?",
    a: "Both. Interior projects can include wood and drywall repair plus acoustic ceiling and wallpaper removal. Exterior projects can include wood and stucco repair and decorative concrete coating. Paint over a problem and you've still got the problem — so we fix it first.",
  },
  {
    q: "What kind of paint do you use?",
    a: "Premium paints and materials throughout, selected for the surface and how it's exposed. San Diego sun and coastal salt air are hard on exteriors, so we spec finishes built to hold up to them.",
  },
  {
    q: "Which areas do you serve?",
    a: "All across San Diego County — Chula Vista, Escondido, Oceanside, Del Mar, Ramona, La Mesa, Solana Beach, National City, El Cajon, Carlsbad, San Marcos, Lemon Grove, Fallbrook, Encinitas, and Vista. Not sure if you're in range? Just give us a call.",
  },
  {
    q: "How long will my project take?",
    a: "A single interior room is often a day or two; a full exterior repaint typically runs several days depending on prep and repair work. We give you a realistic timeline up front and tell you promptly if anything changes it.",
  },
];

export type GalleryItem = {
  image: string;
  title: string;
  detail: string;
  alt: string;
  cat: "residential" | "commercial" | "stain";
};

// Captions describe what each photo actually shows. Project locations aren't
// recorded in the source library, so none are claimed.
export const GALLERY: GalleryItem[] = [
  { image: "/images/gallery-01.jpg", title: "Modern Home Exterior", detail: "Residential · San Diego, CA", alt: "Modern two-story home with freshly painted white exterior", cat: "residential" },
  { image: "/images/gallery-02.jpg", title: "Two-Story Stucco Repaint", detail: "Residential · San Diego, CA", alt: "Two-story stucco home repainted, PaintRite truck parked in front", cat: "residential" },
  { image: "/images/gallery-03.jpg", title: "Tudor-Style Home Exterior", detail: "Residential · San Diego, CA", alt: "Tudor-style home with repainted trim and stucco", cat: "residential" },
  { image: "/images/gallery-04.jpg", title: "Balconies & Railings", detail: "Multi-Family · San Diego, CA", alt: "Apartment building balconies and railings after repainting", cat: "residential" },
  { image: "/images/gallery-05.jpg", title: "Multi-Family Exterior", detail: "Multi-Family · San Diego, CA", alt: "Multi-family building exterior with painted trim and shutters", cat: "residential" },
  { image: "/images/gallery-06.jpg", title: "Arched Entry & Trim Detail", detail: "Residential · San Diego, CA", alt: "Arched wood entry door framed by freshly painted stucco and trim", cat: "residential" },
  { image: "/images/gallery-07.jpg", title: "Garage Door Staining", detail: "Custom Stain-Work", alt: "Wide wood garage doors finished with a rich custom stain", cat: "stain" },
  { image: "/images/gallery-08.jpg", title: "Wood Door Refinishing", detail: "Custom Stain-Work", alt: "Close-up of a wood door being refinished", cat: "stain" },
  { image: "/images/gallery-09.jpg", title: "Front Door Finish", detail: "Custom Stain-Work", alt: "Double front doors finished in a deep red stain", cat: "stain" },
  { image: "/images/gallery-10.jpg", title: "Office Building Exterior", detail: "Commercial · San Diego, CA", alt: "Commercial office building exterior after repainting", cat: "commercial" },
  { image: "/images/gallery-11.jpg", title: "Retail Storefront", detail: "Commercial · San Diego, CA", alt: "Retail pharmacy storefront with repainted facade", cat: "commercial" },
  { image: "/images/gallery-12.jpg", title: "Commercial Interior", detail: "Commercial · San Diego, CA", alt: "Commercial interior corridor with painted walls and ceiling", cat: "commercial" },
];
