import { Drawer, Footer, Header } from "@/components";
import BodyWrapper from "@/components/home/BodyWrapper";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Theme } from "@radix-ui/themes";
import '@radix-ui/themes/styles.css';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ESC",
  description: "Generated by create next app",
  icons: {
    icon: "/esc.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={!1}
        >
          <Theme>
            <Header />
            <Drawer />
            <BodyWrapper>
              {children}
            </BodyWrapper>
            <Footer />
            <Toaster />
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
}
