"use client";

import Header from "@/components/header/Header";
import HomeBanner from "@/components/homeBanner/HomeBanner";
import FacadesMilling from "@/components/facadesMilling/FacadesMilling";
import FacadesIntegratedHandles from "@/components/facadesIntegratedHandles/FacadesIntegratedHandles";
import RadiusFacades from "@/components/radiusFacades/RadiusFacades";
import OtherServices from "@/components/otherServices/OtherServices";
import WhyUs from "@/components/whyUs/WhyUs";
import Contacts from "@/components/сontacts/Contacts";

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
      <Contacts />
    </>
  );
}
