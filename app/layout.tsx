import type { Metadata } from "next";
import { Doto, Space_Mono, Syne } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import SmoothScroll from "./components/SmoothScroll";

const doto = Doto({
  subsets: ["latin"],
  variable: "--font-doto",
  weight: ["800"],
  display: "block",
  preload: true,
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"],
  display: "block",
  preload: true,
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", '700','800'],
  display: "block",
  preload: true,
});

export const metadata: Metadata = {
  title: "CrissCrossProduction (Danylo (Daniel) Syzyi)",
  description: "Daniel Syzyi. CrissCrossProduction is my personal brand created for projects of any type and any difficulty. I do not only do we create beautiful visual designs that capture viewers attetion, but we also tailor our work to each company's unique identity.",
  keywords: [
    "CrissCrossProduction",
    "Danylo Syzyi",
    "Syzyi",
    "Daniel Syzyi",
    "Social Media",
    "Brand Identity",
    "Photo",
    "Video Production",
    "Salzburg",
  ],

  openGraph: {
    title: "CrissCrossProduction (Danylo (Daniel) Syzyi)",
    description:
      "Daniel Syzyi. CrissCrossProduction is my personal brand created for projects of any type and any difficulty. I do not only do we create beautiful visual designs that capture viewers attetion, but we also tailor our work to each company's unique identity",

    type: "website",
    locale: "en_US",
    siteName: "CrissCrossProduction",
  },

  viewport: "width=device-width, initial-scale=1",

  themeColor: "#FFB74D",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${doto.variable} ${spaceMono.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header></Header>
        <SmoothScroll>
        <main className="relative z-30 bg-white">
        {children}
        </main>
        </SmoothScroll>
        </body>
    </html>
  );
}
