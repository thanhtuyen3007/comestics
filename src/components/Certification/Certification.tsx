import React, { ReactElement } from "react";
import clsx from "clsx";
import styles from "./Certification.module.scss";
import { CheckCircle, Leaf, Rabbit, TestTube2 } from "lucide-react";

function Certification(): ReactElement {
  return (
    <section className={clsx(styles.certification)} id="certification">
      <h1 className={clsx(styles.title)}>Certification</h1>
      <div className={clsx(styles.content)}>
        <ul className={clsx(styles.list)}>
          <li className={clsx(styles.item)}>
            <CheckCircle size={20} className={styles.icon} />
            <span className={styles.itemText}>Certified Cruelty-Free – No animal testing</span>
          </li>
          <li className={clsx(styles.item)}>
            <Rabbit size={20} className={styles.icon} />
            <span className={styles.itemText}>Vegan-friendly – No animal-derived ingredients</span>
          </li>
          <li className={clsx(styles.item)}>
            <Leaf size={20} className={styles.icon} />
            <span className={styles.itemText}>Natural botanicals – ECOCERT & USDA Organic</span>
          </li>
          <li className={clsx(styles.item)}>
            <TestTube2 size={20} className={styles.icon} />
            <span className={styles.itemText}>Dermatologist-tested for sensitive skin</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Certification;
