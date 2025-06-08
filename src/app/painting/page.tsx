import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import HomeBanner from "@/app/painting/homeBanner/HomeBanner";
import { CMS_URL } from "@/constant";
import ContentList from "@/app/painting/contentList/ContentList";
import Content from "@/app/painting/content/Content";

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
      <HomeBanner />
      <Content />
      <ContentList data={posts.data} />
      <Footer />
    </>
  );
}
