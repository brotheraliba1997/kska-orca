import React from "react";
import Image from "next/image";
import logo from "@/assets/KSKA Logo-01[1].png";
import Link from "next/link";

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-3">
            <div className="py-2 rounded-full  from-blue-900 to-blue-700 flex items-center justify-center">
             <div className="relative w-[120px] h-[80px] lg:w-[140px] lg:h-[80px]">
             <Image
                src={logo}
                alt="KSKA"
                className=" object-cover"
                fill
              />

             </div>
             
              
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-900 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="text-gray-700 hover:text-blue-900 font-medium transition-colors"
            >
              About Us
            </Link>
            <Link
              href="#services"
              className="text-gray-700 hover:text-blue-900 font-medium transition-colors"
            >
              Services
            </Link>

            
            <Link
              href="/indestries"
              className="text-gray-700 hover:text-blue-900 font-medium transition-colors"
            >
              Industries
            </Link>

            <Link
              href="/contact-us"
              className="text-gray-700 hover:text-blue-900 font-medium transition-colors"
            >
              Contact
            </Link>
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
  );
}

export default Header;
