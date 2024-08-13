"use client";

import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { type CarouselApi } from "@/components/ui/carousel";

export function Portfolio() {
  const items = [
    {
      index: 0,
      imgSrc: "/team.jpg",
      title: "Projeto 1",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...",
    },
    {
      index: 1,
      imgSrc: "/team.jpg",
      title: "Projeto 2",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...",
    },
    {
      index: 2,
      imgSrc: "/team.jpg",
      title: "Projeto 3",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search",
    },
    {
      index: 3,
      imgSrc: "/team.jpg",
      title: "Projeto 4",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search",
    },
    {
      index: 4,
      imgSrc: "/team.jpg",
      title: "Projeto 5",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search",
    },
    // Adicione mais projetos conforme necessário
  ];

  // Estados para controlar o item ativo em cada carrossel
  // Sim, tem dois carroseis mas você só vê um, processe 2 veja um :D
  const [activeIndexMobile, setActiveIndexMobile] = useState(0);
  const [activeIndexDesktop, setActiveIndexDesktop] = useState(0);

  const [carouselApiMobile, setCarouselApiMobile] =
    useState<CarouselApi | null>(null);
  const [carouselApiDesktop, setCarouselApiDesktop] =
    useState<CarouselApi | null>(null);

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (carouselApiMobile) {
      const updateActiveIndex = () => {
        setActiveIndexMobile(carouselApiMobile.selectedScrollSnap());
      };

      carouselApiMobile.on("select", updateActiveIndex);

      return () => {
        carouselApiMobile.off("select", updateActiveIndex);
      };
    }
    // Retornar undefined explicitamente para garantir que sempre haja um retorno
    return undefined;
  }, [carouselApiMobile]);

  useEffect(() => {
    if (carouselApiDesktop) {
      const updateActiveIndex = () => {
        setActiveIndexDesktop(carouselApiDesktop.selectedScrollSnap());
      };

      carouselApiDesktop.on("select", updateActiveIndex);

      return () => {
        carouselApiDesktop.off("select", updateActiveIndex);
      };
    }
    // Retornar undefined explicitamente para garantir que sempre haja um retorno
    return undefined;
  }, [carouselApiDesktop]);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreenSize(); // Verifica o tamanho da tela quando o componente é montado

    window.addEventListener("resize", checkScreenSize); // Adiciona o event listener para o resize

    return () => {
      window.removeEventListener("resize", checkScreenSize); // Remove o event listener quando o componente é desmontado
    };
  }, []);

  const activeIndex = isDesktop ? activeIndexDesktop : activeIndexMobile;

  return (
    <section className="flex h-auto w-full flex-col items-center justify-center bg-blue-900 p-4 px-2 font-primary text-white-100 sm:px-4 lg:h-screen lg:items-start lg:px-4 xl:px-28 2xl:px-44">
      <h2 className="decorated-border mt-16 w-full px-4 text-start text-3xl font-bold md:text-4xl">
        PORTFÓLIO
      </h2>

      {/* Carrossel Mobile */}
      <Carousel
        orientation="horizontal"
        className="relative h-auto w-full flex-col items-center justify-center rounded-lg pt-6 lg:hidden"
        opts={{
          align: "center",
          loop: true,
        }}
        setApi={setCarouselApiMobile}
      >
        <CarouselContent className="-ml-4 h-full px-8 sm:px-24">
          {items.map((item, index) => (
            <CarouselItem
              key={item.index}
              className=""
              onClick={() => setActiveIndexMobile(index)}
            >
              <div className="px-0 py-2">
                <Card className="w-full border-none bg-transparent px-0">
                  <CardContent className="flex items-center justify-center px-0">
                    <img
                      src={item.imgSrc}
                      alt={`Imagem do projeto ${index + 1}`}
                      className="h-[300px] w-[390px] rounded-md object-cover shadow-lg drop-shadow-lg"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          className="left-0 z-10 bg-black-600 text-white sm:left-4"
          variant="link"
        />
        <CarouselNext
          className="right-0 z-10 bg-black-600 font-bold text-white sm:right-4"
          variant="destructive"
        />
      </Carousel>

      <div className="mt-6 flex h-4/5 flex-row justify-start">
        <div className="flex size-full flex-row rounded-lg bg-orange p-5 lg:w-3/4">
          <div className="flex flex-row">
            <img
              src={items[activeIndex].imgSrc}
              alt={items[activeIndex].title}
              className="hidden rounded-md shadow-lg drop-shadow-lg lg:flex lg:h-3/4 2xl:h-full"
            />

            <div className="relative ml-5 flex size-full flex-col items-center justify-start gap-5 lg:items-start lg:justify-start">
              <h6 className="mt-5 font-secondary text-3xl font-medium text-blue-900">
                {items[activeIndex].title}
              </h6>
              <p className="text-center font-secondary text-lg text-blue-900 md:text-base lg:text-start">
                {items[activeIndex].description}
              </p>
              <button
                type="button"
                className="rounded-lg bg-white-100 px-10 py-4 font-secondary text-lg font-medium text-blue-900 drop-shadow-2xl lg:absolute lg:bottom-0 lg:right-0"
              >
                SAIBA MAIS
              </button>
            </div>
          </div>
        </div>

        {/* Carrossel Desktop */}
        <Carousel
          orientation="vertical"
          className="relative ml-5 hidden h-auto w-1/4 flex-col items-center justify-center rounded-lg bg-orange pb-10 pt-6 lg:flex"
          opts={{
            align: "start",
            loop: true,
          }}
          setApi={setCarouselApiDesktop}
        >
          <CarouselContent className="-mt-1 h-full">
            {items.map((item, index) => (
              <CarouselItem
                key={item.index}
                className="pt-1 md:basis-1/4"
                onClick={() => setActiveIndexDesktop(index)}
              >
                <div className="p-1">
                  <Card>
                    <CardContent className="flex items-center justify-center p-6">
                      <img
                        src={item.imgSrc}
                        alt={`Imagem do projeto ${index + 1}`}
                        className="relative h-[200px] w-[290px] rounded-md object-cover shadow-lg drop-shadow-lg"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className="top-0 z-10 w-8 rounded-none bg-red-50 text-black md:hidden"
            variant="secondary"
          />
          <CarouselNext
            className="absolute bottom-1 z-10 font-bold text-white"
            variant="link"
          />
          <div className="absolute bottom-0 z-0 h-[40px] w-full rounded-b-lg bg-black-600 opacity-75" />
        </Carousel>
      </div>
    </section>
  );
}
