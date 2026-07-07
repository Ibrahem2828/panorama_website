export type NavItem = {
  labelKey: string;
  href: string;
};

export const navItems: NavItem[] = [
  { labelKey: "nav.features", href: "/#features" },
  { labelKey: "nav.mobileApp", href: "/#mobile-app" },
  { labelKey: "nav.dashboard", href: "/#dashboard" },
  { labelKey: "nav.security", href: "/#security" },
  { labelKey: "nav.contact", href: "/#contact" },
];

export const footerLinks: NavItem[] = [
  { labelKey: "footer.links.features", href: "/#features" },
  { labelKey: "footer.links.security", href: "/#security" },
  { labelKey: "footer.links.privacy", href: "/privacy" },
  { labelKey: "footer.links.terms", href: "/terms" },
];
