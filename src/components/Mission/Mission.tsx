import React, { ReactElement } from "react";
import clsx from "clsx";
import styles from "./Mission.module.scss";
import { Col, Container, Row, Image } from "react-bootstrap";
import images from "../assets";

function Mission(): ReactElement {
  return (
    <section id="mission" className="d-none d-lg-block pb-1">
      <Container fluid className={clsx(styles.wrapper)}>
        <div className={clsx(styles.content)}>
          <Row className="justify-content-center">
            <Col xs={12} md={6} lg={6}>
              <Image
                src={images.theGirl}
                alt="Mission Image"
                fluid
                className={clsx(styles.image)}
              />
            </Col>

            <Col xs={12} md={10} lg={6} className={clsx(styles.text)}>
              <h2 className={clsx(styles.title)}>
                Empowering Confidence. Through Pure Beauty
              </h2>
              <p className={clsx(styles.subtext)}>
                Our mission is to bring clean, conscious skincare to every
                routine.
              </p>
              <p className={clsx(styles.description)}>
                We believe beauty begins with <strong>honesty</strong>. From
                ingredients to process, we strive for transparency and care.
              </p>
              <p className={clsx(styles.description)}>
                Our formulas are{" "}
                <strong>science-backed and cruelty-free</strong>. Crafted with
                sustainable botanicals that nourish both skin and planet.
              </p>
              <p className={clsx(styles.description)}>
                We’re not just creating skincare. We’re nurturing self-worth and
                radiance from within.
              </p>
              <p className={clsx(styles.description)}>
                Because when beauty is rooted in purity and purpose, confidence
                becomes effortless.
              </p>
              <span className={clsx(styles.signature)}>
                “We believe that beauty begins with intention.”
                — The Beauty Team
              </span>
              
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default Mission;
