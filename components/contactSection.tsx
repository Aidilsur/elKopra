import React, { useState } from "react";
import CardContact from "./cardContact";
import { dataCardContact } from "@/utils/constant";
import CardSubscribe from "./cardSubscribe";

const ContactSection = () => {
  return (
    <section className="bg-[#4830B0] pt-[3rem] pb-[5rem] px-28">
      <div className="text-center mb-[88px]">
        <p className="text-white text-2xl font-medium">
          Lorem ipsum dolot amet lorem ipsum
        </p>
        <h1 className="text-white font-bold text-5xl mt-[32px]">
          Our <span className="text-[#EC9109]">Passion</span> What We Do.
        </h1>
      </div>
      <div className="grid grid-cols-3 w-full text-center text-white mb-[12rem]">
        {dataCardContact.map((data) => (
          <CardContact
            key={data.key}
            image={data.image}
            value={data.value}
            desc={data.desc}
          />
        ))}
      </div>
      <div className="text-white flex justify-center items-center">
        <CardSubscribe />
      </div>
    </section>
  );
};

export default ContactSection;
