import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Footer from "@/components/shared/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Therapist | Home",
    template: "%s | Therapist",
  },
  description: "This is official website of Therapist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./logo.png" />
      </head>
      <body className={`${poppins.className} antialiased`}>
        {children}
        <footer>
          <Footer></Footer>
        </footer>
      </body>
    </html>
  );
}
