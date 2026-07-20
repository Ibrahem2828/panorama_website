import type { Localized } from "@/content/types";

export type ActivityCategory = "academic" | "orientation" | "workshop" | "volunteering" | "talent" | "community" | "technology" | "faculty";

export type InitiativeItem = {
  id: string;
  title: string;
  summary: string;
  category: ActivityCategory;
  date?: string;
  location?: string;
  coverImage?: string;
  facultySlug?: string;
  status: "planned" | "published";
  highlighted?: boolean;
};

type InitiativesContent = {
  hero: { eyebrow: string; title: string; description: string };
  empty: { title: string; description: string; action: string };
  categories: Record<ActivityCategory, string>;
};

export const initiativesContent = {
  ar: {
    hero: { eyebrow: "المبادرات والأنشطة", title: "مساحات يتحول فيها التعاون إلى فعل", description: "تجمع هذه الصفحة المبادرات والأنشطة المعتمدة لفريق بانوراما. لن ننشر فعالية أو تاريخاً أو شريكاً قبل توثيقه واعتماده." },
    empty: { title: "المبادرات المعتمدة ستظهر هنا", description: "نعمل على تجهيز سجل الأنشطة والمبادرات بمحتوى موثّق. تابع بانوراما عبر القنوات الرسمية للاطلاع على الإعلانات الجديدة.", action: "تابع بانوراما" },
    categories: { academic: "دعم أكاديمي", orientation: "إرشاد طلابي", workshop: "ورش وتطوير", volunteering: "تطوع", talent: "دعم المواهب", community: "مسؤولية مجتمعية", technology: "تقنية", faculty: "نشاطات الكليات" }
  },
  en: {
    hero: { eyebrow: "Initiatives and activities", title: "Spaces where cooperation becomes action", description: "This page brings together approved Panorama initiatives and activities. No event, date, or partner will be published before it is verified and approved." },
    empty: { title: "Approved initiatives will appear here", description: "We are preparing a verified record of initiatives and activities. Follow Panorama’s official channels for new announcements.", action: "Follow Panorama" },
    categories: { academic: "Academic support", orientation: "Student orientation", workshop: "Workshops and growth", volunteering: "Volunteering", talent: "Talent support", community: "Community responsibility", technology: "Technology", faculty: "Faculty activities" }
  }
} satisfies Localized<InitiativesContent>;

export const initiatives = {
  ar: [],
  en: []
} satisfies Localized<InitiativeItem[]>;
