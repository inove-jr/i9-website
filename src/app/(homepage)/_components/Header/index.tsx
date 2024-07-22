import { Hero } from "./Hero";
import { Navbar } from "@/components/layout/Navbar";

export const Header = () => (
  <header className="p-4">
    <Navbar />
    <Hero />
  </header>
);
