"use client";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import Image from "next/image"; // Importando o componente Image do next/imag

export const Navbar = () => {
  let Links = [
    { name: "QUEM SOMOS", _href: "#" },
    { name: "PORTFÓLIO", _href: "#" },
    { name: "SERVIÇOS", _href: "#" },
    { name: "PROCESSO SELETIVO", _href: "#" },
    { name: "CONTATO", _href: "#" },
  ];

  let [openMenu, setOpenMenu] = useState(false);
  {
    /* A COR VERMELHA VAI SAIR ASSIM QUE FIZEMOS A HERO, ELA VIRA BG-TRANSPARENT */
  }
  return (
    <div className="bg-transparent">
      <nav className="relative flex items-center justify-between bg-red-900 py-4 xl:px-28 2xl:px-44">
        <a className="text-3xl font-bold leading-none" title="logo" href="#">
          <Image
            src="/logoi9.png"
            alt="logo da empresa i9"
            className="h-9"
            width={36}
            height={36}
          />
        </a>

        <ul
          className={`absolute right-0 top-1/2 hidden -translate-x-1/3 -translate-y-1/2 transform lg:mx-auto lg:flex lg:w-auto lg:items-center lg:space-x-6`}
        >
          {Links.map((link) => (
            <li key={link.name}>
              <a
                className="font-secondary text-sm font-semibold text-[#FFF] hover:text-[#CCC]"
                href={link._href}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          title="menu-mobile"
          onClick={() => setOpenMenu(!openMenu)}
          className="mx-3 my-2 flex h-[30px] w-8 cursor-pointer justify-self-end lg:hidden"
        >
          <IoIosMenu
            className={`${openMenu ? "hidden" : ""}`}
            color="#FFF"
            size={"32px"}
          />
          <IoMdClose
            className={`${openMenu ? "" : "hidden"}`}
            color="#FFF"
            size={"32px"}
          />
        </button>
      </nav>

      <div
        className={`${
          openMenu ? "block" : "hidden"
        } bg-transparent py-4 text-center lg:hidden`}
      >
        <ul className="space-y-4">
          {Links.map((link) => (
            <li key={link.name}>
              <a
                className="font-secondary text-sm font-semibold text-[#FFF] hover:text-[#CCC]"
                href={link._href}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
