export const client = {
  // Business Details
  name: "Fangorn Landscapes",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Worcester Park.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "020 8337 3737",
  email: "",
  website: "",

  // Location
  address: "Worcester Park",
  city: "Worcester Park",
  county: "",
  postcode: "",
  basedIn: "Worcester Park",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5",
  reviewCount: "8",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Mark A", rating: 5, text: "We got a competitive quote from Nic at Fangorn to lay composite decking in our garden. When the work was carried out, Jack and Tim were very professional, efficient, tidy and polite. We're really happy with the end result. The decking looks great! Would highly recommend.", date: "3 months ago", badge: "Local Guide" },
    { name: "Mark S", rating: 5, text: "Delighted with our new driveway, fencing and garden landscaping. Nic, Jack and the team are a pleasure to deal with, wouldn't hesitate to recommend them.", date: "3 months ago" },
    { name: "Jon Sutton", rating: 5, text: "Fangorn recently completed a driveway renovation project for us, involving significant excavation of the existing unusable garden area to link up the driveway, then paving the whole area. The advice and guidance provided by Nic, Jack and their team, particularly around drainage, levels and the brick walls was excellent. The Team were very professional and worked extremely hard, with nothing ever being too much trouble! We are delighted with the result and cannot recommend Fangorn highly enough. Many thanks to the whole Team at Fangorn - 5 Stars well earned!", date: "4 months ago" },
    { name: "Mike Barton", rating: 5, text: "Nic and all his employees have been absolutely exceptional.We took are time and looked around at different companies and different materials for the rear patio and when we spoke with Nic and his knowledge we decided on Fangorn .The attention to detail from everybody on the team was amazing and also a big thank you to Luke . We decided on Black Granite which looks amazing which Nic sourced from one of the contractors he works closely with , got samples and it’s stunning. When we have the front driveway done there’s only one place to go . Nic and Fangorn. (With Luke ) Many thanks Tracy and Mike Barton", date: "4 months ago" },
    { name: "Lucy Rayner", rating: 5, text: "Really great experience from start to finish. Nic gave me some great advice during the site visit, got the quote out quickly, was open and honest about the start time and they worked hard to get the job done. I’m really pleased with the results. I wouldn’t hesitate to use them again.", date: "4 months ago" },
    { name: "Amardeep Gill", rating: 5, text: "Fangorn Landscapes did an amazing job with our garden, we're overjoyed with it! Nic and his team were lovely to work with. They provided us with great advice, were flexible and adapted to any issues, always arrived on time and kept the work area clean and tidy - as well as being a lovely group of people. We would highly recommend Fangorn Landscapes!", date: "6 months ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Fangorn Landscapes | Landscaper in Worcester Park",
    description: "Professional landscaper in Worcester Park. 5.0-star rated on Google. Call for a free quote.",
  },
};
