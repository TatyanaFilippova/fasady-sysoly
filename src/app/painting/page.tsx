import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import HomeBanner from "./../../components/bannerServices/HomeBanner";
import { CMS_URL } from "@/constant";
import ContentList from "@/app/../components/contentList/ContentList";
import Content from "./content/Content";
import WriteToUs from "@/components/writeToUs/WriteToUs";
import banner from "./img/banner.png";
import type { Metadata } from "next";
import { Wrapper } from "@/app/painting/styled";

export const metadata: Metadata = {
  title:
    "Покраска МДФ фасадов и не только в любой цвет RAL | Качественное покрытие эмалью",
  description:
    "Профессиональная покраска МДФ фасадов в любой цвет по каталогу RAL. Используем высококачественные эмали, обеспечивающие идеально гладкую поверхность и долговечность покрытия. Доступные цены, гарантия качества.",
};

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
      <HomeBanner
        title="Покраска фасадов и прочие услуги"
        summary="Профессиональная покраска любых поверхностей – идеальное покрытие для ваших изделий!"
        imgBanner={banner.src}
      />
      <Content />
      <Wrapper>
        <ContentList data={posts.data} />
      </Wrapper>
      <WriteToUs />
      <Footer />
    </>
  );
}
