import Header from "@/components/header/Header";
import HomeBanner from "./../../components/homeBannerDetail/HomeBannerDetail";
import Content from "@/app/radius-facades/content/Content";
import Footer from "@/components/footer/Footer";
import Dimensions from "@/app/radius-facades/dimensions/Dimensions";
import WriteToUs from "@/components/writeToUs/WriteToUs";
import banner from "./img/banner.png";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Изготовление радиусных фасадов из МДФ | Индивидуальные криволинейные формы",
  description:
    "Производим радиусные фасады МДФ любой сложности. Идеальные плавные изгибы для эргономичных кухонь, шкафов и гарнитуров. Современные технологии обработки, точность до 1 мм.",
};

export default function Home() {
  return (
    <div>
      <Header />
      <HomeBanner
        title="Радиусные фасады"
        summary="Хотите кухню с изюминкой? Радиусные фасады – это просто! Пришлите чертеж, и мы рассчитаем стоимость уже сегодня."
        homeBanner={banner.src}
      />
      <Content />
      <Dimensions />
      <WriteToUs />
      <Footer />
    </div>
  );
}
