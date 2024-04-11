import React from "react";

const Register: React.FC = () => {
  return (
    <>
      <main className="main" id="top">
        

        <section className="text-center py-0">
          <div
            className="bg-holder overlay overlay-1"
            style={{ backgroundImage: "url(../assets/img/background-1.jpg)" }}
          ></div>
          {/* <!--/.bg-holder--> */}
          <div className="container">
            <div className="row min-vh-100 align-items-center">
              <div
                className="col-md-9 col-lg-6 mx-auto"
                data-zanim-timeline="{}"
                data-zanim-trigger="scroll"
              >
                <div className="mb-5" data-zanim-xs='{"delay":0,"duration":1}'>
                  <a href="../index.html">
                    <img src="../assets/img/logo-light.png" alt="logo" />
                  </a>
                </div>
                <div
                  className="card"
                  data-zanim-xs='{"delay":0.1,"duration":1}'
                >
                  <div className="card-body p-md-5">
                    <h4 className="text-uppercase fs-0 fs-md-1">
                      create your elixir account
                    </h4>
                    <form className="text-start mt-4">
                      <div className="row align-items-center g-4">
                        <div className="col-6">
                          {" "}
                          <input
                            className="form-control"
                            type="text"
                            placeholder="First name"
                            aria-label="First Name"
                          />
                        </div>
                        <div className="col-6">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Last name"
                            aria-label="Last Name"
                          />
                        </div>
                        <div className="col-12">
                          <input
                            className="form-control"
                            type="email"
                            placeholder="Email Address"
                            aria-label="Email Address"
                          />
                        </div>
                        <div className="col-12">
                          <input
                            className="form-control"
                            type="Password"
                            placeholder="Password"
                            aria-label="Password"
                          />
                        </div>
                        <div className="col-12">
                          <input
                            className="form-control"
                            type="Password"
                            placeholder="Confirm Password"
                            aria-label="Confirm Password"
                          />
                        </div>
                      </div>
                      <div className="row align-items-center mt-3">
                        <div className="col-6 mt-3">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              id="rememberMe"
                              type="checkbox"
                              value=""
                            />
                            <label className="form-check-label text-500 lh-sm fw-semi-bold">
                              I agree with the terms &amp; conditions
                            </label>
                          </div>
                        </div>
                        <div className="col-6 mt-2 mt-sm-3">
                          <button
                            className="btn btn-primary w-100"
                            type="submit"
                          >
                            Create Account
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Register;
