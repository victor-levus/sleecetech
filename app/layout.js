import { Inter } from "next/font/google";
import "./globals.scss";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sleece Technologies",
  description: "Sleece Technologies Company Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="mx-auto">{children}</main>
      </body>
    </html>
  );
}
