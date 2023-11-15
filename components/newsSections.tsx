"use client";

import React from "react";
import CardNews from "./cardNews";
import { useGetNews } from "@/hooks/getNews";
import Loading from "./loading";

const NewsSections = () => {
  const { data, isLoading } = useGetNews();
  const dataNews = data?.slice(0, 3);

  return (
    <section className="flex justify-center items-center my-[5rem] px-[131px]">
      <div>
        <div className="text-4xl mb-[58px] text-center">Latest News</div>
        <p className="text-[#A1A1A1] text-center">
          At elKopra we are committed to providing top-notcto cater to all your
          needs. Our team of dedicated professionals is passionate about
          delivering exceptional solutions that exceed expectations.
        </p>
        {isLoading ? (
          <div className="w-full py-24 flex items-center justify-center">
            <Loading />
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-10 pt-24">
            {dataNews.map((data: any, index: number) => (
              <CardNews key={index} data={data} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsSections;
