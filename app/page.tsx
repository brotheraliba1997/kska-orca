import Image from "next/image";
import signaturedocument from "@/assets/signaturedocument.png";
import signatureperson from "@/assets/signatureperson.png";
import container from "@/assets/Container.png";
import containertwo from "@/assets/Container (1).png";
import containerthree from "@/assets/Container (2).png";
import logo from "@/assets/image 1.png";
import banner from "@/assets/banner.png";
import freame1 from "@/assets/Frame 31.png";
import freame2 from "@/assets/Frame 32.png";
import freame3 from "@/assets/Frame 33.png";
import footerImage from "@/assets/Component 3.png";
import { blogPosts } from "./data";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
  
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between ">
         
            <div className="flex items-center gap-3">
              <div className="py-2 rounded-full  from-blue-900 to-blue-700 flex items-center justify-center">
                <Image
                  src={logo}
                  alt="KSKA"
                  className="lg:w-[80px] lg:h-[80px] w-[50px] h-[50px] object-contain"
                />
              </div>
            </div>

         
            <nav className="hidden md:flex items-center gap-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-blue-900 font-medium transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-900 font-medium transition-colors"
              >
                About Us
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-blue-900 font-medium transition-colors"
              >
                Services
              </a>
              <a
                href="#insights"
                className="text-gray-700 hover:text-blue-900 font-medium transition-colors"
              >
                Industries
              </a>

              <a
                href="#Contact"
                className="text-gray-700 hover:text-blue-900 font-medium transition-colors"
              >
                Contact
              </a>
            </nav>

      
            <button className="hidden md:block bg-[#032246E8] text-white px-12 py-4   font-medium transition-colors">
              Get Started
            </button>

        
            <button className="md:hidden text-gray-900">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

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
       
              <h2 className="text-4xl lg:text-5xl xl:text-[60px]  text-[#032246]  lg:leading-[65px] leading-[45px]">
                An award winning venture capital and investment firm in Los
                Angeles set up in 2015.
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
            <div className="lg:px-16 px-4">
        
            </div>
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
      {/* What Makes Us Special Section */}
      <section className="py-20 lg:py-20">
        <div className="mb-6 flex justify-center">
          <span className="text-[16px] inline-flex items-center gap-2 px-4 py-1.5 rounded-full  border border-[#E8BF96] text-gray-800 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-[#E8BF96]"></span>
            Our Values
          </span>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-[60px]  text-gray-900 text-center mb-16">
            What makes us special.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts?.map((items, index) => (
              <div
                className="bg-[#F9F9F9] p-8  hover:shadow-lg transition-shadow flex flex-col justify-end gap-20"
                key={index}
              >
                {items?.image && (
                  <div className="relative h-[48px] w-[48px]">
                    <Image
                      src={items.image}
                      alt="Insight"
                      layout="fill"
                      className="  object-contain"
                    />
                  </div>
                )}
                <div>
                  {items?.title && (
                    <h3 className="text-[40px] font-semibold text-[#032246] mb-3">
                      {items.title}{" "}
                    </h3>
                  )}

                  <p className="text-gray-600 leading-relaxed text-[20px] ">
                    {items.discribtion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Expert Insights Section */}
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
      <footer
        id="contact"
        className="bg-[#032246] text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 text-9xl font-bold text-white">
            KSKA
          </div>
          <div className="absolute bottom-0 right-0 text-9xl font-bold text-white">
            KSKA
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
        
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className=" rounded-full bg-white/20 flex items-center justify-center">
                  <Image
                    src={logo}
                    alt="KSKA"
                    className="w-[128px] h-[131px] object-contain"
                  />
                </div>
              </div>
              <p className="text-blue-100 leading-relaxed">
                An award-winning venture capital and investment firm in Los
                Angeles set up in 2015.
              </p>
            </div>

    
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    Industries
                  </a>
                </li>

                <li>
                  <a
                    href="#services"
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#insights"
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

         
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Info</h3>
              <ul className="space-y-3 text-blue-100">
                <li>Ranchview Dr. Richardson, California 62639</li>
                <li>+1 234 567 8900</li>
                <li>cyberguard@gmail.com</li>
                <li>(406) 555-0120</li>
              </ul>
              <div className="flex gap-4 mt-6">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-800 pt-8 text-center text-blue-100">
            <p>© 2023 KSKA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
