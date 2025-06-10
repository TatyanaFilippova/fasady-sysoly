import Header from "@/components/header/Header";
import Prices from "@/app/prices/Prices";
import Footer from "@/components/footer/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Фасады Сысолы - цены на товары и услуги",
};

export default function Home() {
  return (
    <div>
      <Header />
      <Prices />
      <Footer />
    </div>
  );
}
