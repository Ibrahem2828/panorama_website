const configuredDomain = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/+$/, "");
const configuredEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim();

const fallbackSite = {
  name: "Panorama",
  arabicName: "بانوراما",
  domain: "https://بانوراما.tech",
  title: "Panorama — Smart Academic Platform for University Students",
  description:
    "Panorama is a smart academic platform for university students, combining academic files, student verification, subject groups, printing orders, support tickets, notifications, and admin dashboard operations.",
  email: "panoramacompany31@gmail.com",
  keywords: [
    "Panorama",
    "بانوراما",
    "Panorama app",
    "Panorama university platform",
    "University student app",
    "Academic platform",
    "Academic files platform",
    "Student verification system",
    "University dashboard",
    "Printing order management",
    "Protected academic files",
    "Student support system",
  ],
} as const;

export const site = {
  ...fallbackSite,
  arabicName: "بانوراما",
  domain: configuredDomain || "https://بانوراما.tech",
  title: "Panorama — Smart Academic Platform for University Students",
  email: configuredEmail || fallbackSite.email,
  keywords: [
    "Panorama",
    "بانوراما",
    "Panorama app",
    "Panorama university platform",
    "University student app",
    "Academic platform",
    "Academic files platform",
    "Student verification system",
    "University dashboard",
    "Printing order management",
    "Protected academic files",
    "Student support system",
  ],
} as const;
