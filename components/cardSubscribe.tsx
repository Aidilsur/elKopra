"use client";

import React, { useState } from "react";
import Button from "./button";
import Image from "next/image";
import toast from "react-hot-toast";

const CardSubscribe = () => {
  const [email, setEmail] = useState("");

  const submitEmail = () => {
    if (email === "") {
      toast.error("please fill the email");
    } else {
      toast.success("email has been send");
    }
  };
  return (
    <div className="relative bg-[#6444F0] px-[53px] py-[70px] rounded-2xl flex justify-between items-center w-full z-0">
      <div className="w-[70%]">
        <h1 className="leading-10 text-[40px] font-bold mb-[16px]">
          Subscribe news letter
        </h1>
        <p className="text-[18px] mb-[20px]">
          Using a combination of technology, process and talents we focus on our
          users needs and help to accelerate their business at any scale. We
          deliver consistent
        </p>
        <div className="mb-[12px] input-email">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Input Email"
          />
          <Button onClick={submitEmail} title="Send Email" />
        </div>
        <p className="text-[12px]">
          This site is protected by reCAPTCHA and the Google{" "}
          <span className="underline">Privacy Policy</span> and{" "}
          <span className="underline">Privacy Policy</span> apply.
        </p>
      </div>
      <div className="absolute right-[-6rem] top-[-16rem] z-index-image">
        <Image src="/images/lady.png" alt="lady" width={910} height={607} />
      </div>
    </div>
  );
};

export default CardSubscribe;
