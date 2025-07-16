import Header from "@/components/header/Header";
import HomeBanner from "./../../components/bannerServices/HomeBanner";
import Footer from "@/components/footer/Footer";
import WriteToUs from "@/components/writeToUs/WriteToUs";
import { CMS_URL } from "@/constant";
import ContentList from "@/app/../components/contentList/ContentList";
import banner from "./img/homeBanner.png";
import type { Metadata } from "next";
import { Wrapper } from "@/app/other-services/styled";

export const metadata: Metadata = {
  title:
    "Дополнительная обработка мебельных фасадов | Качественные решения под ключ",
  description:
    "Комплексная подготовка мебельных фасадов из МДФ: точный раскрой, обработка кромок, декоративная фрезеровка, финишная отделка. Работаем с любыми объемами, индивидуальный подход к каждому заказу.",
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
    <div>
      <Header />
      <HomeBanner
        title="Список дополнительных услуг"
        summary="С полным списком можете ознакомится в разделе цены"
        imgBanner={banner.src}
      />
      <Wrapper>
        <ContentList data={posts.data} />
      </Wrapper>
      <WriteToUs />
      <Footer />
    </div>
  );
}
