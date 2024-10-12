"use client";

import React, { useState } from "react";
import axios from "axios";
import { IoClose } from "react-icons/io5";

import TitleHead from "@/components/TitleHead";
import { Button } from "@/components/ui/button";

const url = process.env.BACKEND_URL + "sleecetech/messages/";

const ContactSection = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [error, setError] = useState("");
	const [successNotification, setSuccessNotification] = useState(false);
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		phone: "",
		subject: "",
		message: "",
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormState((prev) => ({ ...prev, [name]: value }));

		error[name] ? setError((prev) => ({ ...prev, [name]: "" })) : null;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			// Here you would typically send the form data to your backend
			setIsSubmitting(true);
			setSuccessNotification(false);
			await axios.post(url, formState);
			// Reset form after submission
			setFormState({
				name: "",
				email: "",
				phone: "",
				subject: "",
				message: "",
			});
			setError("");
			// You might also want to show a success message to the user

			setSuccessNotification(true);

			setTimeout(() => {
				setSuccessNotification(false);
			}, 4000);
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
		<section className="contact--section p-5 my-10">
			<div className="mb-14">
				<TitleHead>contact us</TitleHead>
			</div>

			<div className="flex flex-col md:flex-row justify-center items-stretch gap-10 font-nanum">
				<div className="bg-app-color2 bg-opacity-75 p-8 rounded-lg shadow-md flex-1 w-full md:max-w-[500px]">
					<h2 className="text-2xl font-bold text-white mb-6">
						Send us a Message
					</h2>

					<form onSubmit={handleSubmit}>
						<div className="mb-8">
							<label
								className="block text-sm font-medium text-gray-300"
								htmlFor="name"
							>
								Full Name
							</label>
							<input
								className="mt-1 p-2 w-full bg-app-color bg-opacity-30 border border-app-color border-opacity-45 rounded-md text-white"
								type="text"
								name="name"
								value={formState.name}
								onChange={handleInputChange}
							/>
							{error?.name && (
								<p className="text-xs text-red-600">{error.name[0]}</p>
							)}
						</div>

						<div className="mb-8">
							<label
								className="block text-sm font-medium text-gray-300"
								htmlFor="email"
							>
								Email Address
							</label>
							<input
								className="mt-1 p-2 w-full bg-app-color bg-opacity-30 border border-app-color border-opacity-45 rounded-md text-white"
								name="email"
								id="email"
								type="email"
								value={formState.email}
								onChange={handleInputChange}
							/>
							{error?.email && (
								<p className="text-xs text-red-600">{error.email[0]}</p>
							)}
						</div>

						<div className="mb-8">
							<label
								className="block text-sm font-medium text-gray-300"
								htmlFor="phone"
							>
								Phone
							</label>
							<input
								className="mt-1 p-2 w-full bg-app-color bg-opacity-30 border border-app-color border-opacity-45 rounded-md text-white"
								type="tel"
								name="phone"
								value={formState.phone}
								onChange={handleInputChange}
							/>
							{error?.phone && (
								<p className="text-xs text-red-600">{error.phone[0]}</p>
							)}
						</div>

						<div className="mb-8">
							<label
								className="block text-sm font-medium text-gray-300"
								htmlFor="message"
							>
								Message
							</label>
							<textarea
								className="mt-1 p-2 w-full bg-app-color bg-opacity-30 border border-app-color border-opacity-45 rounded-md text-white"
								rows="3"
								name="message"
								id="message"
								value={formState.message}
								onChange={handleInputChange}
							></textarea>
							{error?.message && (
								<p className="text-xs text-red-600">{error.message[0]}</p>
							)}
						</div>

						<Button type="submit" className="w-full">
							{isSubmitting ? "Sending..." : "Send Message"}
						</Button>
						{successNotification && (
							<p className="flex items-center justify-between text-sm bg-lime-100 bg-opacity-80 px-3 py-2 rounded-lg mt-3">
								Message sent successfully
								<span
									className="cursor-pointer text-red-700 text-xl"
									onClick={() => setSuccessNotification(false)}
								>
									<IoClose />
								</span>
							</p>
						)}
						{error === "Network Error" && (
							<p className="flex items-center justify-between text-sm bg-lime-100 bg-opacity-80 px-3 py-2 rounded-lg mt-3">
								Error in connecting to the server
								<span
									className="cursor-pointer text-red-700 text-xl"
									onClick={() => setError(false)}
								>
									<IoClose />
								</span>
							</p>
						)}
					</form>
				</div>

				<div className="flex-1 max-w-[700px] md:ml-20">
					<img
						src="https://unblast.com/wp-content/uploads/2020/09/Contact-Us-Vector-Illustration-Part-02-1.jpg"
						alt="contact-image"
						width={"100%"}
						className="object-cover "
					/>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
