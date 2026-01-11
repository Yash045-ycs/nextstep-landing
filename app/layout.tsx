// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NextStep | Right Rank. Right College.",
  description:
    "CET, JEE, NEET ke baad confusion? NextStep helps you find the best engineering and medical college for your rank, budget, and career goals.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,600;1,500;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="selection:bg-blue-500/30 selection:text-blue-900">
        {/* Background */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/20 to-slate-50" />
        </div>
        {/* <div className="fixed inset-0 -z-10 bg-white" /> */}

        {children}
      </body>
    </html>
  );
}
