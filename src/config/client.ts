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
    { name: "Jon Sutton", rating: 5, text: "Fangorn recently completed a driveway renovation project for us, involving significant excavation of the existing unusable garden area to link up the driveway, then paving the whole area. The advice and guidance provided by Nic, Jack and …  ", date: "4 months ago" },
    { name: "Nicola Poulter", rating: 5, text: "Thank you so much Nicola for taking the time to leave us a review,", date: "5 months ago" },
    { name: "Alan Wright", rating: 5, text: "Fangorn recently landscaped my garden: putting up new fencing, levelling the ground and installing my new patio. As you can see from the photos, they did an excellent job! Nic gave me lots of good advice before and during the project. The …  ", date: "9 months ago" },
    { name: "J ManLocal Guide · 15 reviews · 21 photosa year ago Would give these guys 10 stars if I could!

From the point of enquiry, to visit for quotation, through to commencement of … More +3Like Share Response from the owner", rating: 5, text: "Thank you so much Jen, we will be seeing you again soon!", date: "5 months ago" },
    { name: "Mark A", rating: 5, text: "We got a competitive quote from Nic at Fangorn to lay composite decking in our garden. When the work was carried out, Jack and Tim were very professional, efficient, tidy and polite. We're really happy with the end result. The decking looks great! Wo", date: "3 months ago" },
    { name: "Ashfaq Hussain", rating: 5, text: "We used Fangorn to completely re-do our driveway, alley and patio. They were very understanding with our requirements and came over multiple times to iron out the details before the work started. …  ", date: "Edited 10 months ago" },
    { name: "Andrew Grant", rating: 5, text: "The Fangorn Landscapes team constructed a new brick block front drive, surrounding pathway with bricked edging and it looks.... fabulous! We cannot recommend the team highly enough, hard working whilst clearly enjoying …  ", date: "4 years ago" },
    { name: "Mike Barton", rating: 5, text: "Nic and all his employees have been absolutely exceptional.We took are time and looked around at different companies and different materials for the rear patio and when we spoke with Nic and his knowledge we decided on Fangorn .The …  ", date: "4 months ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Fangorn Landscapes | Landscaper in Worcester Park",
    description: "Professional landscaper in Worcester Park. 5.0-star rated on Google. Call for a free quote.",
  },
};
