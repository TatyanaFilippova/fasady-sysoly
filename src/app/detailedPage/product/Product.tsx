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

interface IProduct {
  title: string;
  description: string;
  imgProduct: string;
  imgList: string[];
  dimensions: string;
  height: string;
  thickness: string;
  width: string;
  color: string;
}

const Product = ({
  title,
  description,
  imgProduct,
  dimensions,
  thickness,
  height,
  width,
  color,
  imgList,
}: IProduct) => {
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
            <TextBlock>
              <b>Размеры (min и max):</b> {dimensions}
            </TextBlock>
            <TextBlock>
              <b>Толщина h:</b> {thickness}
            </TextBlock>
            <TextBlock>
              <b>Высота:</b> {height}
            </TextBlock>
            <TextBlock>
              <b>Ширина:</b> {width}
            </TextBlock>
            <TextDescription>
              Рекомендуется изготавливать в МДФ толщиной не менее 19 мм
            </TextDescription>
            <TextDescription>
              <b>Цвет:</b> {color}
            </TextDescription>
            <TextBlock>
              С каталога RAL, NCS, Wood Color, Color System или подбор
            </TextBlock>
            <TextBlock>Матовый или глянцевый</TextBlock>
          </TextBlockShell>
        </Shell>
        <WrapperImage>
          {imgList.map((item) => (
            <Img src={item} key={item} $length={imgList.length.toString()} />
          ))}
        </WrapperImage>
      </Container>
      <ButtonProduct>Заказать</ButtonProduct>
    </Wrapper>
  );
};

export default Product;
