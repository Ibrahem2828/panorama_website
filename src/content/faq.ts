import type { Localized } from "@/content/types";

export type FaqItem = { id: string; question: string; answer: string };

type FaqPageContent = {
  hero: { eyebrow: string; title: string; description: string };
  contactCta: string;
};

export const faqPageContent = {
  ar: { hero: { eyebrow: "الأسئلة الشائعة", title: "إجابات واضحة عن بانوراما ومجتمعها", description: "هنا نجيب عن الأسئلة العامة بدقة، ونوضح ما هو متاح اليوم وما يحتاج إلى اعتماد أو تحديث لاحق." }, contactCta: "لم تجد إجابتك؟ تواصل معنا" },
  en: { hero: { eyebrow: "Frequently asked questions", title: "Clear answers about Panorama and its community", description: "Here we answer general questions accurately and distinguish what is available today from what still needs approval or future updates." }, contactCta: "Did not find your answer? Contact us" }
} satisfies Localized<FaqPageContent>;

export const faqItems = {
  ar: [
    { id: "what-is-panorama", question: "ما هي بانوراما؟", answer: "بانوراما مجتمع طلابي تطوعي انطلق من الجامعة السورية الخاصة ليجمع الطلاب حول تبادل المعرفة والخدمة والمبادرة." },
    { id: "department", question: "هل بانوراما قسم تابع للجامعة؟", answer: "يقدم الموقع بانوراما كفريق طلابي تطوعي. لا يدّعي أنها إدارة جامعية أو جهة معتمدة رسمياً ما لم يُنشر اعتماد موثق." },
    { id: "benefit", question: "من يمكنه الاستفادة من بانوراما؟", answer: "يخدم المجتمع الطلاب الحالي والجديد عبر المعرفة المشتركة والمجتمعات والخدمات المتاحة حسب الكلية." },
    { id: "motto", question: "ماذا يعني شعار «فيد واستفيد»؟", answer: "يعني أن يشارك الطالب ما يعرفه، وأن يجد المعرفة أو الدعم الذي يحتاجه من مجتمع متعاون." },
    { id: "faculties", question: "ما الكليات الموجودة ضمن بانوراما؟", answer: "تُعرض الكليات الحالية في صفحة الكليات الرسمية، مع الحفاظ على كونها مجتمعات تحت هوية بانوراما الواحدة." },
    { id: "join", question: "كيف يمكنني الانضمام؟", answer: "ابدأ من صفحة التطوع لمعرفة مسارات المشاركة، ثم استخدم وسيلة التواصل المتاحة للتعبير عن اهتمامك." },
    { id: "faculty-contact", question: "كيف أتواصل مع مجتمع كليتي؟", answer: "استكشف صفحة كليتك أولاً. تُعرض وسائل تواصل خاصة فقط عندما تكون معتمدة ومهيأة في إعدادات الموقع." },
    { id: "free", question: "هل الخدمات الطلابية مجانية؟", answer: "تختلف طبيعة الإتاحة حسب الخدمة ومجتمع الكلية. لا يعرض الموقع حالياً أي خدمة مدفوعة أو شروط تشغيل غير معتمدة." },
    { id: "platform", question: "هل المنصة الرقمية متاحة الآن؟", answer: "المنصة امتداد رقمي لرسالة الفريق. لا نعرض رابط تنزيل أو إتاحة عامة قبل اعتمادها رسمياً." },
    { id: "expansion", question: "هل ستتوسع بانوراما إلى جامعات أخرى؟", answer: "التوسع إلى مجتمعات جامعية أخرى هو رؤية مستقبلية، وليس حقيقة تشغيلية حالية." },
    { id: "official-links", question: "كيف أتعرف إلى الروابط الرسمية؟", answer: "استخدم الروابط المعروضة في الموقع الرسمي فقط. تظهر المنصات المهيأة والمعتمدة، وتُخفى القنوات غير المتاحة." }
  ],
  en: [
    { id: "what-is-panorama", question: "What is Panorama?", answer: "Panorama is a student volunteer community that began at the Syrian Private University to connect students through knowledge sharing, service, and initiative." },
    { id: "department", question: "Is Panorama a university department?", answer: "The website presents Panorama as a volunteer student team. It does not claim university-department or official institutional status without a published verified approval." },
    { id: "benefit", question: "Who can benefit from Panorama?", answer: "Current and new students can benefit through shared knowledge, communities, and faculty-dependent services." },
    { id: "motto", question: "What does «فيد واستفيد» mean?", answer: "It means sharing what you know and finding the knowledge or support you need through a cooperative community." },
    { id: "faculties", question: "Which faculties are included?", answer: "Current faculty communities are shown on the official Faculties page, under Panorama’s shared identity." },
    { id: "join", question: "How can I join?", answer: "Begin on the Volunteer page to understand participation tracks, then use an available contact method to express interest." },
    { id: "faculty-contact", question: "How do I contact my faculty community?", answer: "Explore your faculty page first. Faculty-specific contact methods are only shown when they are approved and configured." },
    { id: "free", question: "Are student services free?", answer: "Availability varies by service and faculty community. The website does not currently present paid services or unapproved operating terms." },
    { id: "platform", question: "Is the digital platform available now?", answer: "The platform is a digital extension of the team’s mission. No download link or public availability is shown before official approval." },
    { id: "expansion", question: "Will Panorama expand to other universities?", answer: "Expansion to other university communities is a future vision, not a current operating fact." },
    { id: "official-links", question: "How do I identify official links?", answer: "Use only the links displayed on the official website. Approved configured platforms are shown; unavailable channels are hidden." }
  ]
} satisfies Localized<FaqItem[]>;
