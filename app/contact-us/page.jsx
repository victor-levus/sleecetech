"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import HeaderText from "@/components/HeaderText";
import Footer from "@/components/Footer";

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
					<HeaderText>Contact Us</HeaderText>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Get in touch with us for any inquiries or support. We are here to
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
											rows={7}
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
									<span>Plot 2157 B07 Cadastral Zone Kamtape Abuja FCT</span>
								</div>
								<div className="flex items-center space-x-4">
									<Phone className="text-primary" />
									<span>+234 803 072 4271</span>
								</div>
								<div className="flex items-center space-x-4">
									<Mail className="text-primary" />
									<span>info@sleecetechnologies.com.ng</span>
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
										src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2073.283570069771!2d7.47004264286761!3d9.09911402214506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b17bda1d00b%3A0xe8d76aaf46002194!2skatampe%20main!5e0!3m2!1sen!2sng!4v1727414371063!5m2!1sen!2sng"
										width="100%"
										height="100%"
										style={{ border: 0 }}
										allowFullScreen=""
										loading="lazy"
										referrerPolicy="no-referrer-when-downgrade"
									></iframe>
								</div>
							</CardContent>
						</Card>
					</motion.div>
				</div>
			</div>

			<Footer />
		</div>
	);
}
