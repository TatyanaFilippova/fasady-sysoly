"use client";

import Product from "@/app/detailedPage/product/Product";
import imgProduct from "../../../img/imageBanner.png";
import imageBlock from "../../../img/imageBlock.png";

export const imgList = [imageBlock.src, imageBlock.src, imageBlock.src];

interface ProductListProps {
  data: {
    title: string;
  }[];
}

const ProductList = ({ data }: ProductListProps) => {
  return (
    <div>
      {data.map((product) => (
        <Product
          title={product.title}
          description="Описание раздела. Может его не быть"
          imgProduct={imgProduct.src}
          imgList={imgList}
          width="23"
          height="23"
          dimensions="23"
          thickness="23"
          color="23"
          key={product.title}
        ></Product>
      ))}
    </div>
  );
};

export default ProductList;
