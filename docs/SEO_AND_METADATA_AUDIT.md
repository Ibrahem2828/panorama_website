# تدقيق SEO والبيانات الوصفية

## نتائج مؤكدة محلياً

- كل المسارات العامة الـ44 تحمل canonical مطلقاً مطابقاً للمسار.
- كل مسار يحمل alternate للعربية وللإنجليزية.
- canonical في HTML يستخدم Punycode الصحيح للنطاق الدولي: `xn--mgbaab0cxheq.tech`.
- robots يعرض `Allow: /` ويربط sitemap.
- sitemap يحتوي 44 URL ولا يحتوي `localhost`.
- الصفحة الرئيسية تحتوي JSON-LD صالحاً من نوع `Organization` باسم Panorama، URL، بريد مهيأ، وروابط Instagram/Facebook المفعلة.
- Open Graph وTwitter card وfavicon وtheme color موجودة في الغلاف المحلي.
- أخطاء 404 الخاصة بالكليات تضع `meta robots=noindex` و`X-Robots-Tag: noindex`.

## ملاحظات النشر

- لا يمكن تأكيد Google Search Console أو فهرسة أو معاينات Facebook/WhatsApp قبل وجود HTTPS عام.
- لا تضف structured data لفعاليات أو أشخاص أو إحصاءات أو منتجات غير معتمدة.
- عند نشر النطاق، اختبر `/robots.txt` و`/sitemap.xml` وcanonical من خارج الشبكة وراجع إعادة توجيه HTTP إلى HTTPS.
