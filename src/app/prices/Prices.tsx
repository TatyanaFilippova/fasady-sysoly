"use client";

import {
  Table,
  TableHead,
  TableTd,
  TableTdTitle,
  TableTr,
  Title,
  Wrapper,
} from "@/app/prices/Prices.styled";
import { prices } from "@/helpers/prices";
import { Fragment } from "react";
import { Products } from "@/app/prices/Products";

const Prices = () => {
  return (
    <Wrapper>
      <Table>
        <Title>Цены на товары и услуги</Title>
        <thead>
          <TableTr>
            <TableHead>Вид изделия</TableHead>
            <TableHead>Стоимость,руб./м²</TableHead>
            <TableHead>Сроки, дней</TableHead>
          </TableTr>
        </thead>
        <tbody>
          {prices.map((price) => (
            <Fragment key={price.title}>
              <TableTr>
                <TableTd></TableTd>
                <TableTdTitle>{price.title}</TableTdTitle>
                <TableTd></TableTd>
              </TableTr>
              {price.categories.map((price, key) => (
                <Fragment key={key}>
                  <TableTr>
                    <TableTd></TableTd>
                    <TableTdTitle>{price.title}</TableTdTitle>
                    <TableTd></TableTd>
                  </TableTr>

                  <Products products={price.products} />
                </Fragment>
              ))}
            </Fragment>
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
};

export default Prices;
