import React, { ReactElement } from "react";
import clsx from "clsx";
import styles from "./Gallery.module.scss";
import ListProduct from "./ListProduct/ListProduct";

function Gallery(): ReactElement {
  return (
    <section id="gallery" className={clsx(styles.wrapper)}>
      <h1 className={clsx(styles.title)}>Gallery</h1>
      <ListProduct />
    </section>
  );
}

export default Gallery;
