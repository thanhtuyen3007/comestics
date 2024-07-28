import React from "react";
import clsx from "clsx";
import styles from "./Home.module.scss";
import { Col, Container, Row, Image } from "react-bootstrap";
import images from "../assets";

function Home() {
  return (
    <section id="#home" className={clsx(styles.wrapper)}>
      <Container fluid>
        <Row>
          <Col md={6} className={clsx(styles.home_text)}>
            <h1>new arrivals</h1>
            <p>
              Le Lorem Ipsum est simplement du faux texte employé dans la
              composition et la mise en page avant impression.
            </p>
          </Col>
          <Col md={6}>
            <img
              src={images.banner}
              className={clsx(styles.home_img)}
              alt="skincare-product"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
