"use client";

import Product from "@/app/detailedPage/product/Product";

interface ProductListProps {
  data: {
    title: string;
    ImgProduct: {
      url: string;
    };
    imgList: {
      url: string;
    }[];
  }[];
}

const ProductList = ({ data }: ProductListProps) => {
  return (
    <div>
      {data.map((product) => (
        <Product
          title={product.title}
          description="Описание раздела. Может его не быть"
          imgProduct={"http://localhost:1337" + product.ImgProduct.url}
          imgList={product.imgList.map(
            (product) => "http://localhost:1337" + product.url,
          )}
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
