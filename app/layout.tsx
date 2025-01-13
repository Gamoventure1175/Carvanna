import type { Metadata } from "next";
import '@/styles/globals.css'
import { ThemeProviderContext } from "@/context/ThemeContext";
import { CssBaseline } from "@mui/material";
import NavBar from "@/components/UI/Navbar";
import { SessionProvider } from "next-auth/react";


export const metadata: Metadata = {
  title: "Car Info",
  description: "A car information provider app that let's you see car details",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark ">
      <body>
        <SessionProvider>
        <ThemeProviderContext>
          <CssBaseline />
          <header role="banner">
            <NavBar />
          </header>
            {children}
          <footer role="contentinfo">

          </footer>
        </ThemeProviderContext>
        </SessionProvider>
      </body>
    </html>
  );
}
