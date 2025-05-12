import {
  Container,
  Description,
  ImgProduct,
  Shell,
  Title,
  Wrapper,
  TextBlock,
  TextBlockShell,
  WrapperImage,
  ImgBlock,
  Img,
  TextDescription,
  ButtonProduct,
} from "./Product.styled";

import imageBlock from "../../../img/imageBlock.png";

interface IProduct {
  title: string;
  description: string;
  imgProduct: string;
}

const Product = ({ title, description, imgProduct }: IProduct) => {
  return (
    <Wrapper>
      <div>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Description>{description}</Description>
      </div>
      <Container>
        <Shell>
          <ImgBlock>
            <ImgProduct src={imgProduct} />
          </ImgBlock>

          <TextBlockShell>
            <TextBlock>Размеры (min и max): </TextBlock>
            <TextBlock>Толщина h: </TextBlock>
            <TextBlock>Высота:</TextBlock>
            <TextBlock>Ширина: </TextBlock>
            <TextDescription>
              Рекомендуется изготавливать в МДФ толщиной не менее 19 мм
            </TextDescription>
            <TextDescription>Цвет:</TextDescription>
            <TextBlock>
              С каталога RAL, NCS, Wood Color, Color System или подбор
            </TextBlock>
            <TextBlock>Матовый или глянцевый</TextBlock>
          </TextBlockShell>
        </Shell>
        <WrapperImage>
          <Img src={imageBlock.src} />
          <Img src={imageBlock.src} />
          <Img src={imageBlock.src} />
        </WrapperImage>
      </Container>
      <ButtonProduct>Заказать</ButtonProduct>
    </Wrapper>
  );
};

export default Product;
