import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "AI Prompt",
	description: "AI powered prompts",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				<main className="mx-auto mt-[100px]">{children}</main>
			</body>
		</html>
	);
}
