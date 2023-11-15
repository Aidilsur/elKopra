import React from "react";
import Button from "./button";
import Image from "next/image";

const BannerSection = () => {
  return (
    <section className="bg-[#4830B0] pt-[3rem] pb-[5rem] px-28">
      <div className="flex justify-between items-center text-white">
        <div className="w-[50%]">
          <h1 className="text-5xl font-bold">
            Generate <span className="text-[#EC9109]">New</span>
          </h1>
          <h1 className="text-5xl font-bold">Digital Cooperation</h1>
          <p className="mt-[21px] mb-[40px]">
            We design and build solutions by connecting ideas and technologhy to
            solve problems and get new ideas to business lifecycle.
          </p>
          <Button title="Get Started" />
        </div>
        <div className="">
          <div className="relative ">
            <Image
              src="/images/banner.png"
              alt="banner"
              width={700}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
