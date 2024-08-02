import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs"; 


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Habla con PDFs",
  description: "Habla en español con tus archivos PDF para ahorrar tiempo en tus tareas del día a día ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider > 
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </ClerkProvider>
  );
}
