import "@/app/globals.scss";

export const metadata = {
	title: "Sleece Technologies Limited",
	description: "ICT Innovation Company situated in Nigeria",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
