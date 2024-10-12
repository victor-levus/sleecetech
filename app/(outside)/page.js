import TitleHead from "../../components/TitleHead";
import Card from "../../components/Card";
import Button from "../../components/Button";

import { expertiseData, servicesData } from "../../data/index";
import ContactSection from "./ContactSection";
import Footer from "../../components/Footer";

export const metadata = {
	title: "Sleece Technologies HomePage",
	description: "Sleece Tecnologies Company Potfolio",
};

const Home = () => {
	return (
		<>
			{/* LANDING PAGE */}
			<section className="text-center md:text-left bg-primary">
				<header className="h-[700px] md:h-[500px] flex flex-col md:flex-row gap-10 justify-center items-center container">
					<div className="md:ml-10">
						<article className="font-sourceSan text-4xl md:text-5xl md:w-[400px] md:text-left font-bold mb-10">
							Your Trusted Technology Partner!!
						</article>
						<p className="font-satoshi text-lg font-bold mb-10">
							Delivering Innovative IT Solutions to Drive Business Success
						</p>
						<Button href="/contact-us">Contact Us</Button>
					</div>

					<div className="">
						<img
							src="https://static.vecteezy.com/system/resources/thumbnails/038/938/605/small_2x/data-center-and-servers-free-png.png"
							width={"100%"}
							className=""
						/>
					</div>
				</header>
			</section>

			{/* VISION SECTION */}
			<section className="p-5 my-20">
				<div className="mb-20">
					<TitleHead>vision, mission & goal</TitleHead>
				</div>

				<div className="flex flex-col items-center flex-wrap md:flex-row md:items-start justify-center gap-4">
					<div className="glassmorphism max-w-[300px]">
						<p className="font-nanum font-bold text-app-color text-2xl mb-3 ">
							Vision
						</p>

						<p className="font-satoshi text-justify">
							Our Vision is to achieve 100% customer satisfaction by delivering
							quality products and services at an affordable cost. Our forward
							vision is to strive to become an entity in technology based
							corporate solutions, capable of demanding unconditional response
							from the targeted niche. We also believe that for our scope of
							improvisation – sky is the limit and we are always ready to take
							our achievements to the next level. We are growing and would
							always like to remain on the growing streak.
						</p>
					</div>

					<div className="glassmorphism max-w-[300px]">
						<p className="font-nanum font-bold text-app-color2 text-2xl mb-3 ">
							Mision
						</p>

						<p className="font-satoshi text-justify">
							1. To provide the best solutions that exceeds the client’s
							expectations and meets their increasing technology challenges and
							business demands. <br /> 2. To consistently deliver fast and
							reliable services to our customers through experienced and
							motivated people aided by progressive technology. <br /> 3. To
							generate exceptional returns to stakeholders.
						</p>
					</div>

					<div className="glassmorphism max-w-[300px]">
						<p className="font-nanum font-bold text-app-color text-2xl mb-3 ">
							Goal
						</p>

						<p className="font-satoshi text-justify">
							Our goal is to aid, substantiate and strengthen your competitive
							advantage in the market place by streamlining operations,
							incorporating creative designs and maximizing opportunities. We
							are committed to deliver cutting‐edge and bespoke solutions, that
							puts profitability in close reach, not years away.
						</p>
					</div>
				</div>
			</section>

			{/* SERVICES SECTION */}
			<section className="px-5 pt-10 pb-5 bg-app-color2 bg-opacity-10">
				<div className="my-10">
					<TitleHead>What We Do</TitleHead>
				</div>

				<div className="flex flex-col items-center overflow-hidden md:flex-row gap-4 md:overflow-x-scroll mb-">
					{servicesData.map((sd, i) => (
						<div key={i} className="max-w-[500px] mb-5">
							<Card image={sd.image} title={sd.title} subTitle={sd.subTitle} />
						</div>
					))}
				</div>
			</section>

			{/* WHY CHOOSE US */}
			<section className="why-choose-us pb-10 px-5">
				<div className="my-10">
					<TitleHead>why choose us</TitleHead>
				</div>

				<div className="flex flex-wrap gap-5 justify-center">
					{expertiseData.map((ed, i) => (
						<div
							key={ed.title + i}
							className="why-choose-us-card border-gray-500 border-2 md:max-w-[600px] p-3 flex flex-col md:flex-row justify-center gap-10 md:gap-5 rounded-md"
						>
							<div className="md:w-1/2">
								<h2 className="font-ptSans text-app-color2 mb-3 text-2xl">
									{ed.title}
								</h2>
								<p className="font-sourceSan text-gray-600 ">{ed.subTitle}</p>
							</div>

							<div className="md:flex md:items-center md:w-1/2">
								<img src={ed.image} alt="expertise" width={"100%"} />
							</div>
						</div>
					))}
				</div>
			</section>

			{/* CONTACT US */}
			<ContactSection />
			{/* FOOTER */}
			<section>
				<Footer />
			</section>
		</>
	);
};

export default Home;
