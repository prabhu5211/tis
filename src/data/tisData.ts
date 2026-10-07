export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
  iconName: string;
}

export interface AcademicProgram {
  id: string;
  title: string;
  grades: string;
  description: string;
  highlights: string[];
  image: string;
  badge: string;
}

export interface BoardingFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  badge?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Infrastructure' | 'Sports' | 'Academics' | 'Campus Life';
  image: string;
  caption: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  relation: string;
  rating: number;
  quote: string;
  avatar: string;
  location: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Admissions' | 'Boarding' | 'Academics' | 'General';
}

export interface AdmissionStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

export const SCHOOL_INFO = {
  name: "Tula's International School",
  shortName: "TIS Dehradun",
  tagline: "Top CBSE Co-Ed Boarding School in Dehradun, Uttarakhand",
  subTagline: "Modern Gurukul Approach • Class 4 to 12 Residential Education",
  established: 2012,
  trust: "Rishabh Educational Trust",
  location: "Dhoolkot, P.O – Selaqui, Chakrata Road, Dehradun - 248011 (Uttarakhand)",
  phone: "+91 98379 83791",
  helplinePhone: "+91 94583 19102",
  landline: "0135-2699444",
  email: "info@tis.edu.in",
  admissionsEmail: "info@tis.edu.in",
  affiliation: "CBSE Affiliated (Co-Ed Boarding Class 4-12)",
  accreditation: "#1 Modern Boarding School in Uttarakhand (Education World)",
  virtualTourUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  logoUrl: "https://tis.edu.in/_next/static/media/schoolLogo.95f6e121.png"
};

export const NAV_LINKS: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "About TIS", href: "#about" },
  { label: "Academics", href: "#academics" },
  { label: "Boarding Life", href: "#boarding" },
  { label: "Campus Life", href: "#gallery" },
  { label: "Admissions", href: "#admissions" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" }
];

export const SCHOOL_STATS: StatItem[] = [
  {
    id: "placement",
    value: 100,
    suffix: "%",
    label: "University Acceptance",
    description: "Placements at top Ivy League, IITs & global universities",
    iconName: "GraduationCap"
  },
  {
    id: "campus",
    value: 100,
    suffix: "+",
    label: "Acre Green Campus",
    description: "Pollution-free ecosystem nestled in Shivalik foothills",
    iconName: "Trees"
  },
  {
    id: "ratio",
    value: 8,
    suffix: ":1",
    label: "Student-Teacher Ratio",
    description: "Personalized mentorship and individual growth tracking",
    iconName: "Users"
  },
  {
    id: "sports",
    value: 25,
    suffix: "+",
    label: "Sports & Skill Clubs",
    description: "Olympic-size pool, Horse riding arena, Shooting range & Robotics",
    iconName: "Trophy"
  }
];

export const ACADEMIC_PROGRAMS: AcademicProgram[] = [
  {
    id: "primary",
    title: "Junior School (Grades IV - V)",
    grades: "Grade 4 to Grade 5",
    description: "Igniting curiosity through experiential learning, play-based STEM activities, and core foundational literacy & numeracy in a nurturing environment.",
    highlights: ["Inquiry-Based Learning", "Interactive Robotics & Coding", "Phonics & Creative Writing", "Outdoor Nature Walks"],
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
    badge: "Foundational Phase"
  },
  {
    id: "middle",
    title: "Middle School (Grades VI - VIII)",
    grades: "Grade 6 to Grade 8",
    description: "Transitioning to analytical thinking, hands-on scientific experiments, multi-lingual mastery, and interdisciplinary project work.",
    highlights: ["Design Thinking Labs", "3D Printing & Electronics", "Debating & Public Speaking", "Foreign Language Electives"],
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1200&auto=format&fit=crop",
    badge: "Exploratory Phase"
  },
  {
    id: "senior",
    title: "Senior Secondary (Grades IX - XII)",
    grades: "Grade 9 to Grade 12",
    description: "Comprehensive CBSE curriculum paired with rigorous competitive exam prep (JEE, NEET, SAT, CLAT) and career counselling.",
    highlights: ["Integrated Coaching Wings", "Science, Commerce & Humanities", "Global Exchange Programs", "University Portfolio Building"],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    badge: "Specialized Excellence"
  },
  {
    id: "stem",
    title: "Mindstone STEM & AI Lab",
    grades: "All Grades",
    description: "Future-ready technology hub with drone technology, artificial intelligence modules, IoT kits, and competitive robotics team training.",
    highlights: ["VEX Robotics Arena", "AI & Python Coding", "Biotechnology Workstations", "National Science Olympiads"],
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=1200&auto=format&fit=crop",
    badge: "Innovation Hub"
  }
];

export const BOARDING_FEATURES: BoardingFeature[] = [
  {
    id: "hostel",
    title: "Eco-Friendly AC Residences",
    description: "Spacious, air-conditioned dormitories with individual study spaces, ergonomic furniture, and 24/7 warm water facility.",
    icon: "Building2",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1000&auto=format&fit=crop",
    badge: "Comfort & Hygiene"
  },
  {
    id: "dining",
    title: "Organic Farm-to-Table Dining",
    description: "Nutritionist-curated 5-meal daily menu featuring fresh produce grown in TIS organic farms, multi-cuisine options, and strict quality control.",
    icon: "Utensils",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000&auto=format&fit=crop",
    badge: "Pure Nutrition"
  },
  {
    id: "security",
    title: "3-Tier Safety & Surveillance",
    description: "Round-the-clock security personnel, 200+ HD CCTV camera network, biometric access control, and resident female wardens for girls' wing.",
    icon: "ShieldCheck",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1000&auto=format&fit=crop",
    badge: "24/7 Protected"
  },
  {
    id: "medical",
    title: "24/7 Medical Infirmary & Ambulance",
    description: "In-house qualified medical officer, certified resident nurses, 4-bed infirmary ward, and tied-up super specialty hospital 5 minutes away.",
    icon: "HeartPulse",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop",
    badge: "Healthcare First"
  },
  {
    id: "pastoral",
    title: "Pastoral Care & Mentorship",
    description: "Dedicated Housemasters and Resident Tutors fostering emotional well-being, leadership qualities, and personal mentorship.",
    icon: "HeartHandshake",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1000&auto=format&fit=crop",
    badge: "Home Away From Home"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "State-of-the-Art Science & Innovation Complex",
    category: "Infrastructure",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop",
    caption: "Advanced physics, chemistry, and biology research laboratories."
  },
  {
    id: "g2",
    title: "Equestrian Horse Riding Club & Training Grounds",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=1000&auto=format&fit=crop",
    caption: "Professional riding instructors and purebred horses."
  },
  {
    id: "g3",
    title: "Digital Library & Learning Resource Center",
    category: "Academics",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1000&auto=format&fit=crop",
    caption: "Housing over 15,000+ books, research portals, and quiet reading pods."
  },
  {
    id: "g4",
    title: "Olympic Size All-Weather Swimming Pool",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1000&auto=format&fit=crop",
    caption: "Temperature-controlled pool with certified lifeguards and coaches."
  },
  {
    id: "g5",
    title: "Music, Dance & Performing Arts Auditorium",
    category: "Campus Life",
    image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=1000&auto=format&fit=crop",
    caption: "500-seater acoustics auditorium for annual fests and theatrical plays."
  },
  {
    id: "g6",
    title: "Lush Green Shivalik Valley Amphitheatre",
    category: "Infrastructure",
    image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=1000&auto=format&fit=crop",
    caption: "Outdoor assembly space surrounded by majestic mountain views."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Dr. Rajesh & Sunita Sharma",
    role: "Parent of Aarav Sharma",
    relation: "Grade X Student",
    rating: 5,
    quote: "Enrolling Aarav at Tula's International School was the best decision of our lives. The transformation in his self-confidence, public speaking, and discipline within just one year is remarkable!",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop",
    location: "New Delhi"
  },
  {
    id: "t2",
    name: "Meera Oberoi",
    role: "TIS Alumna ('22 Batch)",
    relation: "Undergraduate Student at University of Toronto",
    rating: 5,
    quote: "The STEM mentorship and career guidance at TIS prepared me for global university life. The teachers treated us like family, and boarding life taught me lifelong independence.",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300&auto=format&fit=crop",
    location: "Toronto, Canada"
  },
  {
    id: "t3",
    name: "Col. Vikramaditya Singh",
    role: "Parent of Ananya Singh",
    relation: "Grade VIII Student",
    rating: 5,
    quote: "As an army officer, security and discipline are paramount for me. Tula's campus security, pastoral care, and organic dining exceed every expectation. My daughter thrives here!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    location: "Chandigarh"
  }
];

export const ADMISSION_STEPS: AdmissionStep[] = [
  {
    step: 1,
    title: "Online Inquiry & Registration",
    subtitle: "Step 01",
    description: "Submit the online registration form or schedule a virtual interaction with our counseling desk.",
    icon: "FileText"
  },
  {
    step: 2,
    title: "Campus Tour & Interaction",
    subtitle: "Step 02",
    description: "Visit our 100+ acre campus for a guided tour and interactive session with the Principal.",
    icon: "Compass"
  },
  {
    step: 3,
    title: "Aptitude Assessment",
    subtitle: "Step 03",
    description: "Student undergoes an age-appropriate aptitude evaluation to gauge academic proficiency and interest areas.",
    icon: "PenTool"
  },
  {
    step: 4,
    title: "Offer & Welcome Package",
    subtitle: "Step 04",
    description: "Receive formal admission offer, complete fee formalities, and join the TIS family!",
    icon: "CheckCircle2"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "What grades are offered at Tula's International School?",
    answer: "Tula's International School offers co-educational boarding admissions from Grade IV through Grade XII, adhering to CBSE curriculum integrated with international learning standards.",
    category: "General"
  },
  {
    question: "How safe is the boarding campus for young students?",
    answer: "TIS operates a 24/7 security protocol with over 200 high-definition CCTV cameras, biometric entry points, resident Housemasters, and female wardens dedicated to girls' dormitories.",
    category: "Boarding"
  },
  {
    question: "What competitive exam coaching is provided?",
    answer: "We provide integrated in-house coaching for JEE (Main & Advanced), NEET, NATA, SAT, and CLAT led by expert faculty, ensuring students don't need external tuitions.",
    category: "Academics"
  },
  {
    question: "What is the procedure for scheduling a campus visit?",
    answer: "You can book a campus tour directly through our website booking portal or call our Admissions Helpline at +91 94583 11000. Campus tours are conducted 7 days a week.",
    category: "Admissions"
  },
  {
    question: "How are meals prepared and managed in the dining hall?",
    answer: "Our meals are prepared under strict hygienic standards using organic vegetables harvested directly from our campus farm. We offer balanced North & South Indian, Continental, and Oriental cuisines.",
    category: "Boarding"
  }
];

export const ANNOUNCEMENTS = [
  "🚨 ADMISSIONS OPEN FOR SESSION 2025-26 (Grades IV to XII) — Limited Seats Available!",
  "🏆 Ranked #1 Modern Boarding School in Uttarakhand by Education World 2024-25",
  "⭐ 100% CBSE Board Exam Result — 15+ Students Score Above 95% Marks",
  "🏇 Annual Equestrian Championship & Inter-School Cultural Fest Registration Open!"
];
