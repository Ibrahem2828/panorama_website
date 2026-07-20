import type { Localized } from "@/content/types";

type ContactPageContent = {
  hero: { eyebrow: string; title: string; description: string };
  methods: { title: string; description: string; labels: { email: string; partnerships: string; volunteer: string; phone: string; whatsapp: string; address: string; hours: string } };
  actions: { title: string; description: string; partnership: string; volunteer: string; faq: string };
  social: { title: string; description: string };
};

export const contactPageContent = {
  ar: {
    hero: { eyebrow: "تواصل مع بانوراما", title: "نحن أقرب مما تتوقع", description: "اختر وسيلة التواصل المتاحة للاستفسار العام أو التطوع أو الشراكات. تُعرض فقط القنوات المهيأة والمعتمدة في إعدادات الموقع." },
    methods: { title: "طرق التواصل المتاحة", description: "يُخفى أي رقم أو عنوان أو قناة لا تمتلك بانوراما لها قيمة معتمدة حالياً.", labels: { email: "البريد العام", partnerships: "شراكات وتعاون", volunteer: "استفسار تطوع", phone: "الهاتف", whatsapp: "واتساب", address: "العنوان", hours: "ساعات العمل" } },
    actions: { title: "اختر مسارك", description: "يمكنك بدء استفسار حول الشراكات أو التطوع من القنوات المتاحة، أو مراجعة الأسئلة الشائعة أولاً.", partnership: "استفسار شراكة", volunteer: "استفسار تطوع", faq: "الأسئلة الشائعة" },
    social: { title: "تابع بانوراما", description: "تابع القنوات الرسمية لتبقى قريباً من الإعلانات والمبادرات المعتمدة." }
  },
  en: {
    hero: { eyebrow: "Contact Panorama", title: "We are closer than you think", description: "Choose an available channel for general inquiries, volunteering, or partnerships. Only approved configured channels are shown on the website." },
    methods: { title: "Available contact methods", description: "Any phone, address, or channel without an approved current value is hidden.", labels: { email: "General email", partnerships: "Partnerships", volunteer: "Volunteer inquiry", phone: "Phone", whatsapp: "WhatsApp", address: "Address", hours: "Working hours" } },
    actions: { title: "Choose your path", description: "Start a partnership or volunteer inquiry through an available channel, or review FAQs first.", partnership: "Partnership inquiry", volunteer: "Volunteer inquiry", faq: "Frequently asked questions" },
    social: { title: "Follow Panorama", description: "Follow official channels to stay close to approved announcements and initiatives." }
  }
} satisfies Localized<ContactPageContent>;
