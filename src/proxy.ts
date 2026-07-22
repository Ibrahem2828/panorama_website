import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { CANONICAL_HOST } from "@/config/site";
import { faculties } from "@/data/faculties";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);
const securityHeaders = {
  "Content-Security-Policy": "default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'none'; form-action 'self'; img-src 'self' data: blob:; font-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; connect-src 'self'; upgrade-insecure-requests",
  "Cross-Origin-Opener-Policy": "same-origin",
  "Cross-Origin-Resource-Policy": "same-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=(), payment=()",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "X-DNS-Prefetch-Control": "off",
};
const publishedFacultySlugs = new Set(
  faculties
    .filter((faculty) => faculty.enabled && faculty.detailPageEnabled)
    .map((faculty) => faculty.slug),
);

function forwardedValue(value: string | null) {
  return value?.split(",")[0]?.trim().toLowerCase();
}

function publicRequestHost(request: NextRequest) {
  const forwardedHost = forwardedValue(request.headers.get("x-forwarded-host"));
  const host = forwardedHost || forwardedValue(request.headers.get("host")) || "";
  return host.replace(/:\d+$/, "");
}

function publicRequestProtocol(request: NextRequest) {
  return forwardedValue(request.headers.get("x-forwarded-proto")) || request.nextUrl.protocol.replace(":", "");
}

function facultyNotFoundDocument(locale: "ar" | "en") {
  const isArabic = locale === "ar";
  const copy = isArabic
    ? {
        title: "الصفحة غير متاحة",
        description: "لا نجد مجتمع الكلية المطلوب. يمكنك العودة إلى بانوراما أو استكشاف الكليات المتاحة.",
        home: "العودة إلى الرئيسية",
        faculties: "استكشف الكليات",
        homeHref: "/",
        facultiesHref: "/faculties",
        dir: "rtl",
        lang: "ar",
      }
    : {
        title: "Faculty page unavailable",
        description: "We cannot find the requested faculty community. Return to Panorama or explore the available faculties.",
        home: "Return home",
        faculties: "Explore faculties",
        homeHref: "/en",
        facultiesHref: "/en/faculties",
        dir: "ltr",
        lang: "en",
      };

  return `<!doctype html><html lang="${copy.lang}" dir="${copy.dir}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex"><title>${copy.title} | Panorama</title><style>body{margin:0;background:#f8fafc;color:#111827;font-family:Arial,sans-serif}.page{box-sizing:border-box;display:grid;min-height:100vh;place-items:center;padding:24px}.card{width:min(680px,100%);border:1px solid #e5e7eb;border-radius:24px;background:#fff;padding:48px;text-align:center;box-shadow:0 18px 45px rgba(15,23,42,.08)}.code{margin:0;color:#7f1d1d;font-weight:800;letter-spacing:.08em}.title{margin:12px 0 0;font-size:clamp(2rem,5vw,3.25rem);line-height:1.15}.copy{margin:20px auto 0;max-width:560px;color:#475569;font-size:1.05rem;line-height:1.8}.actions{display:flex;flex-wrap:wrap;justify-content:center;gap:12px;margin-top:30px}.action{border-radius:999px;padding:13px 20px;font-weight:700;text-decoration:none}.primary{background:#7f1d1d;color:#fff}.secondary{border:1px solid #7f1d1d;color:#7f1d1d}</style></head><body><main class="page" id="main-content"><section class="card" aria-labelledby="not-found-title"><p class="code">404</p><h1 class="title" id="not-found-title">${copy.title}</h1><p class="copy">${copy.description}</p><div class="actions"><a class="action primary" href="${copy.homeHref}">${copy.home}</a><a class="action secondary" href="${copy.facultiesHref}">${copy.faculties}</a></div></section></main></body></html>`;
}

export default function proxy(request: NextRequest) {
  const host = publicRequestHost(request);
  const protocol = publicRequestProtocol(request);

  if (host === "www." + CANONICAL_HOST || (host === CANONICAL_HOST && protocol === "http")) {
    const destination = request.nextUrl.clone();
    destination.protocol = "https:";
    destination.host = CANONICAL_HOST;
    destination.port = "";
    return NextResponse.redirect(destination, 308);
  }

  const segments = request.nextUrl.pathname.split("/").filter(Boolean);
  const locale = segments[0] === "en" ? "en" : "ar";
  const facultyIndex = locale === "en" ? 1 : 0;
  const isFacultyDetail = segments[facultyIndex] === "faculties" && segments.length === facultyIndex + 2;
  const slug = segments[facultyIndex + 1];

  if (isFacultyDetail && slug && !publishedFacultySlugs.has(slug)) {
    return new NextResponse(facultyNotFoundDocument(locale), {
      status: 404,
      headers: {
        ...securityHeaders,
        "Content-Type": "text/html; charset=utf-8",
        "X-Robots-Tag": "noindex",
      },
    });
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
