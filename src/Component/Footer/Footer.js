import {
  faFacebookF,
  faGooglePlusG,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="mt-5 pt-5">
      <div className="row  justify-content-between py-4 footer-container">
        <div className="col-md-5 m-auto  copyRight-Content text-light">
          Copyright © 2012-{new Date().getFullYear()} TECHNEXT™ LIMITED
        </div>

        <div className="col-md-5  text-light">
          <div className="d-flex justify-content-center">
            <small className="text-secondary">connect with us </small>

            <FontAwesomeIcon
              style={{ fontSize: "20px" }}
              className="ms-2 me-3  text-color  "
              icon={faFacebookF}
            />
            <FontAwesomeIcon
              style={{ fontSize: "20px" }}
              className=" me-3  text-color   "
              icon={faTwitter}
            />
            <FontAwesomeIcon
              style={{ fontSize: "20px" }}
              className=" me-3 text-color  "
              icon={faGooglePlusG}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
