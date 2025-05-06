import type { Metadata } from "next";
import "@/styles/globals.css";
import { ThemeProviderContext } from "@/context/ThemeContext";
import { CssBaseline } from "@mui/material";
import NavBar from "@/components/UI/Navbar";
import { SessionProvider } from "next-auth/react";  

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
          <SessionProvider>
            <ThemeProviderContext>
              <CssBaseline />
              <header>
                <NavBar />
              </header>
              {children}
              <footer></footer>
            </ThemeProviderContext>
          </SessionProvider>
      </body>
    </html>
  );
}
