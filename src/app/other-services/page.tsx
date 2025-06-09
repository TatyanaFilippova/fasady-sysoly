import Header from "@/components/header/Header";
import HomeBanner from "@/app/other-services/homeBanner/HomeBanner";
import Content from "@/app/other-services/content/Content";
import Footer from "@/components/footer/Footer";
import WriteToUs from "@/components/writeToUs/WriteToUs";

export default function Home() {
  return (
    <div>
      <Header />
      <HomeBanner />
      <Content />
      <WriteToUs />
      <Footer />
    </div>
  );
}
