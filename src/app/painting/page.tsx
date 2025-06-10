import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import HomeBanner from "./../../components/bannerServices/HomeBanner";
import { CMS_URL } from "@/constant";
import ContentList from "@/app/../components/contentList/ContentList";
import Content from "./content/Content";
import WriteToUs from "@/components/writeToUs/WriteToUs";
import banner from "./img/banner.png";

export default async function Home() {
  const data = await fetch(CMS_URL + "/api/paintings?populate=*", {
    next: {
      revalidate: 1,
    },
  });
  const posts = await data.json();
  return (
    <>
      <Header />
      <HomeBanner
        title="Покраска фасадов и прочих изделий"
        summary="Профессиональная покраска любых поверхностей – идеальное покрытие для ваших изделий!"
        imgBanner={banner.src}
      />
      <Content />
      <ContentList data={posts.data} />
      <WriteToUs />
      <Footer />
    </>
  );
}
