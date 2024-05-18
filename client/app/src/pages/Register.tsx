import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";




interface AuthType {
  username: string;
  // email: string;
  password: string;
}
interface ResponseData {
  access_token: string;
}

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [userName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let formContent: AuthType = {
      username: userName,
      // email: email,
      password: password,
    };
    try {
      // const apiUrl = "http://127.0.0.1:5000/register";
      const apiUrl = "http://127.0.0.1:8000/auth/register";
      const response = await axios.post(apiUrl, formContent, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Done.", response.data);
      const responseData: ResponseData = response.data;
      console.log("test", responseData);

      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <main className="main" id="top">
        <section className="text-center py-0">
          <div
            className="bg-holder overlay overlay-1"
            style={{
              backgroundImage: "url(/src/assets/images/background-1.jpg)",
            }}
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
                    <img src="./src/assets/images/logo-light.png" alt="logo" />
                  </a>
                </div>
                <div
                  className="card"
                  data-zanim-xs='{"delay":0.1,"duration":1}'
                >
                  <div className="card-body p-md-5">
                    <h4 className="text-uppercase fs-0 fs-md-1">
                      create your account
                    </h4>
                    <form onSubmit={handleSubmit} className="text-start mt-4">
                      <div className="row align-items-center g-4">
                        <div className="col-12">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Full Name"
                            aria-label="Full Name"
                            value={userName}
                            onChange={(e) => setFullName(e.target.value)}
                          />
                        </div>
                        <div className="col-12">
                          <input
                            className="form-control"
                            type="email"
                            placeholder="Email Address"
                            aria-label="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div className="col-12">
                          <input
                            className="form-control"
                            type="Password"
                            placeholder="Password"
                            aria-label="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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
                        <div className="col-6 mt-2 mt-sm-3">
                          <Link
                            to="/login"
                            className="btn btn-primary w-100"
                          >
                            Login
                          </Link>
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
