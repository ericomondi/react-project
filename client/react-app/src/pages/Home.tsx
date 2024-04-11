import React from "react";
import CheckLoginStatus from "../store/RouteAuth";

const HomeComponent: React.FC = () => {
  return (
    <>
    <CheckLoginStatus/>
      <main className="main" id="top">
        <section className="py-0">
          <div
            className="swiper theme-slider min-vh-100"
            data-swiper='{"loop":true,"allowTouchMove":false,"autoplay":{"delay":5000},"effect":"fade","speed":800}'
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide" data-zanim-timeline="{}">
                <div
                  className="bg-holder"
                  style={{
                    backgroundImage: "url(src/assets/images/header-6.jpg)",
                  }}
                ></div>
                <div className="container">
                  <div
                    className="row min-vh-100 py-8 align-items-center"
                    data-inertia='{"weight":1.5}'
                  >
                    <div className="col-sm-8 col-lg-7 px-5 px-sm-3">
                      <div className="overflow-hidden">
                        <h1
                          className="fs-4 fs-md-5 lh-1"
                          data-zanim-xs='{"delay":0}'
                        >
                          Helping Leaders
                        </h1>
                      </div>
                      <div className="overflow-hidden">
                        <p
                          className="text-primary pt-4 mb-5 fs-1 fs-md-2 lh-xs"
                          data-zanim-xs='{"delay":0.1}'
                        >
                          We look forward to help you in taking your company to
                          new height.
                        </p>
                      </div>
                      <div className="overflow-hidden">
                        <div data-zanim-xs='{"delay":0.2}'>
                          <a className="btn btn-primary me-3 mt-3" href="#!">
                            Read more
                            <span className="fas fa-chevron-right ms-2"></span>
                          </a>
                          <a
                            className="btn btn-warning mt-3"
                            href="contact.html"
                          >
                            Contact us
                            <span className="fas fa-chevron-right ms-2"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide" data-zanim-timeline="{}">
                <div
                  className="bg-holder"
                  style={{
                    backgroundImage: "url(src/assets/images/header-5.jpg)",
                  }}
                ></div>
                <div className="container">
                  <div
                    className="row min-vh-100 py-8 align-items-center"
                    data-inertia='{"weight":1.5}'
                  >
                    <div className="col-sm-8 col-lg-7 px-5 px-sm-3">
                      <div className="overflow-hidden">
                        <h1
                          className="fs-4 fs-md-5 lh-1"
                          data-zanim-xs='{"delay":0}'
                        >
                          Expert Consultants
                        </h1>
                      </div>
                      <div className="overflow-hidden">
                        <p
                          className="text-primary pt-4 mb-5 fs-1 fs-md-2 lh-xs"
                          data-zanim-xs='{"delay":0.1}'
                        >
                          Over 10 years of experience in helping clients finding
                          comprehensive solutions.
                        </p>
                      </div>
                      <div className="overflow-hidden">
                        <div data-zanim-xs='{"delay":0.2}'>
                          <a className="btn btn-primary me-3 mt-3" href="#!">
                            Read more
                            <span className="fas fa-chevron-right ms-2"></span>
                          </a>
                          <a
                            className="btn btn-warning mt-3"
                            href="contact.html"
                          >
                            Contact us
                            <span className="fas fa-chevron-right ms-2"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide" data-zanim-timeline="{}">
                <div
                  className="bg-holder"
                  style={{
                    backgroundImage: "url(src/assets/images/header-1.jpg)",
                  }}
                ></div>
                <div className="container">
                  <div
                    className="row min-vh-100 py-8 align-items-center"
                    data-inertia='{"weight":1.5}'
                  >
                    <div className="col-sm-8 col-lg-7 px-5 px-sm-3">
                      <div className="overflow-hidden">
                        <h1
                          className="fs-4 fs-md-5 lh-1"
                          data-zanim-xs='{"delay":0}'
                        >
                          Growth Partners
                        </h1>
                      </div>
                      <div className="overflow-hidden">
                        <p
                          className="text-primary pt-4 mb-5 fs-1 fs-md-2 lh-xs"
                          data-zanim-xs='{"delay":0.1}'
                        >
                          Connect with top consultants hand-picked by Elixir
                          consulting and finance.
                        </p>
                      </div>
                      <div className="overflow-hidden">
                        <div data-zanim-xs='{"delay":0.2}'>
                          <a className="btn btn-primary me-3 mt-3" href="#!">
                            Read more
                            <span className="fas fa-chevron-right ms-2"></span>
                          </a>
                          <a
                            className="btn btn-warning mt-3"
                            href="contact.html"
                          >
                            Contact us
                            <span className="fas fa-chevron-right ms-2"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-nav">
              <div className="swiper-button-prev">
                <span className="fas fa-chevron-left"></span>
              </div>
              <div className="swiper-button-next">
                <span className="fas fa-chevron-right"></span>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white text-center">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-10 col-md-6">
                <h3 className="fs-2 fs-lg-3">Welcome to the Elixir</h3>
                <p className="px-lg-4 mt-3">
                  Get expert consultancy and support with Elixir, an advisory
                  firm that stand by your side always.
                </p>
                <hr
                  className="short"
                  data-zanim-xs='{"from":{"opacity":0,"width":0},"to":{"opacity":1,"width":"4.20873rem"},"duration":0.8}'
                  data-zanim-trigger="scroll"
                />
              </div>
            </div>
            <div className="row mt-4 mt-md-5">
              <div
                className="col-sm-6 col-lg-3 mt-4"
                data-zanim-timeline="{}"
                data-zanim-trigger="scroll"
              >
                <div className="ring-icon mx-auto" data-zanim-xs='{"delay":0}'>
                  <span className="far fa-chart-bar"></span>
                </div>
                <h5 className="mt-4" data-zanim-xs='{"delay":0.1}'>
                  Business Consulting
                </h5>
                <p className="mb-0 mt-3 px-3" data-zanim-xs='{"delay":0.2}'>
                  Solution for every business related problems, readily <br />
                  and skillfully.
                </p>
              </div>
              <div
                className="col-sm-6 col-lg-3 mt-4"
                data-zanim-timeline="{}"
                data-zanim-trigger="scroll"
              >
                <div className="ring-icon mx-auto" data-zanim-xs='{"delay":0}'>
                  <span className="far fa-bell"></span>
                </div>
                <h5 className="mt-4" data-zanim-xs='{"delay":0.1}'>
                  Risk Management
                </h5>
                <p className="mb-0 mt-3 px-3" data-zanim-xs='{"delay":0.2}'>
                  Calculate every possible risk in your business, take <br />
                  control over them.
                </p>
              </div>
              <div
                className="col-sm-6 col-lg-3 mt-4"
                data-zanim-timeline="{}"
                data-zanim-trigger="scroll"
              >
                <div className="ring-icon mx-auto" data-zanim-xs='{"delay":0}'>
                  <span className="far fa-lightbulb"></span>
                </div>
                <h5 className="mt-4" data-zanim-xs='{"delay":0.1}'>
                  Market Research
                </h5>
                <p className="mb-0 mt-3 px-3" data-zanim-xs='{"delay":0.2}'>
                  Know the market before taking any step, reduce <br />
                  risks before you go.
                </p>
              </div>
              <div
                className="col-sm-6 col-lg-3 mt-4"
                data-zanim-timeline="{}"
                data-zanim-trigger="scroll"
              >
                <div className="ring-icon mx-auto" data-zanim-xs='{"delay":0}'>
                  <span className="fas fa-headset"></span>
                </div>
                <h5 className="mt-4" data-zanim-xs='{"delay":0.1}'>
                  Quality Services
                </h5>
                <p className="mb-0 mt-3 px-3" data-zanim-xs='{"delay":0.2}'>
                  Experience unparalleled service, from beginning <br />
                  to final construction.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-0">
          <div className="container">
            <div className="row flex-center text-center pb-6">
              <div className="col-12">
                <div className="position-relative mt-4 py-5 py-md-11">
                  <div
                    className="bg-holder rounded-3"
                    style={{
                      backgroundImage:
                        "url(src/assets/images/video-screenshot-2.jpg)",
                    }}
                  ></div>
                  <button
                    className="btn-elixir-play"
                    data-bigpicture='{"ytSrc":"jlWMTNZNOc0"}'
                    data-zanim-trigger="scroll"
                    data-zanim-xs='{"from":{"opacity":0,"scale":0.8},"to":{"opacity":1,"scale":1},"duration":1}'
                  >
                    <span className="fas fa-play fs-1"></span>
                  </button>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-sm-6 col-lg-4 mt-3 mt-lg-0 px-4 px-sm-3"
                data-zanim-timeline="{}"
                data-zanim-trigger="scroll"
              >
                <h5 data-zanim-xs='{"delay":0}'>
                  <span className="text-primary me-3 fas fa-users"></span>
                  Awesome Team
                </h5>
                <p className="mt-3 pe-3 pe-lg-5" data-zanim-xs='{"delay":0.1}'>
                  Before talking destination, we shine a spotlight across your
                  organization <br />
                  to fully understand it.
                </p>
              </div>
              <div
                className="col-sm-6 col-lg-4 mt-3 mt-lg-0 px-4 px-sm-3"
                data-zanim-timeline="{}"
                data-zanim-trigger="scroll"
              >
                <h5 data-zanim-xs='{"delay":0}'>
                  <span className="text-primary me-3 fas fa-comments"></span>
                  Excellent Support
                </h5>
                <p className="mt-3 pe-3 pe-lg-5" data-zanim-xs='{"delay":0.1}'>
                  If you face any trouble, you can always let our dedicated
                  support team help you. They are ready for you 24/7.
                </p>
              </div>
              <div
                className="col-sm-6 col-lg-4 mt-3 mt-lg-0 px-4 px-sm-3"
                data-zanim-timeline="{}"
                data-zanim-trigger="scroll"
              >
                <h5 data-zanim-xs='{"delay":0}'>
                  <span className="text-primary me-3 fas fa-bolt"></span>Faster
                  Performance
                </h5>
                <p className="mt-3 pe-3 pe-lg-5" data-zanim-xs='{"delay":0.1}'>
                  We develop a systematic well-ordered process of analysis, from
                  concept through implementation.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomeComponent;
