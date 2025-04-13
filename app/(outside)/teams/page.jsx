"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Linkedin, Twitter, Mail } from "lucide-react";
import ContactUsPage from "../contact-us/page";
import HeaderText from "@/components/HeaderText";

const teamMembers = [
	{
		name: "Victor Umedum",
		role: "CEO & Founder",
		bio: "Victor has over 20 years of experience in the IT industry and is passionate about leveraging technology to solve complex business challenges.",
		image: "/placeholder.svg?height=400&width=400",
		linkedin: "https://www.linkedin.com",
		twitter: "https://twitter.com",
		email: "victorumedum@sleecetechnologies.com.ng",
	},
	{
		name: "Eugene Ezeimo",
		role: "CTO",
		bio: "Eugene is a tech visionary with a strong background in software development and cloud architecture. She leads our technical strategy and innovation initiatives.",
		image: "/placeholder.svg?height=400&width=400",
		linkedin: "https://www.linkedin.com",
		twitter: "https://twitter.com",
		email: "eugeneezeimo@sleecetechnologies.com.ng",
	},
	{
		name: "Jane David",
		role: "Head of Sales",
		bio: "Jane brings a wealth of experience in B2B sales and has a proven track record of building strong client relationships in the tech sector.",
		image: "/placeholder.svg?height=400&width=400",
		linkedin: "https://www.linkedin.com",
		twitter: "https://twitter.com",
		email: "janedavid@sleecetechnologies.com.ng",
	},
	{
		name: "Sarah Michael",
		role: "Lead Developer",
		bio: "Sarah is an expert in full-stack development with a focus on creating scalable and efficient software solutions for enterprise clients.",
		image: "/placeholder.svg?height=400&width=400",
		linkedin: "https://www.linkedin.com",
		twitter: "https://twitter.com",
		email: "serahmichael@sleecetechnologies.com.ng",
	},
	{
		name: "David David",
		role: "UX/UI Designer",
		bio: "David is passionate about creating intuitive and visually appealing user interfaces that enhance the overall user experience of our products.",
		image: "/placeholder.svg?height=400&width=400",
		linkedin: "https://www.linkedin.com",
		twitter: "https://twitter.com",
		email: "david@sleecetechnologies.com.ng",
	},
	{
		name: "Emily Jackson",
		role: "Customer Success Manager",
		bio: "Emily ensures our clients get the most value from our services. She's dedicated to fostering long-term partnerships and client satisfaction.",
		image: "/placeholder.svg?height=400&width=400",
		linkedin: "https://www.linkedin.com",
		twitter: "https://twitter.com",
		email: "emilyjackson@sleecetechnologies.com.ng",
	},
];

export default function OurTeamPage() {
	const [selectedMember, setSelectedMember] = useState(null);

	return (
		<div className="min-h-screen bg-gradient-to-b from-background to-muted">
			<div className="container mx-auto px-4 py-16">
				<motion.header
					className="text-center mb-16"
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					<HeaderText>Our Teams</HeaderText>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Meet the talented individuals behind Sleece Technologies who are
						dedicated to driving innovation and delivering exceptional IT
						solutions.
					</p>
				</motion.header>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{teamMembers.map((member, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							<Card
								className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
								onClick={() => setSelectedMember(member)}
							>
								<CardContent className="p-6 flex flex-col items-center text-center">
									<Avatar className="w-32 h-32 mb-4">
										<AvatarImage src={member.image} alt={member.name} />
										<AvatarFallback>
											{member.name
												.split(" ")
												.map((n) => n[0])
												.join("")}
										</AvatarFallback>
									</Avatar>
									<h2 className="text-2xl font-semibold mb-2">{member.name}</h2>
									<p className="text-primary mb-4">{member.role}</p>
									<p className="text-muted-foreground line-clamp-3">
										{member.bio}
									</p>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>

				<AnimatePresence>
					{selectedMember && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
							onClick={() => setSelectedMember(null)}
						>
							<motion.div
								initial={{ scale: 0.9, y: 50 }}
								animate={{ scale: 1, y: 0 }}
								exit={{ scale: 0.9, y: 50 }}
								className="bg-background rounded-lg shadow-xl max-w-2xl w-full overflow-hidden"
								onClick={(e) => e.stopPropagation()}
							>
								<div className="p-6 flex flex-col md:flex-row items-center md:items-start gap-6">
									<Avatar className="w-40 h-40">
										<AvatarImage
											src={selectedMember.image}
											alt={selectedMember.name}
										/>
										<AvatarFallback>
											{selectedMember.name
												.split(" ")
												.map((n) => n[0])
												.join("")}
										</AvatarFallback>
									</Avatar>
									<div className="flex-1">
										<h2 className="text-3xl font-bold mb-2">
											{selectedMember.name}
										</h2>
										<p className="text-primary text-xl mb-4">
											{selectedMember.role}
										</p>
										<p className="text-muted-foreground mb-6">
											{selectedMember.bio}
										</p>
										<div className="flex gap-4">
											<Button variant="outline" size="icon" asChild>
												<a
													href={selectedMember.linkedin}
													target="_blank"
													rel="noopener noreferrer"
													aria-label={`${selectedMember.name}'s LinkedIn`}
												>
													<Linkedin className="h-4 w-4" />
												</a>
											</Button>
											<Button variant="outline" size="icon" asChild>
												<a
													href={selectedMember.twitter}
													target="_blank"
													rel="noopener noreferrer"
													aria-label={`${selectedMember.name}'s Twitter`}
												>
													<Twitter className="h-4 w-4" />
												</a>
											</Button>
											<Button variant="outline" size="icon" asChild>
												<a
													href={`mailto:${selectedMember.email}`}
													aria-label={`Email ${selectedMember.name}`}
												>
													<Mail className="h-4 w-4" />
												</a>
											</Button>
										</div>
									</div>
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
