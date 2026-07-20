import type { Localized } from "@/content/types";

type HomeContent = {
  hero: { eyebrow: string; title: string; description: string; primaryCta: string; secondaryCta: string; facultyLink: string; highlights: string[] };
  philosophy: { eyebrow: string; title: string; description: string; phrase: string; action: string };
  initiatives: { eyebrow: string; title: string; description: string; action: string; empty: string };
  volunteer: { eyebrow: string; title: string; description: string; action: string };
  vision: { eyebrow: string; title: string; description: string; action: string };
  social: { eyebrow: string; title: string; description: string };
  contact: { eyebrow: string; title: string; description: string; primaryCta: string; secondaryCta: string };
  sectionActions: { about: string; faculties: string; services: string; platform: string; initiatives: string };
};

export const homeContent = {
  ar: {
    hero: { eyebrow: "فريق طلابي تطوعي من الجامعة السورية الخاصة", title: "بانوراما… مجتمعٌ يصنع المعرفة، ويحوّل التعاون إلى أثر.", description: "نجمع طلاب الكليات في مساحة واحدة لتبادل المعرفة، تقديم الخدمات الطلابية، دعم المواهب، وصناعة تجربة جامعية أكثر تعاوناً وانتماءً.", primaryCta: "اكتشف بانوراما", secondaryCta: "تعرّف إلى كلياتنا", facultyLink: "تصفّح مجتمعات الكليات", highlights: ["المعرفة تُشارك", "الأثر يمتد"] },
    philosophy: { eyebrow: "فلسفتنا", title: "فيد واستفيد: المعرفة تكبر عندما تنتقل", description: "ليست العبارة شعاراً منفصلاً عن العمل اليومي؛ إنها دعوة لأن يشارك الطالب خبرته، وأن يجد من يسانده في الوقت المناسب.", phrase: "فيد واستفيد", action: "تعرّف إلى قصتنا" },
    initiatives: { eyebrow: "المبادرات", title: "نترك مساحة للفكرة حتى تصبح خدمة وأثراً", description: "نشارك المبادرات والأنشطة فقط بعد اعتماد محتواها وتفاصيلها، احتراماً لثقة المجتمع الطلابي.", action: "استكشف المبادرات", empty: "المبادرات المعتمدة ستظهر هنا." },
    volunteer: { eyebrow: "المشاركة", title: "لديك معرفة أو مهارة؟ مكانك بيننا", description: "التطوع في بانوراما فرصة لتحويل الوقت والمهارة والطاقة إلى منفعة طلابية مشتركة.", action: "انضم إلى الفريق" },
    vision: { eyebrow: "رؤيتنا", title: "نبدأ من الجامعة السورية الخاصة ونطمح إلى مجتمع جامعي أوسع", description: "التوسع إلى جامعات أخرى رؤية مستقبلية تُبنى بهدوء على خدمة الطلاب اليوم، وليست ادعاءً عن نطاق عمل قائم.", action: "اعرف المزيد عن بانوراما" },
    social: { eyebrow: "ابق قريباً", title: "تابع رحلة بانوراما وكن قريباً من مبادراتنا وخدماتنا الطلابية", description: "القنوات الرسمية هي أفضل مكان لمتابعة الإعلانات والمحتوى المعتمد." },
    contact: { eyebrow: "تواصل", title: "تحتاج دعماً أو تريد أن تصنع أثراً؟", description: "تعرّف إلى طرق التواصل المتاحة، أو جهّز استفسارك إلى أن يُفعّل الإرسال المباشر.", primaryCta: "تواصل معنا", secondaryCta: "اطّلع على الأسئلة الشائعة" },
    sectionActions: { about: "اكتشف قصتنا", faculties: "استكشف الكليات", services: "استكشف خدماتنا", platform: "تعرّف إلى المنصة", initiatives: "عرض المبادرات" }
  },
  en: {
    hero: { eyebrow: "A student volunteer team from the Syrian Private University", title: "Panorama — a community where knowledge becomes impact.", description: "We bring faculty communities together to share knowledge, support student services, develop talent, and create a more connected university experience.", primaryCta: "Discover Panorama", secondaryCta: "Explore our faculties", facultyLink: "Browse faculty communities", highlights: ["Knowledge is shared", "Impact carries forward"] },
    philosophy: { eyebrow: "Our philosophy", title: "فيد واستفيد: knowledge grows when it travels", description: "This is not a slogan separate from daily work. It is an invitation to share experience and find timely support through a cooperative community.", phrase: "فيد واستفيد", action: "Discover our story" },
    initiatives: { eyebrow: "Initiatives", title: "Making room for an idea to become service and impact", description: "We share initiatives and activities only after their content and details are approved, respecting the trust of the student community.", action: "Explore initiatives", empty: "Approved initiatives will appear here." },
    volunteer: { eyebrow: "Participation", title: "Have knowledge or a skill? There is a place for you.", description: "Volunteering with Panorama is a chance to turn time, skill, and energy into shared student value.", action: "Join the team" },
    vision: { eyebrow: "Our vision", title: "We start at the Syrian Private University with a vision for a wider university community", description: "Expansion to other universities is a future vision built patiently on serving students today, not a claim about current operations.", action: "Learn about Panorama" },
    social: { eyebrow: "Stay close", title: "Follow Panorama and stay connected with our student initiatives and services", description: "Official channels are the best place to follow approved announcements and content." },
    contact: { eyebrow: "Contact", title: "Need support or want to create impact?", description: "Explore available contact methods, or prepare your inquiry until direct submission is enabled.", primaryCta: "Contact us", secondaryCta: "Browse FAQs" },
    sectionActions: { about: "Discover our story", faculties: "Explore faculties", services: "Explore our services", platform: "Discover the platform", initiatives: "View initiatives" }
  }
} satisfies Localized<HomeContent>;
