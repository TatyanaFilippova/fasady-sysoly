"use client";
import Header from "@/components/header/Header";
import HomeBanner from "@/app/detailedPage/homeBanner/HomeBanner";
import ProductList from "@/app/detailedPage/productList/ProductList";

export default function Home() {
  return (
    <>
      <Header />
      <HomeBanner />
      <ProductList />
    </>
  );
}
