import React from "react";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { Button } from "react-bootstrap";

const Navbar: React.FC = () => {
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <>
      <div className="bg-primary py-3 d-none d-sm-block text-white fw-bold">
        <div className="container">
          <div className="row align-items-center gx-4">
            <div className="col-auto d-none d-lg-block fs--1">
              <span
                className="fas fa-map-marker-alt text-warning me-2"
                data-fa-transform="grow-3"
              ></span>
              1010 Avenue, NAIROBI, 10018 KE.
            </div>
            <div className="col-auto ms-md-auto order-md-2 d-none d-sm-flex fs--1 align-items-center">
              <span
                className="fas fa-clock text-warning me-2"
                data-fa-transform="grow-3"
              ></span>
              Mon-Sat, 8.00-18.00. Sunday CLOSED
            </div>
            <div className="col-auto">
              <span
                className="fas fa-phone-alt text-warning"
                data-fa-transform="shrink-3"
              ></span>
              <a
                className="ms-2 fs--1 d-inline text-white fw-bold"
                href="tel:2123865575"
              >
                254 386 5575, 254 386 5576
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="sticky-top navbar-elixir">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="/">
              <img src="src/assets/images/logo-dark.png" alt="logo" />
            </a>
            <button
              className="navbar-toggler p-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#primaryNavbarCollapse"
              aria-controls="primaryNavbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="hamburger hamburger--emphatic">
                <span className="hamburger-box">
                  <span className="hamburger-inner"></span>
                </span>
              </span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="primaryNavbarCollapse"
            >
              <ul className="navbar-nav py-3 py-lg-0 mt-1 mb-2 my-lg-0 ms-lg-n1">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle dropdown-indicator"
                    href="JavaScript:void(0)"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Home
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="index.html">
                        Slider Header
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle dropdown-indicator"
                    href="JavaScript:void(0)"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Pages
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/products">
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/store">
                        Sales
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/dashboard">
                        Dashboard
                      </Link>
                    </li>

                    <li>
                      <Link className="dropdown-item" to="/login">
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/register">
                        Registration
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle dropdown-indicator"
                    href="JavaScript:void(0)"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    News
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="news/newsroom.html">
                        Newsroom
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="news/news.html">
                        Single News
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle dropdown-indicator"
                    href="JavaScript:void(0)"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Elements
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        className="dropdown-item"
                        href="elements/typography.html"
                      >
                        Typography
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link" href="contact.html" role="button">
                    Contact
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link" to="/logout" role="button">
                    Logout
                  </Link>
                </li>
              </ul>
              <a
                className="btn btn-outline-primary rounded-pill btn-sm border-2 d-block d-lg-inline-block ms-auto my-3 my-lg-0"
                href="https://themewagon.com/themes/elixir/"
                target="_blank"
              >
                Purchase
              </a>
            </div>
            {cartQuantity > 0 && (
              <Button
                onClick={openCart}
                style={{ width: "3rem", height: "3rem", position: "relative" }}
                variant="outline-primary"
                className="rounded-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  fill="currentColor"
                >
                  <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                </svg>

                <div
                  className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                  style={{
                    color: "white",
                    width: "1.5rem",
                    height: "1.5rem",
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    transform: "translate(25%, 25%)",
                  }}
                >
                  {cartQuantity}
                </div>
              </Button>
            )}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
