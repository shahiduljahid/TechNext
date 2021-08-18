import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../Photos/techenxt-logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light p-2">
      <div className="container-fluid">
        <div className="align-items-center d-flex">
          <Link to={"/home"}>
            <img
              style={{ height: "40px" }}
              src={logo}
              alt=""
              className="img-fluid"
            />

            <span
              style={{ fontWeight: "bold", fontSize: "15px" }}
              className="text-light ms-1"
            >
              TechNext
            </span>
          </Link>
        </div>

        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto text-center d-flex align-items-center  mb-2 mb-lg-0">
            <li className="nav-item ">
              <Link
                to={"/home"}
                className="nav-link  me-5 text-light "
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li className="nav-item ">
              <Link to={"/admin"} className="nav-link me-5 text-light">
                Admin
              </Link>
            </li>
            <li className="nav-item ">
              <Link to={"employees"} className="nav-link me-5 text-light">
                Employees
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
