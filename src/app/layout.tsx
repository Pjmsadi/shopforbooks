import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/navbar"; // Correcting the import path for the Navbar component
import Footer from "../components/footer"; // Correcting the import path for the Footer component

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "KeazoNBOOKS",
  description: "Your gateway to the world of literature!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar /> {/* Adding the Navbar component */}
        <main>{children}</main> {/* Wrapping children in a main tag for better semantics */}
        <Footer /> {/* Adding the Footer component */}
      </body>
    </html>
  );
}
