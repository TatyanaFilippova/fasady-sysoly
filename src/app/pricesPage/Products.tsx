import {
  TableTd,
  TableTr,
  TableTdButton,
  Button,
} from "@/app/pricesPage/Prices.styled";
import { Product } from "@/helpers/prices";
import { useState } from "react";

interface ProductProps {
  products: Product[];
}

export const Products = ({ products }: ProductProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {products.slice(0, !isOpen ? 3 : undefined).map((item, key) => (
        <TableTr key={key}>
          <TableTd dangerouslySetInnerHTML={{ __html: item.title }}></TableTd>
          <TableTd>{item.price}</TableTd>
          <TableTd>{item.term}</TableTd>
        </TableTr>
      ))}
      {products.length > 3 && (
        <TableTr>
          <TableTdButton>
            <Button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? "Скрыть" : "Показать все"}
            </Button>
          </TableTdButton>
          <TableTd></TableTd>
          <TableTd></TableTd>
        </TableTr>
      )}
    </>
  );
};
