"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { login } from "@/lib/httpservices";
import Link from "next/link";

const LoginPage = () => {
	const router = useRouter();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [error, setError] = useState("");
	const [successNotification, setSuccessNotification] = useState(false);
	const [formState, setFormState] = useState({
		username: "",
		password: "",
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormState((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			setIsSubmitting(true);
			setSuccessNotification(false);
			const result = await login(formState);

			if (result.status === 200) {
				router.back();

				setError("");
				setFormState({
					username: "",
					password: "",
				});
			}

			// Reset form after submission

			// You might also want to show a success message to the user
		} catch (error) {
			console.log(error);
			error?.message === "Network Error"
				? setError("Network Error")
				: setError(error?.response?.data);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="flex flex-col gap-5 items-center justify-center h-screen w-full bg-app-color bg-opacity-10">
			<div>
				<div className="font-bold text-3xl font-nanum mb-10 text-app-color2">
					Sleece Account Login
				</div>

				<br />

				<form
					onSubmit={handleSubmit}
					className="max-w-md mx-auto min-w-[500px] mb-5"
				>
					<div className="relative z-0 w-full mb-10 group">
						<input
							onChange={handleInputChange}
							type="email"
							name="username"
							id="username"
							placeholder=" "
							className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
							value={formState.username}
							required
							autoComplete="off"
							autoCorrect="off"
						/>
						<label
							htmlFor="username"
							className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-9 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-9"
						>
							Email address
						</label>
					</div>

					<div className="relative z-0 w-full mb-10 group">
						<input
							onChange={handleInputChange}
							type="password"
							name="password"
							id="password"
							value={formState.password}
							className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
							placeholder=" "
							required
							autoComplete="off"
							autoCorrect="off"
						/>
						<label
							htmlFor="password"
							className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-9 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-9"
						>
							Password
						</label>
					</div>

					<Button
						disabled={!formState.username || !formState.password}
						type="submit"
						className={`${isSubmitting ? "cursor-not-allowed " : ""}`}
					>
						{isSubmitting ? "Submitting..." : "Submit"}
					</Button>
				</form>

				<Link className="" href="/">
					<Button disabled={isSubmitting} type="button">
						Go to Home
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default LoginPage;
