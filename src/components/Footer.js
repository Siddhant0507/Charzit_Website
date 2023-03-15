import React from "react";
import "./footer.css";
// import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="row">
          <div className="column">
            <img className="logo" src="../Charzit1.png" alt="img" />
          </div>

          <div className="column">
            <h3>Learn More</h3>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Privacy Policy</p>
          </div>

          <div className="column">
            <h3>Contact Us</h3>
            <p>Email : contact@charzit.com</p>
            <p>Contact No. : 7276136717</p>
          </div>

          <div className="column">
            <h3>Social Media</h3>
            <a href="https://www.linkedin.com/company/charzit/about/">
              <p className="social">
                <BsLinkedin />
              </p>
            </a>
            <a href="https://www.instagram.com/charz_it/"> <p className="social">
              <BsInstagram />
            </p></a>
           
            <p className="social">
              <BsTwitter />
            </p>
          </div>
        </div>
        <div className="footer-line"></div>
      </footer>
    </>
  );
}

export default Footer;
