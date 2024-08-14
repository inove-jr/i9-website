import { FaPhone } from "react-icons/fa";
import { Clock4 } from "lucide-react";
import { FiMapPin } from "react-icons/fi";
import Image from "next/image";
import logo from "public/logo_inovejr_semfundo.png";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="w-full bg-blue-900 p-4">
      <div className="my-10 flex flex-col items-center justify-around gap-10 md:flex-row md:items-stretch">
        <div className="flex flex-col justify-between">
          <h2 className="text-2xl text-white lg:text-3xl">
            Venha inovar com a gente<span className="text-orange">!</span>
          </h2>
          <div className="hidden gap-5 md:flex">
            <Image src={logo} alt="logo" placeholder="empty" className="w-7" />
            <SocialLinks />
          </div>
        </div>
        <div className="flex flex-col gap-7 text-left text-white">
          <div className="flex items-center gap-4">
            <FaPhone size={30} />
            <p>(87) 98835-6724</p>
          </div>
          <div className="flex items-center gap-3">
            <FiMapPin strokeWidth={2} size={30} />
            <ul>
              <li>Av. Antônio C. Magalhães,</li>
              <li>510, Country Club,</li>
              <li>Juazeiro - BA, 48902-300</li>
            </ul>
          </div>
          <div className="flex items-center gap-3">
            <Clock4 strokeWidth={2} size={30} />
            <p>Das 8h às 18h</p>
          </div>
        </div>
        <div className="my-7 flex gap-5 md:hidden">
          <Image src={logo} alt="logo" placeholder="empty" className="w-7" />
          <SocialLinks />
        </div>
      </div>
      <div className="text-center text-xs text-white sm:text-sm">
        <span>&copy; 2024 Todos os direitos reservados à Inove Jr.</span>
      </div>
    </footer>
  );
}
