import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL, PRODUCTS } from "../utils/constants";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import ReactImageZoom from "react-image-zoom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ProductDetail = () => {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);

  const location = useLocation();
  const currentProductID = location.pathname.split("/")[2];

  async function getSingleProducts() {
    setLoader(true);
    try {
      const params = {
        method: "get",
        url: `${API_BASE_URL}${PRODUCTS}/${currentProductID}`,
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
    getSingleProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      {loader ? (
        <h1>loading</h1>
      ) : (
        <Row className="row">
          <Col>
            {products?.image && (
              <ReactImageZoom
                className="img-thumbnail"
                height={500}
                width={500}
                zoomWidth={500}
                img={products?.image}
              />
            )}
          </Col>
          <Col>
            <Card style={{ marginTop: 5, marginBottom: 5 }}>
              <Card.Body>
                <Card.Title>{products?.title}</Card.Title>
                <Card.Title>Rs: {products?.price}</Card.Title>
                <Card.Text>{products?.description}</Card.Text>
                <Card.Text>{products?.category}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Row>
                  <Button variant="primary" data={products?.id}>
                    Wishlist
                  </Button>
                </Row>
                <Row style={{ marginTop: 5 }}>
                  <Button variant="primary" data={products?.id}>
                    Add to Cart
                  </Button>
                </Row>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default ProductDetail;
