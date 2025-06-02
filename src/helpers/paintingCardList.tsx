import img1 from "./../../src/app/otherServicesPage/img/image1.png";
import img2 from "./../../src/app/otherServicesPage/img/image2.png";
import img3 from "./../../src/app/otherServicesPage/img/image3.png";
import img4 from "./../../src/app/otherServicesPage/img/image4.png";

export interface PaintingCardListProps {
  img: string;
  title: string;
  description: string;
}

export const paintingCardList: PaintingCardListProps[] = [
  {
    img: img1.src,
    title: "Покраска обратной стороны фасада",
    description:
      "Покраска изделий из дерева, металла, пластика.\n" +
      "Покраска обратной стороны фасада",
  },
  {
    img: img2.src,
    title: "Перекрас крашенных фасадов",
    description:
      "Покраска изделий из дерева, металла, пластика.\n" +
      "Покраска обратной стороны фасада",
  },
  {
    img: img3.src,
    title: "Покраска карниза",
    description: "Снятие фасадов, установка",
  },
  {
    img: img4.src,
    title: "Покраска прочих изделий",
    description: "Снятие фасадов, установка",
  },
];
