import type { AvailabilityStatus, Localized } from "@/content/types";

export type { SiteLocale } from "@/content/types";

export type Faculty = {
  slug: string;
  name: Localized<string>;
  shortName: Localized<string>;
  description: Localized<string>;
  communityPurpose: Localized<string>;
  supportAreas: Localized<string[]>;
  availability: AvailabilityStatus;
  logoPath: string;
  accent: string;
  enabled: boolean;
  detailPageEnabled: boolean;
};

export const faculties: Faculty[] = [
  {
    slug: "informatics",
    name: { ar: "كلية المعلوماتية", en: "Faculty of Informatics" },
    shortName: { ar: "المعلوماتية", en: "Informatics" },
    description: { ar: "مجتمع للمعرفة الرقمية والتعلّم التعاوني.", en: "A community for digital knowledge and peer learning." },
    communityPurpose: { ar: "تنظيم تبادل المعرفة والخبرة بين طلاب المعلوماتية ضمن هوية بانوراما الجامعة.", en: "To organize peer knowledge exchange for informatics students within Panorama’s shared identity." },
    supportAreas: { ar: ["المجموعات الأكاديمية", "المصادر المشتركة", "الإرشاد الطلابي"], en: ["Academic groups", "Shared resources", "Student guidance"] },
    availability: "available",
    logoPath: "/Logos/معلوماتية.png",
    accent: "var(--faculty-informatics)",
    enabled: true,
    detailPageEnabled: true,
  },
  {
    slug: "foundation-requirements",
    name: { ar: "المتطلبات الأساسية", en: "Foundation Requirements" },
    shortName: { ar: "المتطلبات", en: "Foundations" },
    description: { ar: "بداية منظمة تساعد الطالب على بناء أساسه.", en: "A structured start for every student’s foundation." },
    communityPurpose: { ar: "مساندة الطلاب في المساقات المشتركة وبناء بداية أكاديمية أكثر تنظيماً.", en: "To support students in shared courses and create a more organized academic start." },
    supportAreas: { ar: ["المواد المشتركة", "المجموعات الطلابية", "دعم الطلاب الجدد"], en: ["Shared courses", "Student groups", "New student support"] },
    availability: "available",
    logoPath: "/Logos/متطلب اساسي.png",
    accent: "var(--faculty-foundations)",
    enabled: true,
    detailPageEnabled: true,
  },
  {
    slug: "petroleum",
    name: { ar: "كلية هندسة البترول", en: "Faculty of Petroleum Engineering" },
    shortName: { ar: "هندسة البترول", en: "Petroleum" },
    description: { ar: "مساحة تجمع التخصص والخبرة بين الزملاء.", en: "A space for students to share specialist knowledge." },
    communityPurpose: { ar: "خلق مساحة متخصصة لتبادل مصادر الدراسة والخبرات بين طلاب هندسة البترول.", en: "To create a specialist space for petroleum engineering students to exchange study resources and experience." },
    supportAreas: { ar: ["المصادر الأكاديمية", "الإعلان المنظم", "المبادرات الطلابية"], en: ["Academic resources", "Organized updates", "Student initiatives"] },
    availability: "limited",
    logoPath: "/Logos/بتروول.png",
    accent: "var(--faculty-petroleum)",
    enabled: true,
    detailPageEnabled: true,
  },
  {
    slug: "clinical",
    name: { ar: "الكلية السريرية", en: "Clinical Faculty" },
    shortName: { ar: "السريرية", en: "Clinical" },
    description: { ar: "دعم معرفي عملي ضمن مجتمع طلابي متعاون.", en: "Practical peer support within a connected community." },
    communityPurpose: { ar: "تسهيل تبادل المعرفة العملية والدعم بين طلاب المجتمع السريري.", en: "To facilitate practical knowledge exchange and peer support for the clinical community." },
    supportAreas: { ar: ["تبادل الخبرات", "الموارد المشتركة", "الإرشاد"], en: ["Experience sharing", "Shared resources", "Guidance"] },
    availability: "limited",
    logoPath: "/Logos/سريرية.png",
    accent: "var(--faculty-clinical)",
    enabled: true,
    detailPageEnabled: true,
  },
  {
    slug: "pharmacy",
    name: { ar: "كلية الصيدلة", en: "Faculty of Pharmacy" },
    shortName: { ar: "الصيدلة", en: "Pharmacy" },
    description: { ar: "تبادل للمصادر والخبرات في رحلة الدراسة.", en: "A place to exchange resources and study experience." },
    communityPurpose: { ar: "جمع طلاب الصيدلة حول مصادر منظمة وخبرة دراسية متبادلة.", en: "To bring pharmacy students together around organized resources and shared study experience." },
    supportAreas: { ar: ["المواد الأكاديمية", "المجموعات", "المساعدة الطلابية"], en: ["Academic materials", "Groups", "Student support"] },
    availability: "available",
    logoPath: "/Logos/صيدلي.png",
    accent: "var(--faculty-pharmacy)",
    enabled: true,
    detailPageEnabled: true,
  },
  {
    slug: "medicine",
    name: { ar: "كلية الطب البشري", en: "Faculty of Medicine" },
    shortName: { ar: "الطب البشري", en: "Medicine" },
    description: { ar: "معرفة مشتركة تساند كل طالب في مسيرته.", en: "Shared knowledge that supports every student’s path." },
    communityPurpose: { ar: "تقديم مساحة طلابية للمصادر والمساندة وتبادل الخبرة في مسار الطب البشري.", en: "To provide a student space for resources, support, and experience exchange throughout medical studies." },
    supportAreas: { ar: ["المجموعات الأكاديمية", "المصادر", "التوجيه للطلاب"], en: ["Academic groups", "Resources", "Student guidance"] },
    availability: "available",
    logoPath: "/Logos/طب بشري.png",
    accent: "var(--faculty-medicine)",
    enabled: true,
    detailPageEnabled: true,
  },
  {
    slug: "dentistry",
    name: { ar: "كلية طب الأسنان", en: "Faculty of Dentistry" },
    shortName: { ar: "طب الأسنان", en: "Dentistry" },
    description: { ar: "تواصل وخدمة وتبادل خبرات بين الطلبة.", en: "Connection, service, and peer-to-peer exchange." },
    communityPurpose: { ar: "دعم مجتمع طلاب طب الأسنان في تبادل المعرفة والخبرة والخدمة المتبادلة.", en: "To support Dentistry students in exchanging knowledge, experience, and practical peer service." },
    supportAreas: { ar: ["تبادل المعرفة", "المجموعات", "المبادرات"], en: ["Knowledge sharing", "Groups", "Initiatives"] },
    availability: "limited",
    logoPath: "/Logos/طب اسنان.png",
    accent: "var(--faculty-dentistry)",
    enabled: true,
    detailPageEnabled: true,
  },
  {
    slug: "business-administration",
    name: { ar: "كلية إدارة الأعمال", en: "Faculty of Business Administration" },
    shortName: { ar: "إدارة الأعمال", en: "Business Administration" },
    description: { ar: "منظور طلابي يجمع التعلّم والطموح والمبادرة.", en: "A student perspective connecting learning and initiative." },
    communityPurpose: { ar: "دعم طلاب إدارة الأعمال في تنظيم المعرفة والمبادرة والربط بين الزملاء.", en: "To support Business Administration students through organized knowledge, initiative, and peer connection." },
    supportAreas: { ar: ["مصادر الدراسة", "المجتمع الطلابي", "تطوير المهارات"], en: ["Study resources", "Student community", "Skills development"] },
    availability: "limited",
    logoPath: "/Logos/ادارة اعمال.png",
    accent: "var(--faculty-business)",
    enabled: true,
    detailPageEnabled: true,
  },
];
