import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Spacer,
  StackDivider,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./HomePage.module.css";
import axios from "axios";
import { ImSortAlphaAsc, ImSpinner10 } from "react-icons/im";
import { useToast } from "@chakra-ui/react";
import my_image from "../../Images/myimage.png";
import secret_message from "../../Images/projects/secret_message.png";
import react_news_app from "../../Images/projects/news.png";
import auto_part from "../../Images/projects/auto_part.png";
import consultant from "../../Images/projects/consultant.png";
import { setRefer } from "../../Redux/smoothscroll/action-creators";
import { useSelector } from "react-redux";
import GitHubCalendar from "react-github-calendar";
import Typewriter from "typewriter-effect";
import "../contactus/Contact.css";
import resume_pdf from "../../Resume/Nishal_Barman_Resume.pdf";
import Tilt from "react-parallax-tilt";

function HomePage() {
  const setRef = useSelector((state) => state.refer_reducer);

  const navigate = useNavigate();

  var emailTester =
    /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

  const server_api = process.env.REACT_APP_SERVER_API;

  const [sending, setSending] = useState(false);

  const initialFormData = {
    name: "",
    message: "",
    email: "",
    phone: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const toast = useToast();

  const sendMessage = async () => {
    const error = [];

    if (!formData.name || formData.name.length <= 2) {
      error.push("Name required and must be of 3 characters or more!");
    }

    if (!formData.email || !emailTester.test(formData.email)) {
      error.push("Email must be valid!");
    }

    if (!formData.message || formData.message.length < 11) {
      error.push("Message required and must be atleast 10 characters!");
    }

    if (!formData.phone || formData.phone.toString().length !== 10) {
      error.push("Phone required and must be of 10 digit!");
    }

    if (error.length > 0) {
      toast({
        title: "Validation failed",
        description: error.join(", "),
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    try {
      setSending(true);
      const res = await axios.post(
        `https://portfollio-server.onrender.com/messages/create`,
        formData
      );
      console.log(res);
      if (res.status === 200) {
        setFormData(initialFormData);
        toast({
          title: "Message submitted!",
          description:
            "Your message has been sent, I will get back to you soon. Thank You!",
          status: "success",
          duration: 9000,
          isClosable: true,
          position: "top",
        });
      } else {
        toast({
          title: "Message sent failed!",
          status: "warning",
          duration: 9000,
          isClosable: true,
          position: "top",
        });
      }
      setSending(false);
    } catch (err) {
      setSending(false);
      console.error("Axios error => ", err);
      toast({
        title: "Message sent failed!",
        status: "warning",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    }
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const homeRef = useRef();
  const aboutRef = useRef();
  const skillsRef = useRef();
  const projectRef = useRef();
  const contactRef = useRef();

  // word animation starts here

  // word animation ends

  useEffect(() => {
    if (typeof setRef === "function")
      setRef(homeRef, aboutRef, skillsRef, projectRef, contactRef);
  }, [setRef]);

  return (
    <>
      <Box my={"75px"}></Box>

      <div
        id="home"
        className={`${styles.section_wrapper} ${styles.very_first_info}`}>
        <div className={styles.names_wrapper}>
          <div className={styles.details_wrapper} ref={homeRef}>
            <div className={styles.name_wrapper_inner}>
              <p
                id="user-detail-name"
                className={`${styles.first_sec_heading} ${styles.name}`}>
                Hey,{" "}
              </p>
              <div>
                <Typewriter
                  options={{
                    loop: true,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Welcome")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("I am Nishal Barman")
                      .pauseFor(2000)
                      .deleteAll()
                      .start();
                  }}
                />
              </div>
            </div>

            <p id="user-detail-intro">
              An aspiring Full-Stack Web Developer based in India,working on
              frontend and backend Technologies including HTML, CSS, JavaScript,
              React, Redux, NodeJS, ExpressJS & MongoDB.
            </p>

            {/* download resume button */}
            <Button
              id="resume-button-2"
              onClick={() => {
                const link = document.createElement("a");
                link.download = "Nishal-Barman-Resume.pdf";
                link.href = resume_pdf;
                link.click();
              }}
              colorScheme="twitter"
              py={"1.7rem"}
              w={"170px"}
              my={"1rem"}>
              Resume
            </Button>
          </div>
        </div>
      </div>

      {/* about me page  */}
      <div
        id="about"
        ref={aboutRef}
        className={`${styles.section_wrapper} ${styles.about_section} about section`}>
        <img
          className={`${styles.right_image} ${styles.profile_image} home-img`}
          src={my_image}
          alt=""
        />
        <div className={styles.details_wrapper}>
          <p style={{ fontSize: "28px", marginBottom: "-15px" }}>About Me</p>
          <p id="user-detail-intro" className={`${styles.introduction}`}>
            Hey everyone, I am Nishal Barman from Assam, India. An Aspiring Full
            Stack Web Developer, with specialization in MERN Stack.
            Additionally,I have learnt Data Structures and gained expertise in
            HTML, CSS, and JavaScript. I want to utilize my skills for
            development and to work in a highly competitive environment to seek
            solutions for problems, learn adaptability skills, create
            exceptional value and maximize my shell of experience thus
            developing a successful attitude towards living on the edge and
            become globally in demand.
          </p>
        </div>
      </div>
      <Box my={"80px"}></Box>

      {/* skills card */}
      <div id="skills" ref={skillsRef} className={`${styles.services_wrapper}`}>
        <p className={styles.service_heading}>List of Tech & Tools I Used</p>
        <div className={`${styles.skill_grid} `}>
          <div className={`${styles.skills_card} skills-card`}>
            <img
              className="skills-card-img"
              src="https://christianbiadnes.com/assets/html5-e1e4ccb3.svg"
              alt=""
            />
            <p className="skills-card-name">HTML</p>
            <p>
              HTML is a markup language used by the browser to manipulate text,
              images, and other content, in order to display it in the required
              format.
            </p>
          </div>

          <div className={`${styles.skills_card} skills-card`}>
            <img
              className="skills-card-img"
              src="https://christianbiadnes.com/assets/css3-b4de7545.svg"
              alt=""
            />
            <p className="skills-card-name">CSS</p>
            <p>
              Cascading Style Sheets is a style sheet language used for
              describing the presentation of a document written in a markup
              language such as HTML or XML.
            </p>
          </div>

          <div className={`${styles.skills_card} skills-card`}>
            <img
              className="skills-card-img"
              src="https://christianbiadnes.com/assets/javascript-348a59a3.svg"
              alt=""
            />
            <p className="skills-card-name">JavaScript</p>
            <p>
              JavaScript is a scripting language that enables you to create
              dynamically updating content, control multimedia, animate images,
              and pretty much everything else.
            </p>
          </div>

          <div className={`${styles.skills_card} skills-card`}>
            <img
              className="skills-card-img"
              src="https://christianbiadnes.com/assets/react-861e5e86.svg"
              alt=""
            />
            <p className="skills-card-name">React JS</p>
            <p>
              JavaScript is a scripting language that enables you to create
              dynamically updating content, control multimedia, animate images,
              and pretty much everything else.
            </p>
          </div>

          <div className={`${styles.skills_card} skills-card`}>
            <img
              className="skills-card-img"
              src="https://redux.js.org/img/redux-logo-landscape.png"
              alt=""
            />
            <p className="skills-card-name">Redux</p>
            <p>
              JavaScript is a scripting language that enables you to create
              dynamically updating content, control multimedia, animate images,
              and pretty much everything else.
            </p>
          </div>

          <div className={`${styles.skills_card} skills-card`}>
            <img
              className="skills-card-img"
              src="https://youteam.io/blog/wp-content/uploads/2022/04/expressjs_logo.png"
              alt=""
            />
            <p className="skills-card-name">Express</p>
            <p>
              JavaScript is a scripting language that enables you to create
              dynamically updating content, control multimedia, animate images,
              and pretty much everything else.
            </p>
          </div>

          <div className={`${styles.skills_card} skills-card`}>
            <img
              className="skills-card-img"
              src="https://i0.wp.com/tw.alphacamp.co/wp-content/uploads/2022/12/60e828d815c1ffbc7ee86743_5da911dbd21c06c44f5791b6_Nodejs-blog-feature-img.jpeg?fit=750%2C500&ssl=1"
              alt=""
            />
            <p className="skills-card-name">Node JS</p>
            <p>
              JavaScript is a scripting language that enables you to create
              dynamically updating content, control multimedia, animate images,
              and pretty much everything else.
            </p>
          </div>

          <div className={`${styles.skills_card} skills-card`}>
            <img
              className="skills-card-img"
              src="https://yt3.googleusercontent.com/ytc/APkrFKaHsr84SPxLOJUSMYHDmTQg0xzYdOn8wKHFaLxD8w=s900-c-k-c0x00ffffff-no-rj"
              alt=""
            />
            <p className="skills-card-name">Redis</p>
            <p>
              JavaScript is a scripting language that enables you to create
              dynamically updating content, control multimedia, animate images,
              and pretty much everything else.
            </p>
          </div>

          <div className={`${styles.skills_card} skills-card`}>
            <img
              className="skills-card-img"
              src="https://i1.wp.com/www.ux-republic.com/wp-content/uploads/2018/03/socket.png?fit=375%2C375&ssl=1"
              alt=""
            />
            <p className="skills-card-name">Socket.io</p>
            <p>
              JavaScript is a scripting language that enables you to create
              dynamically updating content, control multimedia, animate images,
              and pretty much everything else.
            </p>
          </div>

          <div className={`${styles.skills_card} skills-card`}>
            <img
              className="skills-card-img"
              src="https://christianbiadnes.com/assets/github-c97b06ab.svg"
              alt=""
            />
            <p className="skills-card-name">GitHub</p>
            <p>
              JavaScript is a scripting language that enables you to create
              dynamically updating content, control multimedia, animate images,
              and pretty much everything else.
            </p>
          </div>
        </div>
      </div>

      <Box my={"80px"}></Box>

      {/* projects card  */}
      <div id="projects" ref={projectRef} className={styles.services_wrapper}>
        <p className={styles.service_heading}>Projects</p>
        <div className={styles.grid_section}>
          <Tilt>
            <div className={`${styles.service_card} project-card`}>
              <img
                src={secret_message}
                alt=""
                style={{ marginBottom: "30px" }}
              />
              <div className={styles.service_body}>
                <p className="project-title">
                  <a
                    className="project-deployed-link"
                    href="https://secret-msg-test.netlify.app/"
                    target="_blank">
                    Secret Messaging
                  </a>
                </p>
                <a
                  className="project-github-link"
                  href="https://github.com/nishalbarman/secret-message-react"
                  target="_blank">
                  Gitub Link
                </a>
                <p className="project-description">
                  A comprehensive full-stack project that enables users to
                  register and share their unique links to receive anonymous
                  messages.
                </p>

                <div
                  className={`${styles.tech_stack_outer} project-tech-stack`}>
                  <p>Tech Stack</p>
                  <ul className="">
                    <li>ReactJS</li>
                    <li>ExpressJS</li>
                    <li>MongoDB</li>
                    <li>socket.io</li>
                  </ul>
                </div>
              </div>
            </div>
          </Tilt>
          <Tilt>
            <div className={`${styles.service_card} project-card`}>
              <img
                src={react_news_app}
                alt=""
                style={{ marginBottom: "30px" }}
              />
              <div className={styles.service_body}>
                <p className="project-title">
                  <a
                    className="project-deployed-link"
                    href="https://nishalbarman.github.io/react-newss-app/"
                    target="_blank">
                    Axom News
                  </a>
                </p>
                <a
                  className="project-github-link"
                  href="https://github.com/nishalbarman/react-newss-app"
                  target="_blank">
                  Gitub Link
                </a>
                <p className="project-description">
                  Crafted a single-page fronend project using ReactJS. Leveraged
                  the Context API for state management, ensuring seamless data
                  handling.
                </p>
                <div
                  className={`${styles.tech_stack_outer} project-tech-stack`}>
                  <p>Tech Stack</p>
                  <ul className="">
                    <li>ReactJS</li>
                    <li>Json Mock Server</li>
                    <li>HTML, CSS</li>
                    <li>Swiper JS</li>
                  </ul>
                </div>
              </div>
            </div>
          </Tilt>
          <Tilt>
            <div className={`${styles.service_card} project-card`}>
              <img src={auto_part} alt="" style={{ marginBottom: "30px" }} />
              <div className={styles.service_body}>
                <p className="project-title">
                  <a
                    className="project-deployed-link"
                    href="https://auto-part.netlify.app/"
                    target="_blank">
                    Online Auto Part Shop
                  </a>
                </p>
                <a
                  className="project-github-link"
                  href="https://github.com/nishalbarman/online-auto-part-shop"
                  target="_blank">
                  Gitub Link
                </a>
                <p className="project-description">
                  Collaboratively led a team of four members in the end-to-end
                  creation of a website dedicated to online auto part sales.
                </p>
                <div
                  className={`${styles.tech_stack_outer} project-tech-stack`}>
                  <p>Tech Stack</p>
                  <ul className="">
                    <li>Vannila JavaScript</li>
                    <li>Json Mock Server</li>
                    <li>HTML, CSS</li>
                    <li>Splide</li>
                  </ul>
                </div>
              </div>
            </div>
          </Tilt>
          <Tilt>
            <div className={`${styles.service_card} project-card`}>
              <img src={consultant} alt="" style={{ marginBottom: "30px" }} />
              <div className={styles.service_body}>
                <p className="project-title">
                  <a
                    className="project-deployed-link"
                    href="https://webconsultant-s.netlify.app/"
                    target="_blank">
                    WebService Consultant
                  </a>
                </p>
                <a
                  className="project-github-link"
                  href="https://github.com/nishalbarman/webservice-consultant"
                  target="_blank">
                  Gitub Link
                </a>
                <p className="project-description">
                  Single-page fully responsive fronend project using ReactJS
                  with a simple backend to recieve the messages.
                </p>
                <div
                  className={`${styles.tech_stack_outer} project-tech-stack`}>
                  <p>Tech Stack</p>
                  <ul className="">
                    <li>ReactJS</li>
                    <li>ExpressJS</li>
                    <li>ChakraUI</li>
                  </ul>
                </div>
              </div>
            </div>
          </Tilt>
        </div>
      </div>

      <Box my={"80px"}></Box>

      {/* github calendar and sticks */}

      <div id="github-stats" className={styles.services_wrapper}>
        <p className={styles.service_heading}>Github Stats</p>

        <div className={`${styles.github_grid_section}`}>
          <picture className={styles.pictures}>
            <source
              srcSet="https://github-readme-streak-stats.herokuapp.com?user=nishalbarman&date_format=j%20M%5B%20Y%5D&theme=dark"
              media="(prefers-color-scheme: dark)"
            />
            <source
              srcSet="https://github-readme-streak-stats.herokuapp.com?user=nishalbarman&date_format=j%20M%5B%20Y%5D&theme=dark"
              media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
            />
            <img
              id="github-streak-stats"
              src="https://github-readme-streak-stats.herokuapp.com?user=nishalbarman&date_format=j%20M%5B%20Y%5D&theme=dark"
            />
          </picture>

          <picture className={styles.pictures}>
            <source
              srcSet="https://github-readme-stats.vercel.app/api?username=nishalbarman&theme=dark)"
              media="(prefers-color-scheme: dark)"
            />
            <source
              srcSet="https://github-readme-stats.vercel.app/api?username=nishalbarman&show_icons=true&theme=dark"
              media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
            />
            <img
              id="github-stats-card"
              src="https://github-readme-stats.vercel.app/api?username=nishalbarman&theme=dark"
            />
          </picture>
        </div>

        <GitHubCalendar
          username="nishalbarman"
          labels={{
            totalCount: "{{count}} contributions in the last half year",
          }}
        />

        <picture className={styles.pictures}>
          <source
            srcSet="https://github-readme-stats.vercel.app/api/top-langs/?username=nishalbarman&layout=compact&theme=dark"
            media="(prefers-color-scheme: dark)"
          />
          <source
            srcSet="https://github-readme-stats.vercel.app/api/top-langs/?username=nishalbarman&layout=compact&theme=dark"
            media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
          />
          <img
            id="github-top-langs"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=nishalbarman&layout=compact&theme=dark"
          />
        </picture>
      </div>

      <Box my={"45px"}></Box>
      <div id="contact" ref={contactRef} className="container">
        <div className="form">
          <div className="formHeader">
            {/* title anf ptompt here */}
            <div className="title">
              <p className={styles.service_heading}>Contact Me</p>
            </div>
            <div className="prompt">
              <span>
                If you are here then definately you want to contact me, A
                warm-hearted welcome to you and thank you for contacting me.
              </span>
            </div>
          </div>

          <div className="formBody">
            <div className="inputCluster">
              <div className="inputDiv">
                <input
                  onChange={handleInputChange}
                  type="text"
                  className="inputBox"
                  name="name"
                  placeholder="Name*"
                  value={formData.name}
                />
              </div>
              <div className="inputDiv">
                <input
                  onChange={handleInputChange}
                  type="email"
                  className="inputBox"
                  name="email"
                  placeholder="Email*"
                  value={formData.email}
                />
              </div>
            </div>
            <div className="inputDiv">
              <input
                onChange={handleInputChange}
                type="tel"
                className="inputBox"
                name="phone"
                maxLength={10}
                placeholder="Phone Number"
                value={formData.phone}
              />
            </div>
            <div className="inputDiv">
              <textarea
                onChange={handleInputChange}
                name="message"
                id=""
                className="inputBox"
                placeholder="Message*"
                value={formData.message}
              />
            </div>

            <div className={styles.send_button} id="">
              <Button
                onClick={sendMessage}
                loadingPosition="end"
                isLoading={sending}
                loadingText="Sending"
                colorScheme="twitter"
                py={"1.7rem"}
                w={"170px"}
                my={"1rem"}>
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
