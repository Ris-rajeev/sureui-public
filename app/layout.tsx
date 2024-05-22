import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { Room } from "./Room";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Figler",
  description:
    "A minimalist Figma clone using fabric.js and Liveblocks for realtime Collaboration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="./app/favico.ico"
          sizes="32x32"
        />
      </head>
      <body className={`${workSans.className} bg-primary-grey-200`}>
        <Room>{children}</Room>
      </body>
    </html>
  );
}
