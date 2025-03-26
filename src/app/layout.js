"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";
import { Providers } from "@/components/WalletProvider";
import { AuthProvider } from "@/context/AuthContext";
import { CookieConsent } from "@/components/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname(); // Get current route

  // Corrected: Check if pathname starts with "/dashboard" or "/adminpanel"
  const isDashboard =
    pathname.startsWith("/dashboard") || pathname.startsWith("/adminpanel");

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <AuthProvider>
            {!isDashboard && <Navbar />}{" "}
            {/* ✅ Exclude navbar from dashboard & adminpanel */}
            {children}
            {!isDashboard && <Footer />}
          </AuthProvider>
        </Providers>
        <CookieConsent />
      </body>
    </html>
  );
}
