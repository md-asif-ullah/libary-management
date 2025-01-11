import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { ReactNode } from "react";

const IbmPlexSans = localFont({
  src: [
    { path: "/fonts/IBMPlexSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "/fonts/IBMPlexSans-Regular.ttf", weight: "500", style: "normal" },
    { path: "/fonts/IBMPlexSans-Regular.ttf", weight: "600", style: "normal" },
    { path: "/fonts/IBMPlexSans-Regular.ttf", weight: "700", style: "normal" },
  ],
});

const bebasNeue = localFont({
  src: [
    { path: "/fonts/BebasNeue-Regular.ttf", weight: "700", style: "normal" },
  ],
  variable: "--bebasNeue",
});

export const metadata: Metadata = {
  title: "BookWise",
  description: "BookWise is a borrowing university library management system.",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body
        className={`${IbmPlexSans.className} ${bebasNeue.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
