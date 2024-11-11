import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Montserrat, Inconsolata } from "next/font/google";
import { AppContextProvider } from "@/context";

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

const montserrat = Montserrat({
  subsets: ["latin"], // Optional: Include only the latin subset
  weight: ["400", "700", "900"],
  variable: "--font-montserrat", // Optional: Create a variable for Montserrat
});

const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-inconsolata",
});

export const metadata: Metadata = {
  title: "Delani's Portfolio",
  description: "Website containing delani's recent works",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${inconsolata.variable} antialiased`}
      >
        <AppContextProvider>{children}</AppContextProvider>
      </body>
    </html>
  );
}
