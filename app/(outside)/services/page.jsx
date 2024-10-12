"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import ContactUsPage from "../contact-us/page";
import HeaderText from "@/components/HeaderText";
import Link from "next/link";

import { servicesData } from "@/data";

export default function ServicesPage() {
	const [selectedService, setSelectedService] = useState(null);

	return (
		<div className="min-h-screen bg-gradient-to-b from-background to-muted">
			<div className="container mx-auto px-4 py-16">
				<motion.header
					className="text-center mb-16"
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					<HeaderText>Our Services</HeaderText>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Discover our comprehensive range of IT solutions designed to empower
						your business and drive innovation.
					</p>
				</motion.header>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{servicesData.map((service, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							<Card
								className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
								onClick={() => setSelectedService(service)}
							>
								<div className="relative h-48 overflow-hidden">
									<Image
										src={service.image}
										alt={service.title}
										layout="fill"
										objectFit="cover"
										className="transition-transform duration-300 group-hover:scale-110"
									/>
									<div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex items-center justify-center">
										<span className="text-white text-lg font-semibold">
											Learn More
										</span>
									</div>
								</div>
								<CardContent className="p-6">
									<h2 className="text-2xl font-semibold mb-2">
										{service.title}
									</h2>
									<p className="text-muted-foreground line-clamp-2">
										{service.subTitle}
									</p>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>

				<AnimatePresence>
					{selectedService && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
							onClick={() => setSelectedService(null)}
						>
							<motion.div
								initial={{ scale: 0.9, y: 50 }}
								animate={{ scale: 1, y: 0 }}
								exit={{ scale: 0.9, y: 50 }}
								className="bg-background rounded-lg shadow-xl max-w-2xl w-full overflow-hidden"
								onClick={(e) => e.stopPropagation()}
							>
								<div className="relative h-64">
									<Image
										src={selectedService.image}
										alt={selectedService.title}
										layout="fill"
										objectFit="cover"
									/>
								</div>
								<div className="p-6">
									<h2 className="text-3xl font-bold mb-4">
										{selectedService.title}
									</h2>
									<p className="text-muted-foreground mb-6">
										{selectedService.subTitle}
									</p>
									<Link href="/contact-us">
										<Button className="w-full group">
											Request a Consultation
											<ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
										</Button>
									</Link>
								</div>
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>

			<ContactUsPage />
		</div>
	);
}
