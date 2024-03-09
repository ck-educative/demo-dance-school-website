import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBarC from '../components/NavBar';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Avismirti Dance School",
  description: "Avismirti Dance School - Online and In person",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
          <main>
            <NavBarC></NavBarC>

              {children}
              {/* <Footer/> */}
          </main>
      </body>
    </html>
  );
}
