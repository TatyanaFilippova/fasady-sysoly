import Header from "@/components/header/Header";
import HomeBanner from "@/app/RadiusFacadesPage/homeBanner/HomeBanner";
import Content from "@/app/RadiusFacadesPage/content/Content";
import Footer from "@/components/footer/Footer";
import Dimensions from "@/app/RadiusFacadesPage/dimensions/Dimensions";

export default function Home() {
  return (
    <div>
      <Header />
      <HomeBanner />
      <Content />
      <Dimensions />
      <Footer />
    </div>
  );
}
