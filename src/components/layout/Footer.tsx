import { FaPhone } from "react-icons/fa";
import { Clock4 } from "lucide-react";
import { FiMapPin } from "react-icons/fi";
import Image from "next/image";
import logo from "@/../public/logo_inovejr_semfundo.png";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="flex h-auto w-full flex-col items-start justify-around bg-blue-900 p-4 text-center font-secondary lg:h-80">
      <div className="flex w-full flex-1 flex-col items-center justify-around gap-6 lg:flex-row">
        <div className="flex h-3/4 w-full flex-col items-center justify-around gap-6 lg:w-1/2">
          <h1 className="text-2xl text-white lg:text-3xl">
            Venha inovar com a gente<span className="text-orange">!</span>
          </h1>
          {/** MOBILE */}
          <div className="flex h-3/4 w-full flex-col items-center justify-around gap-6 lg:hidden">
            <span className="flex flex-row items-center justify-center gap-2 text-base text-white-100">
              <FaPhone size={25} /> (87) 98835-6724
            </span>
            {/** Esse icone de mapa não respeita as leis do front end, tem vida propria, mesmo usando o icone lucide ou react icons */}
            <span className="flex flex-row items-start justify-start gap-0 text-base text-white-100">
              <FiMapPin className="mr-1 size-10 sm:size-8" />
              Av. Antônio C. Magalhães,510, Country Club, Juazeiro - BA,
              48902-300
            </span>
            <span className="flex flex-row items-center justify-center gap-2 text-base text-white-100">
              <Clock4 size={25} />
              Das 8h às 18h
            </span>
          </div>
          <div className="flex flex-row items-center justify-center gap-5">
            <Image src={logo} alt="logo" placeholder="empty" className="w-7" />
            <SocialLinks />
          </div>
        </div>
        {/* Desktop */}
        <div className="hidden h-3/4 w-full flex-col items-center justify-around gap-6 px-4 lg:flex lg:w-1/2">
          <span className="flex flex-row items-center justify-center gap-2 text-lg text-white-100">
            <FaPhone size={30} /> (87) 98835-6724
          </span>
          <span className="flex flex-row items-start justify-start gap-0 text-lg text-white-100">
            <FiMapPin size={35} />
            Av. Antônio C. Magalhães,510, Country Club, Juazeiro - BA, 48902-300
          </span>
          <span className="flex flex-row items-center justify-center gap-2 text-lg text-white-100">
            <Clock4 size={30} />
            Das 8h às 18h
          </span>
        </div>
      </div>
      <h6 className="mt-10 justify-center self-center font-secondary text-xs text-white sm:text-sm">
        © 2024 Todos os direitos reservados à Inove Jr.
      </h6>
    </footer>
  );
}
