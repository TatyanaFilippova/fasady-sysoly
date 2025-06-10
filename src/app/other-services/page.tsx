import Header from "@/components/header/Header";
import HomeBanner from "./../../components/bannerServices/HomeBanner";
import Footer from "@/components/footer/Footer";
import WriteToUs from "@/components/writeToUs/WriteToUs";
import { CMS_URL } from "@/constant";
import ContentList from "@/app/../components/contentList/ContentList";
import banner from "./img/homeBanner.png";

export default async function Home() {
  const data = await fetch(CMS_URL + "/api/services?populate=*", {
    next: {
      revalidate: 1,
    },
  });
  const posts = await data.json();
  return (
    <div>
      <Header />
      <HomeBanner
        title="Список дополнительных услуг"
        summary="С полным списком можете ознакомится в разделе цены"
        imgBanner={banner.src}
      />
      <ContentList data={posts.data} />
      <WriteToUs />
      <Footer />
    </div>
  );
}
