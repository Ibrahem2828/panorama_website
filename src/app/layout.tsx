import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { getLocale } from "next-intl/server";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const inter = localFont({
  src: "../../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2",
  variable: "--font-sans",
  display: "swap",
});

const cairo = localFont({
  src: "../../node_modules/@fontsource-variable/cairo/files/cairo-arabic-wght-normal.woff2",
  variable: "--font-arabic",
  display: "swap",
});

type RootLayoutProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1026" },
  ],
};

export default async function RootLayout({ children }: RootLayoutProps) {
  const locale = await getLocale();
  const isArabic = locale === "ar";

  return (
    <html
      className={[inter.variable, cairo.variable].join(" ")}
      dir={isArabic ? "rtl" : "ltr"}
      lang={isArabic ? "ar" : "en"}
      suppressHydrationWarning
    >
      <body className="site-shell antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableColorScheme
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
