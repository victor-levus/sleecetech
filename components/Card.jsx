import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Card = ({ title, subTitle, image }) => {
	return (
		/* From Uiverse.io by Yaya12085 */
		<div className="relative flex w-80 h-[510px] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md overflow-hidden">
			<div className="">
				<img
					src={image}
					alt="service image"
					width={"100%"}
					className="h-[220px] object-cover"
				/>
			</div>
			<div className="p-6">
				<h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
					{title}
				</h5>
				<p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased h-[130px]">
					{subTitle}
				</p>
			</div>
			<div className="p-6 pt-0">
				<Link href="/services">
					<Button>Learn More</Button>
				</Link>
			</div>
		</div>
	);
};

export default Card;
