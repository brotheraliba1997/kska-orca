import React from "react";
import banner from "@/assets/contact-banner.jpg";
import Image from "next/image";
import SectionBadge from "../components/sectionBadge";

function ContactUs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Banner Section */}
      <section className="relative h-[400px] lg:h-[500px] bg-[#0E2746]  overflow-hidden">
        {/* Background Image with Blur */}
        <div className="absolute inset-0  opacity-5    ">
          <Image
            src={banner}
            alt="Contact Us Banner"
            className="w-full h-full object-cover "
            fill
            priority
          />
        </div>

        {/* Dark Blue Overlay */}
        {/* <div className="absolute inset-0 bg-[#032246] bg-opacity-80"></div> */}

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center mt-28">
            <p className="text-white text-sm lg:text-base mb-2 font-medium opacity-90">
              CONTACT
            </p>
            <h1 className="text-4xl lg:text-6xl xl:text-[64px]  text-white leading-tight">
              Contact With Us
            </h1>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
    
        {/* Subtle Background Pattern */}
       
        <div className=" py-20 lg:py-32 container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 bg-[#F3F3F3]">
          {/* Header Section */}
          <div className="flex flex-col items-center mb-0">
            <SectionBadge title="Contact us" />
            <h2 className="text-4xl lg:text-5xl xl:text-[48px] text-[#032246] font-medium  text-center">
              Send us message!
            </h2>
          </div>

          {/* Form Container */}
          <div className="max-w-4xl mx-auto">
            <div className="p-8 lg:p-12">
              <form className="space-y-6">
                {/* Full Name & Last Name Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full px-4 py-3 border shadow-sm bg-white border-gray-300  focus:outline-none focus:ring-2 focus:ring-[#032246] focus:border-transparent text-gray-700 placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Last name"
                      className="w-full px-4 py-3 border bg-white shadow-sm border-gray-300  focus:outline-none focus:ring-2 focus:ring-[#032246] focus:border-transparent text-gray-700 placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border bg-white shadow-sm border-gray-300  focus:outline-none focus:ring-2 focus:ring-[#032246] focus:border-transparent text-gray-700 placeholder-gray-400"
                  />
                </div>

                {/* Country Code & Phone Number Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <select className="w-full px-4 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-[#032246] focus:border-transparent text-gray-700 appearance-none bg-white">
                      <option value="">Country code</option>
                      <option value="+1">+1 (USA)</option>
                      <option value="+91">+91 (India)</option>
                      <option value="+44">+44 (UK)</option>
                      <option value="+61">+61 (Australia)</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 border bg-white shadow-sm border-gray-300  focus:outline-none focus:ring-2 focus:ring-[#032246] focus:border-transparent text-gray-700 placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* Company Name & Your Designation Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Company Name"
                      className="w-full px-4 py-3 border bg-white shadow-sm border-gray-300  focus:outline-none focus:ring-2 focus:ring-[#032246] focus:border-transparent text-gray-700 placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Your Designation"
                      className="w-full px-4 py-3 border bg-white shadow-sm border-gray-300  focus:outline-none focus:ring-2 focus:ring-[#032246] focus:border-transparent text-gray-700 placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* How Can We Help Textarea */}
                <div>
                  <textarea
                    placeholder="How Can We Help?"
                    rows={6}
                    className="w-full px-4 py-3 border bg-white shadow-sm border-gray-300  focus:outline-none focus:ring-2 focus:ring-[#032246] focus:border-transparent text-gray-700 placeholder-gray-400 resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-[#032246] hover:bg-[#021a33] shadow-sm text-white  py-4 px-8  transition-colors text-lg"
                  >
                    Submit Your Form
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
    
    </div>
  );
}

export default ContactUs;
