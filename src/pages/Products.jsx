import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import axios from "axios";
import { API_BASE_URL, PRODUCTS } from "../utils/constants";
import ProductSingleCard from "../Component/ProductSingleCard";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);
  async function getAllProducts() {
    setLoader(true);
    try {
      const params = {
        method: "get",
        url: `${API_BASE_URL}${PRODUCTS}`,
      };
      await axios(params).then((res) => {
        setLoader(false);
        setProducts(res.data);
      });
    } catch (err) {
      setLoader(false);
      console.log(err);
    }
  }
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Container>
      <Row className="row">
        {loader ? (
          <>loading..</>
        ) : (
          <>
            {products.map((item) => {
              return (
                <Col className="col-md-4 singleProductItem" key={item.id}>
                  <ProductSingleCard {...item} />
                </Col>
              );
            })}
          </>
        )}
      </Row>
    </Container>
  );
};

export default Products;
