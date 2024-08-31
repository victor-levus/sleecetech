import Link from "next/link";

const Button = ({ children, fullWidth }) => {
  return (
    <button className={`app--button ${fullWidth ? "w-full" : ""}`}>
      <Link href="/contact-us">{children}</Link>
    </button>
  );
};

export default Button;
