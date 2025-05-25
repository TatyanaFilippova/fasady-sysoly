import Header from "@/components/header/Header";
import HomeBanner from "@/app/otherServicesPage/homeBanner/HomeBanner";
import Content from "@/app/otherServicesPage/content/Content";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <HomeBanner />
      <Content />
      <Footer />
    </div>
  );
}
