import  { ReactElement } from "react";
import clsx from "clsx";
import styles from "./Contact.module.scss";
import { Container, Row, Col, Image, Form } from "react-bootstrap";
import images from "../assets";

function Contact(): ReactElement {
  return (
    <section id="contact" className={clsx(styles.contact, "py-5")}>
      <Container fluid>
        <h1 className={clsx(styles.title)}>contact</h1>
        <Row>
          <Col md={8}>
            <Form>
              <Form.Group
                className="mb-5"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="fs-5">Name</Form.Label>
                <Form.Control size="lg" type="email" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="fs-5">Email address</Form.Label>
                <Form.Control size="lg" type="email" />
              </Form.Group>
              <Form.Group
                className="mb-5"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="fs-5">Message</Form.Label>
                <Form.Control size="lg" as="textarea" rows={5} />
              </Form.Group>
              <button className={clsx(styles.btn)}  type="submit" >
                Send Message
              </button>
            </Form>
          </Col>
          <Col md={4} className="d-none d-md-block">
            <Image
              src={images.contact}
              alt="contact us"
              style={{ width: "100%" }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
