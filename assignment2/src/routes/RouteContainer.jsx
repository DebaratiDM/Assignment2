import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Container, Col, Row } from "react-bootstrap";
import About from "../Pages/About";
import ContactUs from "../Pages/ContactUs";
import Home from "../Pages/Home";
import NavBar from "../components/NavBar/NavBar";
import Product from "../Pages/Product";
import ProductDetail from "../Pages/ProductDetail";
import Sidebar from "../components/Sidebar/Sidebar";
const RouteContainer = () => {
  return (
    <>
      <Router>
        <Container fluid>
          <Row>
            <NavBar />
          </Row>
          <Container style={{ paddingTop: 5 }}>
            <Row>
              <Col md={3}>
                <Sidebar />
              </Col>
              <Col md={9}>
                <Card>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/productlisting" element={<Product />} />
                    <Route path="/productdetails" element={<ProductDetail />} />
                    <Route path="/contactus" element={<ContactUs />} />
                  </Routes>
                </Card>
              </Col>
            </Row>
          </Container>
        </Container>
      </Router>
    </>
  );
};

export default RouteContainer;
