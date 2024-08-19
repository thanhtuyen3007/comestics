import clsx from "clsx";
import ProductItem from "./ProductItem";
import images from "../../assets";
import styles from "./ListProduct.module.scss";

const productList = [
  { href: images.product1 },
  { href: images.product2 },
  { href: images.product3 },
];
function ListProduct() {
  return (
    <section className={clsx(styles.wrapper)}>
      {productList.map((data, index) => (
        <ProductItem  key={index} href={data.href} />
      ))}
    </section>
  );
}

export default ListProduct;
