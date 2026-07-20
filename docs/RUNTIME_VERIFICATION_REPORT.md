# تقرير التحقق التشغيلي

## بيئة الاختبار

- Windows، Node.js `20.19.6`، npm `11.16.0`، Next.js `16.2.10`.
- البناء: `next build --webpack`.
- الخادم: `npm run start`؛ ينفذ `scripts/prepare-standalone.mjs` ثم `node .next/standalone/server.js`.
- عنوان الاختبار: `http://localhost:3000` فقط؛ ليس عنواناً عاماً.

## نتائج التشغيل

1. نجح `npm test` بـ 7 اختبارات: إعدادات عامة، بيانات الكليات، الحدود والمسارات، النماذج الصادقة، ملفات الرسائل، اللغة الافتراضية، ومنع placeholder prose.
2. نجح `npm run type-check` و`npm run lint` و`npm run build` بعد آخر تعديل.
3. أظهر الخادم `Ready`، ثم أُعيد طلب ملف CSS فعلي من الصفحة الرئيسية وكانت استجابته `200`. هذا يثبت أن أصول standalone المنسوخة لا الواجهة المجردة هي التي تم اختبارها.
4. فحص HTTP الكامل أعطى: 44 مساراً عاماً، 0 إخفاقات؛ 4 مسارات 404، 0 إخفاقات؛ 4 رؤوس حماية مطلوبة، 0 مفقودة.

## حالات الخطأ التي اختبرت

| المسار | النتيجة |
| --- | --- |
| `/not-a-route` | `404` وواجهة آمنة |
| `/faculties/not-a-faculty` | `404` وواجهة كلية عربية آمنة و`noindex` |
| `/en/not-a-route` | `404` وواجهة آمنة |
| `/en/faculties/not-a-faculty` | `404` وواجهة كلية إنجليزية آمنة و`noindex` |

## اختبار المتصفح

تمت محاكاة Chrome عبر DevTools Protocol، لا عبر افتراضات من HTML فقط:

- `/` ظل `lang=ar` و`dir=rtl` مع متصفح يفضّل الإنجليزية.
- النقر على زر `EN` نقل فعلياً إلى `/en` مع `lang=en` و`dir=ltr`.
- عند عرض CSS حقيقي `390px`: `innerWidth=390`، `clientWidth=390`، `scrollWidth=390`؛ لا تمرير أفقي.
- القائمة المحمولة: تفتح كـ `role=dialog`، و`Escape` يغلقها ويعيد `aria-expanded=false`.
- FAQ: أول عنصر انتقل من `aria-expanded=true` إلى `false` عند النقر.
- نموذج التواصل: زر تعطيل واحد، و0 أزرار submit مفعّلة؛ لا ادعاء إرسال.
- لا أخطاء console، ولا إخفاقات شبكة غير `ERR_ABORTED` المتوقعة عند التنقل بين الصفحات.

## ملاحظة تشغيلية

لا تستخدم `next start` مع `output: standalone`؛ Next يعرض تحذيراً بذلك. أمر المشروع المعتمد هو `npm run start` بعد `npm run build`، أو `node server.js` داخل صورة Docker التي تتضمن الأصول العامة والثابتة.
