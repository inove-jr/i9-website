import { Hero } from "./Hero";
import { Navbar } from "@/components/layout/Navbar";

export const Header = () => (
  <header className="p-4 bg-sky-400">
    <span className="text-2xl">Header</span>
    <Navbar />
    <Hero />
  </header>
)
