import type { Localized } from "@/content/types";

export type ValueItem = {
  id: string;
  title: string;
  description: string;
};

type AboutContent = {
  hero: { eyebrow: string; title: string; description: string };
  story: { title: string; description: string };
  mission: { title: string; description: string };
  vision: { title: string; description: string };
  values: ValueItem[];
  currentScope: { title: string; items: string[] };
  howWeWork: { title: string; description: string; note: string };
  cta: { exploreFaculties: string; volunteer: string };
};

export const aboutContent = {
  ar: {
    hero: { eyebrow: "عن بانوراما", title: "مجتمع طلابي يربط المعرفة بالخدمة والعمل المشترك", description: "بانوراما مجتمع طلابي تطوعي انطلق من الجامعة السورية الخاصة ليجمع الطلاب حول المعرفة والخدمة والمسؤولية المشتركة." },
    story: { title: "الفكرة التي تجمعنا", description: "نؤمن بأن التجربة الجامعية تصبح أكثر قيمة عندما يشارك كل طالب ما يعرفه، ويجد من يدعمه عندما يحتاج. لذلك تبني بانوراما مساحة متصلة للمعرفة والخبرة والمبادرة بين المجتمعات الطلابية." },
    mission: { title: "رسالتنا", description: "بناء مجتمع جامعي متعاون يسهّل وصول الطلاب إلى المعرفة والخدمات، ويدعم المواهب والمبادرات، ويحوّل الخبرة الفردية إلى أثر جماعي مستدام." },
    vision: { title: "رؤيتنا", description: "أن يصبح بانوراما مرجعاً طلابياً موثوقاً يبدأ من الجامعة السورية الخاصة ويتوسع تدريجياً ليصل إلى مجتمعات جامعية أخرى." },
    values: [
      { id: "cooperation", title: "التعاون", description: "نؤمن بأن أفضل الحلول تبدأ عندما يعمل الطلاب معاً." },
      { id: "knowledge", title: "تبادل المعرفة", description: "المعرفة التي تُشارك تصبح منفعة أقرب للجميع." },
      { id: "volunteering", title: "التطوع", description: "نمنح الوقت والمهارة لخدمة مجتمعنا الطلابي." },
      { id: "trust", title: "الثقة", description: "نتعامل بوضوح ومسؤولية مع ما نعرضه ونقدمه." },
      { id: "inclusion", title: "الاحتواء", description: "لكل طالب مكان وصوت وفرصة للمشاركة." },
      { id: "responsibility", title: "المسؤولية", description: "لا نقدّم وعوداً أو أرقاماً لا نستطيع توثيقها." },
      { id: "creativity", title: "الإبداع", description: "نترك مساحة للأفكار التي تحسن الحياة الجامعية." },
      { id: "impact", title: "الأثر الإيجابي", description: "نقيس اتجاهنا بما يفيد الطالب والمجتمع." },
      { id: "belonging", title: "الانتماء الطلابي", description: "نجمع الكليات تحت هوية واحدة تحترم خصوصية كل مجتمع." }
    ],
    currentScope: { title: "نطاقنا اليوم", items: ["مجتمعات طلابية متعددة الكليات في الجامعة السورية الخاصة.", "تبادل المعرفة والخدمات والمساندة الطلابية.", "تطوع ومبادرات تعزز الانتماء والتعاون.", "أدوات رقمية تدعم العمل المجتمعي عندما تكون متاحة ومعتمدة."] },
    howWeWork: { title: "كيف نعمل", description: "نبدأ من احتياج طلابي واضح، ثم نشارك المعرفة وننظّم الخدمة عبر مجتمعات الكليات والقنوات المعتمدة.", note: "نعلن ما هو متاح فقط، ولا نعرض وعودًا أو نتائج قبل توثيقها." },
    cta: { exploreFaculties: "تعرّف إلى كلياتنا", volunteer: "انضم إلى الفريق" }
  },
  en: {
    hero: { eyebrow: "About Panorama", title: "A student community connecting knowledge, service, and shared responsibility", description: "Panorama is a student volunteer community that began at the Syrian Private University, bringing students together through knowledge, service, and shared responsibility." },
    story: { title: "The belief that connects us", description: "University life becomes more valuable when students share what they know and find support when they need it. Panorama creates a connected space for knowledge, experience, and initiative across student communities." },
    mission: { title: "Our mission", description: "To build a collaborative university community that improves access to knowledge and student services, supports talent and initiatives, and transforms individual experience into sustainable collective impact." },
    vision: { title: "Our vision", description: "To become a trusted student reference that begins at the Syrian Private University and gradually grows to serve other university communities." },
    values: [
      { id: "cooperation", title: "Cooperation", description: "We believe the most useful solutions begin when students work together." },
      { id: "knowledge", title: "Knowledge sharing", description: "Knowledge becomes more useful when it is shared." },
      { id: "volunteering", title: "Volunteerism", description: "We offer our time and skill in service of the student community." },
      { id: "trust", title: "Trust", description: "We communicate what we offer with clarity and responsibility." },
      { id: "inclusion", title: "Inclusion", description: "Every student deserves a place, voice, and opportunity to participate." },
      { id: "responsibility", title: "Responsibility", description: "We do not make claims or publish figures that cannot be verified." },
      { id: "creativity", title: "Creativity", description: "We make room for ideas that improve university life." },
      { id: "impact", title: "Positive impact", description: "We judge our direction by what benefits students and their community." },
      { id: "belonging", title: "Student belonging", description: "We connect faculties through one identity that respects every community." }
    ],
    currentScope: { title: "Our current scope", items: ["Multi-faculty student communities at the Syrian Private University.", "Knowledge sharing, student support, and service-oriented guidance.", "Volunteer work and initiatives that strengthen belonging and cooperation.", "Digital tools that support community work when available and approved."] },
    howWeWork: { title: "How we work", description: "We begin with a clear student need, then share knowledge and organize service through faculty communities and approved channels.", note: "We publish only what is available and do not present promises or results before they are verified." },
    cta: { exploreFaculties: "Explore our faculties", volunteer: "Join the team" }
  }
} satisfies Localized<AboutContent>;
