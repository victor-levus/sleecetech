import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <>
      <section className="text-center md:text-left bg-primary">
        <header className="h-[700px] md:h-[500px] flex flex-col md:flex-row gap-10 justify-center items-center container">
          <div className="md:ml-10">
            <article className="font-sourceSan text-4xl md:text-5xl md:w-[400px] md:text-left font-bold mb-10">
              Your Trusted Technology Partner
            </article>
            <p className="font-satoshi text-lg font-bold mb-10">
              Delivering Innovative IT Solutions to Drive Business Success
            </p>
            <Link
              className="px-4 py-2 rounded-md bg-app-color text-app-color2 font-exo font-bold"
              href="/contact-us"
            >
              Contact Us
            </Link>
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

      <section className="p-5 my-20">
        <h1 className="font-ptSans text-4xl text-app-color2 font-bold text-center mb-20">
          VISION, MISSION & GOAL
        </h1>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <div className="glassmorphism max-w-[450px]">
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

          <div className="glassmorphism max-w-[450px]">
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

          <div className="glassmorphism max-w-[450px]">
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

      <section className="p-5 my-20 bg-app-color2 bg-opacity-70 md:h-[700px]">
        <h1 className="font-ptSans text-4xl text-white font-bold text-center mb-20">
          OUR SERVICES
        </h1>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <div className="glassmorphism max-w-[450px]">
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

          <div className="glassmorphism max-w-[450px]">
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

          <div className="glassmorphism max-w-[450px]">
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
    </>
  );
};

export default Home;
