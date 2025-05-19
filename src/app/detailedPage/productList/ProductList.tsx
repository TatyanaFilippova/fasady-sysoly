"use client";

import Product from "@/app/detailedPage/product/Product";

export interface ProductListProps {
  data: {
    title: string;
    ImgProduct: {
      url: string;
    };
    imgList: {
      url: string;
    }[];
    width: string;
    height: string;
    dimensions: string;
    thickness: string;
    color: string;
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
          width={product.width}
          height={product.height}
          dimensions={product.dimensions}
          thickness={product.thickness}
          color={product.color}
          key={product.title}
        ></Product>
      ))}
    </div>
  );
};

export default ProductList;
