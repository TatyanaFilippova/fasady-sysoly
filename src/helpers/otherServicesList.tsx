import img1 from "./../../src/app/otherServicesPage/img/image1.png";
import img2 from "./../../src/app/otherServicesPage/img/image2.png";
import img3 from "./../../src/app/otherServicesPage/img/image3.png";
import img4 from "./../../src/app/otherServicesPage/img/image4.png";
import img5 from "./../../src/app/otherServicesPage/img/image5.png";

export interface Services {
  img: string;
  title: string;
  description: string;
}

export const otherServicesList: Services[] = [
  {
    img: img1.src,
    title: "Покраска фасадов, и прочих изделий",
    description:
      "Покраска изделий из дерева, металла, пластика.\n" +
      "Покраска обратной стороны фасада",
  },
  {
    img: img2.src,
    title: "Покрытие пленкой ПВХ",
    description:
      "Покраска изделий из дерева, металла, пластика.\n" +
      "Покраска обратной стороны фасада",
  },
  {
    img: img3.src,
    title: "Выезд на замер",
    description: "Снятие фасадов, установка",
  },
  {
    img: img4.src,
    title: "Присадки под петли",
    description: "Снятие фасадов, установка",
  },
  {
    img: img5.src,
    title: "Доставка",
    description: "Бесплатно по Сыктывкару, можем доставить по республике Коми",
  },
];
