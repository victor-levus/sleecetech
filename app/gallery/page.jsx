"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Image from "next/image";
import ContactUsPage from "../contact-us/page";
import HeaderText from "@/components/HeaderText";

const galleryItems = [
	{
		id: 1,
		title: "Smart City Infrastructure",
		description:
			"Implemented IoT sensors and data analytics for traffic management in a major metropolitan area.",
		image:
			"https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
		category: "IoT",
	},
	{
		id: 2,
		title: "Cloud Migration for Enterprise",
		description:
			"Successfully migrated a Fortune 500 company's entire IT infrastructure to a hybrid cloud solution.",
		image:
			"https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
		category: "Cloud Computing",
	},
	{
		id: 3,
		title: "AI-Powered Customer Service",
		description:
			"Developed an AI chatbot that reduced customer service response times by 60% for a leading e-commerce platform.",
		image:
			"https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
		category: "Artificial Intelligence",
	},
	{
		id: 4,
		title: "Blockchain Supply Chain",
		description:
			"Created a blockchain-based supply chain tracking system for a global logistics company.",
		image:
			"https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
		category: "Blockchain",
	},
	{
		id: 5,
		title: "5G Network Deployment",
		description:
			"Assisted in the rollout of 5G infrastructure across multiple cities, enhancing connectivity and enabling new technologies.",
		image:
			"https://images.unsplash.com/photo-1562408590-e32931084e23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
		category: "Networking",
	},
	{
		id: 6,
		title: "Cybersecurity Overhaul",
		description:
			"Implemented a comprehensive cybersecurity solution for a banking institution, significantly reducing security incidents.",
		image:
			"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
		category: "Cybersecurity",
	},
];

const categories = [
	"All",
	...new Set(galleryItems.map((item) => item.category)),
];

export default function GalleryPage() {
	const [selectedItem, setSelectedItem] = useState(null);
	const [filter, setFilter] = useState("All");

	const filteredItems =
		filter === "All"
			? galleryItems
			: galleryItems.filter((item) => item.category === filter);

	return (
		<div className="min-h-screen bg-gradient-to-b from-background to-muted">
			<div className="container mx-auto px-4 py-16">
				<motion.header
					className="text-center mb-16"
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					<HeaderText>Our Project Gallery</HeaderText>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Explore our innovative solutions and successful projects across
						various technology domains.
					</p>
				</motion.header>

				<div className="flex justify-center flex-wrap gap-4 mb-8">
					{categories.map((category, index) => (
						<span key={index}>
							<Button
								variant={filter === category ? "default" : "outline"}
								onClick={() => setFilter(category)}
							>
								{category}
							</Button>
						</span>
					))}
				</div>

				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
					layout
				>
					<AnimatePresence>
						{filteredItems.map((item) => (
							<motion.div
								key={item.id}
								layout
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.5 }}
							>
								<Card
									className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
									onClick={() => setSelectedItem(item)}
								>
									<div className="relative h-48 overflow-hidden">
										<Image
											src={item.image}
											alt={item.title}
											layout="fill"
											objectFit="cover"
											className="transition-transform duration-300 group-hover:scale-110"
										/>
										<div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex items-center justify-center">
											<span className="text-white text-lg font-semibold">
												View Details
											</span>
										</div>
									</div>
									<CardContent className="p-6">
										<h2 className="text-2xl font-semibold mb-2">
											{item.title}
										</h2>
										<p className="text-muted-foreground line-clamp-2">
											{item.description}
										</p>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</AnimatePresence>
				</motion.div>

				<AnimatePresence>
					{selectedItem && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
							onClick={() => setSelectedItem(null)}
						>
							<motion.div
								initial={{ scale: 0.9, y: 50 }}
								animate={{ scale: 1, y: 0 }}
								exit={{ scale: 0.9, y: 50 }}
								className="bg-background rounded-lg shadow-xl max-w-3xl w-full overflow-hidden"
								onClick={(e) => e.stopPropagation()}
							>
								<div className="relative h-64 md:h-96">
									<Image
										src={selectedItem.image}
										alt={selectedItem.title}
										layout="fill"
										objectFit="cover"
									/>
									<Button
										variant="ghost"
										size="icon"
										className="absolute top-2 right-2"
										onClick={() => setSelectedItem(null)}
									>
										<X className="h-6 w-6" />
									</Button>
								</div>
								<div className="p-6">
									<h2 className="text-3xl font-bold mb-2">
										{selectedItem.title}
									</h2>
									<p className="text-primary mb-4">{selectedItem.category}</p>
									<p className="text-muted-foreground">
										{selectedItem.description}
									</p>
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
