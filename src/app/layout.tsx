import type { Metadata } from "next";
import { openSans } from "@/utils/fonts";
import 'bootstrap/dist/css/bootstrap.min.css'
import "@/styles/globals.css";

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
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
