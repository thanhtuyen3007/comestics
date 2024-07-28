import React from "react";
import clsx from "clsx";
import styles from "./Mission.module.scss";
import { Col, Container, Row, Image } from "react-bootstrap";

function Mission() {
  return (
    <section id="#mission" className="d-none d-lg-block pb-1">
      <Container fluid className={clsx(styles.wrapper)}>
        <div className={clsx(styles.content)}>
          <p>
            simply <span className="text-lowercase">the best</span>
          </p>
          <p className="text-lowercase">
            in <span className="text-uppercase" >beauty</span>
          </p>
        </div>
      </Container>
    </section>
  );
}

export default Mission;
