/* import { About } from "./_components/About";
import { Contact } from "./_components/Contact";
import { Header } from "./_components/Header";
import { Portfolio } from "./_components/Portfolio";
import { Services } from "./_components/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Portfolio />
        <Services />
        <Contact />
      </main>
    </>
  );
} */

import Image from "next/image";
import { Settings } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function InDevelopment() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Image alt="Logo" src="/inovejr-logo.png" width={100} height={100} />
        <Separator className="bg-black" />
        <div className="flex gap-2">
          <Settings className="size-7 animate-spin stroke-[1.4]" />
          <span className="font-primary text-3xl">Em Desenvolvimento</span>
        </div>
      </div>
    </main>
  );
}
