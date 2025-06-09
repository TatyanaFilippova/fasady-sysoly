import Header from "@/components/header/Header";
import HomeBanner from "@/app/../components/homeBannerDetail/HomeBannerDetail";
import ProductList from "@/app/../components/productList/ProductList";
import Footer from "@/components/footer/Footer";
import { CMS_URL } from "@/constant";
import homeBanner from "./img/homeBanner.png";
import WriteToUs from "@/components/writeToUs/WriteToUs";

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
