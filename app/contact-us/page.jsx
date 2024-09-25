"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactUsPage() {
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormState((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Here you would typically send the form data to your backend
		console.log("Form submitted:", formState);
		// Reset form after submission
		setFormState({ name: "", email: "", subject: "", message: "" });
		// You might also want to show a success message to the user
	};

	return (
		<div className="min-h-screen bg-gradient-to-b from-background to-muted">
			<div className="container mx-auto px-4 py-16">
				<motion.header
					className="text-center mb-16"
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					<h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
						Contact Us
					</h1>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Get in touch with us for any inquiries or support. We're here to
						help!
					</p>
				</motion.header>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
					>
						<Card>
							<CardHeader>
								<CardTitle>Send Us a Message</CardTitle>
							</CardHeader>
							<CardContent>
								<form onSubmit={handleSubmit} className="space-y-4">
									<div>
										<Label htmlFor="name">Name</Label>
										<Input
											id="name"
											name="name"
											value={formState.name}
											onChange={handleInputChange}
											required
										/>
									</div>
									<div>
										<Label htmlFor="email">Email</Label>
										<Input
											id="email"
											name="email"
											type="email"
											value={formState.email}
											onChange={handleInputChange}
											required
										/>
									</div>
									<div>
										<Label htmlFor="subject">Subject</Label>
										<Input
											id="subject"
											name="subject"
											value={formState.subject}
											onChange={handleInputChange}
											required
										/>
									</div>
									<div>
										<Label htmlFor="message">Message</Label>
										<Textarea
											id="message"
											name="message"
											value={formState.message}
											onChange={handleInputChange}
											required
										/>
									</div>
									<Button type="submit" className="w-full">
										Send Message
									</Button>
								</form>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						className="space-y-8"
					>
						<Card>
							<CardHeader>
								<CardTitle>Contact Information</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="flex items-center space-x-4">
									<MapPin className="text-primary" />
									<span>4 Tamale Street Wuse Zone 3 Abuja Nigeria</span>
								</div>
								<div className="flex items-center space-x-4">
									<Phone className="text-primary" />
									<span>+234 803 072 4271</span>
								</div>
								<div className="flex items-center space-x-4">
									<Mail className="text-primary" />
									<span>info@sleecetechnologies.com</span>
								</div>
								<div className="flex items-center space-x-4">
									<Clock className="text-primary" />
									<span>Monday - Friday: 10:00 AM - 3:00 PM</span>
								</div>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Our Location</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="aspect-video relative rounded-md overflow-hidden">
									<iframe
										src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2736.6526394030698!2d7.467570368673695!3d9.057091255657218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0bcc25a36d41%3A0x68cbc4be2f2090de!2s(NIN)%20National%20Identification%20Number%20Registration%20Enrollment%20Centre%20Powered%20by%20PayChex!5e0!3m2!1sen!2sng!4v1727263701169!5m2!1sen!2sng"
										width="100%"
										height="100%"
										style={{ border: 0 }}
										allowfullscreen=""
										loading="lazy"
										referrerpolicy="no-referrer-when-downgrade"
									></iframe>
								</div>
							</CardContent>
						</Card>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
