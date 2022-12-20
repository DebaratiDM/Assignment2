import React from "react";
import { Row, Col } from "react-bootstrap";
import ProductSingleCard from "../components/ProductSingleCard/ProductSingleCard";
const Product = () => {
  const arr = [1, 2, 4, 5, 6, 7, 8, 9];
  return (
    <Row>
      {arr.map((item) => {
        return (
          <Col md={3} data={item}>
            <ProductSingleCard />
          </Col>
        );
      })}
    </Row>
  );
};

export default Product;
