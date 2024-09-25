"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const services = [
	{
		title: "IT Consulting",
		subTitle:
			"Offering expert advice and strategic guidance to help businesses optimize their IT systems, improve efficiency, and align technology with their goals",
		image:
			"https://img.freepik.com/premium-photo/providing-business-consulting-services-guiding-clients-ai-generated_547674-1107.jpg",
	},
	{
		title: "Networking",
		subTitle:
			"Designing, implementing, and maintaining secure and efficient network solutions to ensure seamless communication and data exchange within organizations",
		image:
			"https://miro.medium.com/v2/resize:fit:1024/1*hdjgfeXvokmq3Oe_wyvCEw.jpeg",
	},
	{
		title: "IT Infrastructure Services",
		subTitle:
			"Providing comprehensive management of IT infrastructure, including hardware, software, and network components, to ensure reliability and performance",
		image:
			"https://img.freepik.com/premium-photo/cloud-computing-infrastructure-ai-generated_547674-1577.jpg",
	},
	{
		title: "Power Installation",
		subTitle:
			"Installing and managing power solutions, including UPS systems and backup power supplies, to ensure continuous and reliable operation of IT systems.",
		image:
			"https://img.freepik.com/premium-photo/man-blue-shirt-working-solar-panel-he-tendency-take-advantage-free-roofs-industries-place-photovoltaic-panels-reduce-business-electricity-costs-ai-generated_538213-47068.jpg",
	},
	{
		title: "Managed Services",
		subTitle:
			"Delivering proactive IT management and support, including monitoring, maintenance, and troubleshooting, to ensure optimal performance and minimize downtime",
		image:
			"https://img.freepik.com/premium-photo/3d-illustration-business-people-working-office-3d-rendering-exploring-evolving-interplay-business-ai-generated_538213-10349.jpg",
	},
	{
		title: "Telecommunication",
		subTitle:
			"Offering telecommunication solutions, such as VoIP, video conferencing, and unified communication systems, to enhance business communication and collaboration",
		image:
			"https://media.licdn.com/dms/image/C5612AQGW1hysHX0Uwg/article-cover_image-shrink_720_1280/0/1520096144505?e=2147483647&v=beta&t=jE1WtKOLSX4E5Aym464aG83MpXB3YYKpuimXrWghkFw",
	},
	{
		title: "Software Development",
		subTitle:
			"Developing custom software applications tailored to meet specific business needs, from web and mobile apps to enterprise solutions",
		image:
			"https://devsdata.com/wp-content/uploads/2024/05/5-interesting-facts-about-software-developers-DevsData.jpg",
	},
	{
		title: "Cloud Computing",
		subTitle:
			"Providing cloud services, including migration, management, and optimization, to help businesses leverage the scalability, flexibility, and cost-efficiency of cloud-based solutions",
		image:
			"https://static.vecteezy.com/system/resources/previews/035/571/609/non_2x/ai-generated-abstract-cloud-computing-technology-concept-generative-ai-free-photo.jpg",
	},
	{
		title: "Cybersecurity",
		subTitle:
			"Implementing and managing robust cybersecurity measures to protect businesses from threats such as malware, phishing, and data breaches",
		image:
			"https://www.innovationnewsnetwork.com/wp-content/uploads/2023/08/shutterstockBlue-Planet-Studio_1960378399-696x392.jpg",
	},
];

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
					<h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
						Our Services
					</h1>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Discover our comprehensive range of IT solutions designed to empower
						your business and drive innovation.
					</p>
				</motion.header>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service, index) => (
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
									<Button className="w-full group">
										Request a Consultation
										<ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
									</Button>
								</div>
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</div>
	);
}
