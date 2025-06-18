import React, { ReactElement } from "react";
import clsx from "clsx";
import styles from "./Home.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import images from "../assets";

function Home(): ReactElement {
  return (
    <section id="home" className={clsx(styles.wrapper)}>
      <Container fluid>
        <Row>
          <Col md={6} className={clsx(styles.home_text)}>
            <h1>new arrivals</h1>
            <p>
              Freshly formulated. Mindfully made. Discover our latest skincare
              essentials — clean ingredients, radiant results, and a ritual your
              skin will love.
            </p>
            <span className={clsx(styles.home_text_span)}><a href="#gallery">Available now. Explore the full collection.</a></span>
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
