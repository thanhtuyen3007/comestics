import React from "react";
import clsx from "clsx";
import styles from "./Gallery.module.scss";
import ListProduct from "./ListProduct/ListProduct";

function Gallery() {
  return (
    <section id="gallery">
      <h1 className={clsx(styles.title)}>Gallery</h1>
      <ListProduct/>
    </section>
  );
}

export default Gallery;
