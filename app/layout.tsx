import type { Metadata } from "next";
import "@/styles/globals.css";
import { ThemeProviderContext } from "@/context/ThemeContext";
import { CssBaseline } from "@mui/material";
import NavBar from "@/components/UI/Navbar";
import { SessionProvider } from "next-auth/react";
import Script from "next/script";
import { ReactQueryProvider } from "@/lib/react-query/ReactQueryProvider";

export const metadata: Metadata = {
  title: "Carvanna",
  description: "A social media platform for car enthusiasts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark ">
      <body>
        <Script
          src="https://unpkg.com/css-doodle@0.34.7/css-doodle.min.js"
          strategy="beforeInteractive"
        />
        <SessionProvider>
          <ThemeProviderContext>
            <ReactQueryProvider>
              <CssBaseline />
              <header>
                <NavBar />
              </header>
              {children}
              <footer></footer>
            </ReactQueryProvider>
          </ThemeProviderContext>
        </SessionProvider>
      </body>
    </html>
  );
}
