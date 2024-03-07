import React from "react";
import "../assets/css/demo_1/style.css";
import "../assets/vendors/mdi/css/materialdesignicons.min.css";
import "../assets/vendors/flag-icon-css/css/flag-icon.min.css";
import "../assets/vendors/css/vendor.bundle.base.css";
import Logo from "../images/icon.png";
import { Link } from "react-router-dom";
import './Sidebar.css';

const Sidebar = () => {
  return (
    <>
      <nav className="sidebar float-start" id="sidebar">
        <ul className="nav ">
          <li className="nav-item nav-profile border-bottom">
            <a href="#" className="nav-link flex-column">
              <div className="nav-profile-image">
                <img src={Logo} alt="profile" />
              </div>
              <div className="nav-profile-text d-flex ms-0 mb-3 flex-column">
                <span className="font-weight-bold mb-1 mt-2 text-center">
              <span className="highlight" >Placement</span> Manager
                </span>
              </div>
            </a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/Home'>
                <i className="mdi mdi-home menu-icon"></i>
                <span className="menu-title">Home</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/Profile'>
              <i className="mdi mdi-account-box-outline menu-icon"></i>
              <span className="menu-title">Profile</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/Projects'>
              <i className="mdi mdi-airplay menu-icon"></i>
              <span className="menu-title">Job Profiles</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/Chatbot'>
                <i className="mdi mdi-robot menu-icon"></i>
                <span className="menu-title">Chatbot</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/Login'>
              <i className="mdi mdi-logout-variant menu-icon"></i>
              <span className="menu-title">LogOut</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
