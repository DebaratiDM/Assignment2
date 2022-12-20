import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

import "./Sidebar.css";

const Sidebar = () => {
  return (
    <Container>
      <Row>
        <Col md={3}></Col>
        <Col md={9}>
          <ListGroup>
            <ListGroup.Item>FILTERS</ListGroup.Item>
            <ListGroup.Item>Categories</ListGroup.Item>

            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Sidebar;
