import vk from "../img/vk.png";
import whatsapp from "../img/whatsapp.png";
import phone from "../img/phone.png";

interface iProps {
  img: string;
  title: string;
  summary: string;
  link: string;
}

export const iconList: iProps[] = [
  {
    img: vk.src,
    title: "Группа Вконтакте",
    summary: "https://m.vk.com/centrcveta",
    link: "https://vk.com/centrcveta?from=groups",
  },
  {
    img: whatsapp.src,
    title: "WhatsApp",
    summary: "https://wa.me/89048686163",
    link: "",
  },
  {
    img: phone.src,
    title: "Позвоните нам",
    summary: "8 (8212) 569-884",
    link: "",
  },
];
