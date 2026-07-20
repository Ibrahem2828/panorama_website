import type { Localized } from "@/content/types";

export type PageMetaKey = "about" | "faculties" | "services" | "initiatives" | "volunteer" | "platform" | "news" | "gallery" | "faq" | "contact" | "impact" | "privacy" | "terms";

export type PageMeta = { title: string; description: string };

export const pageMeta = {
  ar: {
    about: { title: "عن بانوراما", description: "تعرّف إلى مجتمع بانوراما الطلابي التطوعي ورسالتها ورؤيتها وقيمها." },
    faculties: { title: "الكليات", description: "استكشف مجتمعات الكليات ضمن هوية بانوراما الطلابية الواحدة." },
    services: { title: "الخدمات الطلابية", description: "تعرّف إلى خدمات بانوراما وحالات إتاحتها بوضوح." },
    initiatives: { title: "المبادرات والأنشطة", description: "صفحة المبادرات والأنشطة المعتمدة لفريق بانوراما." },
    volunteer: { title: "تطوّع معنا", description: "تعرّف إلى مسارات المشاركة والتطوع ضمن مجتمع بانوراما." },
    platform: { title: "المنصة الرقمية", description: "المنصة الرقمية كامتداد منظم لرسالة بانوراما الطلابية." },
    news: { title: "الأخبار والتحديثات", description: "مساحة منظمة للتحديثات المعتمدة لفريق بانوراما." },
    gallery: { title: "المعرض", description: "مساحة منظمة لمحتوى بانوراما البصري المعتمد." },
    faq: { title: "الأسئلة الشائعة", description: "إجابات واضحة عن بانوراما ومجتمعاتها وخدماتها." },
    contact: { title: "تواصل معنا", description: "طرق التواصل المتاحة مع فريق بانوراما ومجتمعها." },
    impact: { title: "الأثر", description: "كيف تنظر بانوراما إلى الأثر المسؤول والمعرفة المشتركة." },
    privacy: { title: "سياسة الخصوصية", description: "بيان تمهيدي لخصوصية موقع فريق بانوراما." },
    terms: { title: "شروط الاستخدام", description: "شروط تمهيدية لاستخدام موقع فريق بانوراما." }
  },
  en: {
    about: { title: "About Panorama", description: "Meet Panorama, its student-volunteer identity, mission, vision, and values." },
    faculties: { title: "Faculties", description: "Explore faculty communities within Panorama’s shared student identity." },
    services: { title: "Student services", description: "Discover Panorama services and their availability states with clarity." },
    initiatives: { title: "Initiatives and activities", description: "Approved initiatives and activity foundation for Panorama." },
    volunteer: { title: "Volunteer with us", description: "Discover participation and volunteer paths within Panorama." },
    platform: { title: "Digital platform", description: "The digital platform as an organized extension of Panorama’s student mission." },
    news: { title: "News and updates", description: "An organized space for approved Panorama updates." },
    gallery: { title: "Gallery", description: "An organized space for approved Panorama visual content." },
    faq: { title: "Frequently asked questions", description: "Clear answers about Panorama, its communities, and services." },
    contact: { title: "Contact us", description: "Available ways to reach the Panorama team and community." },
    impact: { title: "Impact", description: "How Panorama approaches responsible impact and shared knowledge." },
    privacy: { title: "Privacy policy", description: "An introductory privacy statement for the Panorama team website." },
    terms: { title: "Terms of use", description: "Introductory terms for using the Panorama team website." }
  }
} satisfies Localized<Record<PageMetaKey, PageMeta>>;
