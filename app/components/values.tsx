import React from "react";

import Image from "next/image";
import { blogPosts } from "../data";

function Values() {
  return (
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
              {items?.image && items.image !== "" && (
                <div className="relative h-[48px] w-[48px]">
                  <Image
                    src={items.image}
                    alt={items.title || "Insight"}
                    fill
                    className="object-contain"
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
  );
}

export default Values;
