import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

// Headings and buttons — the display face from the original PaintRite theme.
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://paintritepainters.com"),
  title: "PaintRite Painters | Residential & Commercial Painting in San Diego, CA",
  description:
    "Top rated interior & exterior painting in San Diego, CA. Family owned and operated since 1994. Licensed, insured, Google Guaranteed. Free quotes — (619) 843-9026.",
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "PaintRite Painters | San Diego Painting Contractor",
    description:
      "Premiere residential & commercial painting experts serving San Diego County since 1994. Free estimates, licensed & insured.",
    images: ["/images/logo.png"],
    type: "website",
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
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans text-body">{children}</body>
    </html>
  );
}
