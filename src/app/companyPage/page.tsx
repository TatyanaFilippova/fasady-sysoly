import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import HomeBanner from "@/app/companyPage/homeBanner/HomeBanner";
import Connection from "@/app/companyPage/connection/Connection";

export default function Home() {
  return (
    <div>
      <Header />
      <HomeBanner />
      <Connection />
      <Footer />
    </div>
  );
}
