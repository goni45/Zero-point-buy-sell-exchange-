import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zeropointbyx.com"),
  title: {
    default:
      "Zero Point Buy Sell Exchange | Buy, Sell & Exchange Phones in Mymensingh",
    template: "%s | Zero Point Buy Sell Exchange",
  },
  description:
    "The trusted destination for buying, selling and exchanging mobile phones, laptops and accessories in Mymensingh. Genuine iPhones, Android flagships, instant quotes & WhatsApp support.",
  keywords: [
    "phone buy sell exchange Mymensingh",
    "mobile exchange Mymensingh",
    "iPhone Mymensingh",
    "used phone shop Mymensingh",
    "zero point buy sell exchange",
  ],
  openGraph: {
    title: "Zero Point Buy Sell Exchange | Mymensingh",
    description:
      "Best Buy, Sell & Exchange deals in Mymensingh. Genuine phones, laptops & accessories with honest prices.",
    type: "website",
    locale: "en_US",
    url: "https://zeropointbyx.com",
    siteName: "Zero Point Buy Sell Exchange",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zero Point Buy Sell Exchange | Mymensingh",
    description:
      "Best Buy, Sell & Exchange deals in Mymensingh. Genuine phones, laptops & accessories.",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="bn" className={inter.variable}>
      <body className="min-h-screen font-sans antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");var d=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;if(d)document.documentElement.classList.add("dark");}catch(e){}})();`,
          }}
        />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
