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


export const About = () =>{
   //conteudo dos cards 
   const data_cards = [
    {
        icon: <FaAngleDoubleUp size={30} color="#fe6c21" className="mr-1" />,
        title: "Missão",
        description: "Oferecer experiências práticas aos estudantes de Engenharia da Computação, desenvolvendo suas habilidades técnicas e pessoais."
    },
    {
        icon:  <SiTarget size={30} color="#fe6c21" className="mr-1" />,
        title: "Visão",
        description: "Ser referência na formação de profissionais de Engenharia da Computação, reconhecida pela excelência e impacto positivo na sociedade."
    },
    {
        icon: <FaRegStar size={30} color="#fe6c21" className="mr-1" />,
        title: "Valores",
        description: "Empreendedorismo, ética, proatividade, inovação, profissionalismo e colaboração em todos os projetos."
    },
  ]
  return(
      <section className="w-screen h-auto lg:h-screen flex justify-center items-center  p-2">
      <div className="bg-white p-2 rounded-lg  flex flex-col items-center lg:h-[54%] lg:flex-row w-[99%] ">
          {/* Mobile */}
          <div className="lg:hidden mb-2">
              <div className="flex flex-row items-center w-full ">
                  <span className="w-2 h-10 lg:h-14 bg-[#fe6c21] rounded-md mr-3"></span>
                  <h1 className="text-3xl md:text-4xl font-primary font-bold my-4">Quem Somos?</h1>
              </div>
              <p className="text-base md:text-lg text-wrap  w-full lg:w-[95%] text-justify font-secondary ">
              A Inove Jr. é a Empresa Júnior de Engenharia da Computação da Universidade Federal do Vale do São Francisco (UNIVASF), situada em Juazeiro, Bahia. Fundada com o objetivo de proporcionar aos estudantes uma vivência prática e empresarial. Realizamos consultorias, projetos e cursos, Preparando futuros engenheiros e contribuindo para a sociedade com serviços de qualidade.
              </p>
          </div>

          <img src="/inovejr-logo.png" alt="Team" className="w-full lg:w-[50%] h-[100%]  mx-2 mb-4 lg:mb-0 shadow-lg rounded-md" />
          <div className="w-full pl-2 pr-2 lg:w-[99%] gap-4 flex flex-col h-[100%]">
              {/* Desktop */}
              <div className="hidden lg:flex lg:flex-col h-auto justify-start items-start">
                <div className="flex flex-row items-start w-3/4 h-auto ">
                    <span className="w-2 h-8 lg:h-10 bg-[#fe6c21] my-2 rounded-md mr-3"></span>
                    <h1 className=" lg:text-4xl font-bold my-2 font-primary xl:text-5xl">Quem Somos?</h1>
                </div>
                <p className="text-base text-wrap pr-3 h-auto text-justify font-secondary ">
                A Inove Jr. é a Empresa Júnior de Engenharia da Computação da Universidade Federal do Vale do São Francisco (UNIVASF), situada em Juazeiro, Bahia. Fundada com o objetivo de proporcionar aos estudantes uma vivência prática e empresarial. Realizamos consultorias, projetos e cursos, Preparando futuros engenheiros e contribuindo para a sociedade com serviços de qualidade.
                </p>
              </div>
              <div className="flex flex-col lg:flex-row gap-3 mt-2 w-full items-center">

                  {
                    data_cards.map((e,index) =>(
                        <CardFull key={index} title= {e.title} description={e.description} > {e.icon} </CardFull>
                    ))
                  }
                    
              </div>
          </div>
      </div>
  </section>
  );
};

type Props ={
  title:string;
  description: string;
  children: ReactNode;
 
}
const  CardFull = ({title, description, children}:Props) =>{
                          
  return(
      <Card className="w-full md:w-1/2 min-h-[180px]   lg:max-w-[300px]  lg:w-auto drop-shadow-lg shadow-lg">
          <CardHeader className="flex flex-row justify-center items-center pt-3 pb-0 ">
               {children}
                <CardTitle className="text-center font-primary">{title}</CardTitle>
          </CardHeader>
          <CardContent className="py-3 px-2 items-center justify-center  h-[150px] ">
              <CardDescription className="py-3 text-black text-center h-full xl:text-base text-xs font-secondary p-auto">
                  {description}
              </CardDescription>
          </CardContent>
      </Card>
  )
}


