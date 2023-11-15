/* eslint-disable @next/next/no-img-element */
import React from "react";

interface ICardNewsProps {
  data: any;
}

const CardNews: React.FC<ICardNewsProps> = ({ data }) => {
  return (
    <div className="rounded-2xl overflow-hidden text-left border-[1px] border-[#4830B0]">
      <div className="w-[370px] h-[200px]">
        {/* use img cause Image from next/iamge need to put url in next.config.js, but url image is not fixed */}
        <img
          src={data.urlToImage}
          alt="news"
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="px-[18px] py-[24px] flex justify-between items-start flex-col">
        <div className="text-2xl font-bold max-h-[2rem] text-ellipsis">
          {data?.author}
        </div>
        <div className="text-xs text-justify font-medium text-[#ADADAD] py-[16px] min-h-[8rem] text-ellipsis">
          {data?.description}
        </div>
        <div className="font-bold text-text-base text-[#A3A0AE] cursor-pointer hover:text-white">
          Learn More ...
        </div>
      </div>
    </div>
  );
};

export default CardNews;
