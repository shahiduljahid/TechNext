import React from "react";
import "./Home.css";
import Navbar from "../../Navbar/Navbar";
import banner from "../../../Photos/we-believe-in-excellence.svg";
import headerMainBanner from "../../../Photos/5340018.jpg";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";

const Home = () => {
  return (
    <div>
      <header className="headerContainer mb-5">
        <div className="navbar-Container ">
          <Navbar></Navbar>
        </div>
        <div className="row justify-content-center"></div>
        <div className="col-md-4 col-10 m-auto  mt-5 pt-5">
          <img
            src={banner}
            alt="banner"
            className=" mb-5 mt-5 pt-5 img-fluid content"
          />

          <p className="text-light text-center  content">
            Since 2012, team TECHNEXT is helping individuals & companies design
            better products, web applications, mobile apps and data-driven
            services to win their games.
          </p>
        </div>
      </header>

      <div className="homeMain-Container mt-5 mb-5 pt-5">
        <div className="row justify-content-around">
          <div className="col-md-5 mb-5 mt-5 pt-5 col-10">
            <h1 className="tomato mb-5">Join At TechNext</h1>
            <p className="mb-3">
              If you’re interested in TechNext and interested to work here. we’d
              like to meet you! We offer a vibrant workplace with lot's of
              facilities, as well as a generous vacation plan and a flexible
              work schedule.
            </p>
            <Link to={"/admin"}>
              <button className="btn btn-color text-bold text-light">
                Try Yourself
              </button>
            </Link>
          </div>
          <div className="col-md-5 col-10">
            <img
              src={headerMainBanner}
              alt="headerMainBanner"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
