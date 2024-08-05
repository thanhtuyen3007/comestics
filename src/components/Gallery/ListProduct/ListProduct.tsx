import React from "react";
import ProductItem from "./ProductItem";
import images from "../../assets";
import { title } from "process";
const productList = [
  { href: images.product1 },
  { href: images.product2 },
  { href: images.product3 },
];
function ListProduct() {
  return (
    <section>
      {productList.map((data, index) => (
        <ProductItem key={index} href={data.href} />
      ))}
    </section>
  );
}

export default ListProduct;
