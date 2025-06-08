import Header from "@/components/header/Header";
import HomeBanner from "@/app/radius-facades/homeBanner/HomeBanner";
import Content from "@/app/radius-facades/content/Content";
import Footer from "@/components/footer/Footer";
import Dimensions from "@/app/radius-facades/dimensions/Dimensions";

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
