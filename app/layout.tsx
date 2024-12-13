import type { Metadata } from "next";
import '@/styles/globals.css'
import { ThemeProvider } from "@/context/ThemeContext";


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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Megrim&family=Ojuju:wght@200..800&family=Playwrite+HR+Lijeva:wght@100..400&family=Space+Grotesk:wght@300..700&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
      </head>
      <body>
        <ThemeProvider>
            {children}
          <footer role="contentinfo">

          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
