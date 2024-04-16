import React from "react";

const Footer: React.FC = () => {
  return (
    <>
      <section style={{ backgroundColor: "#3d4c6f" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="bg-primary text-white p-5 p-lg-6 rounded-3">
                <h4 className="text-white fs-1 fs-lg-2 mb-1">
                  Sign up for email alerts
                </h4>
                <p className="text-white">
                  Stay current with our latest insights
                </p>
                <form className="mt-4">
                  <div className="row align-items-center">
                    <div className="col-md-7 pe-md-0">
                      <div className="input-group">
                        <input
                          className="form-control"
                          type="email"
                          placeholder="Enter Email Here"
                        />
                      </div>
                    </div>
                    <div className="col-md-5 mt-3 mt-md-0">
                      <div className="d-grid">
                        <button className="btn btn-warning" type="submit">
                          <span className="text-primary fw-semi-bold">
                            Submit
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="row">
                <div className="col-6 col-lg-4 text-white ms-lg-auto">
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <a className="text-white" href="contact.html">
                        Contact Us
                      </a>
                    </li>
                    <li className="mb-3">
                      <a className="text-white" href="#!">
                        FAQ
                      </a>
                    </li>
                    <li className="mb-3">
                      <a className="text-white" href="#!">
                        Privacy Policy
                      </a>
                    </li>
                    <li className="mb-3">
                      <a className="text-white" href="#!">
                        Terms of Use
                      </a>
                    </li>
                    <li className="mb-3">
                      <a className="text-white" href="#!">
                        Global Office
                      </a>
                    </li>
                    <li className="mb-3">
                      <a className="text-white" href="#!">
                        Local Office
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-sm-5 ms-sm-auto">
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <a
                        className="text-decoration-none d-flex align-items-center"
                        href="#!"
                      >
                        <span className="brand-icon me-3">
                          <span className="fab fa-linkedin-in"></span>
                        </span>
                        <h5 className="fs-0 text-white mb-0 d-inline-block">
                          Linkedin
                        </h5>
                      </a>
                    </li>
                    <li className="mb-3">
                      <a
                        className="text-decoration-none d-flex align-items-center"
                        href="#!"
                      >
                        <span className="brand-icon me-3">
                          <span className="fab fa-twitter"></span>
                        </span>
                        <h5 className="fs-0 text-white mb-0 d-inline-block">
                          Twitter
                        </h5>
                      </a>
                    </li>
                    <li className="mb-3">
                      <a
                        className="text-decoration-none d-flex align-items-center"
                        href="#!"
                      >
                        <span className="brand-icon me-3">
                          <span className="fab fa-facebook-f"></span>
                        </span>
                        <h5 className="fs-0 text-white mb-0 d-inline-block">
                          Facebook
                        </h5>
                      </a>
                    </li>
                    <li className="mb-3">
                      <a
                        className="text-decoration-none d-flex align-items-center"
                        href="#!"
                      >
                        <span className="brand-icon me-3">
                          <span className="fab fa-google-plus-g"></span>
                        </span>
                        <h5 className="fs-0 text-white mb-0 d-inline-block">
                          Google+
                        </h5>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section end */}

      <footer className="footer bg-primary text-center py-4">
        <div className="container">
          <div className="row align-items-center opacity-85 text-white">
            <div className="col-sm-3 text-sm-start">
              <a href="index.html">
                <img src="src/assets/images/logo-light.png" alt="logooooo" />
              </a>
            </div>
            <div className="col-sm-6 mt-3 mt-sm-0">
              <p className="lh-lg mb-0 fw-semi-bold">
                &copy; Copyright 2021 ERIC Inc.
              </p>
            </div>
            <div className="col text-sm-end mt-3 mt-sm-0">
              <span className="fw-semi-bold">Designed by </span>
              <a
                className="text-white"
                href="https://themewagon.com/"
                target="_blank"
              >
                BIT
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
