import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, useStepContext } from "@chakra-ui/react";
import resume_pdf from "../../Resume/Nishal_Barman_Resume.pdf";
import { setUseRefs } from "../../Redux/smoothscroll/action-creators";

function Navbar({ isWhiteBackground, isOfferVisible }) {
  const dispatch = useDispatch();

  const [homeRef, setHomeRef] = useState(null);
  const [aboutRef, setAboutRef] = useState(null);
  const [skillsRef, setSkillsRef] = useState(null);
  const [projectRef, setProjectRef] = useState(null);
  const [contactRef, setContactRef] = useState(null);

  const setRefer = (home, about, skill, project, contact) => {
    setHomeRef(home);
    setAboutRef(about);
    setSkillsRef(skill);
    setProjectRef(project);
    setContactRef(contact);
  };

  const [colorChange, setColorchange] = useState(false);
  const [sideBarHidden, setSideBarHidden] = useState(null);

  const [navbarHide, setNavbarHidden] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();

  window.addEventListener("scroll", () => {
    if (window.scrollY === 0) {
      setColorchange(false);
    } else {
      setColorchange(true);
    }

    // let st = window.scrollY || document.documentElement.scrollTop;
    // if (st > lastScrollTop) {
    //   // downscroll code
    //   if (!navbarHide) setNavbarHidden(true);
    // } else if (st < lastScrollTop) {
    //   // upscroll code
    //   setNavbarHidden(false);
    // } // else was horizontal scroll
    // setLastScrollTop(st <= 0 ? 0 : st); // For Mobile or negative scrolling
  });

  const handleShowSideMenu = () => {
    setSideBarHidden((prev) => {
      if (prev === null) return false;
      return !prev;
    });
  };

  const handleBlankScreen = () => {
    setSideBarHidden(true);
  };

  const handleLinkClick = () => {
    handleShowSideMenu();
  };

  const handleResumeClick = () => {
    const link = document.createElement("a");
    link.download = "Nishal_Resume.pdf";
    link.href = resume_pdf;
    link.click();
    window.open(
      "https://drive.google.com/file/d/1-KMU_12MvQxKNcpJDLcbkToBNgBxe5GY/view?usp=sharing",
      "_blank"
    );
  };

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    dispatch(setUseRefs(setRefer));
  }, []);

  return (
    <>
      {/* sidebar black screen */}
      <div
        className={`${styles.blank_screen} ${
          sideBarHidden || sideBarHidden === null ? "hidden" : ""
        }`}
        onClick={handleBlankScreen}></div>

      {/* main navbar starts */}
      {false || (
        <div
          id="nav-menu"
          className={`${styles.navouter} ${
            navbarHide ? styles.navbar_animate : ""
          }`}
          style={
            colorChange
              ? {
                  backgroundColor: "rgb(0,0,0,0.3)",
                  top: "0",
                  boxShadow: "rgba(17, 17, 26, 0.1) 0px 1px 0px",
                  color: "white",
                }
              : { color: "white" }
          }>
          <div
            className={`${styles.navbar} max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4`}>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate("/");
              }}>
              <span
                style={
                  colorChange
                    ? {
                        color: "white",
                      }
                    : { color: "white" }
                }
                className="text-3xl font-semibold whitespace-nowrap">
                Nishal
              </span>
            </div>

            <div className={styles.sidebar_icon} onClick={handleShowSideMenu}>
              <i
                className="fa-solid fa-bars fa-xl"
                style={{ color: "white" }}
              />
            </div>
            <div className={`${styles.desk_links}`}>
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  homeRef?.current?.scrollIntoView({ behavior: "smooth" });
                }}
                // className={`${
                //   location.pathname === "/" ? styles.link_active_desk : ""
                // } nav-link home`}
                className={`nav-link home`}>
                Home
              </Link>
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  aboutRef?.current?.scrollIntoView({ behavior: "smooth" });
                  console.log("Kon hai ye =>", aboutRef);
                }}
                className={`${
                  location.pathname.includes("/aboutus")
                    ? styles.link_active_desk
                    : ""
                } nav-link about`}>
                About
              </Link>
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  skillsRef?.current?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`${
                  location.pathname === "/services"
                    ? styles.link_active_desk
                    : ""
                } nav-link skills`}>
                Skills
              </Link>
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  projectRef?.current?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`${
                  location.pathname === "/projects"
                    ? styles.link_active_desk
                    : ""
                } nav-link projects`}>
                Projects
              </Link>

              <Link
                onClick={(e) => {
                  e.preventDefault();
                  contactRef?.current?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`${
                  location.pathname === "/contact"
                    ? styles.link_active_desk
                    : ""
                } nav-link contact`}>
                Contact
              </Link>
            </div>

            <div
              id="resume-button-1"
              className={`${styles.wave_wrapper} nav-link resume`}
              onClick={handleResumeClick}>
              Resume
            </div>
          </div>
        </div>
      )}

      {/* mobile sidebars */}
      <div
        style={{ zIndex: 330 }}
        className={`${styles.mobile_sidebar} ${
          !sideBarHidden && sideBarHidden !== null
            ? `${styles.sidebar_anima}`
            : sideBarHidden === null
            ? ""
            : `${styles.sidebar_backward}`
        } z-50`}>
        <div className={styles.logoouter}>
          {/* <img src={logo} /> */}
          <h1 className={`${styles.logo}`}>Nishal</h1>
        </div>
        <div className={styles.hor_line}></div>
        <Link
          onClick={(e) => {
            e.preventDefault();
            homeRef?.current?.scrollIntoView({ behavior: "smooth" });
            handleLinkClick();
          }}
          // className={`${
          //   location.pathname === "/" ? styles.mobile_active_link : ""
          // } font-semibold`}
          >
          Home
        </Link>
        <div className={styles.hor_line}></div>
        <Link
          onClick={(e) => {
            e.preventDefault();
            aboutRef?.current?.scrollIntoView({ behavior: "smooth" });
            console.log("Kon hai ye =>", aboutRef);
            handleLinkClick();
          }}
          className={`${
            location.pathname === "/aboutus" ? styles.mobile_active_link : ""
          } font-semibold`}>
          About
        </Link>
        <div className={styles.hor_line}></div>
        <Link
          onClick={(e) => {
            e.preventDefault();
            skillsRef?.current?.scrollIntoView({ behavior: "smooth" });
            handleLinkClick();
          }}
          className={`${
            location.pathname.includes("/services")
              ? styles.mobile_active_link
              : ""
          } font-semibold`}>
          Skills
        </Link>
        <div className={styles.hor_line}></div>
        <Link
          onClick={(e) => {
            e.preventDefault();
            projectRef?.current?.scrollIntoView({ behavior: "smooth" });
            handleLinkClick();
          }}
          className={`${
            location.pathname.includes("/projects")
              ? styles.mobile_active_link
              : ""
          } font-semibold`}>
          Projects
        </Link>
        <div className={styles.hor_line}></div>
        <Link
          onClick={(e) => {
            e.preventDefault();
            contactRef?.current?.scrollIntoView({ behavior: "smooth" });
            handleLinkClick();
          }}
          className={`${
            location.pathname === "/contact" ? styles.mobile_active_link : ""
          } font-semibold`}>
          Contact Us
        </Link>
        <div className={styles.hor_line}></div>

        <div
          className={`${styles.wave_wrapper} ${styles.wave_wrapper2}`}
          onClick={handleResumeClick}>
          Resume
        </div>
      </div>
    </>
  );
}

export default Navbar;
