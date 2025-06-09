import Header from "@/components/header/Header";
import HomeBanner from "@/app/../components/homeBannerDetail/HomeBannerDetail";
import ProductList from "@/app/../components/productList/ProductList";
import Footer from "@/components/footer/Footer";
import { CMS_URL } from "@/constant";
import homeBanner from "./img/homeBanner.png";

export default async function Home() {
  const data = await fetch(
    CMS_URL + "/api/facades?populate=*&filters[type][$eq]=milling",
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
      <Footer />
    </div>
  );
}
