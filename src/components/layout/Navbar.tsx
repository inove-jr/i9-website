"use client";

import { useState } from "react";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import Image from "next/image"; // Importando o componente Image do next/imag
import Link from "next/link";

export function Navbar() {
  const links = [
    { name: "QUEM SOMOS", href: "#" },
    { name: "PORTFÓLIO", href: "#" },
    { name: "SERVIÇOS", href: "#" },
    { name: "PROCESSO SELETIVO", href: "#" },
    { name: "CONTATO", href: "#" },
  ];

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="bg-transparent">
      <nav className="relative flex items-center justify-between bg-transparent py-4">
        <Link className="text-3xl font-bold leading-none" title="logo" href="/">
          <Image
            src="/logoi9.png"
            alt="logo da empresa i9"
            className="h-9"
            width={36}
            height={36}
          />
        </Link>

        <ul className="absolute right-0 top-1/2 hidden -translate-x-1/3 -translate-y-1/2 lg:mx-auto lg:flex lg:w-auto lg:items-center lg:space-x-6">
          {links.map((link) => (
            <li key={link.name}>
              <a
                className="font-secondary text-sm font-semibold text-[#FFF] hover:text-[#CCC]"
                href={link.href}
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
          aria-label="menu"
          className="mx-3 my-2 flex h-[30px] w-8 cursor-pointer justify-self-end lg:hidden"
        >
          <IoIosMenu
            className={`${openMenu ? "hidden" : ""}`}
            color="#FFF"
            size="32px"
          />
          <IoMdClose
            className={`${openMenu ? "z-30" : "hidden"}`}
            color="#FFF"
            size="32px"
          />
        </button>
      </nav>

      <div
        className={`${
          openMenu ? "absolute" : "hidden"
        } inset-0 z-20 h-auto bg-blue-800 py-4 pt-20 text-center opacity-90 mix-blend-lighten backdrop-blur-3xl lg:hidden`}
      >
        <ul className="space-y-4">
          {links.map((link) => (
            <li key={link.name}>
              <a
                className="font-secondary text-sm font-semibold text-[#FFF] hover:text-[#CCC]"
                href={link.href}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
