/* ════════════════════════════════════════════════════════════════
   data.js — EDIT THIS FILE ONLY
   
   All content lives here. HTML, CSS, and app.js never need touching.
   
   Sections:
     PROFILE      → your name, role, bio, stats
     PROJECTS     → case studies (add new ones here)
     CERTIFICATIONS → clickable certs with verification URLs  
     SKILLS       → skill bars
     EVENTS       → photo gallery of UX/UI events you attended
   
════════════════════════════════════════════════════════════════ */

/* ── PROFILE ──────────────────────────────────────────────────── */
const PROFILE = {
  initials:    "VJ",
  photo:       "JASWANTH PIC.png",
  firstName:   "Jaswanth",
  fullName:    "Venkata Sai Jaswanth Edupuganti",
  role:        "UI/UX Designer Trainee",
  company:     "MyClassboard Educational Solutions",
  location:    "Hyderabad, India",
  timezone:    "Asia/Kolkata",
  available:   true,
  activeSince: "Jan 2026",
  handle:      "jaswanthevs · 2025",
  bio:         "I design enterprise SaaS products at the intersection of information architecture, multi-role workflows, and design systems. 60+ screens shipped. Token-based systems built from scratch.",

  social: {
    linkedin: "https://www.linkedin.com/in/venkata-sai-jaswanth-edupuganti-787251199",
    behance:  "https://www.behance.net/jaswanthevs",
    github:   "https://github.com",
  },

  resume: "SAI_JASWANTH_RESUMLOW.pdf",

  education: "B.Tech — Information Technology · Vishnu Institute of Technology · CGPA 7.21",

  stats: [
    { n: "60+", label: "Screens Shipped" },
    { n: "7",   label: "Token Collections" },
    { n: "4",   label: "Case Studies" },
  ],

  tools: [
    "Figma", "FigJam", "Framer", "Token Studio",
    "Figma Variables", "Miro", "Protopie",
  ],

  processSkills: [
    "Information Architecture", "User Research", "Wireframing",
    "Prototyping", "Usability Testing", "Dev Handoff",
    "WCAG Accessibility", "AI-Augmented Workflows",
  ],

  philosophy: [
    "A component without context is decoration — systems must serve intent before aesthetics.",
    "The best UX is what users never consciously notice. Friction earns its place or disappears.",
    "Systems before screens. Tokens before components. Structure before style.",
    "Edge-case design is where product quality is decided. The center case is easy.",
    "AI augments the workflow, not the thinking. The designer's judgment is still the product.",
  ],
};

/* ── SKILLS ───────────────────────────────────────────────────── */
const SKILLS = [
  { name: "UX Research & Strategy",       pct: 75 },
  { name: "Visual Design",                pct: 78 },
  { name: "Interaction & Prototyping",    pct: 80 },
  { name: "Design Systems & Tokens",      pct: 72 },
  { name: "Information Architecture",     pct: 76 },
  { name: "Developer Handoff",            pct: 70 },
];

/* ── CERTIFICATIONS ────────────────────────────────────────────
   url → paste your certificate verification link
   If you don't have a public URL yet, leave it ""
─────────────────────────────────────────────────────────────── */
const CERTIFICATIONS = [
  {
    title:  "Google UX Design Professional Certificate",
    issuer: "Google",
    year:   "2024",
    url:    "",  // ← paste Google certificate verification URL
  },
  {
    title:  "UI/UX Design Course",
    issuer: "Internshala",
    year:   "2023",
    url:    "",  // ← paste Internshala certificate URL
  },
  {
    title:  "Interaction Design",
    issuer: "LinkedIn Learning",
    year:   "2023",
    url:    "",  // ← paste LinkedIn Learning certificate URL
  },
];

/* ── EVENTS GALLERY ────────────────────────────────────────────
   Add photos from UX/UI events you attended or organised.

   FIELDS:
     title    → event name
     date     → e.g. "March 2025"
     location → city or venue
     tag      → short category pill ("Workshop" / "Meetup" / "Talk" / "Hackathon")
     images   → array of up to 4 photo paths (drop images in assets/events/)
                clicking the card opens a full gallery of all images
     caption  → optional one-liner description

   Example:
     images: [
       "assets/events/ux-hyd-1.jpg",
       "assets/events/ux-hyd-2.jpg",
       "assets/events/ux-hyd-3.jpg",
       "assets/events/ux-hyd-4.jpg",
     ],
─────────────────────────────────────────────────────────────── */
const EVENTS = [
  {
    title:    "UX Hyderabad Meetup",
    date:     "March 2025",
    location: "Hyderabad",
    tag:      "Meetup",
    images:   [],  // ← add up to 4 photo paths here
    caption:  "Community meetup on enterprise UX patterns.",
  },
  {
    title:    "Design Systems Workshop",
    date:     "February 2025",
    location: "Hyderabad",
    tag:      "Workshop",
    images:   [],
    caption:  "Hands-on session on token architecture and Figma Variables.",
  },
  {
    title:    "Product Design Bootcamp",
    date:     "January 2025",
    location: "Online",
    tag:      "Bootcamp",
    images:   [],
    caption:  "Intensive 3-day bootcamp covering end-to-end product design.",
  },
  // Add more events here — copy the block above and fill in the fields
];

/* ── PROJECTS ─────────────────────────────────────────────────
   type (backend classification — controls grid order, no filter button):
     "office"     → company / client work  (shown first)
     "personal"   → self-initiated projects (shown second)
     "assignment" → company design challenges (shown third)

   screens format:
     { label:"Screen Name", src:"path/to/file.png", type:"desktop"|"mobile" }
   Leave src:"" until you have the actual image.
─────────────────────────────────────────────────────────────── */
const PROJECTS = [
  {
    id:         "canteen",
    type:       "office",
    disabled:   false,
    confidential: true,  // company project — screens, case study links, and Behance hidden
    domain:     "Enterprise SaaS · EdTech · K-12",
    name:       "Canteen Management System",
    brief:      "Full redesign of a multi-role school canteen platform — menu planning, wallet payments, financial reporting, and role-specific UX for parents, admins, and operators.",
    cat:        ["EdTech"],
    role:       "UI/UX Designer Trainee",
    timeline:   "Jan 2026 – Present",
    platform:   "Web SaaS Dashboard",
    tools:      "Figma · FigJam · Token Studio",
    status:     "published",
    bg:         "linear-gradient(145deg,#060D20 0%,#0A1838 55%,#080F28 100%)",
    ic:         "#4B8CF7",
    cover:      "Canteen Management _cover.png",           // ← drop cover image here, e.g. "assets/projects/canteen-cover.jpg"
    behanceUrl: "<iframe src=\"https://www.behance.net/embed/project/247470295?ilo0=1\" height=\"316\" width=\"404\" allowfullscreen lazyload frameborder=\"0\" allow=\"clipboard-write\" refererPolicy=\"strict-origin-when-cross-origin\"></iframe>",
    pdfPath:    "case-studies/canteen-management-case-study.pdf",
    figmaLink:  "https://figma.com",
    embedUrl:   "",           // ← paste Figma embed URL for prototype

    problem: "The existing canteen system served three completely different user types — parents, organisation admins, and canteen operators — through a single confusing interface. Non-technical school accountants couldn't interpret financial reports. Payment flows mixed wallet and online methods without clear logic.",

    solution: "Designed 60+ screens across 3 fully separated role-based modules. Each module received a purpose-built IA based on the user's actual mental model. The Reports Module was redesigned as a 'Daily Money Tracking' dashboard for non-technical accountants.",

    highlights: [
      "Designed 60+ screens across 3 role-based modules (Parent, Organization Admin, Canteen Operator) — each with its own navigation architecture",
      "Restructured information architecture — reorganized complex multi-role workflows into role-appropriate navigation while preserving all system functionality",
      "Solved critical edge cases: add-on item selection logic, wallet vs. online payment handling, empty-state calendars, replace-vs-delete interactions, low-balance alerts",
      "Reports Module redesigned as 'Daily Money Tracking' for non-technical accountants — defining report structures, filter systems, table layouts, and dashboard summaries",
      "Complete developer handoff with annotated specs, token documentation, and interaction notes",
    ],

    screens: [
      { label: "Role Selection & Dashboard", src: "", type: "desktop" },
      { label: "Menu Planning (Admin)",      src: "", type: "desktop" },
      { label: "Wallet & Payment Flow",      src: "", type: "desktop" },
      { label: "Meal Calendar (Parent)",     src: "", type: "desktop" },
      { label: "Reports — Daily Tracking",   src: "", type: "desktop" },
      { label: "Combo Meal Editor",          src: "", type: "desktop" },
    ],
  },

  {
    id:         "student",
    type:       "office",
    disabled:   false,
    confidential: true,  // company project — screens, case study links, and Behance hidden
    domain:     "Mobile · EdTech · K-12",
    name:       "Student Mobile App & Admissions Portal",
    brief:      "Student-facing mobile app covering homework, assessments, study center, performance analytics, and attendance — plus institutional admissions landing pages.",
    cat:        ["EdTech", "Mobile"],
    role:       "UI/UX Designer Trainee",
    timeline:   "Jan 2026 – Present",
    platform:   "Mobile App + Web Landing Pages",
    tools:      "Figma · FigJam",
    status:     "published",
    bg:         "linear-gradient(145deg,#0A0820 0%,#130D32 55%,#0E0A26 100%)",
    ic:         "#A78BFA",
    cover:      "Students Management_cover.png",           // ← drop cover image here, e.g. "assets/projects/student-cover.jpg"
    behanceUrl: "<iframe src=\"https://www.behance.net/embed/project/247470295?ilo0=1\" height=\"316\" width=\"404\" allowfullscreen lazyload frameborder=\"0\" allow=\"clipboard-write\" refererPolicy=\"strict-origin-when-cross-origin\"></iframe>",
    pdfPath:    "case-studies/student-app-case-study.pdf",
    figmaLink:  "https://figma.com",
    embedUrl:   "",

    problem: "Students and parents faced a feature-heavy academic tracking interface with no clear visual hierarchy — everything competed equally for attention. The admissions landing pages had no brand consistency across partner school deployments.",

    solution: "Redesigned the mobile app with a cognitive load-first approach — grouping features by usage frequency rather than system category. Applied progressive disclosure to reduce visible complexity. Created a flexible admissions landing page template system.",

    highlights: [
      "Designed student-facing mobile app: homework, assessments, study center, performance analytics, attendance",
      "Cognitive load reduction — feature grouping by usage frequency, progressive disclosure for secondary actions",
      "Flexible institutional landing page templates adapting to partner school brand guidelines",
      "Reduced perceived complexity of home screen through information architecture restructuring",
    ],

    screens: [
      { label: "Student Dashboard",      src: "", type: "mobile" },
      { label: "Homework Submission",    src: "", type: "mobile" },
      { label: "Performance Analytics",  src: "", type: "mobile" },
      { label: "Study Center",           src: "", type: "mobile" },
      { label: "Attendance Tracker",     src: "", type: "mobile" },
      { label: "Admissions Landing Page",src: "", type: "desktop" },
    ],
  },

  {
    id:         "railways",
    type:       "personal",
    domain:     "Mobile · Concept · Civic Technology",
    name:       "Indian Railways PNR-Bridge",
    brief:      "Self-initiated UX concept solving the geofencing gap that prevents transfer passengers from booking their next unreserved leg while already on a train.",
    cat:        ["Civic Tech", "Mobile"],
    role:       "Solo UX Designer (Self-initiated)",
    timeline:   "Ongoing",
    platform:   "Android-first Mobile App",
    tools:      "Figma · FigJam · Token Studio",
    status:     "published",
    bg:         "linear-gradient(145deg,#0C0518 0%,#180930 55%,#100622 100%)",
    ic:         "#C084FC",
    cover:      "itrtc cover.png",           // ← drop cover image here, e.g. "assets/projects/railways-cover.jpg"
    behanceUrl: "<iframe src=\"https://www.behance.net/embed/project/247470295?ilo0=1\" height=\"316\" width=\"404\" allowfullscreen lazyload frameborder=\"0\" allow=\"clipboard-write\" refererPolicy=\"strict-origin-when-cross-origin\"></iframe>",
    pdfPath:    "casestudy/Railone_Case Study.pdf",
    figmaLink:  "https://figma.com",
    embedUrl:   "",

    problem: "Born from a real experience — couldn't book an unreserved ticket during a tight connection at Secunderabad because the UTS app's 250m geofencing rule blocked me at the platform after a long-distance arrival. The rule blocks exactly the users who need paperless booking most.",

    solution: "Designed a PNR-Bridge feature: user enters arriving train's PNR → system validates arrival within 60 minutes → geofencing temporarily bypassed for the next booking. Security safeguard: PNR name must match the registered UTS account.",

    highlights: [
      "Identified the exact geofencing logic gap: 250m rule blocks transit passengers already at the platform",
      "3-layer validation: PNR match → active journey leg detection → time-windowed station unlock (60-minute window)",
      "Minimal high-contrast UI optimized for low-end Android on 2G/3G in rural transit zones",
      "Complete edge case specification: expired PNR, wrong leg, connectivity loss, window timeout, name mismatch",
      "Security rationale with railway policy compatibility analysis and fraud-prevention audit trail",
    ],

    screens: [
      { label: "PNR Entry Screen",       src: "IRTC/Book Now_IRTC.png", type: "mobile" },
      { label: "Select Destination__IRTC",  src: "IRTC/Select Destination__IRTC.png", type: "mobile" },
      { label: "Transfer window expired_IRTC",    src: "IRTC/Transfer window expired_IRTC.png", type: "mobile" },
      { label: "Unreserved E-Ticket_IRTC", src: "IRTC/Unreserved E-Ticket_IRTC.png", type: "mobile" },
      { label: "VERIFIED_IRTC",       src: "IRTC/VERIFIED_IRTC.png", type: "mobile" },
    ],
  },

  {
    id:         "comingle",
    type:       "personal",
    domain:     "Mobile · Community · UX Research",
    name:       "Comingle — Skill-Sharing App",
    brief:      "Community platform connecting people through skill sharing — designed with full design thinking research, competitive analysis, and A/B tested onboarding flows.",
    cat:        ["Social", "Mobile"],
    role:       "Solo UX Designer",
    timeline:   "Academic Project",
    platform:   "Mobile App",
    tools:      "Figma · FigJam",
    status:     "published",
    bg:         "linear-gradient(145deg,#051210 0%,#0A2018 55%,#071812 100%)",
    ic:         "#34D399",
    cover:      "commingle_cover.png",           // ← drop cover image here, e.g. "assets/projects/comingle-cover.jpg"
    behanceUrl: "<iframe src=\"https://www.behance.net/embed/project/235705133?ilo0=1\" height=\"316\" width=\"404\" allowfullscreen lazyload frameborder=\"0\" allow=\"clipboard-write\" refererPolicy=\"strict-origin-when-cross-origin\"></iframe>",  // ← update to exact project URL
    pdfPath:    "casestudy/commingle_case_study.pdf",
    figmaLink:  "https://figma.com",
    embedUrl:   "https://embed.figma.com/proto/UeGxqRRU1JXg5owKdaC7BZ/Commingle?node-id=146-7012&viewport=-1553%2C236%2C0.21&scaling=scale-down&content-scaling=fixed&starting-point-node-id=366%3A4282&show-proto-sidebar=1&page-id=0%3A1&embed-host=share",

    problem: "Existing skill-sharing platforms felt either transactional or unfocused. Users wanted meaningful skill exchange with people nearby, with no structured way to discover, connect, and collaborate around specific skills.",

    solution: "Ran full design thinking: 8 user interviews, competitive analysis of 3 platforms, persona creation, empathy mapping. Designed 4-tab IA with Skill Hub as the core feature. A/B tested 2 onboarding flows with 10 users.",

    highlights: [
      "8 user interviews + competitive analysis of 3 platforms formed the research foundation",
      "Persona creation and empathy mapping guided information architecture decisions",
      "4-tab IA with Skill Hub as the differentiating core feature",
      "A/B tested 2 onboarding flows with 10 users — iterated on the higher-converting variant",
      "Full Figma prototype with micro-interaction specs and developer handoff annotations",
    ],

    screens: [
      { label: "Onboarding Flow",       src: "commingles_screens/icon.png", type: "mobile" },
      { label: "Home Screen",       src: "commingles_screens/home_commit.png", type: "mobile" },
      { label: "Skill Hub",               src: "commingles_screens/skil-hub.png", type: "mobile" },
      { label: "Message Screen",          src: "commingles_screens/meessgale_clone.png", type: "mobile" },
      { label: "Explore",        src: "commingles_screens/explorer_clone.png", type: "mobile" },
      { label: "Skill offer",   src: "commingles_screens/skill%20offer%20-form.png", type: "mobile" },
      
    ],
  },

  {
  id: "stupa-sports-analytics",

  type: "assignment",

  disabled: false,

  domain: "SportsTech · Tournament Operations",

  name: "Stupa Sports Analytics — Tournament Operations Platform",

  brief:
    "Designed an operational scheduling experience for competition managers handling live tournaments under high-pressure conditions.",

  cat: ["SportsTech", "B2B", "Operations"],

  role: "UX Researcher & Product Designer",

  timeline: "Design Assignment · May 2026",

  platform: "Web Dashboard",

  tools: "Figma, UX Research, System Design",

  status: "published",

  bg: "linear-gradient(145deg,#0A0A12 0%,#18112B 45%,#12071F 100%)",

  ic: "#8B5CF6",

  cover: "/projects/stupa/cover.webp",

  pdfPath: "/projects/stupa/stupa-case-study.pdf",

  figmaLink: "https://www.figma.com/design/w6zRXfQxjXumI0mP53l3H6/sport?node-id=11-2664&t=UCPktthnsw3Xy6Z8-1",

  embedUrl: "<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://embed.figma.com/proto/w6zRXfQxjXumI0mP53l3H6/sport?node-id=7-860&page-id=0%3A1&scaling=contain&content-scaling=fixed&embed-host=share" allowfullscreen></iframe>",

  problem:
    "Competition managers struggle to coordinate fixtures, tables, and umpire assignments during live tournaments where operational pressure and constant disruptions create scheduling chaos.",

  solution:
    "Designed a single-surface tournament operations dashboard focused on rapid scheduling, conflict prevention, and operational clarity through intelligent scheduling assistance and contextual decision-making.",

  highlights: [
    "Designed a single-surface scheduling workflow to reduce operational overload",
    "Introduced conflict prevention checks before schedule confirmation",
    "Applied operational UX principles for high-pressure tournament environments",
    "Built scheduling logic around real-world tournament constraints",
  ],

  screens: [
    {
      label: "Tournament Dashboard",
      src: "SPOTE\Scheduled screen.png",
      type: "desktop",
    },

    {
      label: "Fixture Scheduling Flow",
      src: "SPOTE\View after auto-scheduling.png",
      type: "desktop",
    },

    {
      label: "Conflict Prevention Logic",
      src: "SPOTE\View details about why it was not scheduled..png",
      type: "desktop",
    },
  ],
},

  // ─── ADD NEW PROJECTS BELOW ──────────────────────────────────
  // Copy the block above, change the fields, and it appears in the grid automatically.

  // ─── COMPANY ASSIGNMENTS ─────────────────────────────────────
  // Add type:"assignment" to any project to place it in the
  // "Company Assignments" section (below the main case studies).
  // Set disabled:true until you're ready to show it.
  
  {
    id:         "",
    type:       "assignment",       // ← marks this as secondary / assignment work
    disabled:   true,               // ← set to false when ready to publish
    domain:     "SportsTech",
    name:       "[FILL: Company Name] — SportsTech Design Assignment",
    brief:      "[FILL: One-line brief describing what the FinTech assignment asked you to design.]",
    cat:        ["FinTech"],
    role:       "Design Assignment",
    timeline:   "[FILL: e.g. 3-day assignment · Month Year]",
    platform:   "[FILL: e.g. Mobile App / Web Dashboard]",
    tools:      "Figma",
    status:     "published",
    bg:         "linear-gradient(145deg,#0D0D0F 0%,#1A1A1F 55%,#111115 100%)",
    ic:         "#94A3B8",
    cover:      "",
    pdfPath:    "",                 // ← optional: brief/documentation PDF
    figmaLink:  "",
    embedUrl:   "",

    problem:    "[FILL: What problem did the assignment ask you to solve?]",
    solution:   "[FILL: What did you design and why?]",

    highlights: [
      "[FILL: Key decision or constraint you navigated]",
      "[FILL: Notable screen or flow you designed]",
      "[FILL: Any research or rationale you applied]",
    ],

    screens: [
      { label: "Screen 1", src: "", type: "desktop" },
      { label: "Screen 2", src: "", type: "desktop" },
    ],
  },
];
       
