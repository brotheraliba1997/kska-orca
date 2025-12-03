import React from "react";

import banner from "@/assets/finacnce-banner.png";
import Image from "next/image";
import SectionBadge from "../components/sectionBadge";
import security from "@/assets/lock.png";
import checked from "@/assets/ic_sharp-verified-user.png";
import mdl2_shape from "@/assets/fluent-mdl2_shape-solid.png";
import ChartBar from "@/assets/ChartBar (1).png";
import material from "@/assets/material-symbols_shape-line.png";
import fluent_data from "@/assets/fluent_data-pie-32-filled.png";
import dot from "@/assets/dot.png";   
import fluent_dataa from "@/assets/fluent_data-area-20-filled.png";   
import Handshake from "@/assets/Handshake.png";   
import person from "@/assets/person.png";   
import game from "@/assets/game.png";   

function Industries() {
  return (
    <div className="min-h-screen bg-white">
      {/* Banner Section */}
      <section className="relative h-[400px] lg:h-[500px] bg-[#0E2746]  overflow-hidden">
        {/* Background Image with Blur */}
        <div className="absolute inset-0  opacity-15">
          <Image
            src={banner}
            alt="Contact Us Banner"
            className="w-full h-full object-cover "
            fill
            priority
          />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center mt-20">
            <p className="text-white text-sm lg:text-base mb-2 font-medium opacity-90">
              / INDUSTRIES
            </p>
            <h1 className="text-4xl lg:text-6xl xl:text-[64px]  text-white leading-tight">
              Shaping the Future of Finance & Tech
            </h1>
          </div>
        </div>
      </section>

      {/* Two Column Content Section */}
      <section className="py-20 lg:py-32 relative border-l-2 border-r-2 border-[#032246]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Content Block */}
            <div className="bg-[#F3F3F3] bg-opacity-47 p-8 lg:p-12 xl:p-16 relative">
              {/* Subtle Dotted Pattern */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #d1d5db 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              ></div>

              <div className="relative z-10">
                {/* Tag */}
                <SectionBadge title="What We Do" />

                {/* Title */}
                <h2 className="text-xl xl:text-[48px] text-[#0E2746]  mb-6 leading-tight">
                  Empowering Digital Finance
                </h2>

                {/* Paragraphs */}
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <p>
                    We build next-generation financial systems that transform
                    how businesses and individuals move, manage, and grow their
                    money.
                  </p>
                  <p>
                    From payment infrastructure to digital banking to
                    intelligent financial tools – our solutions deliver
                    security, speed, and scalability.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content Block */}
            <div className="bg-[#FCF7F1] p-8 lg:p-12 xl:p-16 relative mt-8">
              {/* Subtle Dotted Pattern */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #e5ddd4 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              ></div>

              <div className="relative z-10">
                <SectionBadge title="What We Do" />

                <h2 className="text-xl xl:text-[48px] text-[#0E2746]  mb-6 leading-tight">
                  Scaling High-Impact Technology
                </h2>

                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <p>
                    Our technology ecosystem is built on research, strategic
                    foresight, and long-term value creation.
                  </p>
                  <p>
                    We partner with founders, teams, and enterprises to develop
                    resilient, scalable, and meaningful products that push
                    industries forward.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="  bg-gradient-to-b from-[#0E2746] to-white ">
        <section className="py-32   relative border-l-2 border-r-2 border-[#032246]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 lg:mb-20">
              <SectionBadge title="Fintech" />

              <h2 className="text-4xl lg:text-5xl xl:text-[60px] text-white  mb-6 leading-tight">
                Reinventing Finance for the Digital Era
              </h2>

              <p className="text-white text-lg lg:text-[24px]  leading-relaxed">
                We bring together cutting-edge technology and financial
                expertise to deliver secure, seamless, and scalable solutions
                for businesses and individuals. Whether you’re upgrading your
                payment infrastructure or building the next-generation financial
                product, our fintech ecosystem empowers you to move money
                smarter and faster.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white px-4 py-8  shadow-md lg:col-span-1 col-span-3 flex flex-col gap-16 ">
                <div className="mb-6">
                  <div className="w-[55px] h-[55px] relative">
                    <Image
                      src={checked}
                      alt="checked"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl lg:text-[40px] font-medium text-[#0E2746] mb-4">
                    Next-Gen Security
                  </h3>

                  <p className="text-[#464E57] text-[20px] leading-relaxed">
                    Advanced encryption, real-time fraud detection, and
                    compliance-ready infrastructure that safeguards every
                    touchpoint.
                  </p>

                  <div className="w-full h-[400px] relative">
                    <Image
                      src={security}
                      alt="security"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 lg:col-span-2 col-span-3">
                <div className="bg-white px-4 py-8  shadow-md flex flex-col justify-between">
                  <div className="mb-6 lg:h-[40px] h-[60px]">
                    <div className="w-[55px] h-[55px] relative">
                      <Image
                        src={mdl2_shape}
                        alt="mdl2_shape"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col ">
                    <h3 className="text-2xl lg:text-[40px]  text-[#0E2746] mb-4">
                      Frictionless Experience
                    </h3>

                    <p className="text-[#464E57] text-[20px] leading-relaxed">
                      Human-centered interfaces that make financial and digital
                      interactions simple, smooth, and effortless.
                    </p>
                  </div>
                </div>

                <div className="bg-white px-4 py-8  shadow-md flex flex-col justify-between">
                <div className="mb-6 lg:h-[40px] h-[60px]">
                    <div className="w-[55px] h-[55px] relative">
                      <Image
                        src={ChartBar}
                        alt="ChartBar"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col ">
                    <h3 className="text-2xl lg:text-[40px]  text-[#0E2746] mb-4">
                      Built for Scale
                    </h3>

                    <p className="text-gray-700 leading-relaxed text-[20px]">
                      High-performance systems engineered for rapid growth –
                      from emerging startups to global enterprises.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-8 shadow-md flex flex-col justify-between">
                <div className="mb-6 lg:h-[40px] h-[60px]">
                    <div className="w-[55px] h-[55px] relative">
                      <Image
                        src={material}
                        alt="material"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col ">
                    <h3 className="text-2xl lg:text-[40px]  text-[#0E2746] mb-4">
                      Innovation-Driven
                    </h3>

                    <p className="text-gray-700 leading-relaxed text-[20px]">
                      Technology that evolves with you. We adopt
                      forward-thinking solutions to keep you ahead of the
                      market.
                    </p>
                  </div>
                </div>

                {/* Card 5: Data-Based Decisions */}
                <div className="bg-white p-8  shadow-md flex flex-col justify-between">
                  {/* Icon */}
                  <div className="mb-6 lg:h-[40px] h-[60px]">
                    <div className="w-[55px] h-[55px] relative">
                      <Image
                        src={fluent_data}
                        alt="fluent_data"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col ">
                    <h3 className="text-2xl lg:text-[40px]  text-[#0E2746] mb-4">
                      Data-Based Decisions
                    </h3>

                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed text-[20px]">
                      We leverage real-time analytics and intelligent insights
                      to guide smarter strategies, optimize performance, and
                      unlock new opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="py-20 mb-5 bg-[#051D37]  border-l-2 border-r-2 border-[#032246] relative ">
        <div className="absolute inset-0  opacity-25 ">
          <Image
            src={dot}
            alt="Contact Us Banner"
            className="w-full h-full object-cover "
            fill
            priority
          />
        </div>
        <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <SectionBadge title="Technology" />

            <h2 className="text-[22px]  xl:text-[60px] text-white  leading-tight  ">
              We build and support innovations that <br /> accelerate growth,
              strengthen industries, and <br /> create meaningful impact.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white px-8  py-8  shadow-lg flex flex-col gap-12 justify-between ">
              {/* Icon */}
              <div className="mb-6 w-[55px] h-[55px] relative">
              <Image
            src={fluent_dataa}
            alt="fluent_dataa"
            className="w-full h-full object-contain "
            fill
            priority
          />
              </div>

              <div className="flex flex-col ">
                {/* Title */}
                <h3 className="text-2xl lg:text-[40px]  text-[#0E2746] mb-4">
                  Research-Driven Strategy
                </h3>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed text-[20px]">
                  We leverage rigorous analysis, strategic foresight, and
                  industry intelligence to identify opportunities with
                  exceptional growth potential.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 lg:p-10  shadow-lg  flex flex-col gap-12 justify-between">
              <div className="mb-6">
              <div className="mb-6 w-[55px] h-[55px] relative">
              <Image
            src={Handshake}
            alt="Handshake"
            className="w-full h-full object-contain "
            fill
            priority
          />
              </div>
              </div>

              <div className="flex flex-col ">
                <h3 className="text-2xl lg:text-[40px]  text-[#0E2746] mb-4">
                  Partnership-Focused
                </h3>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed text-[20px]">
                  We collaborate with founders, offering strategic guidance,
                  operational support, and access to a global network of
                  partners and experts.
                </p>
              </div>

              {/* Title */}
            </div>

            {/* Card 3: Long-Term Value Creation */}
            <div className="bg-white p-8 lg:p-10  shadow-lg  flex flex-col gap-12 justify-between">
              {/* Icon */}
              
              <div className="mb-6 w-[55px] h-[55px] relative">
              <Image
            src={person}
            alt="person"
            className="w-full h-full object-contain "
            fill
            priority
          />
              </div>
           

              <div className="flex flex-col ">
                <h3 className="text-2xl lg:text-[40px]  text-[#0E2746] mb-4">
                  Long-Term Value Creation
                </h3>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed text-[20px]">
                  We believe in sustainable innovation. Our investments focus on
                  resilient business models, strong leadership teams, and
                  scalable technologies.
                </p>
              </div>

              {/* Title */}
            </div>

            {/* Card 4: Impact-Oriented */}
            <div className="bg-white p-8 lg:p-10 shadow-lg  flex flex-col gap-12 justify-between">
              {/* Icon */}
              <div className="mb-6 w-[55px] h-[55px] relative">
              <Image
            src={game}
            alt="game"
            className="w-full h-full object-contain "
            fill
            priority
          />
              </div>

              <div className="flex flex-col ">
                <h3 className="text-2xl lg:text-[40px]  text-[#0E2746] mb-4">
                  Impact-Oriented
                </h3>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed text-[20px]">
                  We back companies that not only deliver returns but also drive
                  positive technological, economic, and societal change.
                </p>
              </div>

              {/* Title */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Industries;
