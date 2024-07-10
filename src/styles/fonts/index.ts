import { Kanit } from "next/font/google";
import localFont from "next/font/local";

export const kanit = Kanit({
  weight: ["200", "400", "500", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-kanit",
});

export const prime = localFont({
  src: [
    {
      path: "./Prime-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Prime-Light.ttf",
      weight: "200",
      style: "normal",
    },
  ],
  variable: "--font-prime",
});
