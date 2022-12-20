import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "../Pages/About";

import ContactUs from "../Pages/ContactUs";
import Home from "../Pages/Home";
import NavBar from "../components/NavBar/NavBar";
import Product from "../Pages/Product";
import ProductDetail from "../Pages/ProductDetail";

const Routess = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/productlisting" element={<Product />} />
          <Route path="/productdetails" element={<ProductDetail />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </Router>
    </>
  );
};

export default Routess;
