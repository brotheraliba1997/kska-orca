import React from "react";
import banner from "@/assets/about-banner.png";
import Image from "next/image";
import Values from "../components/values";

function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Banner Section */}
      <section className="relative h-[400px] lg:h-[500px] bg-[#0E2746]  overflow-hidden">
        {/* Background Image with Blur */}
        <div className="absolute inset-0  opacity-15    ">
          <Image
            src={banner}
            alt="Contact Us Banner"
            className="w-full h-full object-cover "
            fill
            priority
          />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center mt-28">
            <p className="text-white text-sm lg:text-base mb-2 font-medium opacity-90">
              / about us
            </p>
            <h1 className="text-4xl lg:text-6xl xl:text-[64px]  text-white leading-tight">
              Who We Are
            </h1>
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="py-20 lg:py-32 bg-white relative">
        {/* Subtle Dotted Pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle, #d1d5db 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        ></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Top Section - Our Promise */}
          <div className="text-center mb-16 lg:mb-20">
            {/* Tag */}
            <div className="mb-6 flex justify-center">
              <span className="text-[16px] inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8BF96] border border-[#E8BF96] text-gray-800 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-[#E8BF96]"></span>
                Our Promise
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl lg:text-5xl xl:text-[60px] text-[#0E2746] font-bold mb-4 leading-tight">
              Trusted capital and proven partnerships fueling sustainable growth through
            </h2>

            {/* Sub-heading */}
            <p className="text-xl lg:text-2xl text-gray-600">
              experience, insight & impact.
            </p>
          </div>

          {/* Bottom Section - Mission & Vision */}
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Block - Our Mission */}
            <div className="bg-white p-8 lg:p-12 xl:p-16">
              {/* Tag */}
              <div className="mb-6">
                <span className="text-[16px] inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8BF96] border border-[#E8BF96] text-gray-800 text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#E8BF96]"></span>
                  Our Mission
                </span>
              </div>

              {/* Content */}
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Our mission is to identify, acquire, and manage high-potential businesses that deliver consistent growth and profitability.
                </p>
                <p>
                  We aim to empower our subsidiaries and partners through strategic guidance, operational excellence, and financial discipline—driving innovation and prosperity for all stakeholders.
                </p>
              </div>
            </div>

            {/* Right Block - Our Vision */}
            <div className="bg-[#FCF7F1] p-8 lg:p-12 xl:p-16">
              {/* Tag */}
              <div className="mb-6">
                <span className="text-[16px] inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8BF96] border border-[#E8BF96] text-gray-800 text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#E8BF96]"></span>
                  Our Vision
                </span>
              </div>

              {/* Content */}
              <div className="text-gray-700 text-lg leading-relaxed">
                <p>
                  To be a leading investment holding company recognized for creating long-term sustainable value through strategic partnerships, diversified investments, and responsible stewardship of assets across global markets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-32 bg-[#0E2746] relative border-l-2 border-r-2 border-[#032246]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Why Choose Us Tag */}
            <div className="mb-6 flex justify-center">
              <span className="text-[16px] inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8BF96] text-gray-800 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-[#E8BF96]"></span>
                Why Choose Us
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl lg:text-5xl xl:text-[60px] text-white font-bold mb-6 leading-tight">
              Our expertise and experience
            </h2>

            {/* Descriptive Paragraph */}
            <p className="text-white text-lg lg:text-xl leading-relaxed">
              We are a global consulting and investment agency dedicated to shaping future-defining businesses. Our team combines market expertise with actionable insights to guide clients from ambition to success.
            </p>
          </div>
        </div>
      </section>


      <Values />
    </div>
  );
}

export default AboutUs;
