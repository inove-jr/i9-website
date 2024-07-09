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

export const QuemSomos = () => {
  return (
      <section className="w-screen h-auto lg:h-screen flex justify-center items-center bg-blue-500 p-4">
          <div className="bg-white p-2 rounded-lg shadow-lg flex flex-col items-center lg:flex-row w-[99%] ">

              {/* Mobile */}
              <div className="lg:hidden mb-2">
                  <div className="flex flex-row items-center w-full ">
                      <span className="w-2 h-10 lg:h-14 bg-[#fe6c21] rounded-md mr-3"></span>
                      <h1 className="text-3xl md:text-4xl font-bold my-4">Quem Somos?</h1>
                  </div>
                  <p className="text-lg text-wrap w-full lg:w-[95%] text-justify  ">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore aliquam nostrum perferendis minus quas nulla libero excepturi quo recusandae fugiat suscipit odio mollitia similique nobis quae expedita, iure at exercitationem.
                  </p>
              </div>

              <img src="/team.jpg" alt="Team" className="w-full md:w-full  lg:w-[450px] h-auto   mx-2 mb-4 lg:mb-0 " />
              <div className="w-full  pr-2 lg:w-[99%] gap-2 flex flex-col">
                   {/* Desktop */}
                  <div className="hidden lg:flex lg:flex-col">
                    <div className="flex flex-row items-center w-3/4  ">
                        <span className="w-2 h-10 lg:h-14 bg-[#fe6c21] rounded-md mr-3"></span>
                        <h1 className=" lg:text-3xl font-bold my-4 lg:mb-2">Quem Somos?</h1>
                    </div>
                    <p className="text-lg text-wrap pr-3 h-auto text-justify  ">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore aliquam nostrum perferendis minus quas nulla libero excepturi quo recusandae fugiat suscipit odio mollitia similique nobis quae expedita, iure at exercitationem.
                    </p>
                  </div>
                  <div className="flex flex-col lg:flex-row gap-3 mt-2 w-full md:items-center">
                      <Card className="w-full md:w-[350px] lg:w-auto shadow-lg ">
                          <CardHeader className="flex flex-row justify-center items-center ">
                              <FaAngleDoubleUp size={30} color="#fe6c21" className="mr-1" />
                              <CardTitle className="text-center ">Missão</CardTitle>
                          </CardHeader>
                          <CardContent className="p-3">
                              <CardDescription className="py-5 text-black text-center">
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem magnam quibusdam corrupti . Veritatis, obcaecati!
                              </CardDescription>
                          </CardContent>
                      </Card>
                      <Card className="w-full md:w-[450px] lg:w-auto shadow-lg">
                          <CardHeader className="flex flex-row justify-center items-center">
                              <SiTarget size={30} color="#fe6c21" className="mr-1" />
                              <CardTitle className="text-center">Visão</CardTitle>
                          </CardHeader>
                          <CardContent className="p-3">
                              <CardDescription className="py-5 text-black text-center">
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. eritatis, obcaecati!
                              </CardDescription>
                          </CardContent>
                      </Card>
                      <Card className="w-full md:w-[450px] lg:w-auto shadow-lg">
                          <CardHeader className="flex flex-row justify-center items-center">
                              <FaRegStar size={30} color="#fe6c21" className="mr-1" />
                              <CardTitle className="text-center">Valores</CardTitle>
                          </CardHeader>
                          <CardContent className="p-3">
                              <CardDescription className="py-5 text-black text-center">
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quorporis laborum molestias. Veritatis, obcaecati!
                              </CardDescription>
                          </CardContent>
                      </Card>
                  </div>
              </div>
          </div>
      </section>
  );
};
