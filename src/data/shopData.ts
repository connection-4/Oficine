import { ServiceItem, ReviewItem, GalleryPhoto, BusinessHours } from '../types';

export const SHOP_INFO = {
  name: "FERS Auto Repair",
  tagline: "Honest, Fast & Professional Auto Care in Lyons, IL",
  address: "4320 1st Ave Unit 109, Lyons, IL 60534, United States",
  streetAddress: "4320 1st Ave Unit 109",
  cityStateZip: "Lyons, IL 60534",
  country: "United States",
  phone: "+1 708-853-7119",
  phoneDisplay: "(708) 853-7119",
  phoneTel: "tel:+17088537119",
  plusCode: "R568+R6 Lyons, Illinois, USA",
  coordinates: {
    lat: 41.8120854,
    lng: -87.8344458,
  },
  googleMapsUrl: "https://www.google.com/maps/place/FERS+Auto+Repair+%26+Towing/@41.811376,-87.8343036,17z/data=!3m1!4b1!4m6!3m5!1s0x880e3672c35f7c35:0xc1d0418ceba3aa07!8m2!3d41.8120854!4d-87.8344458",
  directionsUrl: "https://www.google.com/maps/dir//FERS+Auto+Repair+%26+Towing,+4320+1st+Ave+Unit+109,+Lyons,+IL+60534",
  rating: 4.7,
  totalReviews: 70,
  emergencyTowing: "Secure Drop-Box for After-Hours",
  ratingDistribution: {
    5: 56,
    4: 8,
    3: 2,
    2: 2,
    1: 2
  }
};

export const BUSINESS_HOURS: BusinessHours[] = [
  { day: "Monday", hours: "9:00 AM – 6:00 PM" },
  { day: "Tuesday", hours: "9:00 AM – 6:00 PM" },
  { day: "Wednesday", hours: "9:00 AM – 6:00 PM" },
  { day: "Thursday", hours: "9:00 AM – 6:00 PM" },
  { day: "Friday", hours: "9:00 AM – 6:00 PM" },
  { day: "Saturday", hours: "9:00 AM – 3:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "ac-heating",
    title: "A/C Repair & Installation",
    category: "maintenance",
    shortDesc: "Complete air conditioning repairs, cabin air filters, and climate control installations.",
    fullDesc: "Stay comfortable year-round. We handle refrigerant recharges, A/C compressor repairs, leak detection, and fresh cabin/air filter replacements to ensure optimal air quality.",
    features: [
      "A/C compressor & condenser repair",
      "Refrigerant leak testing & recharge",
      "Cabin and engine air filter replacement",
      "Climate control system installation",
      "Heater core diagnostics"
    ],
    estimatedTime: "1 – 2.5 hours",
    iconName: "ThermometerSnowflake",
    isPopular: true
  },
  {
    id: "engine-diagnostics",
    title: "Vehicle Engine Diagnostics",
    category: "diagnostics",
    shortDesc: "Advanced computer diagnostics for check engine lights and performance issues.",
    fullDesc: "Get accurate, no-guesswork diagnosis. We utilize digital diagnostic scanners to read live ECU sensor data, identify trouble codes, and pinpoint mechanical or electrical issues.",
    features: [
      "Check engine light code reading",
      "Live engine sensor stream analysis",
      "Ignition and misfire troubleshooting",
      "Fuel injector flow testing",
      "Emissions failure diagnosis"
    ],
    estimatedTime: "45 – 90 mins",
    iconName: "Cpu",
    isPopular: true
  },
  {
    id: "engine-tuning",
    title: "Engine Tuning & Repair",
    category: "mechanical",
    shortDesc: "Comprehensive engine adjustments, rebuilds, and performance tuning.",
    fullDesc: "Restore your vehicle's power and efficiency. Our master technicians provide expert engine adjustments, timing belt replacements, and major engine block repairs.",
    features: [
      "Engine timing adjustment & tuning",
      "Head gasket replacement",
      "Timing belt and water pump service",
      "Valvetrain and camshaft repair",
      "Major engine mechanical overhaul"
    ],
    estimatedTime: "4+ hours",
    iconName: "Wrench",
    isPopular: false
  },
  {
    id: "electrical-battery",
    title: "Battery & Electrical Repair",
    category: "diagnostics",
    shortDesc: "Battery testing/replacement, alternators, and general vehicle electrical repairs.",
    fullDesc: "Don't get stranded by a dead battery or faulty alternator. We diagnose and repair all electrical systems, from starting issues to complex wiring harness faults.",
    features: [
      "Battery testing & replacement",
      "Alternator & starter motor replacement",
      "Wiring harness repair",
      "Fuses, relays, and lighting service",
      "Parasitic draw testing"
    ],
    estimatedTime: "1 – 2 hours",
    iconName: "Zap",
    isPopular: true
  },
  {
    id: "brake-services",
    title: "Brake Repair & Replacement",
    category: "mechanical",
    shortDesc: "Complete brake pad, rotor, caliper, and hydraulic line servicing.",
    fullDesc: "Rest assured with responsive, noise-free stopping power. We install premium brake pads, heavy-duty rotors, check hydraulic lines, and service ABS brake modules.",
    features: [
      "Ceramic/semi-metallic brake pads",
      "Precision disc rotor replacement",
      "Brake caliper & hose replacement",
      "Brake fluid bleeding & hydraulic flush",
      "ABS diagnostic scan & sensor repairs"
    ],
    estimatedTime: "1 – 2 hours",
    iconName: "ShieldAlert",
    isPopular: true
  },
  {
    id: "carburetor-fuel",
    title: "Carburetor & Fuel Systems",
    category: "maintenance",
    shortDesc: "Carburetor cleaning, fuel pump replacement, and system flushing.",
    fullDesc: "Ensure your engine gets the right fuel mixture. We offer specialized carburetor cleaning, fuel injector servicing, and full fuel system pressure testing.",
    features: [
      "Carburetor cleaning & rebuilds",
      "Fuel pump & filter replacement",
      "Fuel injector chemical flush",
      "Fuel line inspection & repair",
      "Throttle body cleaning"
    ],
    estimatedTime: "2 – 3 hours",
    iconName: "Droplets",
    isPopular: false
  },
  {
    id: "exhaust-systems",
    title: "Exhaust System Repairs",
    category: "mechanical",
    shortDesc: "Complete exhaust pipe repairs, catalytic converters, and mufflers.",
    fullDesc: "We inspect, repair, and install complete exhaust systems, mufflers, catalytic converters, and manifold gaskets to ensure optimal engine performance and reduced emissions.",
    features: [
      "Custom exhaust piping & welding",
      "Catalytic converter testing & replacement",
      "Muffler repair & sound tuning",
      "Oxygen (O2) sensor replacement",
      "Exhaust manifold gasket repair"
    ],
    estimatedTime: "1 – 3 hours",
    iconName: "Flame",
    isPopular: false
  },
  {
    id: "general-maintenance",
    title: "Oil Change & General Maintenance",
    category: "maintenance",
    shortDesc: "Full synthetic oil changes, fluid flushes, and comprehensive general repairs.",
    fullDesc: "Keep your vehicle running smoothly with our routine maintenance. We handle oil changes, multi-point safety checks, and all general automotive repairs.",
    features: [
      "Full synthetic & conventional oil change",
      "OEM-grade oil filter replacement",
      "Complete multi-point safety inspection",
      "Fluid top-offs (coolant, washer, power steering)",
      "Belt & hose integrity checks"
    ],
    estimatedTime: "30 – 60 mins",
    iconName: "Settings",
    isPopular: true
  },
  {
    id: "suspension-steering",
    title: "Suspension & Steering Repair",
    category: "mechanical",
    shortDesc: "Ball joint replacement, CV axles, struts, shocks, and steering fixes.",
    fullDesc: "Ensure safe driving and smooth handling with our suspension and drivetrain repairs. We replace broken axles, worn ball joints, control arms, and shock absorbers.",
    features: [
      "Ball joint & control arm replacement",
      "CV joint & drive axle rebuilds",
      "Struts, coil springs & shock absorbers",
      "Tie rods & steering rack adjustment",
      "Power steering pump & fluid service"
    ],
    estimatedTime: "2 – 4 hours",
    iconName: "Wrench",
    isPopular: true
  },
  {
    id: "tires-wheels",
    title: "Tires & Wheel Services",
    category: "tires",
    shortDesc: "New tire mounting, digital wheel balancing, and puncture repairs.",
    fullDesc: "We offer computer-guided wheel balancing, tire rotation, flat tire repairs, and TPMS sensor replacement for maximum grip and tread life.",
    features: [
      "Computerized high-speed wheel balancing",
      "New tire installation",
      "Puncture repair & vulcanization",
      "TPMS calibration",
      "Seasonal tire changeover & rotation"
    ],
    estimatedTime: "30 – 60 mins",
    iconName: "CircleDot",
    isPopular: false
  },
  {
    id: "transmission-clutch",
    title: "Transmission Service",
    category: "mechanical",
    shortDesc: "Transmission fluid flushes, filter replacement, and major gearbox repairs.",
    fullDesc: "Prevent costly gearbox repairs with regular transmission servicing, electronic shift diagnosis, clutch cable adjustments, and torque converter maintenance.",
    features: [
      "Complete transmission fluid exchange",
      "Transmission filter & pan gasket replacement",
      "Clutch disc & pressure plate replacement",
      "Shift solenoid diagnosis",
      "Driveshaft & differential service"
    ],
    estimatedTime: "2 – 4 hours",
    iconName: "Cog",
    isPopular: false
  }
];

export const REVIEWS_LIST: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Jaime Almazan",
    authorBadge: "Local Guide · 20 reviews",
    rating: 5,
    date: "3 months ago",
    text: "Great mechanic and very reasonable prices! Jay and the team did an outstanding job on my exhaust system and installed new tires. Smooth process and honest advice.",
    servicesMentioned: ["Exhaust System", "Tires", "Maintenance"],
    likesCount: 11,
    isGoogleVerified: true
  },
  {
    id: "rev-2",
    author: "Anthony Samayoa",
    authorBadge: "5 reviews · Verified Customer",
    rating: 5,
    date: "2 years ago",
    text: "I would give 6 stars to this review if I could! Jay and his crew are awesome and truly wonderful people. Unfortunately, I had an issue right in front of the shop where my ball joint and axle broke. Jay, the owner, came out immediately to help and took care of everything quickly and professionally. Saved my day!",
    servicesMentioned: ["Ball Joint & Axle Repair", "Suspension"],
    likesCount: 14,
    isGoogleVerified: true
  },
  {
    id: "rev-3",
    author: "Carlos Gutierrez",
    authorBadge: "12 reviews · Local Customer",
    rating: 5,
    date: "5 months ago",
    text: "Honest and dependable shop in Lyons. My brake pedal was vibrating badly and other places gave crazy estimates. FERS diagnosed warped rotors, fixed it the same afternoon for a fair price. Car drives like new.",
    servicesMentioned: ["Brakes & Rotors", "Vehicle Safety Inspection"],
    likesCount: 8,
    isGoogleVerified: true
  },
  {
    id: "rev-4",
    author: "Samantha Miller",
    authorBadge: "8 reviews · Regular Client",
    rating: 5,
    date: "7 months ago",
    text: "Excellent service when my car wouldn't start in the morning. They diagnosed it quickly at their shop and solved the alternator issue within hours. Transparent communication throughout.",
    servicesMentioned: ["Alternator & Electrical", "Battery"],
    likesCount: 6,
    isGoogleVerified: true
  },
  {
    id: "rev-5",
    author: "Marco Delgado",
    authorBadge: "15 reviews · Local Guide",
    rating: 5,
    date: "9 months ago",
    text: "Jay is hands down one of the most reliable mechanics in the area. No hidden fees, no pushing unnecessary parts. Clean shop, fast turnaround, and quality workmanship.",
    servicesMentioned: ["Engine Diagnostics", "Oil Change", "Steering"],
    likesCount: 9,
    isGoogleVerified: true
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "g1",
    url: "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?cb_client=maps_sv.tactile&w=900&h=600&pitch=0&panoid=ATs6cn2EYNSjzs5HB0YEhA&yaw=351.56348",
    title: "Shop Facade & Customer Entrance",
    category: "exterior",
    caption: "FERS Auto Repair facility located at 4320 1st Ave Unit 109 in Lyons, IL."
  },
  {
    id: "g2",
    url: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnxz00GljZVB7EzYxGCZQ2kBieNbghYl-0lFEUuepVhva55MVNJri06fr-QC5fxAGMSRpQwFADlMiLrKpYEokKIA71Cls_KjiLNQYGLFb7YxEYa8eHbnP2JPXTeitkk4mD9hkqi=w1200-h800-k-no",
    title: "Active Service Bays & Vehicle Diagnostics",
    category: "shop",
    caption: "Multiple service bays equipped with hydraulic lifts for rapid car and truck turnaround."
  },
  {
    id: "g3",
    url: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnbW05Dmq4P-AAUcT-FRkEH9_rNk4kIdsq5Y-GK6haOW6GSqh2YZDlMPl7I0ihN6fBmNBJ87LVUX91LLBCkmESCAgx-qeS0d2pS0nRjtagytFdtqtdEO0ET7DztzvVK2ns-rwb4=w800-h800-k-no",
    title: "Precision Mechanical & Suspension Overhaul",
    category: "repairs",
    caption: "Heavy-duty chassis components, control arms, ball joints, and axle maintenance."
  },
  {
    id: "g4",
    url: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmOPmF8tuWcHXldorqBlxrcrss2_IrAAat18lwXwDniZIOANuMSOLNsG6KDRh7aLkBCCfDXl7RND9Fv33pSbryd9J9ZGZLZt0bF3wl_GkJ9ITGRqFzomV83TZ4wPGoEhtX9S2I=w800-h800-k-no",
    title: "Engine Bay Inspection & Diagnostics",
    category: "repairs",
    caption: "Detailed inspection of ignition, cooling, belts, exhaust, and electronic sensors."
  },
  {
    id: "g5",
    url: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl2zix_nZjVoU9L7qh6hrUq58A8S7xSMQEg5x9lqCF-rag7HbOVvXmgiqtbeHIZjZx6jy4v_tXxqYeySCFaLSOX3-NxnE2SRlezCJNmsnlR7xVDHcBz4dpouNOeOCFQeNBthtuf=w800-h1000-k-no",
    title: "Tire Mounting & Wheel Balancing Bay",
    category: "shop",
    caption: "Digital balancing machinery and tire changing equipment for high-precision safety."
  },
  {
    id: "g6",
    url: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnaAE2C4PhWbgHhBfVdNZHOOs3w2jzmrOod5zvMFOOs8PC3mdA5rp4I6p5hX5OLnkk7-FRiwwegg39-op5AR8qlflXqtdsnSj3avLf3EP13EP1nytdCGpZ1aJRIsstFKDZuup1hVkh3Fto=w800-h1000-k-no",
    title: "Suspension, Drivetrain & Undercarriage Repairs",
    category: "repairs",
    caption: "Detailed undercarriage service and drivetrain restoration."
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "4.7★ Google Rated Service",
    desc: "Over 70 verified local reviews praising our honest assessments, fair pricing, and dependable repairs.",
    icon: "Star"
  },
  {
    title: "Experienced Master Technicians",
    desc: "Equipped with modern computer diagnostic tools to quickly identify problems without unnecessary upselling.",
    icon: "Award"
  },
  {
    title: "Free Diagnostics with Repair",
    desc: "We accurately diagnose your vehicle's issue and waive the diagnostic fee when you proceed with the repair.",
    icon: "Cpu"
  },
  {
    title: "Transparent & Upfront Pricing",
    desc: "No hidden charges. We walk you through what your vehicle actually needs before turning a single wrench.",
    icon: "ShieldCheck"
  },
  {
    title: "Same-Day Turnaround Available",
    desc: "Most brake, tire, exhaust, and diagnostic services completed the same business day to keep your life moving.",
    icon: "Clock"
  },
  {
    title: "Quality Parts & Warranty",
    desc: "We install OEM-spec or premium grade components backed by warranty for your total peace of mind.",
    icon: "CheckCircle2"
  }
];
