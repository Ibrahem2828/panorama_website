# دليل النشر الإنتاجي

## ما قبل النشر

1. احصل على موافقات المحتوى والقانون والاتصال من القائمة المجاورة.
2. استخدم Node `20.19.x` أو Node 22 داخل Docker، و`npm ci`.
3. اضبط القيم العامة فقط من `.env.example`؛ لا تضع secrets باسم `NEXT_PUBLIC_*`.
4. شغّل: `npm test`, `npm run type-check`, `npm run lint`, `npm run build`.

## تشغيل محلي إنتاجي

```powershell
npm run build
npm run start
```

`prestart` ينسخ `public` و`.next/static` إلى standalone. لا تشغّل `next start` مع `output: standalone`؛ الإطار يحذر من هذا المسار.

## Docker وNginx

1. راجع `Dockerfile`: المرحلة runner تنسخ `public` و`.next/standalone` و`.next/static`.
2. اضبط `NEXT_PUBLIC_SITE_URL` و`NEXT_PUBLIC_CONTACT_EMAIL` كـ build args وقيم runtime متطابقة ومصرح بها.
3. شغّل compose بحيث يبقى المنفذ `127.0.0.1:3000` فقط.
4. ضع Nginx/TLS أمامه مستخدماً Punycode `xn--mgbaab0cxheq.tech` في `server_name`.
5. لا تفعل HSTS قبل أن يصبح HTTPS صحيحاً ودائماً. ملف Nginx الحالي يضيفه على HTTPS فقط.
6. أضف CSP تدريجياً في staging بعد اختبار scripts والخطوط والصور؛ لا تنشر CSP صارماً غير مختبر.

## تحقق بعد النشر

- `https://<domain>/`, `/en`, `/robots.txt`, `/sitemap.xml`.
- كل مسارات الكليات، 404، مبدّل اللغة، القائمة المحمولة، theme، FAQ، النماذج الثابتة.
- شهادة TLS، إعادة توجيه HTTP، رؤوس الأمن، cache، canonical وPunycode.
- طلب Google Search Console ومعاينة روابط الشبكات الاجتماعية بعد اعتماد المحتوى.

## التراجع

- احتفظ بصورة Docker/معرّف release سابق معروف.
- إن ظهر خلل حرج، أعد توجيه proxy إلى الحاوية السابقة ثم راجع السجلات.
- لا تعالج المشكلة بتعديل محتوى production مباشرة من دون سجل تغيير وموافقة مالك المحتوى.
