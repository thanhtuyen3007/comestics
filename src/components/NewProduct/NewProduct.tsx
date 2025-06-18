import React, { ReactElement } from "react";
import clsx from "clsx";
import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "./NewProduct.module.scss";
import images from "../assets";

function NewProduct(): ReactElement {
  return (
    <article className={clsx(styles.wrapper)}>
      <Container fluid>
        <Row>
          <Col md={6} className={clsx(styles.proDesc)}>
            <h3 className={clsx(styles.proDesc_title)}>
              {" "}
              COMING SOON – A NEW ERA OF NATURAL SKINCARE
            </h3>
            <p className={clsx(styles.proDesc_text)}>
              Gentle. Pure. Powerful. Our upcoming collection is crafted to
              reveal your skin’s natural glow — infused with clean ingredients
              and modern science. Stay tuned. Your skin will thank you.
            </p>
          </Col>
          <Col md={6}>
            <Image
              style={{ width: "100%", borderRadius: "40px" }}
              src={images.product4}
            />
          </Col>
        </Row>
      </Container>
    </article>
  );
}

export default NewProduct;
