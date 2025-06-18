import clsx from "clsx";
import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "./ListProduct.module.scss";
import { ReactElement } from "react";

type ProductItemProps = {
  data: {
    href: any;
    [key: string]: any;
  };
  index: number;
  reverse?: boolean;
};

function ProductItem({ data, index }: ProductItemProps): ReactElement {
  let reverse: boolean = false;
  if (index % 2 !== 0) {
    reverse = true;
  }
  return (
    <article className={clsx(styles.proWrapper)}>
      <Container fluid>
        <Row className={clsx({ [styles.reverse]: reverse })}>
          <Col md={6} className={clsx(styles.proDesc)}>
            <h3 className={clsx(styles.proDesc_title)}>{data.title}</h3>
            <p className={clsx(styles.proDesc_text)}>{data.description}</p>
            <a href="#" className={clsx(styles.proDesc_link)}>
              <span>Shop now</span>
            </a>
          </Col>
          <Col md={6}>
            <Image
              style={{ width: "100%", borderRadius: "40px" }}
              src={data.href}
            />
          </Col>
        </Row>
      </Container>
    </article>
  );
}

export default ProductItem;
