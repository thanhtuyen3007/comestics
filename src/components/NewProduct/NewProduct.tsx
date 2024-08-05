import React from "react";
import clsx from "clsx";
import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "./NewProduct.module.scss";
import images from "../assets";

function NewProduct() {
  return (
    <article className={clsx(styles.wrapper)}>
      <Container fluid>
        <Row>
          <Col md={6} className={clsx(styles.proDesc)}>
            <h3 className={clsx(styles.proDesc_title)}>comming soon</h3>
            <p className={clsx(styles.proDesc_text)}>
              Le Lorem Ipsum est simplement du faux texte employé dans la
              composition et la mise en page avant impression.
            </p>
            <p>
              Le Lorem Ipsum est simplement du faux texte employé dans la
              composition et la mise en page avant impression.
            </p>
          </Col>
          <Col md={6}>
            <Image style={{ width: "100%", borderRadius: "40px" }} src={images.product4} />
          </Col>
        </Row>
      </Container>
    </article>
  );
}

export default NewProduct;
