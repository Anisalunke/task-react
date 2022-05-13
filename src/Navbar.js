import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <>
      <section className="navbar-bg">
        <nav className="navbar navbar-expand-lg navabr-light">
          <div className="container">
            <a href="/" className="navbar-brand">
              Task for Vmentor.ai
            </a>
            <ul className="navbar-nav mr-auto">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="form-button">
                {" "}
                <Link to="/form">Form</Link>
              </li>
            </ul>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
