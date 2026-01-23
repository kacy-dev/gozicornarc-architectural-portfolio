
import type { Metadata } from "next";

import {
  Geist,
  Geist_Mono,
  Poppins,
  Roboto,
  Inter,
  Pacifico,
  Audiowide,
  Goldman,
  Michroma,
  Zen_Dots,
  Nosifer,
  Anta,

} from "next/font/google";
import "./globals.css";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
import LayoutWrapper from "@/components/LayoutWrapper";
import { AppProvider } from "@/context/AppContext";
import { initAdmin } from "@/lib/initAdmin";

/**
 * Font Configurations
 * Each font is assigned a CSS variable
 */


initAdmin(); // Initialize admin user at startup

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pacifico",
  display: "swap",
});


const audiowide = Audiowide({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-audiowide",
  display: "swap",
});

const goldman = Goldman({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-goldman",
  display: "swap",
});

const michroma = Michroma({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-michroma",
  display: "swap",
});

const zenDots = Zen_Dots({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-zen-dots",
  display: "swap",
});

const nosifer = Nosifer({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-nosifer",
  display: "swap",
});

const anta = Anta({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anta",
  display: "swap",
});

/**
 * Global SEO Metadata
 * Company: Gozicornarc Contractors Ltd
 * Industry: Architecture & Construction
 */
export const metadata: Metadata = {
  metadataBase: new URL("https://www.gozicornarc.com"),

  title: {
    default: "Gozicornarc Contractors Ltd | Architecture & Construction Experts",
    template: "%s | Gozicornarc Contractors Ltd",
  },

  description:
    "Gozicornarc Contractors Ltd is a professional architecture and construction company specializing in modern architectural design, residential and commercial construction, renovations, and complete project management services delivered with precision and excellence.",

  keywords: [
    "Gozicornarc Contractors Ltd",
    "architecture company",
    "architecture firm",
    "architectural design services",
    "construction company",
    "building contractors",
    "residential construction",
    "commercial construction",
    "modern architecture",
    "building design",
    "construction project management",
    "renovation services",
  ],

  authors: [{ name: "Gozicornarc Contractors Ltd" }],
  creator: "Gozicornarc Contractors Ltd",
  publisher: "Gozicornarc Contractors Ltd",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.gozicornarc.com",
    siteName: "Gozicornarc Contractors Ltd",
    title: "Gozicornarc Contractors Ltd | Architecture & Construction Experts",
    description:
      "Expert architectural design and construction services for residential and commercial projects. We design, build, and manage projects with innovation, quality, and integrity.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gozicornarc Contractors Ltd Architecture and Construction Projects",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Gozicornarc Contractors Ltd | Architecture & Construction Experts",
    description:
      "Professional architectural design and construction services delivering modern, durable, and innovative building projects.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  alternates: {
    canonical: "https://www.gozicornarc.com",
  },
};

/**
 * Root Layout
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Theme initialization script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function () {
  try {
    const theme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (theme === 'dark' || (!theme && prefersDark)) {
      document.documentElement.classList.add('dark');
    }
  } catch (_) {}
})();
`,
          }}
        />

        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#FF6600" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>

      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${poppins.variable}
          ${roboto.variable}
          ${inter.variable}
          ${pacifico.variable}
          ${audiowide.variable}
          ${goldman.variable}
          ${michroma.variable}
          ${zenDots.variable}
          ${nosifer.variable}
          ${anta.variable}
          antialiased
        `}
      >

        <AppProvider>
          {/* <Navbar /> */}
          <LayoutWrapper>
          <div className="pt-[env(safe-area-inset-top)]" >{children}</div>
          {/* <Footer /> */}
          </LayoutWrapper>
        </AppProvider>
      </body>
    </html>
  );
}


