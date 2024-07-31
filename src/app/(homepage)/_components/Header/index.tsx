import { Navbar } from "@/components/layout/Navbar";
import Image from "next/image";
import { Hero } from "./Hero";

// configuração das imagens de fundo da home page
function BackgroundImage() {
  return (
    <div className="absolute inset-0">
      <Image
        src="/background.png"
        layout="fill"
        objectFit="cover"
        alt="Background"
        className="-z-10"
      />
      <div className="absolute inset-0 bg-blue-800 opacity-90 mix-blend-lighten" />

      <img
        src="/meiologo.png"
        alt=""
        className="absolute bottom-0 z-0 w-full lg:left-12 lg:w-1/2"
      />
    </div>
  );
}

export function Header() {
  return (
    <header className="overflow-x-hidden px-10 py-4 lg:px-28 xl:px-40 2xl:px-44">
      <BackgroundImage />
      <Navbar />
      <Hero />
    </header>
  );
}
