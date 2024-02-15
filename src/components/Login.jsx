import React from "react";
import "./Login.css";
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";

const Login = () => {
  return (
    <>
      <div className="container login">
        <div className="row">
          <div className="col-12 col-lg-4 left">
            <div className="logo ">
              <FontAwesomeIcon icon="fa-solid fa-user-graduate" />
              <h1>Placement <br /> Manager</h1>
            </div>
            <h3>Campus Recruitment Platform</h3>
            <p>Bridging the Gap between Education and Employment</p>
          </div>
          <div className="col-12 col-lg-8 right">
            <div className="login-signup">
              <div className="login">Login</div>
              <div className="signup">Signup</div>
            </div>
            <form action="">
              <button className="btn google">
                <FontAwesomeIcon icon="fa-solid fa-google" />
                <span>Continue with Google</span>
              </button>
              <div className="or">
                <hr />
                <span>OR</span>
                <hr />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <button type="submit" className="btn login-btn">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
