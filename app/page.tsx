import Image from "next/image";

import container from "@/assets/Container.png";
import containertwo from "@/assets/Container (1).png";
import containerthree from "@/assets/Container (2).png";

import banner from "@/assets/banner.png";
import freame1 from "@/assets/Frame 31.png";
import freame2 from "@/assets/Frame 32.png";
import freame3 from "@/assets/Frame 33.png";


import Values from "./components/values";

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="h-[892px]  bg-[#052245]   flex flex-col items-center justify-center "
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute  w-full h-[892px] object-cover opacity-5"
        >
          <source src="/banner-video.mp4" type="video/mp4" />
        </video>

        <div className="w-full px-4 sm:px-6 lg:px-8 py-8 lg:py-32 relative z-10 ">
          <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-12 gap-2 items-end">
            <div className="text-white col-span-2">
              <h1 className="text-5xl lg:text-6xl xl:text-[94px] font-bold leading-tight mb-6">
                Building Tomorrow's <br /> Growth, Today.
              </h1>
              <p className="text-xl lg:text-[20px]  mb-8 leading-relaxed">
                We bridge insight and capital to empower businesses, startups,
                and investors with <br /> transformative consulting and
                investment solutions.
              </p>
            </div>
            <div className="relative  h-[188px] rounded-2xl overflow-hidden ">
              <div className="absolute inset-0 bottom-0 left-0 right-0  flex items-end justify-center">
                <Image
                  src={banner}
                  alt="hero"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section
        id="about"
        className="py-20 lg:py-32 bg-white relative border-l-2 border-r-2 border-[#032246]"
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle, #d1d5db 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        ></div>

        <div className="container-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
            <div className="mb-6">
              <span className="text-[16px] inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E8BF96] text-gray-700 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-[#E8BF96]"></span>
                Who we are
              </span>
            </div>

            <div className="space-y-12">
              <h2 className="text-4xl lg:text-5xl xl:text-[60px]  text-[#384960]  lg:leading-[65px] leading-[45px]">
              Trusted capital and proven partnerships fueling sustainable growth through experience, insight, and impact.
              </h2>

              <p className="text-lg lg:text-xl text-gray-700  leading-relaxed max-w-3xl">
                We are a global consulting and investment agency focused on
                shaping future-defining businesses. Our team of strategists,
                analysts, and investors blends market expertise with actionable
                insights, guiding clients from ambition to success.
              </p>

              <div className="flex items-center gap-3 ">
                <button className="text-[21.82px] flex items-center gap-4 bg-[#032246] hover:bg-[#021a33] text-white pl-10 pr-4 py-2 transition-colors">
                  More About Us
                  <button className="w-12 h-12  bg-white border-2 border-[#032246] flex items-center justify-center hover:bg-orange-200 transition-colors">
                    <svg
                      className="w-5 h-5 text-[#E8BF96]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 17L17 7M7 7h10v10"
                      />
                    </svg>
                  </button>
                </button>
              </div>
            </div>
          </div>
        </div>

        <section className=" bg-white relative border-l-2 border-r-2 border-[#032246]">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle, #d1d5db 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          ></div>

          <div className="container mx-auto   lg:px-8 relative z-10">
            <div className="lg:px-16 px-4"></div>
          </div>
        </section>
      </section>

      <section className="py-20 px-5 relative  bg-[#0E2747]">
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="bg-white p-8 lg:p-12 xl:p-16">
            <div className="mb-6">
              <span className="text-[16px] inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E8BF96] text-gray-700 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-[#E8BF96]"></span>
                Our Mission
              </span>
            </div>

            <div className="space-y-6 bg-[#F9F9F9]">
              <p className="text-2xl lg:text-3xl  text-[#032246] leading-tight">
                Our mission is to identify, acquire, and manage high-potential
                businesses that deliver consistent growth and profitability.
              </p>
              <p className="text-2xl lg:text-3xl text-[#032246] leading-relaxed">
                We aim to empower our subsidiaries and partners through
                strategic guidance, operational excellence, and financial
                discipline—driving innovation and prosperity for all
                stakeholders.
              </p>
            </div>
          </div>

          <div className="bg-[#384960] p-8 lg:p-12 xl:p-16 relative mt-8">
            <div className="mb-6">
              <span className="text-[16px] inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 text-gray-800 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-[#032246]"></span>
                Our Vision
              </span>
            </div>

            <div>
              <p className="text-2xl lg:text-[24px]  leading-[40px] text-white">
                To be a leading investment holding company recognized for
                creating long-term sustainable value through strategic
                partnerships, diversified investments, and responsible
                stewardship of assets across global markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Wealth Solutions Section */}
      <section
        id="services"
        className="py-20 lg:py-32 relative border-l-2 border-r-2 border-[#032246]"
        style={{ backgroundColor: "#FCF7F1" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-6">
            <span className="text-[16px] inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-800 text-gray-800 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-gray-800"></span>
              Our Services
            </span>
          </div>

          <h2 className="text-xl lg:text-4xl xl:text-[60px]  text-gray-900 text-center mb-20   leading-tight">
            Strategic wealth solutions: elevate
            <br />
            investments with our expert guidance.
          </h2>

          <div className="space-y-16">
            <div className="bg-white rounded-lg overflow-hidden shadow-md px-4 pb-2">
              <div className="flex items-center justify-between p-4 text-[#111111] text-[16px] font-semibold">
                <p className="  text-sm ">002/002</p>
                <p className="right-4 text-sm ">2017</p>
              </div>

              <div className="grid lg:grid-cols-3 grid-cols-1 gap-0">
                <div
                  className="relative col-span-1"
                  style={{ width: "100%", height: "100%", maxWidth: "100%" }}
                >
                  <video
                    // width={472}
                    // height={441}
                    className="lg:w-[472px] w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src="/second-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                <div className=" p-4 lg:p-12 flex flex-col justify-center col-span-2">
                  <h3 className="text-3xl lg:text-[60px]  text-gray-900 mb-4">
                    Investment Division
                  </h3>
                  <p className="text-lg text-gray-700 mb-8">
                    We Invest In People, Potential, And Progress.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center  gap-4">
                      <span className="text-lg font-semibold text-[#E8BF96] min-w-[40px]">
                        01
                      </span>
                      <span className="lg:text-[30px] text-sm text-[#232318]">
                        Venture Capital & Private Equity
                      </span>
                    </li>
                    <li className="flex items-center  gap-4">
                      <span className="text-lg font-semibold text-[#E8BF96] min-w-[40px]">
                        02
                      </span>
                      <span className="lg:text-[30px] text-sm text-[#232318]">
                        Real Estate & Infrastructure
                      </span>
                    </li>

                    <li className="flex items-center  gap-4">
                      <span className="text-lg font-semibold text-[#E8BF96] min-w-[40px]">
                        03
                      </span>
                      <span className="lg:text-[30px] text-sm text-[#232318]">
                        Clean Energy & Sustainability Projects
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Sector Focus Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mb-6 flex justify-center">
          <span className="text-[16px] inline-flex items-center gap-2 px-4 py-1.5 rounded-full  border border-[#E8BF96] text-gray-800 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-[#E8BF96]"></span>
            Industries We Invest In
          </span>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-[60px]  text-[#032246] text-center mb-16">
            Shaping the future, <br /> sector by sector.
          </h2>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
            <div className="group cursor-pointer">
              <div
                className="rounded-2xl relative overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                style={{ height: "524px" }}
              >
                <Image
                  src={freame3}
                  alt="Fintech"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="group cursor-pointer">
              <div
                className="rounded-2xl relative overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                style={{ height: "524px" }}
              >
                <Image
                  src={freame2}
                  alt="Technology & AI"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="group cursor-pointer">
              <div
                className="rounded-2xl relative overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                style={{ height: "524px" }}
              >
                <Image
                  src={freame1}
                  alt="Healthcare"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#032246ED]">
        <div className="mb-6 flex justify-center">
          <span className="text-[16px] inline-flex items-center gap-2 px-4 py-1.5 rounded-full  border border-[#E8BF96] text-white text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-[#E8BF96]"></span>
            Message
          </span>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-[60px]  text-white text-center mb-16">
            Message from the Chairman
          </h2>

          <div className="grid lg:grid-cols-4 grid-cols-1 gap-1  ">
            <div className="bg-[#F9F9F9]  p-2 lg:px-8 lg:py-16 shadow-lg lg:col-span-4   mt-8 w-full">
              <p className="text-[#032246] leading-relaxed mb-6 text-[24px]">
                <i>
                  At KSKA, our foundation is built on vision, trust, and an
                  unwavering commitment to excellence. We believe that true
                  success lies not only in financial performance but also in the
                  positive impact we create for our communities, partners, and
                  future generations.
                </i>
              </p>

              <p className="text-[#032246] leading-relaxed mb-6 text-[24px]">
                <i>
                  Over the years, we have expanded our investment horizons
                  across diverse sectors, guided by a clear strategy and a
                  forward-thinking mindset. As global markets evolve, our focus
                  remains steadfast: to grow responsibly, innovate continuously,
                  and deliver enduring value.
                </i>
              </p>

              <p className="text-[#032246] leading-relaxed mb-6 text-[24px] ">
                <i>
                  Together, we will continue to transform opportunities into
                  achievements and challenges into milestones.
                </i>
              </p>
            </div>
          </div>
        </div>
      </section>
      

      <Values />
      <section
        id="insights"
        className="py-20 lg:py-28"
        style={{ backgroundColor: "#FFFAF4" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" lg:flex lg:flex-row flex-col  justify-between items-start gap-12 mb-8">
            <span className="text-[16px] inline-flex items-center gap-2 px-4 py-1.5 rounded-full  border border-[#E8BF96] text-gray-800 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-[#E8BF96]"></span>
              Our blogs
            </span>

            <h2 className="lg:mt-0 mt-12 text-3xl lg:text-4xl xl:text-[60px]  text-gray-900 mb-16 leading-tight lg:w-[800px] w-full">
              Expert Insights To Improve Your Business Operations
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-8">
            <div className=" rounded-xl overflow-hidden  transition-shadow cursor-pointer">
              <div style={{ width: "100%", height: "250px", maxWidth: "100%" }}>
                <Image
                  src={container}
                  alt="Understanding The Impact Of Data-Driven Consulting"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600 mb-3 py-4 lg:px-0   px-4">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-[16px] text-black font-semibold">
                  MARCH 7, 2025
                </span>
              </div>
              <h3 className="text-[23px]  text-gray-900 mb-4 lg:px-0   px-4">
                Understanding The Impact Of Data-Driven Consulting
              </h3>
              <div className="flex items-center gap-2 text-black  font-semibold lg:px-0   px-4 ">
                <span>Read More</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 17L17 7M7 7h10v10"
                  />
                </svg>
              </div>
            </div>

            <div className=" rounded-xl overflow-hidden  transition-shadow cursor-pointer">
              <div style={{ width: "100%", height: "250px", maxWidth: "100%" }}>
                <Image
                  src={containertwo}
                  alt="Maximizing Efficiency With Expert Consulting Solutions"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="py-4 lg:px-0   px-4">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-[16px] text-black font-semibold">
                    MARCH 7, 2025
                  </span>
                </div>
                <h3 className="text-[23px]  text-gray-900 mb-4">
                  Maximizing Efficiency With Expert Consulting Solutions
                </h3>
                <div className="flex items-center gap-2 text-black  font-semibold">
                  <span className="text-[16px] text-black">Read More</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 17L17 7M7 7h10v10"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className=" rounded-xl overflow-hidden  transition-shadow cursor-pointer">
              <div style={{ width: "100%", height: "250px", maxWidth: "100%" }}>
                <Image
                  src={containerthree}
                  alt="Tips For Navigating Business Challenges With Confidence"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="py-4 lg:px-0   px-4">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-[16px] text-black font-semibold">
                    MARCH 7, 2025
                  </span>
                </div>
                <h3 className="text-[23px]  text-gray-900 mb-4">
                  Tips For Navigating Business Challenges With Confidence
                </h3>
                <div className="flex items-center gap-2 text-black  font-semibold">
                  <span className="text-[16px] text-black">Read More</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 17L17 7M7 7h10v10"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className=" rounded-xl overflow-hidden  transition-shadow cursor-pointer">
              <div
                className="relative"
                style={{ width: "100%", height: "250px", maxWidth: "100%" }}
              >
                <Image
                  src={containertwo}
                  alt="Strategic Business Growth Through Innovation"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="py-4 lg:px-0   px-4">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2 ">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-[16px] text-black font-semibold">
                    MARCH 7, 2025
                  </span>
                </div>
                <h3 className="text-[23px]  text-gray-900 mb-4">
                  Strategic Business Growth Through Innovation
                </h3>
                <div className="flex items-center gap-2 text-black  font-semibold">
                  <span>Read More</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 17L17 7M7 7h10v10"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="group duration-700 text-black relative scale-50 hover:scale-100">
        <video
          className=" transition-transform duration-600"
          autoPlay
          playsInline
          muted
          loop
        >
          <source src="/footerScale.mp4" type="video/mp4" />
        </video>
        <div className="opacity-0 translate-y-10  group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 flex flex-col gap-16 absolute bottom-4 left-4 bg-[#e8bf96] px-8 py-16 text-white w-[600px] transition-all duration-700">
          <p className="text-[60px] leading-16">
            Smart Strategies for smart businesses
          </p>

          <button className="text-[#032246] px-8 py-3 font-semibold text-lg shadow-lg bg-white flex items-center gap-8 w-fit transition-colors">
            <span>Connect now</span>
            <div className="bg-orange-300 w-12 h-12 flex items-center justify-center transition-colors">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 17L17 7M7 7h10v10"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
