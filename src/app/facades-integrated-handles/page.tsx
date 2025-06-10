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
    "Фасады МДФ с интегрированными ручками | Современный дизайн без выступающих элементов",
  description:
    "Изготавливаем фасады МДФ с интегрированными ручками для современной мебели. Чистые линии, безопасность для детей, удобство в уходе. Индивидуальные размеры и дизайн.",
};

export default async function Home() {
  const data = await fetch(
    CMS_URL + "/api/facades?populate=*&filters[type][$eq]=handle",
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
        title="Фасады с интегрированной ручкой"
        summary="Минимализм и практичность в одном решении – никаких выступающих ручек, только плавные линии и безупречная функциональность. Идеально для семьей с детьми и любителей лаконичного дизайна."
        homeBanner={homeBanner.src}
      />
      <ProductList data={posts.data} />
      <WriteToUs />
      <Footer />
    </div>
  );
}
