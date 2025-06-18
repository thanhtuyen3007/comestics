import React, { ReactElement } from "react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Footer.module.scss";

function Footer(): ReactElement {
  return (
    <footer className={clsx(styles.wrapper)}>
      <Container>
        <Row>
          <Col md={6}>
            <h2 className={clsx(styles.logo)}>COSMETIC</h2>
            <p className={styles.description}>
              We are dedicated to crafting clean, plant-based skincare using the
              finest ingredients. Experience radiant skin with our cruelty-free,
              eco-conscious products.
            </p>
          </Col>
          <Col md={6} className={clsx(styles.contact)}>
            <ul className={styles.contactList}>
              <li>
                <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
                contact@cosmeticbeauty.com
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} className={styles.icon} />
                +84 123 456 789
              </li>
              <li>
                <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
                123 Skincare Street, District 1, HCMC
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
