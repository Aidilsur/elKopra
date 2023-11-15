import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const navLinks = [
    {
      title: "About Us",
      url: "#about",
    },
    {
      title: "Product",
      url: "#product",
    },
    {
      title: "Project",
      url: "#project",
    },
    {
      title: "Career",
      url: "#career",
    },
    {
      title: "Contact Us",
      url: "#contact",
    },
  ];
  return (
    <header className="flex justify-between items-center absolute top-0 left-0 right-0 bg-transparent z-50 px-32 pt-[30px] text-white">
      <div>
        <Image src="/images/logo.svg" alt="logo" width={130} height={37} />
      </div>
      <nav>
        <ul className="flex items-center gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.url}
              className="text-[#D6D6D6] hover:text-white cursor-pointer font-bold"
            >
              <Link href={nav.url}>{nav.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
