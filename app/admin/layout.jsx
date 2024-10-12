import { Inter } from "next/font/google";
import "../globals.scss";
import AdminLayout from "./AdminLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Sleece Technologies Limited",
	description: "ICT Innovation Company situated in Nigeria",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${inter.className} bg-app-color bg-opacity-10`}>
				<main className="mx-auto ">
					<AdminLayout children={children} />
				</main>
			</body>
		</html>
	);
}
