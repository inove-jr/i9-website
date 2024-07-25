import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "./Hero";

export function Header() {
  return (
    <header className="p-4">
      <Navbar />
      <Hero />
    </header>
  );
}
