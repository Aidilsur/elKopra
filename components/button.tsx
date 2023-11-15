import React from "react";

type TButton = {
  title: string;
  onClick?: () => void;
};

const Button: React.FC<TButton> = ({ title, onClick }) => {
  return (
    <button
      className="bg-[#EC9109] text-white rounded-full py-2.5 px-5 cursor-pointer"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
