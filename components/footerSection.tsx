import Image from "next/image";
import React from "react";

const FooterSection = () => {
  const detailAddress = [
    {
      desc: "Jl. Terusan Jakarta No.76, Antapani Tengah, Bandung, Jawa Barat, 40291",
      image: "location",
    },
    {
      desc: "+62 356 7829 873",
      image: "call",
    },
    {
      desc: "elkopra@gmail.com",
      image: "mail",
    },
  ];
  return (
    <footer className="bg-[#6444F0] pt-[3rem] pb-[5rem] px-28 text-white">
      <div className="flex items-center justify-between">
        <div>
          <Image src="/images/logo.svg" alt="logo" width={172} height={49} />
          <ul className="flex flex-col items-start gap-4 mt-[35px]">
            {detailAddress.map((item, index) => (
              <li key={index} className="flex gap-3 items-center">
                <Image
                  src={`/images/${item.image}.svg`}
                  alt="icon"
                  width={24}
                  height={24}
                />
                <div className="max-w-[20rem]">{item.desc}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-16">
          <div>
            <h1 className="text-{22px] font-bold">Company</h1>
            <ul className="flex flex-col gap-4 mt-5">
              <li>About Us</li>
              <li>Career</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h1 className="text-{22px] font-bold">Product</h1>
            <ul className="flex flex-col gap-4 mt-5">
              <li>ElKopra</li>
              <li>ElRaga</li>
              <li>ElResto</li>
            </ul>
          </div>
          <div>
            <h1 className="text-{22px] font-bold">Product</h1>
            <ul className="flex gap-4 mt-5">
              <li>
                <Image
                  width={24}
                  height={24}
                  src="/images/linkedin.svg"
                  alt="icon"
                />
              </li>
              <li>
                <Image
                  width={24}
                  height={24}
                  src="/images/instagram.svg"
                  alt="icon"
                />
              </li>
              <li>
                <Image
                  width={24}
                  height={24}
                  src="/images/facebook.svg"
                  alt="icon"
                />
              </li>
              <li>
                <Image
                  width={24}
                  height={24}
                  src="/images/youtube.svg"
                  alt="icon"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
