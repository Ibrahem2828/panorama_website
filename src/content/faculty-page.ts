import type { Localized } from "@/content/types";

type FacultyPageContent = {
  participate: string;
  relationshipTitle: string;
  relationshipDescription: string;
  supportTitle: string;
  groupsTitle: string;
  platformTitle: string;
  platformDescription: string;
};

export const facultyPageContent = {
  ar: {
    participate: "تطوّع مع بانوراما",
    relationshipTitle: "مجتمع الكلية ضمن هوية بانوراما المشتركة",
    relationshipDescription: "تحتفظ كل كلية بصوت مجتمعها واحتياجاته، وتلتقي المجتمعات جميعاً حول مشاركة المعرفة والخدمة والمسؤولية.",
    supportTitle: "مساحات دعم المجتمع",
    groupsTitle: "معرفة يشاركها الطلاب",
    platformTitle: "امتداد رقمي لاحقاً",
    platformDescription: "ستدعم المنصة الرقمية تنظيم الموارد والمجتمعات عند اعتمادها، من دون استبدال التواصل الإنساني أو الادعاء بتوفر خدمة غير منشورة.",
  },
  en: {
    participate: "Volunteer with Panorama",
    relationshipTitle: "A faculty community within Panorama’s shared identity",
    relationshipDescription: "Each faculty keeps its own community voice and needs while all communities meet around knowledge sharing, service, and responsibility.",
    supportTitle: "Community support spaces",
    groupsTitle: "Knowledge shared by students",
    platformTitle: "A future digital extension",
    platformDescription: "The digital platform will support organized resources and communities when approved, without replacing human connection or claiming an unpublished service is available.",
  },
} satisfies Localized<FacultyPageContent>;
