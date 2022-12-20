import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../common/Navbar";
import ContactUs from "../pages/ContactUs";
import Home from "../pages/Home";
import Product from "../pages/Product";
const Routess = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productlisting" element={<Product />} />
          <Route path="/productdetails" element={<ContactUs />} />
        </Routes>
      </Router>
    </>
  );
};

export default Routess;
