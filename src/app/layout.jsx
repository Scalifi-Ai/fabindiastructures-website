import { Menu } from "@/components/custom/Menu";
import { cn } from "@/lib/utils";
import { Nunito as FontSans } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/custom/Footer";

const font = FontSans({ subsets: ["latin"] });

export const metadata = {
  title: "PJ Fab India",
  description: "Stell structure",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="tracking-wide" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background antialiased", font.className)}>
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
