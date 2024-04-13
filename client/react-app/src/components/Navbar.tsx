import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
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
              1010 Avenue, NAIROBI,  10018 KE.
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
            <a className="navbar-brand" href="index.html">
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
                    <li>
                      <a
                        className="dropdown-item"
                        href="homes/header-slider-classic.html"
                      >
                        Slider Classic
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="homes/header-static.html"
                      >
                        Static Header
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="homes/header-static-classic.html"
                      >
                        Static Classic
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="homes/header-youtube-video.html"
                      >
                        Youtube Background
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="homes/header-youtube-video-classic.html"
                      >
                        Youtube Classic
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="homes/header-selfhosted-video.html"
                      >
                        Self-hosted Video
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="homes/header-selfhosted-video-classic.html"
                      >
                        Self-hosted Classic
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
                      <a className="dropdown-item" href="pages/about.html">
                        About
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="pages/alumni.html">
                        Alumni
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="pages/blank.html">
                        Blank Page
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="pages/404.html">
                        404 Page
                      </a>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/login">
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/register"
                      >
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
                      <a className="dropdown-item" href="elements/buttons.html">
                        Buttons
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="elements/colors.html">
                        Colors
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="elements/googlemap.html"
                      >
                        Google Map
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="elements/grid.html">
                        Grid
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="elements/icons.html">
                        Icons
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="elements/layouthelpers.html"
                      >
                        Layout Helpers
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="elements/modal-video.html"
                      >
                        Modal Video
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="elements/swiper.html">
                        Swiper
                      </a>
                    </li>
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
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
