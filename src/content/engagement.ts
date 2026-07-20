import type { Localized } from "@/content/types";

type VolunteerContent = {
  hero: { eyebrow: string; title: string; description: string };
  reasons: Array<{ title: string; description: string }>;
  tracksTitle: string;
  tracks: Array<{ id: string; title: string; description: string }>;
  journey: Array<{ title: string; description: string }>;
  expectations: { title: string; items: string[] };
  contactCta: string;
};

export const volunteerContent = {
  ar: {
    hero: { eyebrow: "تطوّع مع بانوراما", title: "مساهمتك الصغيرة قد تصبح منفعة كبيرة لطالب آخر", description: "نفتح مساحة للطلاب الذين يريدون مشاركة المعرفة، دعم المجتمع، وتطوير مهاراتهم ضمن عمل تطوعي مسؤول." },
    reasons: [
      { title: "أثر ملموس", description: "ضع مهاراتك في مسار يسهّل حياة طالب آخر." },
      { title: "تعلّم متبادل", description: "نمُ مع فريق يقدّر المعرفة والخبرة والمبادرة." },
      { title: "انتماء ومبادرة", description: "كن جزءاً من مجتمع يجمع الكليات تحت هدف مشترك." }
    ],
    tracksTitle: "مسارات يمكنك المساهمة فيها",
    tracks: [
      { id: "academic", title: "المحتوى الأكاديمي", description: "تنظيم المعرفة والمصادر والخبرة الدراسية." },
      { id: "support", title: "الدعم الطلابي", description: "المساعدة والإرشاد العام للطلاب." },
      { id: "media", title: "التصميم والإعلام", description: "صياغة محتوى وهوية تقترب من مجتمع الطلاب." },
      { id: "technology", title: "التقنية", description: "دعم الأدوات الرقمية التي تخدم رسالة الفريق." },
      { id: "events", title: "الفعاليات والتدريب", description: "المساهمة في المساحات التعليمية والأنشطة المعتمدة." },
      { id: "community", title: "مبادرات المجتمع", description: "تحويل الأفكار إلى مبادرات تخدم البيئة الجامعية." },
      { id: "faculty", title: "تنسيق الكليات", description: "ربط مجتمع الكلية برسالة بانوراما المشتركة." },
      { id: "operations", title: "التنظيم والعمليات", description: "دعم ترتيب العمل وتنسيق التجربة." }
    ],
    journey: [
      { title: "تعرّف إلى المسار", description: "استكشف المجالات التي تناسب معرفتك ووقتك." },
      { title: "عبّر عن اهتمامك", description: "استخدم قناة التواصل المهيأة أو نموذج التقديم عند تفعيله." },
      { title: "مراجعة وتنظيم", description: "تُستكمل آلية القبول والتنسيق بعد اعتمادها من الفريق." },
      { title: "ابدأ الأثر", description: "ساهم ضمن دور واضح يراعي قيم التعاون والمسؤولية." }
    ],
    expectations: { title: "ما نلتزم به معاً", items: ["احترام الطلاب والمجتمعات المختلفة.", "مشاركة معرفة مسؤولة وواضحة.", "الالتزام بما يُتفق عليه ضمن الدور.", "عدم نشر محتوى أو بيانات غير معتمدة."] },
    contactCta: "تواصل حول التطوع"
  },
  en: {
    hero: { eyebrow: "Volunteer with Panorama", title: "Your small contribution can become meaningful value for another student", description: "We make room for students who want to share knowledge, support the community, and develop their skills through responsible volunteer work." },
    reasons: [
      { title: "Tangible impact", description: "Put your skills on a path that makes another student’s life easier." },
      { title: "Mutual learning", description: "Grow with a team that values knowledge, experience, and initiative." },
      { title: "Belonging and initiative", description: "Be part of a community that connects faculties around a shared purpose." }
    ],
    tracksTitle: "Ways you can contribute",
    tracks: [
      { id: "academic", title: "Academic content", description: "Organize knowledge, resources, and study experience." },
      { id: "support", title: "Student support", description: "Contribute practical help and general guidance." },
      { id: "media", title: "Design and media", description: "Shape content and identity that stay close to students." },
      { id: "technology", title: "Technology", description: "Support digital tools that serve the team’s mission." },
      { id: "events", title: "Events and training", description: "Contribute to approved learning spaces and activities." },
      { id: "community", title: "Community initiatives", description: "Turn ideas into initiatives that support university life." },
      { id: "faculty", title: "Faculty coordination", description: "Connect a faculty community to Panorama’s shared mission." },
      { id: "operations", title: "Organization and operations", description: "Support organized work and a consistent experience." }
    ],
    journey: [
      { title: "Explore a track", description: "Find the areas that match your knowledge and available time." },
      { title: "Express interest", description: "Use a configured contact channel or the application form when it is enabled." },
      { title: "Review and organize", description: "The acceptance and coordination process will be completed after team approval." },
      { title: "Start creating impact", description: "Contribute in a clear role grounded in cooperation and responsibility." }
    ],
    expectations: { title: "What we commit to together", items: ["Respect for students and diverse communities.", "Responsible, clear knowledge sharing.", "Commitment to agreed responsibilities.", "No sharing of unapproved content or data."] },
    contactCta: "Ask about volunteering"
  }
} satisfies Localized<VolunteerContent>;

type EmptyPageContent = {
  news: { eyebrow: string; title: string; description: string; emptyTitle: string; emptyDescription: string; action: string };
  gallery: { eyebrow: string; title: string; description: string; emptyTitle: string; emptyDescription: string; action: string };
  impact: { eyebrow: string; title: string; description: string; principles: Array<{ title: string; description: string }> };
};

export const engagementContent = {
  ar: {
    news: { eyebrow: "الأخبار والتحديثات", title: "تحديثات موثقة من مجتمع بانوراما", description: "سيُستخدم هذا المسار لنشر الأخبار والتحديثات بعد مراجعتها واعتمادها.", emptyTitle: "لا توجد تحديثات معتمدة للنشر الآن", emptyDescription: "تابع القنوات الرسمية لمعرفة الإعلانات الجديدة عند صدورها.", action: "تابع بانوراما" },
    gallery: { eyebrow: "المعرض", title: "ذاكرة بصرية تُبنى بمحتوى معتمد", description: "سيجمع المعرض لاحقاً صوراً ومشاهد من مبادرات بانوراما بعد التحقق من حقوق النشر والسياق.", emptyTitle: "لا توجد عناصر معرض معتمدة للنشر الآن", emptyDescription: "نحافظ على مساحة صادقة حتى تتوفر صور موثقة ومهيأة بوصف مناسب.", action: "استكشف المبادرات" },
    impact: { eyebrow: "الأثر", title: "نقدّم دليلاً عندما يصبح موثقاً، لا وعداً قبل ذلك", description: "تُبنى الثقة بالمنفعة اليومية وبالشفافية حول ما نعرفه وما يحتاج إلى اعتماد.", principles: [{ title: "معرفة مفيدة", description: "ما يشاركه طالب اليوم قد يساعد طالباً آخر غداً." }, { title: "خدمة مسؤولة", description: "لا ننشر أرقاماً أو شهادات أو شراكات غير موثقة." }, { title: "رؤية متدرجة", description: "نبدأ من الجامعة السورية الخاصة وننظر إلى التوسع كمسار مستقبلي مسؤول." }] }
  },
  en: {
    news: { eyebrow: "News and updates", title: "Verified updates from the Panorama community", description: "This route will be used to publish news and updates after they are reviewed and approved.", emptyTitle: "There are no approved updates to publish yet", emptyDescription: "Follow official channels for new announcements when they are released.", action: "Follow Panorama" },
    gallery: { eyebrow: "Gallery", title: "A visual memory built with approved content", description: "The gallery will later gather images and moments from Panorama initiatives after publication rights and context are verified.", emptyTitle: "There are no approved gallery items to publish yet", emptyDescription: "We keep this space honest until documented images with appropriate descriptions are ready.", action: "Explore initiatives" },
    impact: { eyebrow: "Impact", title: "We publish evidence when it is verified, not promises before it is", description: "Trust is built through everyday value and clarity about what is known and what still requires approval.", principles: [{ title: "Useful knowledge", description: "What one student shares today may help another student tomorrow." }, { title: "Responsible service", description: "We do not publish unverified figures, testimonials, or partnerships." }, { title: "A gradual vision", description: "We begin at the Syrian Private University and treat expansion as a responsible future path." }] }
  }
} satisfies Localized<EmptyPageContent>;
