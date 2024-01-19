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
          <div className="second_footer">
            <p className="footer_heading">Contact Me</p>

            <p id="contact-email">
              <a href="mailto:nishalbarman11@gmail.com?subject=Hey, Nishal">
                nishalbarman11@gmail.com
              </a>
            </p>
            {/* <p id="contact-phone">
              <a href="tel:+916001845099">+916001845099</a>
            </p> */}
          </div>

          <div className="fourth_footer">
            <p className="footer_heading">Follow Me</p>
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
                    "https://www.linkedin.com/in/nishal-barman-3545111b5/",
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
      </div>
    </div>
  );
}

export default Footer;
