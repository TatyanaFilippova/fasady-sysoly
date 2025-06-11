import {
  Container,
  Description,
  ImgProduct,
  Shell,
  Title,
  Wrapper,
  TextBlock,
  TextBlockShell,
  TextDescription,
  ButtonProduct,
  TitleMobile,
  WrapperMobile,
  WrapperButton,
} from "./EmptyProduct.styled";

interface IProduct {
  title: string;
  imgProduct: string;
  dimensions: string;
  height: string;
  thickness: string;
  width: string;
  color: string;
  summary?: string;
}

const EmptyProduct = ({
  title,
  summary,
  imgProduct,
  dimensions,
  thickness,
  height,
  width,
  color,
}: IProduct) => {
  return (
    <Wrapper>
      <TitleMobile>{title}</TitleMobile>
      <WrapperMobile>
        <ImgProduct src={imgProduct} />
        <Container>
          <Shell>
            <Title>{title}</Title>
            {summary && <Description>{summary}</Description>}
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
        </Container>
      </WrapperMobile>
      <WrapperButton>
        <ButtonProduct>Заказать</ButtonProduct>
      </WrapperButton>
    </Wrapper>
  );
};

export default EmptyProduct;
