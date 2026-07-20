import type { Localized } from "@/content/types";

type CommonContent = {
  home: string;
  breadcrumbs: string;
  faculties: string;
  exploreFaculties: string;
  backToFaculties: string;
  contactUs: string;
  volunteer: string;
  services: string;
  faq: string;
  availability: string;
  comingSoon: string;
};

export const commonContent = {
  ar: { home: "الرئيسية", breadcrumbs: "مسار التنقل", faculties: "الكليات", exploreFaculties: "استكشف الكليات", backToFaculties: "العودة إلى الكليات", contactUs: "تواصل معنا", volunteer: "تطوع معنا", services: "الخدمات", faq: "الأسئلة الشائعة", availability: "حالة الإتاحة", comingSoon: "قريباً" },
  en: { home: "Home", breadcrumbs: "Breadcrumbs", faculties: "Faculties", exploreFaculties: "Explore faculties", backToFaculties: "Back to faculties", contactUs: "Contact us", volunteer: "Volunteer with us", services: "Services", faq: "Frequently asked questions", availability: "Availability", comingSoon: "Coming later" }
} satisfies Localized<CommonContent>;
