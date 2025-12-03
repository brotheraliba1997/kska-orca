import React from "react";
import banner from "@/assets/about-banner.png";
import Image from "next/image";
import Values from "../components/values";
import SectionBadge from "../components/sectionBadge";

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
      <section className="py-20 lg:py-16 bg-white relative">
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
          <div className="text-center mb-16 lg:mb-20 ">
            <SectionBadge title="Our Promise" />

            <div className="relative  ">
              <h2 className="text-[22px]  lg:text-[60px] text-[#0E2746] mb-4 lg:leading-[80px] leading-[30px] relative z-10">
                Trusted capital and proven partnerships <br /> fueling
                sustainable growth through <br /> experience, insight & impact.
              </h2>

              <div className="bg-gradient-to-b from-transparent to-[#ffffff] via-transparent absolute top-0 left-0 w-full h-full z-10"></div>
            </div>
          </div>

         
          <div className="grid lg:grid-cols-2 gap-4 bg-white">
           
            <div className="bg-[#F9F9F9] p-8 lg:p-12 xl:p-16">
        
              <SectionBadge title="Our Mission" />

             
              <div className="space-y-4 text-gray-700 text-[20px] lg:text-[24px] leading-relaxed">
                <p>
                  Our mission is to identify, acquire, and manage high-potential
                  businesses that deliver consistent growth and profitability.
                </p>
                <p>
                  We aim to empower our subsidiaries and partners through
                  strategic guidance, operational excellence, and financial
                  discipline—driving innovation and prosperity for all
                  stakeholders.
                </p>
              </div>
            </div>

       
            <div className="bg-[#FCF7F1] p-8 lg:p-12 xl:p-16 mt-12">
          

              <SectionBadge title="Our Vision" />

           
              <div className="text-gray-700 text-[20px] lg:text-[24px] leading-relaxed">
                <p>
                  To be a leading investment holding company <br /> recognized
                  for creating long-term sustainable <br /> value through
                  strategic partnerships, <br /> diversified investments, and
                  responsible <br /> stewardship of assets across global
                  markets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-16 bg-[#273D58] relative border-l-2 border-r-2 border-[#032246]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center  mx-auto">
       
          
            <SectionBadge title="Why Choose Us" />
        
            <h2 className="text-2xl  xl:text-[60px] text-white  mb-6 leading-tight">
              Our expertise and experience
            </h2>

           
            <p className="text-white text-[20px] lg:text-[24px] leading-relaxed">
              We are a global consulting and investment agency dedicated to
              shaping future-defining businesses. Our <br /> team combines
              market expertise with actionable insights to guide clients from
              ambition to success.
            </p>
          </div>
        </div>
      </section>

      <Values />
    </div>
  );
}

export default AboutUs;
