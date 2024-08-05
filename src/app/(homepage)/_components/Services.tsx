import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ReactNode } from "react";
import { TbWorldCheck, TbDeviceMobileCheck } from "react-icons/tb";
import { FiMonitor } from "react-icons/fi";
import { RiRobot3Line } from "react-icons/ri";
import { MdOutlineHandshake } from "react-icons/md";
import { BsFileEarmarkBarGraph } from "react-icons/bs";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Props = {
  title: string;
  description: string;
  children: ReactNode;
};

function CardFull({ title, description, children }: Props) {
  return (
    <Card className="min-h-[180px] w-full shadow-lg drop-shadow-lg lg:w-auto lg:max-w-[300px]">
      <CardHeader className="flex flex-row items-center justify-center pb-0 pt-3">
        {children}
        <CardTitle className="text-center font-primary text-base sm:text-2xl">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="h-[150px] items-center justify-center px-2 py-0 sm:py-3">
        <CardDescription className="p-auto h-full py-2 text-center font-secondary text-sm text-black md:text-xs xl:text-sm">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}

export function Services() {
  const dataCards = [
    {
      icon: TbWorldCheck,
      title: "Aplicações Web",
      description:
        "Desenvolvemos aplicações web inovadoras que atendem às necessidades específicas de cada cliente.",
    },
    {
      icon: FiMonitor,
      title: "Aplicações Desktop",
      description:
        "Criamos aplicações desktop robustas e personalizadas, otimizando a eficiência e a produtividade dos nossos clientes.",
    },
    {
      icon: TbDeviceMobileCheck,
      title: "Apps Mobile",
      description:
        "Desenvolvemos aplicativos móveis intuitivos e eficientes, proporcionando experiências excepcionais aos usuários finais.",
    },
    {
      icon: RiRobot3Line,
      title: "Automação",
      description:
        "Implementamos soluções de automação inteligentes que melhoram processos empresariais e reduzem custos operacionais.",
    },
    {
      icon: MdOutlineHandshake,
      title: "Consultoria em TI",
      description:
        "Oferecemos consultoria em TI para resolver desafios tecnológicos, com soluções estratégicas e personalizadas para cada cliente.",
    },
    {
      icon: BsFileEarmarkBarGraph,
      title: "Análise de Dados",
      description:
        "Realizamos análises de dados detalhadas, transformando informações em insights valiosos para decisões estratégicas.",
    },
  ];

  return (
    <section className="flex h-auto w-full flex-col items-center justify-center py-8">
      <div className="flex w-full flex-col items-center justify-center px-10 md:px-28 lg:px-48">
        <h2 className="font-primary text-2xl font-bold lg:text-5xl">
          NOSSOS SERVIÇOS
        </h2>
        <hr className="mb-12 mt-5 h-1 w-full border-0 bg-orange md:mb-24 md:w-1/2 lg:w-2/6" />

        <div className="hidden flex-wrap items-center justify-center gap-5 lg:flex">
          {dataCards.map(({ icon: Icon, title, description }) => (
            <CardFull key={title} title={title} description={description}>
              <Icon size={30} className="mr-1 text-orange" />
            </CardFull>
          ))}
        </div>

        <Carousel
          className="relative flex w-full items-center justify-center lg:hidden"
          opts={{
            align: "center",
          }}
        >
          <CarouselContent className="-ml-4 px-8 sm:px-24">
            {dataCards.map(({ icon: Icon, title, description }) => (
              <CarouselItem key={title} className="pl-4">
                <CardFull key={title} title={title} description={description}>
                  <Icon size={30} className="mr-1 text-orange" />
                </CardFull>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className="absolute -left-9 top-1/2 z-10 -translate-y-1/2 transform"
            variant="link"
          />
          <CarouselNext
            className="absolute -right-9 top-1/2 z-10 -translate-y-1/2 transform"
            variant="link"
          />
        </Carousel>
      </div>
    </section>
  );
}
