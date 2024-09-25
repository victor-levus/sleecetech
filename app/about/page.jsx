"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Briefcase, Globe, Users, ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import HeaderText from "@/components/HeaderText";

const fadeIn = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.6 },
};

export default function About() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-background to-muted">
			<div className="container mx-auto px-4 py-16">
				<motion.header
					className="text-center mb-20"
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					<HeaderText>About Sleece Technologies</HeaderText>
					<p className="text-xl text-muted-foreground">
						Innovating for a Connected Future
					</p>
				</motion.header>

				<motion.section
					className="grid md:grid-cols-2 gap-12 items-center mb-24"
					variants={fadeIn}
					initial="initial"
					whileInView="animate"
					viewport={{ once: true }}
				>
					<div>
						<h2 className="text-3xl font-semibold mb-6">Our Story</h2>
						<p className="text-lg mb-4 leading-relaxed">
							Founded in 2015, Sleece Technologies has been at the forefront of
							technological innovation. Our journey began with a simple idea: to
							create solutions that make a difference in people's lives.
						</p>
						<p className="text-lg mb-6 leading-relaxed">
							Today, we're proud to be a leading force in the tech industry,
							delivering cutting-edge software and hardware solutions to clients
							worldwide.
						</p>
						<Button size="lg" className="group">
							Learn More
							<ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
						</Button>
					</div>
					<div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
						<Image
							src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
							alt="Sleece Technologies office"
							layout="fill"
							objectFit="cover"
							className="transition-transform duration-500 hover:scale-110"
						/>
					</div>
				</motion.section>

				<motion.section
					className="mb-24"
					variants={fadeIn}
					initial="initial"
					whileInView="animate"
					viewport={{ once: true }}
				>
					<h2 className="text-3xl font-semibold mb-12 text-center">
						Our Core Values
					</h2>
					<div className="grid md:grid-cols-3 gap-8">
						{[
							{
								icon: Globe,
								title: "Innovation",
								description: "Pushing boundaries and embracing new ideas",
							},
							{
								icon: Users,
								title: "Collaboration",
								description: "Working together to achieve greatness",
							},
							{
								icon: Award,
								title: "Excellence",
								description:
									"Striving for the highest quality in everything we do",
							},
						].map((value, index) => (
							<motion.div
								key={index}
								whileHover={{ y: -5 }}
								transition={{ type: "spring", stiffness: 300 }}
							>
								<Card className="h-full bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-colors duration-300">
									<CardContent className="flex flex-col items-center text-center p-6">
										<value.icon className="w-16 h-16 mb-6 text-primary" />
										<h3 className="text-2xl font-semibold mb-3">
											{value.title}
										</h3>
										<p className="text-muted-foreground">{value.description}</p>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</motion.section>

				<motion.section
					className="mb-24"
					variants={fadeIn}
					initial="initial"
					whileInView="animate"
					viewport={{ once: true }}
				>
					<h2 className="text-3xl font-semibold mb-12 text-center">
						Our Expertise
					</h2>
					<div className="grid md:grid-cols-3 gap-8">
						{[
							"Artificial Intelligence",
							"Internet of Things",
							"Cloud Computing",
							"Cybersecurity",
							"Data Analytics",
							"Mobile App Development",
						].map((expertise, index) => (
							<motion.div
								key={index}
								whileHover={{ scale: 1.05 }}
								className="bg-card/50 backdrop-blur-sm rounded-lg p-6 shadow-lg flex items-center space-x-4"
							>
								<Briefcase className="w-8 h-8 text-primary" />
								<span className="text-lg font-medium">{expertise}</span>
							</motion.div>
						))}
					</div>
				</motion.section>

				<motion.section
					className="text-center mb-24"
					variants={fadeIn}
					initial="initial"
					whileInView="animate"
					viewport={{ once: true }}
				>
					<h2 className="text-3xl font-semibold mb-6">Join Our Team</h2>
					<p className="text-lg mb-8 max-w-2xl mx-auto">
						We're always looking for talented individuals to join our innovative
						team. If you're passionate about technology and want to make a
						difference, we'd love to hear from you.
					</p>
					<Button size="lg" variant="secondary" className="group">
						View Open Positions
						<ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
					</Button>
				</motion.section>

				<motion.section
					className="bg-card/50 backdrop-blur-sm rounded-lg p-12 text-center shadow-2xl"
					variants={fadeIn}
					initial="initial"
					whileInView="animate"
					viewport={{ once: true }}
				>
					<h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
					<p className="text-lg mb-8 max-w-2xl mx-auto">
						Interested in learning more about how Sleece Technologies can help
						your business? Let's start a conversation and explore the
						possibilities together.
					</p>
					<Button size="lg" variant="default" className="group">
						Contact Us
						<ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
					</Button>
				</motion.section>
			</div>
		</div>
	);
}
