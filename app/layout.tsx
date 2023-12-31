import "./globals.css";
import type { Metadata } from "next";
import { Maven_Pro } from "next/font/google";
import Providers from "./components/Providers";

const font = Maven_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Color Genius",
  description: "Generate a palette from one color. CSS and Tailwind supported.",
  alternates: {
    canonical: "https://www.colorgenius.tech/",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
