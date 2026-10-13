export type PersonRef = {
  id: string;
  name: string;
  role: string;
  organisation: string;
  photo?: string | null;
};

export type AgendaItem = {
  time: string;
  title: string;
  description?: string;
  speakers?: string[];
};

export type AgendaTrack = {
  name: string;
  items: AgendaItem[];
};

export type SponsorTier = {
  tier: "Title" | "Associate" | "Ecosystem" | "Community";
  sponsors: { name: string; logo?: string; url?: string }[];
};

export type Event = {
  id: string;
  slug: string;
  title: string;
  date: string; // ISO date string e.g. "2026-11-14"
  endDate?: string;
  time: string;
  city: string;
  venue?: string;
  format: "Summit" | "Roundtable" | "Mixer" | "Masterclass" | "Demo Day";
  status: "upcoming" | "past" | "live";
  description: string;
  speakers: PersonRef[];
  agenda?: AgendaTrack[];
  sponsors?: SponsorTier[];
  registerUrl: string;
  recap?: string;
  isFeatured?: boolean;
};

export type DirectoryProfile = {
  id: string;
  slug: string;
  name: string;
  photo: string | null;
  headline: string;
  category:
    | "Founder"
    | "Investor"
    | "Hospital/Operator"
    | "Clinician"
    | "Corporate/Pharma"
    | "Policy/Regulator"
    | "Mentor";
  organisation: string;
  org_type: "startup" | "hospital" | "VC" | "corporate" | "government" | "academia";
  city: string;
  state: string;
  focus_areas: string[];
  can_help_with: string[];
  open_to: string[];
  bio: string;
  links: {
    linkedin?: string;
    website?: string;
  };
  verified: boolean;
  verified_on: string | null;
  intro_mode: "direct" | "via THC" | "by request";
  visibility: "public" | "members-only";
};

export type Person = {
  id: string;
  slug: string;
  name: string;
  photo: string | null;
  headline: string;
  category: string;
  organisation: string;
  org_type: string;
  city: string;
  bio: string;
  links: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
  isLeader?: boolean;
};

export type Job = {
  id: string;
  slug: string;
  role: string;
  company: string;
  companyLogo?: string;
  level: "Founding" | "Senior" | "Lead" | "Mid-level" | "Intern";
  location: string;
  type: "Full-time" | "Contract" | "Remote" | "Hybrid";
  applyUrl: string;
  expiry: string;
  postedDate: string;
  isFeatured?: boolean;
  tags: string[];
};

export type Article = {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  category: "Insight" | "Case Study" | "Glossary" | "Podcast";
  author: string;
  publishedAt: string;
  readingTime: string;
  summary: string;
  content?: string;
  tags: string[];
};

export type Partner = {
  id: string;
  name: string;
  logo: string;
  tier: "Ecosystem" | "Hospital" | "VC" | "Strategic";
  url: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  persona: "Founder" | "Clinician" | "Investor" | "Operator";
  author: string;
  role: string;
  company: string;
  avatar?: string;
};

export type Circle = {
  id: string;
  slug: string;
  name: string;
  type: "specialty" | "city";
  description: string;
  lead: string;
  memberCount: number;
  image?: string;
};

export type Stat = {
  id: string;
  label: string;
  value: string;
  numericValue: number;
  suffix?: string;
  source: string;
};

export type FAQ = {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Membership" | "Directory" | "Events" | "Partners";
};

export type PageSection = {
  id: string;
  name: string;
  component: string;
  enabled: boolean;
  order: number;
};
