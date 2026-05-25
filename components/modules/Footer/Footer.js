import React from "react";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as SolidIcons from "@fortawesome/free-solid-svg-icons";
import * as BrandIcons from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="container-fluid footer text-white mt-5 pt-5 px-0 position-relative overlay-top">
      <div className="row mx-0 pt-5 px-sm-3 px-lg-5 mt-4">
        <div className="col-lg-3 col-md-6 mb-5">
          <h4 className="text-white text-uppercase mb-4">Get In Touch</h4>
          <p>
            <FontAwesomeIcon
              className="mr-2"
              icon={SolidIcons.faMapMarkedAlt}
            />
            +012 345 67890
          </p>
          <p>
            <FontAwesomeIcon className="mr-2" icon={SolidIcons.faEnvelope} />
            info@example.com
          </p>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
          <h4 className="text-white text-uppercase mb-4">Follow Us</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
            labore rerum velit
          </p>
          <div className="d-flex justify-content-start">
            <a
              className="btn btn-lg btn-outline-light btn-lg-square mr-2"
              href="#"
            >
              <FontAwesomeIcon icon={BrandIcons.faTwitter} />
            </a>
            <a
              className="btn btn-lg btn-outline-light btn-lg-square mr-2"
              href="#"
            >
              <FontAwesomeIcon icon={BrandIcons.faFacebookF} />
            </a>
            <a
              className="btn btn-lg btn-outline-light btn-lg-square mr-2"
              href="#"
            >
              <FontAwesomeIcon icon={BrandIcons.faLinkedinIn} />
            </a>
            <a
              className="btn btn-lg btn-outline-light btn-lg-square mr-2"
              href="#"
            >
              <FontAwesomeIcon icon={BrandIcons.faInstagram} />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
          <h4
            className="text-white text-uppercase mb-4"
            style={{ letterSpacing: "3px" }}
          >
            Open Hours
          </h4>
          <div>
            <h6 className="text-white text-uppercase">Monday - Friday</h6>
            <p>8.00 AM - 8.00 PM</p>
            <h6 className="text-white text-uppercase">Saturday - Sunday</h6>
            <p>2.00 PM - 8.00 PM</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
          <h4
            className="text-white text-uppercase mb-4"
            style={{ letterSpacing: "3px" }}
          >
            Newsletter
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            natus corporis rerum
          </p>
          <div className="w-100">
            <div className="input-group">
              <input
                type="text"
                className="form-control border-light"
                style={{ padding: "25px" }}
                placeholder="Your Email"
              />
              <div className="input-group-append">
                <button className="btn btn-primary font-weight-bold px-3">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid text-center text-white border-top mt-4 py-4 px-sm-3 px-md-5"
        style={{ borderColor: "rgba(256,256,256,.1) !important" }}
      >
        <p className="mb-2 text-white">
          Copyright @{" "}
          <a className="font-weight-bold" href="#">
            Domain{" "}
          </a>
          2026
        </p>
      </div>
    </div>
  );
}

export default Footer;
