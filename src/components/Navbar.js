// rfc->
// import React from 'react';
// export default function Navbar() {
//   return (
//     <div>

//     </div>
//   );
// }

// impt-> import PropTypes from 'prop-types'

// pts-> PropTypes.string

import React from "react"; // rfc
import PropTypes from "prop-types"; // impt
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand text-danger" to="/">
          {props.title}
        </Link>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                {props.home}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/">
                    Action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Another action
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>{" "}
                {/*Here i closed hr tag like this <hr/>. Earlier it was <hr>. Similarly do for all tags which are not closed*/}
                <li>
                  <Link className="dropdown-item" to="/">
                    Something else here
                  </Link>
                </li>
              </ul>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link disabled" aria-disabled="true" to="/">
                Disabled
              </Link>
            </li> */}
          </ul>

          <button
            type="button"
            className="btn mx-1"
            style={{ color: "black", backgroundColor: "Gray" }}
            onClick={props.removePalletMode}
          >
            Remove pallet and normalize mode
          </button>

          <div className="d-flex mx-1">
            <div
              className="bg-light rounded mx-2"
              // inside onclick we put a function not a function call.
              onClick={() => {
                props.applyPalletMode("light");
              }}
              style={{
                height: "20px",
                width: "20px",
                cursor: "pointer",
                border: "1px solid black",
              }}
            ></div>
            <div
              className="bg-primary rounded mx-2"
              // inside onclick we put a function not a function call.
              onClick={() => {
                props.applyPalletMode("primary");
              }}
              style={{ height: "20px", width: "20px", cursor: "pointer" }}
            ></div>
            <div
              className="bg-danger rounded mx-2"
              onClick={() => {
                props.applyPalletMode("danger");
              }}
              style={{ height: "20px", width: "20px", cursor: "pointer" }}
            ></div>
            <div
              className="bg-success rounded mx-2"
              onClick={() => {
                props.applyPalletMode("success");
              }}
              style={{ height: "20px", width: "20px", cursor: "pointer" }}
            ></div>
            <div
              className="bg-warning rounded mx-2"
              onClick={() => {
                props.applyPalletMode("warning");
              }}
              style={{ height: "20px", width: "20px", cursor: "pointer" }}
            ></div>
          </div>

          <div
            className={`form-check form-switch text-${
              props.mode === "dark" ? "light" : "dark"
            } mx-2`}
          >
            <input
              className="form-check-input mx-1"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              className="form-check-label mx-1"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Dark Mode
            </label>
          </div>

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired, // isRequired defines that this prop should be passed or should be given Link defaultProp. If not throws error.
  aboutText: PropTypes.string.isRequired,
  // if some prop is not marked isRequired and we dont pass the prop. That will not throw error but that prop will not be rendered itself.
};

Navbar.defaultProps = {
  home: "MyHome",
  aboutText: "About Us",
};
