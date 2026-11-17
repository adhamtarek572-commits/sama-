SAMA FLOUR — النسخة الكاملة الجاهزة للإعداد والنشر

محتويات المشروع:
- index.html + styles.css + site.js: واجهة عربية متجاوبة بتصميم أبيض وذهبي.
- رسم SVG ثلاثي الأبعاد توضيحي لمبنى مطحن حديث وصوامع وأكياس دقيق، مدمج داخل الصفحة ولا يحتاج صورة خارجية.
- admin.html: لوحة إدارة محمية بتسجيل دخول، وتعديل نصوص الموقع والمنتج وبيانات التواصل وروابط معرض الصور.
- functions/api: واجهات آمنة لتسجيل الدخول وجلب/حفظ المحتوى وتسجيل الخروج.
- schema.sql: جدول قاعدة بيانات Cloudflare D1.
- wrangler.toml: إعداد ربط D1 (يجب وضع Database ID الصحيح).
- sitemap.xml و robots.txt و _headers.

مهم جدًا — هذه النسخة لم تُنشر بعد على samaflour.pages.dev، ولم يتم الاتصال بحساب Cloudflare الخاص بك.

خطوات التفعيل على Cloudflare:
1) أنشئ D1 Database باسم samaflour-content من Workers & Pages > D1.
2) افتح قاعدة البيانات ثم Console، ونفّذ محتوى schema.sql.
3) انسخ Database ID وضعه بدل REPLACE_WITH_YOUR_D1_DATABASE_ID داخل wrangler.toml.
4) في مشروع Pages samaflour افتح Settings > Functions > D1 database bindings، أضف Binding باسم DB واربط قاعدة البيانات التي أنشأتها.
5) في Settings > Variables and Secrets أضف Secret باسم ADMIN_PASSWORD واختر كلمة مرور قوية وفريدة، وأضف Secret باسم SESSION_SECRET بقيمة عشوائية طويلة لا تقل عن 32 حرفًا.
6) ارفع محتويات هذا المجلد إلى مستودع Git المتصل بمشروع Pages، ثم اعمل Commit/Push إلى الفرع main لبدء النشر. لا ترفع ZIP كأنه ملف موقع؛ يجب أن تكون الملفات نفسها في جذر المشروع.
7) بعد نجاح النشر افتح https://samaflour.pages.dev/admin.html وسجّل الدخول بكلمة المرور التي ضبطتها.

اختبار بعد النشر:
- https://samaflour.pages.dev/
- https://samaflour.pages.dev/sitemap.xml
- https://samaflour.pages.dev/robots.txt
- https://samaflour.pages.dev/admin.html

الأمان:
- لا توجد كلمة مرور افتراضية أو كلمة مرور مكتوبة في الملفات.
- يجب إعداد ADMIN_PASSWORD و SESSION_SECRET كـ Secrets في Cloudflare، لا كقيم داخل HTML أو Git.
- جلسة الإدارة HttpOnly وSecure وSameSite=Strict وتنتهي بعد 8 ساعات.
- لوحة الإدارة تسمح حاليًا بتعديل النصوص وأرقام الاتصال والعنوان وروابط الصور، ولا يوجد رفع ملفات صور إلى Cloudflare R2 في هذه النسخة.

ملاحظات:
- رمز إثبات ملكية Google الحالي محفوظ داخل الصفحة الرئيسية: G96X4Kv_Kfts7jwzcnhipYVihZT9lKvRY_K7dIU5UbY.
- الرسم الثلاثي الأبعاد توضيحي وليس صورة فوتوغرافية للمطحن الفعلي. أرسل صور المطحن والشكاير واللوجو لاستبدال الصور التوضيحية بها.
- إذا كان مشروع Pages مربوطًا بمستودع Git، فالنشر يكون عن طريق تحديث المستودع المتصل، وليس رفع ZIP من شاشة Deployments.
