import { About } from "./_components/About";
import { Contact } from "./_components/Contact";
import { Header } from "./_components/Header";
import { Portfolio } from "./_components/Portfolio";
import { Services } from "./_components/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main className='flex flex-col items-center justify-center'>
        <About />
        <Portfolio />
        <Services />
        <Contact />
      </main>
    </>
  );
}
