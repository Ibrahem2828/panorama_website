import type { Localized } from "@/content/types";

type PlatformPageContent = {
  hero: { eyebrow: string; title: string; description: string };
  supportStatement: string;
  areas: Array<{ title: string; description: string }>;
  unavailable: { title: string; description: string; action: string };
};

export const platformContent = {
  ar: {
    hero: { eyebrow: "المنصة الرقمية", title: "امتداد منظم لخدمة المجتمع الطلابي", description: "صُممت المنصة الرقمية لتدعم تنظيم المعرفة والخدمات، مع بقاء بانوراما أولاً مجتمعاً طلابياً يتعاون ويشارك الخبرة." },
    supportStatement: "المنصة تدعم رسالة الفريق؛ لا تختزلها ولا تحل محل التواصل الإنساني بين الطلاب.",
    areas: [
      { title: "المواد والملفات", description: "أساس منظم للوصول إلى موارد يشاركها المجتمع عند اعتمادها." },
      { title: "المجموعات والإعلانات", description: "تنظيم أوضح للمجتمعات والتحديثات ذات الصلة بالحياة الجامعية." },
      { title: "الخدمات والإشعارات", description: "مسار رقمي لخدمات طلابية وتنبيهات عندما تتوفر ضمن ضوابط واضحة." },
      { title: "الدعم والمتابعة", description: "واجهة مستقبلية تساعد على توجيه الاستفسارات دون ادعاء توفر نظام تشغيل الآن." }
    ],
    unavailable: { title: "الإتاحة العامة ستُعلن عند اعتمادها", description: "لا نعرض روابط تنزيل أو تسجيل قبل أن تكون المنصة جاهزة ومعلنة رسمياً.", action: "تعرّف إلى خدماتنا" }
  },
  en: {
    hero: { eyebrow: "Digital platform", title: "An organized extension of student-community service", description: "The digital platform is designed to support organized knowledge and services while Panorama remains, first, a student community that collaborates and shares experience." },
    supportStatement: "The platform supports the team’s mission; it does not reduce it or replace the human connection between students.",
    areas: [
      { title: "Materials and files", description: "An organized foundation for accessing community-shared resources when they are approved." },
      { title: "Groups and announcements", description: "Clearer organization for communities and university-life updates." },
      { title: "Services and notifications", description: "A digital path for student services and updates when they are available under clear rules." },
      { title: "Support and follow-up", description: "A future interface for directing inquiries without claiming that an operational system is available now." }
    ],
    unavailable: { title: "Public availability will be announced when approved", description: "No download or sign-up links are shown before the platform is ready and officially announced.", action: "Explore our services" }
  }
} satisfies Localized<PlatformPageContent>;
