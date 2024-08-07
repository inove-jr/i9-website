import { SocialLinks } from "@/components/layout/SocialLinks";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="relative flex h-screen flex-col justify-start md:py-16 lg:justify-center">
      <div className="relative z-10 my-6 flex w-full flex-col items-center justify-center px-5 md:px-10 lg:w-1/2 lg:items-start lg:justify-start lg:px-0">
        <h1 className="text-center font-secondary text-4xl font-semibold text-white-200 md:text-5xl lg:text-start lg:text-6xl">
          <span className="pointer-events-none font-secondary lg:underline lg:decoration-orange lg:decoration-4">
            Inove
          </span>{" "}
          seu negócio
          <span className="pointer-events-none text-orange">.</span>
        </h1>
        <hr className="mt-5 h-1 w-2/3 border-0 bg-orange lg:hidden" />
      </div>

      <p className="relative z-10 my-6 w-full text-center font-secondary text-sm text-white-200 sm:text-xl md:text-2xl lg:w-1/2 lg:text-justify">
        Na I9, estamos comprometidos em entregar resultados excepcionais. Seja
        no desenvolvimento de sites, aplicativos ou na criação de dashboards,
        nossa equipe está preparada para transformar suas ideias em realidade.
        Se você busca inovação e eficiência, está no lugar certo.
      </p>
      <div className="relative z-10 flex h-16 flex-col items-center justify-between gap-5 sm:mt-14 sm:gap-10 md:mt-0 lg:w-1/2 lg:flex-row lg:gap-0">
        <Button
          variant="outline"
          className="rounded-md border-none bg-orange px-4 py-3 font-medium hover:bg-orange"
        >
          CONTATE-NOS
        </Button>
        <SocialLinks />
      </div>
    </div>
  );
}
