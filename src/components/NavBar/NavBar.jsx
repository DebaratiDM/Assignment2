import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <Link class="navbar-brand" href="f">
          Navbar
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" href="#" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="#" to="/about">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="#" to="/productlisting">
                Product
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="#" to="/productdetails">
                ProductDetails
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="#" to="/contactus">
                ContactUs
              </Link>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
