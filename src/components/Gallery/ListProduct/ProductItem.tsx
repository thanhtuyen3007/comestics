import clsx from "clsx";
import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "./ListProduct.module.scss";

function ProductItem(
  { href }: { href: any },
  { reverse }: { reverse: boolean }
) {
  return (
    <article className={clsx(styles.proWrapper)}>
      <Container fluid>
        <Row className={clsx({ [styles.reverse]: reverse })}>
          <Col md={6} className={clsx(styles.proDesc)}>
            <h3 className={clsx(styles.proDesc_title)}>Lorem Ipsum</h3>
            <p className={clsx(styles.proDesc_text)}>
              Le Lorem Ipsum est simplement du faux texte employé dans la
              composition et la mise en page avant impression.
            </p>
            <p>
              Le Lorem Ipsum est simplement du faux texte employé dans la
              composition et la mise en page avant impression.
            </p>
            <a href="#" className={clsx(styles.proDesc_link)}>
              <span>Shop now</span>
            </a>
          </Col>
          <Col md={6}>
            <Image style={{ width: "100%", borderRadius: "40px" }} src={href} />
          </Col>
        </Row>
      </Container>
    </article>
  );
}

export default ProductItem;
