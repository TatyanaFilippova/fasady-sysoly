"use client";

import Header from "@/components/header/Header";
import Prices from "@/app/prices/Prices";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Prices />
      <Footer />
    </div>
  );
}
