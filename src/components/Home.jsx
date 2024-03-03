import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home">
        {/* <!-- navbar begin --> */}
        <nav className="navbar  navbar-expand-lg">
          <div className="container Navbar">
            <a className="navbar-brand" href="#">
              <i className="fa-solid fa-user-graduate icon"></i>Placement
              Manager
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#services">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about-section">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/login"}>
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* <!-- navbar end --> */}

        {/* <!-- main section begin --> */}

        <section className="bg-main bg-color main-section">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-6 d-flex flex-column justify-content-center align-item-start">
                <h1 className="text-capitalize">
                  The Ultimate <span className="high-text">Placement</span>{" "}
                  Management System
                </h1>
                <p className="text-capitalize">
                  Bridging the gap between students and companies
                </p>

                <div className="text-capitalize text-center d-flex align-item-start">
                  <button className="btn btn-primary lm-btn" href="#services">
                    <a href="#services">Learn more</a>
                  </button>
                  <button className="btn btn-primary">Get started</button>
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-6 d-flex flex-column justify-content-center align-item-start">
                <div className="text-center main-section-img">
                  <img src="/images/placement.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- main section end --> */}

        {/* <!-- services section begin  --> */}

        <section className="services-section" id="services">
          <div className="container text-center common-title fw-bold">
            <h2 className="common-heading">
              Here's a list of <span className="high-text">Services</span>{" "}
              <br /> We Provide{" "}
            </h2>
            <hr className="w-25 mx-auto" />
          </div>
          <div className="container mt-5">
            <div className="row g-5">
              <div className="col-12 col-lg-4 col-md-12">
                <div className="text-center card-box rounded-2 p-5 ">
                  <i className="fa-regular fa-newspaper"></i>

                  <h5 className="my-3 fw-normal">AI-Resume Analysis</h5>

                  <p className="mb-5">
                    The system utilizes artificial intelligence to analyze and
                    scan resumes, ensuring that students' profiles align
                    effectively with employer expectations.
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-4 col-md-12">
                <div className="text-center card-box rounded-2 p-5 ">
                  <i className="fa-solid fa-user-graduate"></i>

                  <h5 className="my-3 fw-normal">Placement Assistance</h5>

                  <p className="mb-5">
                    The website provides a centralized platform for students to
                    manage their profiles, explore job opportunities, and
                    seamlessly apply for positions.
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-4 col-md-12">
                <div className="text-center card-box rounded-2 p-5 ">
                  <i className="fa-brands fa-rocketchat"></i>

                  <h5 className="my-3 fw-normal">Personalized Chatbot</h5>

                  <p className="mb-5">
                    The website offers an innovative chatbot that operates 24/7
                    to provide personalized career guidance and assistance.{" "}
                    <a href="/Chatbot UI/index.html">Preview</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- services section end --> */}

        {/* <!-- about section begin --> */}

        <section className="common-section about-section" id="about-section">
          <div className="container text-center common-title fw-bold">
            <h1 className="common-heading">
              About the <span className="high-text">Creators</span>{" "}
            </h1>
            <hr className="w-25 mx-auto" />
          </div>
          <div className="container">
            <div className="row g-5">
              <div className="col-xl-6 col-md-12 about-card">
                <div className="d-flex  px-3 py-5 shadow ">
                  <img
                    alt="Image"
                    className=" d-md-block d-none  rounded-circle img-fluid mx-3 "
                    src="/images/akshay.png"
                    width="150px"
                  />

                  <div className="row ">
                    <h2 className=" fw-bolder">Akshay Chaturvedi </h2>
                    <p> Full-Stack Developer</p>
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-md-12 about-card">
                <div className="d-flex  px-3 py-5 shadow ">
                  <img
                    alt="Image"
                    className=" d-md-block d-none  rounded-circle img-fluid mx-3 "
                    src="/images/priyanshu.jpg"
                    width="150px"
                  />

                  <div className="row ">
                    <h2 className=" fw-bolder">Priyanshu Koshta</h2>
                    <p>Back-End Developer</p>
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-md-12 about-card">
                <div className="d-flex px-3 py-5 shadow ">
                  <img
                    alt="Image"
                    className=" d-md-block d-none rounded-circle img-fluid mx-3 "
                    src="/images/ashutosh.jpg"
                    width="150px"
                  />

                  <div className="row ">
                    <h2 className=" fw-bolder">Ashutosh Nema</h2>
                    <p>Front-End Developer</p>
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-md-12 about-card">
                <div className="d-flex  px-3 py-5 shadow ">
                  <img
                    alt="Image"
                    className=" d-md-block d-none  rounded-circle img-fluid mx-3"
                    src="/images/suyash.jpg"
                    width="150px"
                  />

                  <div className="row ">
                    <h2 className=" fw-bolder">Suyash Gupta</h2>
                    <p>Back-End Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!--about section end --> */}

        {/* <!-- contact section begin --> */}
        <section
          className="common-section contact-section  pt5 bg-color"
          id="contact"
        >
          <div className="container text-center common-title fw-bold">
            <h2 className="common-heading ">Contact Us</h2>
            <hr className="w-25 mx-auto" />
          </div>

          <div className="container">
            <div className="form-section mx-auto">
              <form>
                <div className="mb-3">
                  <div className="row">
                    <div className="col-12 col-lg-6">
                      <label className="form-label" for="first-name">
                        First name
                      </label>
                      <input
                        className="form-control"
                        placeholder="First name"
                        id="first-name"
                        required
                      />
                    </div>
                    <div className="col-12 col-lg-6">
                      <label className="form-label" for="first-name">
                        First name
                      </label>
                      <input
                        className="form-control"
                        placeholder="First name"
                        id="first-name"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        required
                        placeholder="Enter your email"
                        aria-describedby="emailHelp"
                      />
                      <div id="emailHelp" className="form-text emailHelp">
                        We'll never share your email with anyone else.
                      </div>
                    </div>
                    <div className="mb-3">
                      <label
                        for="exampleFormControlTextarea1"
                        className="form-label"
                      >
                        Message
                      </label>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        required
                        placeholder="Enter your message "
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="mb-3"></div>
                <button type="submit" className="send-btn">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
        {/* <!-- contact section end  --> */}

        {/* <!-- footer section begin  --> */}
        <footer className="main-footer-section bg-color">
          <div className="contact-details">
            <div className="footer-section py-5 text-white">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-6">
                    <div className="footer-links">
                      <h4 className=" mt-5 mb-3">Lets Connect</h4>
                      <ul className="text-light-grey list-unstyled d-flex flex-column gap-2">
                        <li>
                          <a href="mailto:akshaychaturvedi12345@gmail.com">
                            akshaychaturvedi12345@gmail.com
                          </a>
                        </li>
                        <li>
                          <a href="mailto:priuanshukoshta5@gmail.com">
                            priuanshukoshta5@gmail.com
                          </a>
                        </li>
                        <li>
                          <a href="ashutoshnema419@gmail.com">
                            ashutoshnema419@gmail.com
                          </a>
                        </li>
                        <li>
                          <a href="suyashgupta608@gmail.com">
                            suyashgupta608@gmail.com
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="footer-links">
                      <h4 className="mt-5 mb-3 ">Write a Review</h4>
                      <div className="input-group mb-3 w-75">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Describe what you like about the website"
                          aria-label="Recipient's username"
                          aria-describedby="basic-addon2"
                        />
                        <span
                          className="input-group-text btn btn-primary send-btn"
                          id="basic-addon2"
                        >
                          Send
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <hr className="container mx-auto" />

              <div className="row">
                <div className="d-flex align-item-center justify-content-center">
                  Made with &#10084; by
                  <span className="high-text mx-2">Akshay Chaturvedi</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* <!-- footer section end  --> */}
      </div>
    </>
  );
};

export default Home;
