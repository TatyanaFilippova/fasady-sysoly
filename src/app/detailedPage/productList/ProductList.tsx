import Product from "@/app/detailedPage/product/Product";
import imgProduct from "../../../img/imageBanner.png";

const ProductList = () => {
  return (
    <Product
      title="Название раздела тип продукта"
      description="Описание раздела. Может его не быть"
      imgProduct={imgProduct.src}
    ></Product>
  );
};

export default ProductList;
