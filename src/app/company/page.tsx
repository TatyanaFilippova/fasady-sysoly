import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import HomeBanner from "@/app/company/homeBanner/HomeBanner";
import Connection from "@/app/company/connection/Connection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "О компании Фасады Сысолы | Собственное производство мебельных фасадов из МДФ",
  description:
    "Фасады Сысолы» – это надежный производитель мебельных фасадов из МДФ. Мы предлагаем широкий ассортимент: покрашенные, пленочные, фрезерованные и радиусные фасады.",
};

export default function Home() {
  return (
    <>
      <Header />
      <HomeBanner />
      <Connection />
      <Footer />
    </>
  );
}
