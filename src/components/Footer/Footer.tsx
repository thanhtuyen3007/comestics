import React from "react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <section className={clsx(styles.wrapper)}>
      <Container fluid>
        <Row>
          <h1 className={clsx(styles.logo)}>comestic</h1>
          <Col className={clsx(styles.text)} md={6}>
            <p>
              Le Lorem Ipsum est simplement du faux texte employé dans la
              composition et la mise en page avant impression.
            </p>
            <p>
              Le Lorem Ipsum est simplement du faux texte employé dans la
              composition et la mise en page avant impression.
            </p>
          </Col>
          <Col md={6}>
            <a className={clsx(styles.link)} href="#">
              <FontAwesomeIcon className={clsx(styles.icon)} icon={faEnvelope} /> cosmectic@gmail.com
            </a>
            <a className={clsx(styles.link)} href="#">
              <FontAwesomeIcon className={clsx(styles.icon)} icon={faPhone} /> 0123456789
            </a>
            <a className={clsx(styles.link)} href="#">
              <FontAwesomeIcon className={clsx(styles.icon)} icon={faLocationDot} /> Le Lorem Ipsum est
            </a>

          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Footer;
