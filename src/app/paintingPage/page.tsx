import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import HomeBanner from "@/app/paintingPage/homeBanner/HomeBanner";
import Content from "@/app/paintingPage/content/Content";

export default function Home() {
  return (
    <>
      <Header />
      <HomeBanner />
      <Content />
      <Footer />
    </>
  );
}
