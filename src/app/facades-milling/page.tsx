import Header from "@/components/header/Header";
import HomeBanner from "@/app/../components/homeBannerDetail/HomeBannerDetail";
import ProductList from "@/app/../components/productList/ProductList";
import Footer from "@/components/footer/Footer";
import { CMS_URL } from "@/constant";
import homeBanner from "./img/homeBanner.png";
import WriteToUs from "@/components/writeToUs/WriteToUs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Фрезеровка МДФ фасадов – Современные мебельные решения | Каталог с фото",
  description:
    "Фрезеровка МДФ фасадов позволяет создать объемные 3D-панели для кухни, шкафов и гардеробных. Широкий выбор дизайнов, покраска в любой цвет RAL. Бесплатный дизайн-проект!",
};

export default async function Home() {
  const data = await fetch(
    CMS_URL +
      "/api/facades?populate=*&filters[type][$eq]=milling&sort[0]=sort&sort[1]=title",
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
        title="Прямые фасады и
варианты фрезеровок"
        homeBanner={homeBanner.src}
        summary="Четкие линии, ровные грани, идеальная покраска. Выглядит дорого, служит долго, ухаживать легко."
      />
      <ProductList data={posts.data} />
      <WriteToUs />
      <Footer />
    </div>
  );
}
