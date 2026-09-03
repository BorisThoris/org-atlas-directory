// Metadata inputs for this repository - unique to tick42_demo.
//
// Everything here is curated by hand. Derived facts (stack, metrics, git,
// screenshots) are computed by scripts/generate-project-meta.mjs, which writes
// project.meta.json. Run it with:
//   npm run meta          regenerate project.meta.json
//   npm run meta:check    fail if project.meta.json is stale

import path from 'node:path';

// Screenshots are captured by the portfolio (npm run capture there). Point
// PORTFOLIO_ROOT elsewhere, or drop images in ./project-media, to override.
const portfolioRoot = process.env.PORTFOLIO_ROOT ?? String.raw`C:\Users\Gaming PC\Desktop\Repos\portfolio`;

export default {
  slug: "org-atlas-directory",
  classification: "web-app",

  curated: {
    "title": "Org Atlas Directory",
    "subtitle": "Enterprise directory demo",
    "description": "A React/Redux directory app with synthetic relational data for companies, projects, employees, and addresses.",
    "tags": [
      "React",
      "Redux",
      "Directory"
    ],
    "accent": "#60a5fa",
    "deploymentUrl": "https://org-atlas-directory-git.pages.dev/",
    "localUrl": "http://127.0.0.1:4115/",
    "buildCommand": "npm run build",
    "buildOutput": "build",
    "runCommand": "npm run demo",
    "devPort": 4115,
    "showcaseTier": "more"
  },

  // How the portfolio screenshot pipeline photographs this project.
  capture: {
    "route": "/"
  },

  scores: {
    "priorityScore": 70,
    "demoabilityScore": 74,
    "depthScore": 70,
    "polishScore": 68,
    "uniquenessScore": 68,
    "maintenanceScore": 66
  },

  analysisNotes:
    "React/Redux directory app with json-server demo flow and synthetic relational data; useful but quieter portfolio material.",

  // Where the link-preview card lives: the page head that carries the Open
  // Graph tags, and the static directory the image is published from.
  social: {
    "htmlFile": "public/index.html",
    "staticDir": "public",
    "imageName": "og-image.jpg",
    "imageUrlPath": "/og-image.jpg"
  },

  media: {
    sourceDir: path.join(portfolioRoot, "public", "project-shots", "org-atlas-directory", "latest"),
    publicPathPrefix: "/project-shots/org-atlas-directory/latest",
    primaryProfile: "card"
  }
};
