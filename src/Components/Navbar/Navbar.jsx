import React, { useState, useEffect } from "react";
import logo from "./images/gps_tiger_logo.png";
import burger from "./images/burger.svg";
import "./navbar.scss";

function Topnav() {
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="top-nav">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="left-side">
          <p>GPS TRACKING</p>
          <button className="cta">GPSTIGER DEALERS</button>
        </div>
        <div className="right-side">
          <ul className="list-items">
            <li>
              <div className="dropdown-menu">
                <div
                  className="dropdown-btn"
                  onClick={() => setIsActive(!isActive)}
                >
                  Support
                </div>
                <span className="caret-down"><i class="fa fa-caret-up" aria-hidden="true"></i></span>
                {isActive && (
                  <div className="dropdown-content">
                    <div className="dropdown-item">FMT100</div>
                    <div className="dropdown-item">OBD Tracker</div>
                    <div className="dropdown-item">Magneet Tracker</div>
                  </div>
                )}
              </div>
            </li>
            <li>
              <a href="#">Dealer</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a className="log-in-cta" href="#">
                Inloggen
              </a>
            </li>
          </ul>
        </div>
        <div className="burger-menu">
          <img
            src={burger}
            alt="burger menu icon"
            onClick={
              () => setIsOpen(!isOpen)
            }
          />
        </div>
      </nav>
      { /* ======================= SECOND NAV ============================== */ }
      <nav className="second-nav">
        <ul className="second-nav-items">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">OVER GPS TIGER</a>
          </li>
          <li>
            <a href="#">Platform</a>
          </li>
          <li>
            <a href="#">Hardware</a>
          </li>
          <li>
            <a href="#">Prijzen</a>
          </li>
        </ul>
        <div className="buttons">
          <button className="btn-1">Klant worden</button>
          <button className="btn-2">Tracker activeren</button>
        </div>
      </nav>
      {isOpen && (
        <nav className="responsive" style={{ position: "absolute", zIndex: 1 }}>
          <ul className="responsive-list">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">OVER GPS TIGER</a>
          </li>
          <li>
            <a href="#">Platform</a>
          </li>
          <li>
            <a href="#">Hardware</a>
          </li>
          <li>
            <a href="#">Prijzen</a>
          </li>
        </ul>
        </nav>
      )}
    </>
  );
}

export default Topnav;
