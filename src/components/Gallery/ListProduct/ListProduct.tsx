import clsx from "clsx";
import ProductItem from "./ProductItem";
import images from "../../assets";
import styles from "./ListProduct.module.scss";
import { ReactElement } from "react";

type Data = {
  href: string;
  title: string;
  description: string;
};
const productList: Data[] = [
  {
    href: images.product1,
    title: "Radiance Renewal Collection",
    description:
      "Infused with vitamin-rich botanicals and lightweight hydration, this collection refreshes dull skin and boosts radiance — effortlessly.",
  },
  {
    href: images.product2,
    title: "Botanical Balance Ritual",
    description:
      "Crafted with calming plant extracts and moisture-locking formulas, this ritual restores balance while honoring sensitive skin needs.",
  },
  {
    href: images.product3,
    title: "Citrus Glow Essentials",
    description:
      "Packed with antioxidant-rich citrus and active ingredients, this line revives tired skin, leaving it smoother, brighter, and visibly renewed.",
  },
];

function ListProduct(): ReactElement {
  return (
    <section className={clsx(styles.wrapper)}>
      {productList.map((proItem: Data, index: number) => (
        <ProductItem key={index} data={proItem} index={index} />
      ))}
    </section>
  );
}

export default ListProduct;
