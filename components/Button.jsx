import Link from "next/link";

const Button = ({ href = "", children, fullWidth }) => {
	return (
		<button className={`app--button ${fullWidth ? "w-full" : ""}`}>
			<Link href={href}>{children}</Link>
		</button>
	);
};

export default Button;
