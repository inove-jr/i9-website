/* eslint-disable @next/next/no-img-element */
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// icons Missão, Valores e Visão
import { FaAngleDoubleUp } from "react-icons/fa";
import { SiTarget } from "react-icons/si";
import { FaRegStar } from "react-icons/fa";
import { ReactNode } from "react";

export const About = () => {
  //conteudo dos cards
  const data_cards = [
    {
      icon: FaAngleDoubleUp,
      title: "Missão",
      description:
        "Oferecer experiências práticas aos estudantes de Engenharia da Computação, desenvolvendo suas habilidades técnicas e pessoais.",
    },
    {
      icon: SiTarget,
      title: "Visão",
      description:
        "Ser referência na formação de profissionais de Engenharia da Computação, reconhecida pela excelência e impacto positivo na sociedade.",
    },
    {
      icon: FaRegStar,
      title: "Valores",
      description:
        "Empreendedorismo, ética, proatividade, inovação, profissionalismo e colaboração em todos os projetos.",
    },
  ];
  return (
    <section className="flex h-auto w-screen items-center justify-center lg:h-screen">
      <div className="flex w-[100%] flex-col items-center rounded-lg p-4 lg:h-[54%] lg:flex-row lg:px-4 xl:px-28 2xl:px-44">
        {/* Mobile */}
        <div className="mb-2 lg:hidden">
          <div className="flex w-full flex-row items-center">
            <span className="mr-3 h-10 w-2 rounded-md bg-orange lg:h-14"></span>
            <h1 className="my-4 font-primary text-3xl font-bold md:text-4xl">
              Quem Somos?
            </h1>
          </div>
          <p className="mt-2 w-full text-wrap text-justify font-secondary text-base md:text-lg lg:w-[95%]">
            A Inove Jr. é a Empresa Júnior de Engenharia da Computação da
            Universidade Federal do Vale do São Francisco (UNIVASF), situada em
            Juazeiro, Bahia. Temos como objetivo proporcionar aos estudantes uma
            vivência prática e empresarial. Realizamos consultorias, projetos e
            cursos, Preparando futuros engenheiros e contribuindo para a
            sociedade com serviços de qualidade.{" "}
            <a className="text-orange" href="">
              Saiba Mais
            </a>
          </p>
        </div>

        <img
          src="/team.jpg"
          alt="Team"
          className="mx-2 mb-4 h-[100%] w-full rounded-md shadow-lg lg:mb-0 lg:w-[50%]"
        />
        <div className="flex h-[100%] w-full flex-col gap-4 pl-2 pr-2">
          {/* Desktop */}
          <div className="hidden h-auto items-start justify-start lg:flex lg:flex-col">
            <div className="flex h-auto w-3/4 flex-row items-start">
              <span className="my-2 mr-3 h-8 w-2 rounded-md bg-orange lg:h-10"></span>
              <h1 className="my-2 font-primary font-bold lg:text-4xl xl:text-5xl">
                Quem Somos?
              </h1>
            </div>
            <p className="h-auto text-wrap text-justify font-secondary text-base">
              A Inove Jr. é a Empresa Júnior de Engenharia da Computação da
              Universidade Federal do Vale do São Francisco (UNIVASF), situada
              em Juazeiro, Bahia. Temos como objetivo proporcionar aos
              estudantes uma vivência prática e empresarial. Realizamos
              consultorias, projetos e cursos, Preparando futuros engenheiros e
              contribuindo para a sociedade com serviços de qualidade.{" "}
              <a className="text-orange" href="">
                Saiba Mais
              </a>
            </p>
          </div>
          <div className="mt-2 flex w-full flex-col items-center gap-3 lg:flex-row">
            {data_cards.map(({ icon: Icon, title, description }, index) => (
              <CardFull key={index} title={title} description={description}>
                <Icon size={30} className="mr-1 text-orange" />
              </CardFull>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

type Props = {
  title: string;
  description: string;
  children: ReactNode;
};
const CardFull = ({ title, description, children }: Props) => {
  return (
    <Card className="min-h-[180px] w-full shadow-lg drop-shadow-lg md:w-1/2 lg:w-auto lg:max-w-[300px]">
      <CardHeader className="flex flex-row items-center justify-center pb-0 pt-3">
        {children}
        <CardTitle className="text-center font-primary">{title}</CardTitle>
      </CardHeader>
      <CardContent className="h-[150px] items-center justify-center px-2 py-3">
        <CardDescription className="p-auto h-full py-2 text-center font-secondary text-sm text-black md:text-xs xl:text-sm">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};
