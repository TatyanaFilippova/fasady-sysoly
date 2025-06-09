import vk from "../img/vk.png";
import whatsapp from "../img/whatsapp.png";
import phone from "../img/phone.png";

interface iProps {
  img: string;
  title: string;
  summary: string;
}

export const iconList: iProps[] = [
  {
    img: vk.src,
    title: "Группа Вконтакте",
    summary: "https://m.vk.com/centrcveta",
  },
  {
    img: whatsapp.src,
    title: "WhatsApp",
    summary: "https://wa.me/89048686163",
  },
  {
    img: phone.src,
    title: "Позвоните нам",
    summary: "8 (8212) 569-884",
  },
];
