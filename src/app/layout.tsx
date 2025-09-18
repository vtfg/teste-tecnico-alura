import type { Metadata } from "next";
import { Chakra_Petch, Inter } from "next/font/google";

import { ThemeProvider } from "@/app/providers";
import { Navbar } from "@/components/navbar";

import "./globals.css";

const chakraPetch = Chakra_Petch({
  variable: "--font-chakra-petch",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fernanda Mascheti",
  description:
    "Engenheira de Computação e Pedagoga. Ensino pensamento computacional para estudantes do Ensino Fundamental e Médio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${chakraPetch.variable} ${inter.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <main className="flex flex-col items-center justify-center w-full">
            <Navbar />

            {children}

            <footer className="container flex flex-col gap-16 mt-[38px] mb-[44px]">
              <p className="text-center text-base text-foreground-secondary">
                © Copyright 2025. Produzido por Fernanda Mascheti
              </p>
            </footer>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
