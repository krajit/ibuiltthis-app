import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: 'swap', // This helps with font loading
});

export const metadata: Metadata = {
  title: "iBuiltThis - Share your creations, Discover New Lanches",
  description: "iBuiltThis is a community platform for creators to showcase their apps, AI tools, SaaS products, and creative projects. Authentic launches, real builders, genuine feedback.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">


      <body
        className={`${outfit.variable} antialiased`}
      >
        <Header/>
        {children}
        <Footer/>

      </body>

    </html>
  );
}
