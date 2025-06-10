import catamaran from "../img/catamaran.png";
import contik from "../img/contik.png";
import forest from "../img/forest.png";
import well from "../img/well.png";
import abascal from "../img/abascal.png";

export interface Facade {
  img: string;
  title: string;
}

export const homeFacadesList: Facade[] = [
  {
    img: catamaran.src,
    title: "Выборка",
  },
  {
    img: contik.src,
    title: "Степ",
  },
  {
    img: forest.src,
    title: "Лес",
  },
  {
    img: well.src,
    title: "Волна",
  },
  { img: abascal.src, title: "Капричо" },
];
