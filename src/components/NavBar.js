import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';


export default function NavBar({title = 'Set title', 
  aboutText = 'Set About Text', changeMode, theme}) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${theme} bg-${theme}`}>
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            {title}
          </NavLink>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" to="/" >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  {aboutText}
                </NavLink>
              </li>
            </ul>
            <div className={`form-check form-switch text-${theme === 'light'? 'dark': 'light'}`}>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={changeMode}
              />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

NavBar.prototype = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
}
