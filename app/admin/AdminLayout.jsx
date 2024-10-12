"use client";

import { Button } from "@/components/ui/button";
import { loggedInUser } from "@/lib/httpservices";
import {
	Home,
	LayoutDashboard,
	LogOut,
	Mail,
	Search,
	Settings,
	User,
	Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

const sidebarMenu = [
	{ icon: LayoutDashboard, label: "Dashboard", href: "/admin" },
	{ icon: Mail, label: "Messages", href: "/admin/messages" },
	{ icon: Settings, label: "Settings", href: "/admin/settings" },
	{ icon: Home, label: "Home", href: "/" },
	// { icon: Users, label: "Teams", href: "/admin/teams" },
];

const lowerSidebarMenu = [
	// { icon: LogOut, label: "Logout", href: "" }
];

const AdminLayout = ({ children }) => {
	const logoutBox = useRef();
	const router = useRouter();
	const [user, setUser] = useState("");
	const [error, setError] = useState("");
	const [logoutConfirmBox, setLogoutConfirmBox] = useState(false);

	const sidebarWidth = "250px";
	const sidebarClassNames = `overflow-x-hidden no-scrollbar fixed flex flex-col h-[100%] justify-between shadow-xl transition-all duration-300 h-full z-40 overflow-y-auto bg-app-color2 text-white w-[${sidebarWidth}]`;

	useEffect(() => {
		const fetchLoginUser = async () => {
			const result = await loggedInUser();
			if (result?.status === 200) {
				setUser(result?.data);
				setError("");
			}

			if (!result?.status || result?.status != 200) {
				if (result?.data?.message === "No stored token available") {
					setUser({});
				}
				setError(result?.data);
			}
		};

		fetchLoginUser();
	}, []);

	const handleLogout = () => {
		localStorage.removeItem("token");
		router.push("/auth/login");
	};

	if (!user && !error)
		return (
			<div className="container mx-auto px-4 py-16">
				<div className="mb-5">
					<p className="text-gray-900 text-lg">Loading...</p>
				</div>
			</div>
		);

	if (!user && error)
		return (
			<div className="container mx-auto px-4 py-16">
				<div className="mb-5">
					<p className="text-gray-900 text-lg">Netwotk Error Getting Data</p>
				</div>

				<Link href="/auth/login">
					<Button>Log In</Button>
				</Link>
			</div>
		);

	if (!user?.id)
		return (
			<div className="container mx-auto px-4 py-16">
				<div className="mb-5">
					<p className="text-gray-900 text-lg">
						You need to be authenticated to access this page
					</p>
				</div>
				<Link href="/auth/login">
					<Button>Log In</Button>
				</Link>
			</div>
		);

	return (
		<div className="flex">
			<div className={sidebarClassNames}>
				<div className="flex h-[100%] w-full flex-col justify-start">
					<h1 className="py-3 pl-3 font-bold text-gray-400">ADMIN LOGIN</h1>
					{/* SIDEBAR LINKS */}
					<div className="z-10 w-full">
						{sidebarMenu.map((sm) => (
							<SidebarLink
								key={sm.href}
								icon={sm.icon}
								href={sm.href}
								label={sm.label}
							/>
						))}
					</div>
				</div>

				{/* LOWER SIDEBAR LINKS */}
				<div>
					<div className="z-10 w-full">
						{lowerSidebarMenu.map((sm) => (
							<SidebarLink
								key={sm.href}
								icon={sm.icon}
								href={sm.href}
								label={sm.label}
							/>
						))}
					</div>

					<div ref={logoutBox}>
						{logoutConfirmBox && (
							<div className="mx-2 p-3 h-[100px] rounded-md bg-yellow-100 bg-opacity-65 w-[230px] ">
								<p className="mb-5 text-black">Select Confirm to Logout</p>

								<div className="flex gap-2">
									<button
										onClick={handleLogout}
										className="bg-yellow-200 px-1 py-1 w-full rounded-2xl text-black text-sm font-bold"
									>
										Confirm
									</button>
									<button
										onClick={() => setLogoutConfirmBox(false)}
										className="bg-green-200 px-1 py-1 w-full rounded-2xl text-black text-sm font-bold"
									>
										Cancel
									</button>
								</div>
							</div>
						)}
						<div onClick={() => setLogoutConfirmBox(!logoutConfirmBox)}>
							<SidebarLink icon={LogOut} href={""} label="Logout" />
						</div>
					</div>
				</div>
			</div>

			<div
				style={{ marginLeft: sidebarWidth }}
				className={`content-area w-full p-3`}
			>
				<div className="flex justify-between mb-10">
					<div className="flex items-center text-xl">
						{
							<Search
								size={38}
								className="text-gray-500 bg-neutral-200 px-2 rounded-l-xl h-[50px]"
							/>
						}
						<input
							type="search"
							className="pr-3 h-[50px] bg-neutral-200 min-w[600px] rounded-r-xl outline-none focus:outline-none min-w-[500px]"
							placeholder="Search"
						/>
					</div>

					<div className="bg-neutral-200 w-[50px] h-[50px] flex justify-center items-center transition duration-300 rounded-lg cursor-pointer hover:bg-neutral-100">
						<User size={30} className="" />
					</div>
				</div>

				{children}
			</div>
		</div>
	);
};

const SidebarLink = ({ href, icon: Icon, label }) => {
	const pathname = usePathname();
	const isActive =
		pathname === href || (pathname === "/" && href === "/dashboard");
	// const screenWidth = window.innerWidth;

	return (
		<Link href={href} className="w-full">
			<div
				className={`relative flex cursor-pointer items-center gap-3 transition-colors hover:bg-blue-950  ${
					isActive ? "bg-blue-900 text-white dark:bg-gray-600" : ""
				} justify-start px-6 py-3`}
			>
				{isActive && (
					<div className="absolute left-0 top-0 h-[100%] w-[5px] bg-blue-400" />
				)}

				<Icon className="h-6 w-6 text-gray-100 " />
				<span className={`font-medium text-gray-100 `}>{label}</span>
			</div>
		</Link>
	);
};

export default AdminLayout;
