import Image from "next/image";
import React from "react";

interface ICardContactProps {
  image: string;
  value: string;
  desc: string;
}

const CardContact: React.FC<ICardContactProps> = ({ image, value, desc }) => {
  return (
    <div className="flex flex-col items-center gap-8">
      <div>
        <Image src={`/images${image}.svg`} alt="icon" width={60} height={60} />
      </div>
      <div className="text-6xl font-bold">{value}</div>
      <div className="text-[24px]">{desc}</div>
    </div>
  );
};

export default CardContact;
