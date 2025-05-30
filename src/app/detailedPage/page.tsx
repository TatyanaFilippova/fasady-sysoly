import Header from "@/components/header/Header";
import HomeBanner from "@/app/detailedPage/homeBanner/HomeBanner";
import ProductList from "@/app/detailedPage/productList/ProductList";
import Footer from "@/components/footer/Footer";

export default async function Home() {
  const data = await fetch("http://localhost:1337/api/facades?populate=*");
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
