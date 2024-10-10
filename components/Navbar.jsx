"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
	const [menuActive, setMenuActive] = useState(false);
	const path = usePathname();

	useEffect(() => {
		setMenuActive(false);
	}, [path]);

	return (
		<nav className="h-[90px] bg-white">
			<div
				className={`absolute ${
					!menuActive ? "hidden w-[0]" : ""
				} md:hidden top-0 bottom-0 right-0 bg-white w-[250px]`}
			>
				<div className="md:hidden bg-white h-[100vh]">
					<div className="flex justify-end">
						<IoCloseSharp
							onClick={() => setMenuActive(false)}
							className="mt-8 mr-3 cursor-pointer"
							color="red"
							size="40"
						/>
					</div>
					<MenuList />
				</div>
			</div>

			<div className="navbar px-3 md:px-5 h-full mx-auto flex justify-between gap-10 items-center container">
				<Link href="/" className="flex items-center">
					<Image src="/assets/icons/logo.png" width={240} height={1} />
				</Link>

				<div className="hidden md:block">
					<MenuList />
				</div>

				<div className="md:hidden">
					<HiOutlineMenu
						onClick={() => setMenuActive(true)}
						className="cursor-pointer text-gray-700"
						size="40"
					/>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

const MenuList = () => {
	const path = usePathname();

	const menuList = [
		{ label: "Home", href: "/" },
		{ label: "About", href: "/about" },
		{ label: "Services", href: "/services" },
		{ label: "Our Team", href: "/teams" },
		{ label: "Contact Us", href: "/contact-us" },
		{ label: "Gallery", href: "/gallery" },
	];

	// const linkStyle = `font-nanum text-lg font-extrabold hover:text-app-color ${
	// 	path === "/contact-us" ? "text-app-color" : "text-app-color2"
	// }`;

	return (
		<div className="mt-8 gap-5 flex flex-col mr-5 items-end md:flex-row ">
			{menuList.map((ml) => (
				<Link
					key={ml.label}
					href={ml.href}
					className={`font-sourceSan text-lg hover:text-app-color ${
						path === ml.href
							? "text-app-color font-extrabold"
							: "text-app-color2 font-semibold"
					}`}
				>
					{ml.label}
				</Link>
			))}
		</div>
	);
};
