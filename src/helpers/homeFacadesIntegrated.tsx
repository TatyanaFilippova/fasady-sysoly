import facade from "../img/facade.png";
import facade3 from "../img/facade(2).png";
import facade2 from "../img/facade(3).png";
import facade4 from "../img/facade(4).png";

export interface Facade {
  img: string;
}

export const homeFacadesIntegrated: Facade[] = [
  {
    img: facade.src,
  },
  {
    img: facade2.src,
  },
  {
    img: facade3.src,
  },
  {
    img: facade4.src,
  },
];
