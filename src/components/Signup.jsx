import React from "react";
import "./Login.css";

const Signup = () => {
  return (
    <>
      <div className="container signup">
        <div className="row">
          <div className="col-12 col-lg-4 left">
            <div className="logo ">
              <h1>
                Placement <br /> Manager
              </h1>
            </div>
            <h3>Campus Recruitment Platform</h3>
            <p>Bridging the Gap between Education and Employment</p>
          </div>
          <div className="col-12 col-lg-8 right">
            <div className="login-signup">
            <div className="login"><Link to={'/login'}>Login</Link></div>
              <div className="signup"><Link to={'/signup'}>Signup</Link></div>
            </div>
            <form action="">
              <button className="btn google">
                <i className="fa-brands fa-google mx-2"></i>
                <span>Continue with Google</span>
              </button>
              <div className="or">
                <hr />
                <span>OR</span>
                <hr />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="UserName"
                />
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
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Repeat Password"
                />
              </div>
              <button type="submit" className="btn signup-btn">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
