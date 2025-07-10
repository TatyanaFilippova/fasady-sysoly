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
} from "./Product.styled";
import EmptyProduct from "@/components/productList/emptyProduct/EmptyProduct";

interface IProduct {
  title: string;
  imgProduct: string;
  imgList: string[];
  dimensions: string;
  height: string;
  thickness: string;
  width: string;
  color: string;
  summary?: string;
}

const Product = ({
  title,
  summary,
  imgProduct,
  dimensions,
  thickness,
  height,
  width,
  color,
  imgList,
}: IProduct) => {
  if (imgList.length === 0) {
    return (
      <EmptyProduct
        title={title}
        imgProduct={imgProduct}
        dimensions={dimensions}
        height={height}
        thickness={thickness}
        width={width}
        color={color}
        summary={summary}
      />
    );
  }
  return (
    <Wrapper>
      <div>
        <Title>{title}</Title>
        {summary && <Description>{summary}</Description>}
      </div>
      <Container $length={imgList.length.toString()}>
        <Shell $length={imgList.length.toString()}>
          <ImgBlock>
            <ImgProduct src={imgProduct} />
          </ImgBlock>
          <TextBlockShell>
            <TextBlock>
              <b>Размеры (min и max)</b>
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
            <TextDescription>{dimensions}</TextDescription>
            <TextDescription>
              <b>Цвет:</b>
            </TextDescription>
            <TextBlock>{color}</TextBlock>
          </TextBlockShell>
        </Shell>
        <WrapperImage $length={imgList.length.toString()}>
          {imgList.map((item) => (
            <Img src={item} key={item} $length={imgList.length.toString()} />
          ))}
        </WrapperImage>
      </Container>
    </Wrapper>
  );
};

export default Product;
