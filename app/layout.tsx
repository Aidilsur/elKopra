import Navbar from "@/components/navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "@/utils/providers";
import { ToasterProvider } from "@/utils/toast-provider";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-[1000px">
        <Providers>
          <ToasterProvider />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
