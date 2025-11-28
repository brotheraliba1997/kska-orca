import React from "react";

import banner from "@/assets/finacnce-banner.png";
import Image from "next/image";

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
              / Industries
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
          <div className="grid lg:grid-cols-2 gap-0">
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
                <div className="mb-6">
                  <span className="text-[16px] inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8BF96] border border-gray-300 text-gray-800 text-sm font-medium">
                    <span className="w-2 h-2 rounded-full bg-[#E8BF96]"></span>
                    What We Do
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-4xl lg:text-5xl xl:text-[60px] text-[#0E2746] font-bold mb-6 leading-tight">
                  Empowering Digital Finance
                </h2>

                {/* Paragraphs */}
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <p>
                    We build next-generation financial systems that transform how businesses and individuals move, manage, and grow their money.
                  </p>
                  <p>
                    From payment infrastructure to digital banking to intelligent financial tools – our solutions deliver security, speed, and scalability.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content Block */}
            <div className="bg-[#FCF7F1] p-8 lg:p-12 xl:p-16 relative">
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
                {/* Tag */}
                <div className="mb-6">
                  <span className="text-[16px] inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8BF96] border border-gray-300 text-gray-800 text-sm font-medium">
                    <span className="w-2 h-2 rounded-full bg-[#E8BF96]"></span>
                    What We Do
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-4xl lg:text-5xl xl:text-[60px] text-[#0E2746] font-bold mb-6 leading-tight">
                  Scaling High-Impact Technology
                </h2>

                {/* Paragraphs */}
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <p>
                    Our technology ecosystem is built on research, strategic foresight, and long-term value creation.
                  </p>
                  <p>
                    We partner with founders, teams, and enterprises to develop resilient, scalable, and meaningful products that push industries forward.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reinventing Finance Section */}
      <section className="py-20 lg:py-32 bg-[#0E2746] relative border-l-2 border-r-2 border-[#032246]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Section - Header */}
          <div className="text-center mb-16 lg:mb-20">
            {/* Tag */}
            <div className="mb-6 flex justify-center">
              <span className="text-[16px] inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8BF96] text-white text-sm font-medium">
                Fintech
              </span>
            </div>

            {/* Title */}
            <h2 className="text-4xl lg:text-5xl xl:text-[60px] text-white font-bold mb-6 leading-tight">
              Reinventing Finance for the Digital Era
            </h2>

            {/* Description */}
            <p className="text-white text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">
              We bring together cutting-edge technology and financial expertise to deliver secure, seamless, and scalable solutions for businesses and individuals. Whether you're upgrading your payment infrastructure or building the next-generation financial product, our fintech ecosystem empowers you to move money smarter and faster.
            </p>
          </div>

          {/* Bottom Section - Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Next-Gen Security */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              {/* Icon */}
              <div className="mb-6">
                <svg
                  className="w-12 h-12 text-[#0E2746]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-2xl lg:text-3xl font-bold text-[#0E2746] mb-4">
                Next-Gen Security
              </h3>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed">
                Advanced encryption, real-time fraud detection, and compliance-ready infrastructure that safeguards every touchpoint.
              </p>
            </div>

            {/* Card 2: Frictionless Experience */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              {/* Icon */}
              <div className="mb-6">
                <svg
                  className="w-12 h-12 text-[#0E2746]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-2xl lg:text-3xl font-bold text-[#0E2746] mb-4">
                Frictionless Experience
              </h3>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed">
                Human-centered interfaces that make financial and digital interactions simple, smooth, and effortless.
              </p>
            </div>

            {/* Card 3: Built for Scale */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              {/* Icon */}
              <div className="mb-6">
                <svg
                  className="w-12 h-12 text-[#0E2746]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-2xl lg:text-3xl font-bold text-[#0E2746] mb-4">
                Built for Scale
              </h3>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed">
                High-performance systems engineered for rapid growth – from emerging startups to global enterprises.
              </p>
            </div>

            {/* Card 4: Innovation-Driven */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              {/* Icon */}
              <div className="mb-6">
                <svg
                  className="w-12 h-12 text-[#0E2746]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-2xl lg:text-3xl font-bold text-[#0E2746] mb-4">
                Innovation-Driven
              </h3>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed">
                Technology that evolves with you. We adopt forward-thinking solutions to keep you ahead of the market.
              </p>
            </div>

            {/* Card 5: Data-Based Decisions */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              {/* Icon */}
              <div className="mb-6">
                <svg
                  className="w-12 h-12 text-[#0E2746]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-2xl lg:text-3xl font-bold text-[#0E2746] mb-4">
                Data-Based Decisions
              </h3>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed">
                We leverage real-time analytics and intelligent insights to guide smarter strategies, optimize performance, and unlock new opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 lg:py-32 bg-[#0E2746] relative border-l-2 border-r-2 border-[#032246]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16 lg:mb-20">
            {/* Tag */}
            <div className="mb-6 flex justify-center">
              <span className="text-[16px] inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0E2746] border border-white text-white text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-white"></span>
                Technology
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl lg:text-5xl xl:text-[60px] text-white font-bold leading-tight max-w-5xl mx-auto">
              We build and support innovations that accelerate growth, strengthen industries, and create meaningful impact.
            </h2>
          </div>

          {/* Content Cards - 2x2 Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1: Research-Driven Strategy */}
            <div className="bg-white p-8 lg:p-10 rounded-lg shadow-lg">
              {/* Icon */}
              <div className="mb-6">
                <svg
                  className="w-12 h-12 text-[#E8BF96]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-2xl lg:text-3xl font-bold text-[#0E2746] mb-4">
                Research-Driven Strategy
              </h3>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed">
                We leverage rigorous analysis, strategic foresight, and industry intelligence to identify opportunities with exceptional growth potential.
              </p>
            </div>

            {/* Card 2: Partnership-Focused */}
            <div className="bg-white p-8 lg:p-10 rounded-lg shadow-lg">
              {/* Icon */}
              <div className="mb-6">
                <svg
                  className="w-12 h-12 text-[#E8BF96]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-2xl lg:text-3xl font-bold text-[#0E2746] mb-4">
                Partnership-Focused
              </h3>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed">
                We collaborate with founders, offering strategic guidance, operational support, and access to a global network of partners and experts.
              </p>
            </div>

            {/* Card 3: Long-Term Value Creation */}
            <div className="bg-white p-8 lg:p-10 rounded-lg shadow-lg">
              {/* Icon */}
              <div className="mb-6">
                <svg
                  className="w-12 h-12 text-[#E8BF96]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z"
                  />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-2xl lg:text-3xl font-bold text-[#0E2746] mb-4">
                Long-Term Value Creation
              </h3>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed">
                We believe in sustainable innovation. Our investments focus on resilient business models, strong leadership teams, and scalable technologies.
              </p>
            </div>

            {/* Card 4: Impact-Oriented */}
            <div className="bg-white p-8 lg:p-10 rounded-lg shadow-lg">
              {/* Icon */}
              <div className="mb-6">
                <svg
                  className="w-12 h-12 text-[#E8BF96]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-2xl lg:text-3xl font-bold text-[#0E2746] mb-4">
                Impact-Oriented
              </h3>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed">
                We back companies that not only deliver returns but also drive positive technological, economic, and societal change.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Industries;
