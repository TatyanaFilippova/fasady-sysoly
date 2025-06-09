"use client";

import Header from "@/components/header/Header";
import HomeBanner from "@/components/homeBanner/HomeBanner";
import FacadesMilling from "@/components/facadesMilling/FacadesMilling";
import FacadesIntegratedHandles from "@/components/facadesIntegratedHandles/FacadesIntegratedHandles";
import RadiusFacades from "@/components/radiusFacades/RadiusFacades";
import OtherServices from "@/components/otherServices/OtherServices";
import WhyUs from "@/components/whyUs/WhyUs";
import Contacts from "@/components/сontacts/Contacts";
import Footer from "@/components/footer/Footer";
import WriteToUs from "@/components/writeToUs/WriteToUs";

export default function Home() {
  return (
    <>
      <Header />
      <HomeBanner />
      <FacadesMilling />
      <FacadesIntegratedHandles />
      <RadiusFacades />
      <OtherServices />
      <WhyUs />
      <WriteToUs />
      <Contacts />
      <Footer />
    </>
  );
}
