import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    const { handleCategoryChange } = this.props; // Receive the prop for category change
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            NewsHub
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => handleCategoryChange("general")}>
                  General
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => handleCategoryChange("business")}>
                  Business
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => handleCategoryChange("sports")}>
                  Sports
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => handleCategoryChange("technology")}>
                  Technology
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => handleCategoryChange("health")}>
                  Health
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => handleCategoryChange("science")}>
                  Science
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
