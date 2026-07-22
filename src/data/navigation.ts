export type NavItem = {
  key: "home" | "about" | "faculties" | "services" | "volunteer" | "platform" | "contact";
  href: string;
};

export const navItems: NavItem[] = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "faculties", href: "/faculties" },
  { key: "services", href: "/services" },
  { key: "volunteer", href: "/volunteer" },
  { key: "platform", href: "/platform" },
  { key: "contact", href: "/contact" },
];

export const footerLinks = [
  { key: "about", href: "/about" },
  { key: "faculties", href: "/faculties" },
  { key: "services", href: "/services" },
  { key: "volunteer", href: "/volunteer" },
  { key: "platform", href: "/platform" },
  { key: "faq", href: "/faq" },
  { key: "contact", href: "/contact" },
  { key: "privacy", href: "/privacy" },
  { key: "terms", href: "/terms" },
] as const;
