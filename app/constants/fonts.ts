import { Bad_Script, Chau_Philomene_One, Ubuntu } from "next/font/google";

export const fontMain = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-main",
  display: "swap",
});

export const fontSecondary = Bad_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-secondary",
  display: "swap",
});

export const fontHeader = Chau_Philomene_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-header",
  display: "swap",
});
