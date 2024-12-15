import type { Metadata } from "next";
import '@/styles/globals.css'
import { ThemeProviderContext } from "@/context/ThemeContext";
import { CssBaseline } from "@mui/material";


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
        <ThemeProviderContext>
          <CssBaseline />
            {children}
          <footer role="contentinfo">

          </footer>
        </ThemeProviderContext>
      </body>
    </html>
  );
}
