import type { AvailabilityStatus, Localized } from "@/content/types";

export type ServiceItem = {
  id: string;
  availability: AvailabilityStatus;
  title: string;
  description: string;
  audience: string;
  howItHelps: string;
  access: string;
};

type ServicesPageContent = {
  hero: { eyebrow: string; title: string; description: string };
  availabilityLabels: Record<AvailabilityStatus, string>;
  cta: string;
};

export const servicesContent = {
  ar: {
    hero: { eyebrow: "الخدمات الطلابية", title: "دعم منظم يرافق الطالب في رحلته الجامعية", description: "تجمع خدمات بانوراما بين ما يقدمه المجتمع الطلابي اليوم وما تمهّد له الأدوات الرقمية لاحقاً، مع توضيح حالة كل خدمة بصدق." },
    availabilityLabels: { available: "متاح عبر المجتمع", limited: "متاح بحسب المجتمع", digital: "امتداد رقمي", comingSoon: "قيد الإتاحة" },
    cta: "تواصل مع بانوراما"
  },
  en: {
    hero: { eyebrow: "Student services", title: "Organized support throughout the university journey", description: "Panorama brings together what student communities can support today and what digital tools can enable later, while stating each service’s availability honestly." },
    availabilityLabels: { available: "Available through the community", limited: "Availability varies by community", digital: "Digital extension", comingSoon: "Coming later" },
    cta: "Contact Panorama"
  }
} satisfies Localized<ServicesPageContent>;

export const services = {
  ar: [
    { id: "academic-resources", availability: "available", title: "المصادر الأكاديمية", description: "تنظيم مشاركة الملفات والملخصات والخبرات التعليمية بين الطلاب.", audience: "الطلاب الباحثون عن معرفة منظمة", howItHelps: "يقرّب المصادر والخبرات المتبادلة من مجتمع الكلية.", access: "تواصل مع مجتمع كليتك لمعرفة الموارد المتاحة حالياً." },
    { id: "academic-groups", availability: "available", title: "المجموعات الأكاديمية", description: "مساحات تربط الطلاب حسب الكلية أو التخصص أو السنة الدراسية.", audience: "الطلاب الراغبون في مجتمع دراسي", howItHelps: "يسهّل التواصل وتبادل الأسئلة والمعلومات المفيدة.", access: "استكشف صفحة كليتك أو تواصل مع بانوراما." },
    { id: "student-guidance", availability: "limited", title: "الإرشاد الطلابي", description: "إجابات عملية ومساندة عامة للطلاب الجدد والأسئلة اليومية.", audience: "الطلاب الجدد والحاليون", howItHelps: "يختصر الوصول إلى تجربة زملاء سبقوا في المسار.", access: "تختلف الإتاحة بحسب مجتمع الكلية؛ تواصل معنا للاستفسار." },
    { id: "workshops", availability: "limited", title: "التطوير والورش", description: "مساحات ومبادرات تساعد على التعلّم واكتشاف المواهب.", audience: "الطلاب المهتمون بالتطوير والمبادرة", howItHelps: "يوصل الطالب إلى فرص مجتمعية عند اعتمادها وإعلانها.", access: "تابع القنوات الرسمية أو صفحة المبادرات للحصول على المستجدات." },
    { id: "volunteering", availability: "available", title: "فرص التطوع", description: "مسار للمساهمة بالمعرفة والمهارة والوقت داخل المجتمع الطلابي.", audience: "الطلاب الراغبون بالمشاركة", howItHelps: "يحوّل الاهتمام إلى دور واضح يخدم الطلاب.", access: "تعرّف إلى مسار التطوع ثم تواصل مع الفريق." },
    { id: "digital-platform", availability: "digital", title: "الخدمات الرقمية", description: "أدوات رقمية تدعم تنظيم الموارد والمجموعات والإشعارات والخدمات.", audience: "الطلاب المستفيدون من التنظيم الرقمي", howItHelps: "تدعم مهمة الفريق ولا تستبدل المجتمع الطلابي.", access: "تُعرض الإتاحة والتفاصيل عبر صفحة المنصة عند اعتمادها." },
    { id: "printing", availability: "comingSoon", title: "خدمات الطباعة", description: "مسار رقمي مقترح لخدمة احتياجات الطباعة الطلابية عند اعتماده.", audience: "الطلاب الذين يحتاجون خدمة طباعة", howItHelps: "يوفر أساساً منظماً للخدمة المستقبلية دون ادعاء إتاحتها الآن.", access: "لا تتوفر تفاصيل تشغيلية معتمدة حالياً." }
  ],
  en: [
    { id: "academic-resources", availability: "available", title: "Academic resources", description: "Organizing the sharing of files, summaries, and study experience between students.", audience: "Students looking for organized knowledge", howItHelps: "Brings shared resources and peer experience closer to each faculty community.", access: "Contact your faculty community to learn which resources are currently available." },
    { id: "academic-groups", availability: "available", title: "Academic groups", description: "Spaces that connect students by faculty, specialization, or academic year.", audience: "Students seeking a study community", howItHelps: "Makes it easier to exchange questions and useful information.", access: "Explore your faculty page or contact Panorama." },
    { id: "student-guidance", availability: "limited", title: "Student guidance", description: "Practical answers and general support for new students and everyday questions.", audience: "New and current students", howItHelps: "Makes peer experience easier to reach.", access: "Availability varies by faculty community; contact us to ask." },
    { id: "workshops", availability: "limited", title: "Workshops and growth", description: "Community spaces and initiatives that support learning and talent discovery.", audience: "Students interested in growth and initiative", howItHelps: "Connects students to community opportunities when they are approved and announced.", access: "Follow official channels or the initiatives page for updates." },
    { id: "volunteering", availability: "available", title: "Volunteer opportunities", description: "A path to contribute knowledge, skill, and time within the student community.", audience: "Students ready to participate", howItHelps: "Turns interest into a clear role that supports other students.", access: "Explore the volunteer journey, then contact the team." },
    { id: "digital-platform", availability: "digital", title: "Digital services", description: "Digital tools that support organized resources, groups, updates, and services.", audience: "Students who benefit from digital organization", howItHelps: "Supports the team’s mission without replacing the student community.", access: "Availability and details will be shared on the platform page when approved." },
    { id: "printing", availability: "comingSoon", title: "Printing services", description: "A proposed digital path for student printing needs when it is approved.", audience: "Students needing printing support", howItHelps: "Provides a future service foundation without claiming current availability.", access: "No approved operational details are available yet." }
  ]
} satisfies Localized<ServiceItem[]>;
