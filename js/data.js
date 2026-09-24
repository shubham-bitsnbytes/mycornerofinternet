// ============================================================
// Edit this file to personalize your site — no HTML editing
// needed for the content below.
// ============================================================

const SITE = {
  name: "Shubham Singh",
  tagline: "Technical Product Manager, based in the Netherlands.",
  // Short intro shown on the Home page. Separate paragraphs with a blank
  // line — each becomes its own <p>.
  bio: `
Hi, I'm Shubham — a Technical Product Manager based in the Netherlands. I
started my career as an engineer, building software solutions for a US
company.

Along that journey, I discovered a passion for problem discovery —
understanding optionality and trade-offs, and turning that thinking into
software solutions that matter. This site is where I share a bit about who
I am, what I've worked on, and what I'm learning along the way.
  `,
};

// Add / remove / edit your social links here.
// "icon" must be one of: github, linkedin, twitter, instagram, youtube, website, email
// (see ICONS in js/main.js) — or omit it to use a generic link icon.
const SOCIAL_LINKS = [
  { name: "GitHub", icon: "github", url: "https://github.com/shubham-bitsnbytes" },
  { name: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/shubhamksingh/" },
  { name: "Instagram", icon: "instagram", url: "https://instagram.com/your-username" },
];

// ===== Personal Journey (journey.html) =====
// A longer narrative plus a timeline of milestones.
const JOURNEY = {
  intro: `
I started my career as an engineer, building software solutions for a US
company. It was hands-on, technical work — and it gave me a solid grounding
in how software actually gets built.

Along the way, I found myself drawn less to writing the code and more to
the questions before it: what problem are we actually solving, what are
the options, and what trade-offs are we making by choosing one over
another. That shift in curiosity — from building to problem discovery — is
what eventually led me into product management.

Today I work as a Technical Product Manager based in the Netherlands,
where that engineering background still shapes how I think: I care about
optionality, trade-offs, and grounding product decisions in how the
software actually works.
  `,
  milestones: [
    {
      year: "20XX",
      title: "Milestone title",
      description: "A sentence or two about what happened and why it mattered.",
    },
    {
      year: "20XX",
      title: "Another milestone",
      description: "Add as many of these as you like, newest or oldest first — your call.",
    },
    {
      year: "Today",
      title: "What I'm doing now",
      description: "Where things stand currently, and what you're focused on.",
    },
  ],
};

// ===== Work (work.html) =====
// Professional experience and things you've built.
const WORK = {
  intro: `
A summary of my professional experience and things I've built. Replace this
with your own overview in js/data.js.
  `,
  experience: [
    {
      role: "Job title",
      org: "Company / organization",
      period: "20XX — Present",
      description: "One or two sentences about your role and impact there.",
    },
  ],
  projects: [
    {
      name: "Project name",
      description: "A short description of the project and what it does.",
      url: "https://github.com/your-username/project",
      tags: ["tag1", "tag2"],
    },
  ],
};

// ===== Writing / Knowledge sharing (learnings.html) =====
// Add a new entry each time you want to share a learning.
// "file" should point to an HTML file inside /learnings/.
const LEARNINGS = [
  {
    date: "2026-09-12",
    title: "Welcome to my learnings log",
    excerpt: "The first entry — why I'm starting this, and what to expect here.",
    tags: ["meta"],
    file: "learnings/welcome.html",
  },
];
