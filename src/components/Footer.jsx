import React from "react";
import Gmail from "../assets/gmail.svg";
import World from "../assets/world.svg";
import Linkedin from "../assets/linkedin.svg";
import Github from "../assets/github.svg";

export default function Footer() {
  return (
    <footer className="bg-color1 d-flex align-items-center footer-container text-white">
      <div className="container">
        <div className="d-flex justify-content-between flex-wrap gap-4 footer-info">
          <div className="footer-description fs-5">
            <p className="fw-bold">compleet labs</p>
            <p className="text-secondary">
              Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
              nibh, ut fermentum massa justo sit amet risus. Donec ullamcorper
              nulla.
            </p>
            <div className="d-flex gap-4">
              <a
                href="mailto:elvio.galeano827@gmail.com"
                target="__blank"
                className="d-flex align-items-center gap-2 text-decoration-none fw-bold fs-5 text-link"
              >
                <img className="icon-footer" src={Gmail} />
              </a>
              <a
                href="https://galeanoelvio.vercel.app"
                target="__blank"
                className="d-flex align-items-center gap-2 text-decoration-none fw-bold fs-5 text-link"
              >
                <img className="icon-footer" src={World} />
              </a>
              <a
                href="https://www.linkedin.com/in/elviogaleano-fullstack-developer/"
                target="__blank"
                className="d-flex align-items-center gap-2 text-decoration-none fw-bold fs-5 text-link"
              >
                <img className="icon-footer" src={Linkedin} />
              </a>
              <a
                href="https://github.com/elviog1"
                target="__blank"
                className="d-flex align-items-center gap-2 text-decoration-none fw-bold fs-5 text-link"
              >
                <img className="icon-footer" src={Github} />
              </a>
            </div>
          </div>
          <div className="d-flex gap-5 fs-5 flex-wrap ">
            <div className="d-flex flex-column gap-2">
              <p className="fw-semibold">SITEMAP</p>
              <a
                href="#"
                className="navbar-link text-secondary list-group-item"
              >
                Home
              </a>
              <a
                href="#"
                className="navbar-link text-secondary list-group-item"
              >
                Technology
              </a>
              <a
                href="#"
                className="navbar-link text-secondary list-group-item"
              >
                Services
              </a>
              <a
                href="#"
                className="navbar-link text-secondary list-group-item"
              >
                About
              </a>
            </div>
            <div className="d-flex flex-column gap-2">
              <p className="fw-semibold">CASE STUDIES</p>
              <a
                href="#"
                className="navbar-link text-secondary list-group-item"
              >
                Swiss Airlines
              </a>
              <a
                href="#"
                className="navbar-link text-secondary list-group-item"
              >
                Google
              </a>
              <a
                href="#"
                className="navbar-link text-secondary list-group-item"
              >
                Apple
              </a>
              <a
                href="#"
                className="navbar-link text-secondary list-group-item"
              >
                Nike
              </a>
            </div>
            <div className="d-flex flex-column gap-2">
              <p className="fw-semibold">CONTACT</p>
              <a
                href="#"
                className="navbar-link text-secondary pe-auto list-group-item"
              >
                Jobs
              </a>
              <a
                href="#"
                className="navbar-link text-secondary list-group-item"
              >
                Hire us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
