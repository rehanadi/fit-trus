import type { Metadata } from "next";
import Script from "next/script";
import { openSans } from "@/utils/fonts";
import 'bootstrap/dist/css/bootstrap.min.css'
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Fit Trus",
  description: "Renovate Your Body",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Header />
        <main className="mb-3">
          {children}
        </main>
        <Footer />
        <Script src='/assets/js/bootstrap.bundle.min.js' />
      </body>
    </html>
  );
}
