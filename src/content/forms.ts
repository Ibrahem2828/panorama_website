import type { Localized } from "@/content/types";

export type FormFieldOption = { value: string; label: string };

type FormContent = {
  contact: {
    title: string;
    description: string;
    unavailable: string;
    fields: { name: string; email: string; phone: string; inquiryType: string; faculty: string; subject: string; message: string; consent: string };
    inquiryTypes: FormFieldOption[];
    submit: string;
  };
  volunteer: {
    title: string;
    description: string;
    unavailable: string;
    fields: { name: string; university: string; faculty: string; academicYear: string; email: string; phone: string; track: string; skills: string; motivation: string; availability: string; portfolio: string; consent: string };
    tracks: FormFieldOption[];
    submit: string;
  };
};

export const formsContent = {
  ar: {
    contact: {
      title: "اكتب رسالتك", description: "يمكنك تجهيز رسالتك هنا؛ سيُفعّل الإرسال المباشر بعد ربط خدمة التواصل في مرحلة التشغيل.", unavailable: "الإرسال المباشر غير مفعّل حالياً. استخدم قناة التواصل المتاحة أعلاه عند الحاجة.",
      fields: { name: "الاسم الكامل", email: "البريد الإلكتروني", phone: "رقم الهاتف (اختياري)", inquiryType: "نوع الاستفسار", faculty: "الكلية (اختياري)", subject: "الموضوع", message: "الرسالة", consent: "أوافق على استخدام بياناتي للتواصل حول هذا الاستفسار عند تفعيل الخدمة." },
      inquiryTypes: [{ value: "general", label: "استفسار عام" }, { value: "service", label: "خدمة طلابية" }, { value: "volunteer", label: "تطوع" }, { value: "faculty", label: "استفسار كلية" }, { value: "partnership", label: "شراكة" }, { value: "media", label: "إعلام" }, { value: "platform", label: "دعم تقني للمنصة" }], submit: "سيُتاح الإرسال لاحقاً"
    },
    volunteer: {
      title: "أخبرنا كيف تحب أن تساهم", description: "هذه واجهة تمهيدية لمسار التطوع. سيُفعّل استقبال الطلبات بعد اعتماد رحلة التقديم وربطها بخدمة آمنة.", unavailable: "نموذج التطوع غير متصل حالياً. يمكنك استخدام وسيلة التواصل المتاحة للتعبير عن اهتمامك.",
      fields: { name: "الاسم الكامل", university: "الجامعة", faculty: "الكلية", academicYear: "السنة الدراسية", email: "البريد الإلكتروني", phone: "رقم الهاتف", track: "مسار المساهمة", skills: "المهارات", motivation: "لماذا ترغب في التطوع؟", availability: "الوقت المتاح", portfolio: "رابط أعمال أو ملف (اختياري)", consent: "أوافق على استخدام بياناتي للتواصل حول اهتمامي بالتطوع عند تفعيل الخدمة." },
      tracks: [{ value: "academic", label: "المحتوى الأكاديمي" }, { value: "support", label: "الدعم الطلابي" }, { value: "media", label: "التصميم والإعلام" }, { value: "technology", label: "التقنية" }, { value: "events", label: "الفعاليات" }, { value: "training", label: "التدريب" }, { value: "community", label: "مبادرات المجتمع" }, { value: "faculty", label: "تنسيق الكليات" }, { value: "operations", label: "التنظيم والعمليات" }], submit: "سيُتاح التقديم لاحقاً"
    }
  },
  en: {
    contact: {
      title: "Write your message", description: "You can prepare your message here; direct submission will be enabled after the contact service is connected during the runtime phase.", unavailable: "Direct submission is not enabled yet. Use an available contact channel above when needed.",
      fields: { name: "Full name", email: "Email address", phone: "Phone number (optional)", inquiryType: "Inquiry type", faculty: "Faculty (optional)", subject: "Subject", message: "Message", consent: "I agree that my details may be used to respond to this inquiry when the service is enabled." },
      inquiryTypes: [{ value: "general", label: "General inquiry" }, { value: "service", label: "Student service" }, { value: "volunteer", label: "Volunteering" }, { value: "faculty", label: "Faculty inquiry" }, { value: "partnership", label: "Partnership" }, { value: "media", label: "Media" }, { value: "platform", label: "Technical platform support" }], submit: "Submission will be enabled later"
    },
    volunteer: {
      title: "Tell us how you would like to contribute", description: "This is a foundational volunteer journey interface. Application intake will be enabled after the application journey is approved and connected to a secure service.", unavailable: "The volunteer form is not connected yet. Use an available contact channel to express interest.",
      fields: { name: "Full name", university: "University", faculty: "Faculty", academicYear: "Academic year", email: "Email address", phone: "Phone number", track: "Contribution track", skills: "Skills", motivation: "Why would you like to volunteer?", availability: "Availability", portfolio: "Portfolio or work link (optional)", consent: "I agree that my details may be used to contact me about volunteer interest when the service is enabled." },
      tracks: [{ value: "academic", label: "Academic content" }, { value: "support", label: "Student support" }, { value: "media", label: "Design and media" }, { value: "technology", label: "Technology" }, { value: "events", label: "Events" }, { value: "training", label: "Training" }, { value: "community", label: "Community initiatives" }, { value: "faculty", label: "Faculty coordination" }, { value: "operations", label: "Organization and operations" }], submit: "Applications will be enabled later"
    }
  }
} satisfies Localized<FormContent>;
