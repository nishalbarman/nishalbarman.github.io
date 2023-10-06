import React from "react";
import "./Footer.css";

function Footer() {
  const handleTopScroll = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
  };

  return (
    <div id="footer">
      <div className="footer">
        <div className="top_footer">
          <div className="first_footer">
            <p className="footer_heading">About Me</p>
            <p>
              An aspiring Full-Stack Web Developer based in India,working on
              frontend and backend Technologies including HTML, CSS, JavaScript,
              React, Redux, NodeJS, ExpressJS & MongoDB.
            </p>
          </div>

          <div className="second_footer">
            <p className="footer_heading">Contact Me</p>

            <p id="contact-email">nishalbarman11@gmail.com</p>
            <p id="contact-phone">+916001845099</p>
          </div>

          {/* <div className="third_footer">
            <p className="footer_heading">Quick Links</p>
            <p>Projects</p>
            <p>Services</p>
            <p>Contact Us</p>
            <p>About US</p>
          </div> */}

          <div className="fourth_footer">
            <p className="footer_heading">Follow Me</p>
            {/* <input type="email" placeholder="Email Address" />
            <button>Subscribe</button> */}
            <div className="social_footer_btn">
              <i
                onClick={() => {
                  window.open("https://github.com/nishalbarman", "_blank");
                }}
                id="contact-github"
                className="fa-brands fa-github"
                style={{ color: "rgb(152,152,152)" }}
              />

              <i
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/nishal-barman-76a13b295/",
                    "_blank"
                  );
                }}
                id="contact-linkedin"
                className="fa-brands fa-linkedin-in"
                style={{ color: "rgb(152,152,152)" }}
              />
            </div>
          </div>

          <i
            onClick={handleTopScroll}
            id="fifth_footer"
            className="fa-solid fa-angle-up"
            style={{ color: "white" }}
          />
        </div>
        <div className="footer_bottom">
          <div className="logo">
            <h1 className="logo-text" style={{ color: "white" }}>
              Nishal Barman
            </h1>
            {/* <img src={webLogo} alt="bartalap.in" style={{ height: "100px" }} /> */}
          </div>
          <div className="bottom-copyright">
            <p>
              Copyrights @ 2023{" "}
              <span
                style={{
                  color: "white",
                  textTransform: "uppercase",
                  textDecoration: "1px dotted white underline",
                }}>
                Nishal Barman
              </span>
            </p>
            <p>All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
