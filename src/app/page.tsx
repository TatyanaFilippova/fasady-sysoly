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
import { CMS_URL } from "@/constant";

export default async function Home() {
  const data = await fetch(
    CMS_URL + "/api/services?populate=*&sort[0]=sort&sort[1]=title",
    {
      next: {
        revalidate: 1,
      },
    },
  );
  const posts = await data.json();
  return (
    <>
      <Header />
      <HomeBanner />
      <FacadesMilling />
      <FacadesIntegratedHandles />
      <RadiusFacades />
      <OtherServices data={posts.data} />
      <WhyUs />
      <WriteToUs />
      <Contacts />
      <Footer />
    </>
  );
}
