import Header from "@/components/header/Header";
import HomeBanner from "@/app/detailedPage/homeBanner/HomeBanner";
import ProductList from "@/app/detailedPage/productList/ProductList";
import Footer from "@/components/footer/Footer";
import { CMS_URL } from "@/constant";

export default async function Home() {
  const data = await fetch(CMS_URL + "/api/facades?populate=*");
  console.log(data);
  const posts = await data.json();
  return (
    <div>
      <Header />
      <HomeBanner />
      <ProductList data={posts.data} />
      <Footer />
    </div>
  );
}
