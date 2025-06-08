import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import HomeBanner from "@/app/company/homeBanner/HomeBanner";
import Connection from "@/app/company/connection/Connection";

export default function Home() {
  return (
    <>
      <Header />
      <HomeBanner />
      <Connection />
      <Footer />
    </>
  );
}
