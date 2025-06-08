"use client";

import Product from "@/app/detailed/product/Product";
import { CMS_URL } from "@/constant";

export interface ProductListProps {
  data: {
    title: string;
    ImgProduct?: {
      url: string;
    };
    imgList?: {
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
          imgProduct={CMS_URL + product?.ImgProduct?.url}
          imgList={
            product?.imgList?.map((product) => CMS_URL + product.url) ?? []
          }
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
