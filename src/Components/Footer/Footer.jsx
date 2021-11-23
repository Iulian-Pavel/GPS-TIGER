import React from "react";
import "./footer.scss";
import logo from "./images/logo.png";

class Footer extends React.Component {
  render() {
    return (
      <>
        <div className="footer">
          <div className="upper-footer">
            <ul className="social-links">
              <li>
                <a href="#">
                  <i class="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-youtube"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="text">
              Selecteer een taal voor de website Nederlands ↓
            </div>
          </div>
          <div className="lower-footer">
            <ul className="footer-links">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Over GPS Tiger</a>
              </li>
              <li>
                <a href="#">Platform</a>
              </li>
              <li>
                <a href="#">Prizjen</a>
              </li>
            </ul>
            <div className="disclaimers">
              <p>© GPSTIGER BV 2022. Alle rechten voorbehouden.</p>
              <a href="#">Privacy voorwaarden</a>
              <a href="#">Disclaimer</a>
              <a href="#">Algemene voorwaarden</a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Footer;
