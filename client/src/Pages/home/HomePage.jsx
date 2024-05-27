import { useEffect, useState } from "react";
import { Box, Button } from "@chakra-ui/react";
import React, { useRef } from "react";
import styles from "./HomePage.module.css";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import my_image from "../../Images/myimage.png";
import secret_message from "../../Images/projects/secret_message.png";
import react_news_app from "../../Images/projects/news.png";
import auto_part from "../../Images/projects/auto_part.png";
import consultant from "../../Images/projects/consultant.png";
import ecommerce_mobile_app from "../../Images/projects/ecommerce_mobile_app.png";
import { useSelector } from "react-redux";
import GitHubCalendar from "react-github-calendar";
import Typewriter from "typewriter-effect";
import "../contactus/Contact.css";
import resume_pdf from "../../Resume/Nishal_Barman_Resume.pdf";
import ServiceCard from "../../Component/ServiceCards/ServiceCard";

function HomePage() {
  const setRef = useSelector((state) => state.refer_reducer);

  var emailTester =
    "^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*.?[a-zA-Z0-9])*.[a-zA-Z](-?[a-zA-Z0-9])+$";

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

  useEffect(() => {
    if (typeof setRef === "function")
      setRef(homeRef, aboutRef, skillsRef, projectRef, contactRef);
  }, [setRef]);

  const projects = [
    {
      imageUrl: `${ecommerce_mobile_app}`,
      title: "Ecommerce Mobile App with Admin Panel",
      visitLink: "/renting-details-page",
      githubLink: "https://github.com/nishalbarman/renting-app",
      description:
        "This e-commerce project consists of a comprehensive platform including an Admin Panel and a Native Application. The admin panel, built with React.js, allows for efficient management of orders, products, and rental centers. The native application, developed using Expo, offers users a seamless shopping experience with advanced features such as search",
      techstack: [
        "Expo",
        "React Native",
        "ReactJS",
        "ExpressJS",
        "MongoDB",
        "NodeJS",
      ],
    },
    {
      imageUrl: auto_part,
      title: "Online Auto Part Shop",
      visitLink: "https://auto-part.netlify.app/",
      githubLink: "https://github.com/nishalbarman/online-auto-part-shop",
      description:
        "Collaboratively led a team of four members in the end-to-end creation of a website dedicated to online auto part sales.",
      techstack: [
        "Vannila JavaScript",
        "Json Mock Server",
        "HTML, CSS",
        "Splide",
      ],
    },
    {
      imageUrl: `${secret_message}`,
      title: "Secret Messaging",
      visitLink: "https://secret-msg-test.netlify.app/",
      githubLink: "https://github.com/nishalbarman/secret-message-react",
      description:
        "A comprehensive full-stack project that enables users to register and share their unique links to receive anonymous messages.",
      techstack: ["ReactJS", "ExpressJS", "MongoDB", "socket.io"],
    },

    {
      imageUrl: react_news_app,
      visitLink: "https://nishalbarman.github.io/react-newss-app/",
      title: "Axom News",
      githubLink: "https://github.com/nishalbarman/react-newss-app",
      description:
        "Crafted a single-page fronend project using ReactJS. Leveraged the Context API for state management, ensuring seamless data handling.",
      techstack: ["ReactJS", "Json Mock Server", "HTML, CSS", "Swiper JS"],
    },

    {
      imageUrl: consultant,
      visitLink: "https://webconsultant-s.netlify.app/",
      title: "WebService Consultant",
      githubLink: "https://github.com/nishalbarman/webservice-consultant",
      description:
        "Single-page fully responsive fronend project using ReactJS with a simple backend to recieve the messages.",
      techstack: ["ReactJS", "ExpressJS", "ChakraUI"],
    },
  ];

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
              src="https://www.typescriptlang.org/favicon-32x32.png"
              alt=""
            />
            <p className="skills-card-name">TypeScript</p>
            <p>
              TypeScript is a free and open-source high-level programming
              language developed by Microsoft that adds static typing with
              optional type annotations to JavaScript. It is designed for the
              development of large applications and transpiles to JavaScript.
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
              React is a free and open-source front-end JavaScript library for
              building user interfaces based on components. It is maintained by
              Meta and a community of individual developers and companies. React
              can be used to develop single-page, mobile, or server-rendered
              applications with frameworks like Next.js.
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
              Redux is an open-source JavaScript library for managing and
              centralizing application state. It is most commonly used with
              libraries such as React or Angular for building user interfaces.
              Similar to Facebook's Flux architecture, it was created by Dan
              Abramov and Andrew Clark.
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
              Express.js, or simply Express, is a back end web application
              framework for building RESTful APIs with Node.js, released as free
              and open-source software under the MIT License. It is designed for
              building web applications and APIs. It has been called the de
              facto standard server framework for Node.js
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
              Node.js is a cross-platform, open-source JavaScript runtime
              environment that can run on Windows, Linux, Unix, macOS, and more.
              Node.js runs on the V8 JavaScript engine, and executes JavaScript
              code outside a web browser. Node.js lets developers use JavaScript
              to write command line tools and for server-side scripting.
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
              Redis is a formerly open-source, now "source available", in-memory
              storage, used as a distributed, in-memory key–value database,
              cache and message broker, with optional durability.
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
              Socket.IO is an event-driven library for real-time web
              applications. It enables real-time, bi-directional communication
              between web clients and servers. It consists of two components: a
              client, and a server. Both components have a nearly identical API.
            </p>
          </div>

          <div className={`${styles.skills_card} skills-card`}>
            <img
              className="skills-card-img"
              src="https://git-scm.com/images/logo@2x.png"
              alt=""
            />
            <p className="skills-card-name">GIT</p>
            <p>
              Git is a distributed version control system that tracks changes in
              any set of computer files, usually used for coordinating work
              among programmers who are collaboratively developing source code
              during software development. Git's goals include speed, data
              integrity, and support for distributed, non-linear workflows.
            </p>
          </div>
        </div>
      </div>

      <Box my={"80px"}></Box>

      {/* projects card  */}
      <div id="projects" ref={projectRef} className={styles.services_wrapper}>
        <p className={styles.service_heading}>Projects</p>
        <div className={styles.grid_section}>
          {projects.map((item) => (
            <ServiceCard {...item} />
          ))}
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
              alt="github-stats"
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
              alt="github-stats"
              id="github-stats-card"
              src="https://github-readme-stats.vercel.app/api?username=nishalbarman&theme=dark"
            />
          </picture>
        </div>

        <GitHubCalendar
          className=""
          theme={{
            dark: ["#d1b194", "#fc7905"],
          }}
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
            alt="github-stats"
            id="github-top-langs"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=nishalbarman&layout=compact&theme=dark"
          />
        </picture>
      </div>

      <Box my={"45px"}></Box>
      <div id="contact" ref={contactRef} className="container mx-auto">
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
