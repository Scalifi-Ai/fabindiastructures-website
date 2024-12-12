import { Footer } from "@/components/custom/Footer";
import { Menu } from "@/components/custom/Menu";
import { layoutMetadata } from "@/data/metadata";
import { cn } from "@/lib/utils";
import { Nunito as FontSans } from "next/font/google";
import "./globals.css";

const font = FontSans({ subsets: ["latin"] });

export const metadata = layoutMetadata;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="tracking-wide" suppressHydrationWarning>
      <body
        className={cn("min-h-screen bg-background antialiased", font.className)}
      >
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
