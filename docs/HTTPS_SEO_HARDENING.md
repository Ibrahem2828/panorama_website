# HTTPS and technical SEO hardening

## Canonical public origin

The sole canonical origin is https://xn--mgbaab0cxheq.tech. It is defined as a non-overridable application constant so runtime variables cannot accidentally emit localhost, an IP address, the Unicode IDN spelling, or an old hostname in canonical tags, language alternates, Open Graph, Twitter metadata, JSON-LD, robots, or the sitemap.

Arabic remains the default locale at / and English is explicitly served below /en.

## HTTPS and redirect policy

- The application emits only HTTPS public URLs. The only remaining http references in the repository are local container-health and private reverse-proxy upstream connections; neither is sent to a visitor.
- Content-Security-Policy now includes upgrade-insecure-requests after the public source was checked for insecure URLs.
- The Next redirect configuration redirects www.xn--mgbaab0cxheq.tech to the canonical host. The proxy also returns a 308 redirect when it receives the canonical host through HTTP or the www host through a trusted reverse-proxy header.
- The public TLS boundary remains Coolify's reverse proxy. Configure Force HTTPS there; the application cannot issue a certificate or intercept an HTTP request before that proxy.
- HSTS is intentionally not emitted by the application and was removed from the optional Nginx example. Do not enable it until the external validation below succeeds. After that, begin with Strict-Transport-Security: max-age=31536000 on the HTTPS canonical host only. Do not add includeSubDomains or preload without confirming every applicable subdomain.

## Coolify owner checklist

1. Set the primary application domain to https://xn--mgbaab0cxheq.tech.
2. Add https://www.xn--mgbaab0cxheq.tech to the same application only if the DNS record and TLS certificate cover it; the application redirects it to the non-www host.
3. Point both DNS names to the Coolify server. Use the Punycode hostname in DNS and certificate configuration.
4. Enable Coolify-managed TLS and Force HTTPS. Do not use an IP address as the public application URL.
5. After deployment, externally verify that HTTP redirects to HTTPS, www redirects to the non-www host, the certificate matches each enabled hostname, and no request produces mixed-content warnings.
6. Only after those checks pass, add the conservative HSTS header at the proxy and recheck HTTPS before increasing its scope.

## SEO implementation

- The Arabic homepage title is بانوراما | فريق طلابي تطوعي في الجامعة السورية الخاصة.
- Arabic homepage metadata includes the approved concepts فريق بانوراما الطلابي, بانوراما الجامعة السورية الخاصة, فيد واستفيد, فريق طلابي تطوعي, الخدمات الطلابية, and تبادل المعرفة.
- Every indexable localized page receives a canonical, Arabic and English alternates, Open Graph, Twitter, and default index/follow metadata through the shared metadata helper.
- Organization and WebSite JSON-LD are serialized with HTML-sensitive characters escaped. They use the official Arabic name, the approved alternate names, the canonical HTTPS URL, the official logo URL, and only the verified Instagram and Facebook profiles.
- Empty initiatives, news, and gallery pages remain available to visitors but are noindex,follow and omitted from the sitemap until approved content exists.
- The sitemap includes canonical Arabic and English static pages plus every enabled faculty detail page. Robots allows crawling and names that sitemap.

## External validation status

The external probe performed during this hardening pass could not complete a TLS or redirect check: the deployed host reset or timed out before returning response headers. This is an infrastructure/DNS/TLS availability finding, not evidence that HTTPS is working. Consequently, this repository does not claim a valid certificate, live HTTP-to-HTTPS redirect, HSTS activation, Search Console verification, indexing, or search ranking.

After a successful Coolify redeploy, the owner should validate the canonical homepage, /en, /about, /faculties, /services, /platform, /contact, /robots.txt, /sitemap.xml, the official logo path, and the favicon from an external network. Then add the canonical sitemap to the appropriate Google Search Console property. Submission requests crawling; it does not guarantee immediate indexing or ranking.
