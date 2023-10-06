import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, useStepContext } from "@chakra-ui/react";
import resume_pdf from "../../Resume/Nishal_Resume.pdf";
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
    let st = window.scrollY || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      // downscroll code
      if (!navbarHide) setNavbarHidden(true);
    } else if (st < lastScrollTop) {
      // upscroll code
      setNavbarHidden(false);
    } // else was horizontal scroll
    setLastScrollTop(st <= 0 ? 0 : st); // For Mobile or negative scrolling
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
    window.open(resume_pdf, "_blank");
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
            isWhiteBackground || colorChange
              ? {
                  backgroundColor: "white",
                  top: "0",
                  boxShadow: "rgba(17, 17, 26, 0.1) 0px 1px 0px",
                }
              : {}
          }>
          <div
            className={`${styles.navbar} max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4`}>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate("/");
              }}>
              <span className="text-3xl font-semibold whitespace-nowrap">
                Nishal
              </span>
            </div>

            <div className={styles.sidebar_icon} onClick={handleShowSideMenu}>
              <i
                className="fa-solid fa-bars fa-xl"
                style={{ color: "#000000" }}
              />
            </div>
            <div className={`${styles.desk_links}`}>
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  homeRef?.current?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`${
                  location.pathname === "/" ? styles.link_active_desk : ""
                } nav-link home`}>
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
              className={`${styles.wave_wrapper} nav-link resume`}
              onClick={handleResumeClick}>
              {/* <a href={resume_pdf} target="_blank" download> */}
              Resume
              {/* </a> */}
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
          <h1 className={`${styles.logo}`}>AntarAtma</h1>
        </div>
        <div className={styles.hor_line}></div>
        <Link
          onClick={handleLinkClick}
          to={"/"}
          className={`${
            location.pathname === "/" ? styles.mobile_active_link : ""
          } font-semibold`}>
          Home
        </Link>
        <div className={styles.hor_line}></div>
        <Link
          onClick={handleLinkClick}
          to={"/aboutus"}
          className={`${
            location.pathname === "/aboutus" ? styles.mobile_active_link : ""
          } font-semibold`}>
          About Us
        </Link>
        <div className={styles.hor_line}></div>
        <Link
          onClick={handleLinkClick}
          to={"/services"}
          className={`${
            location.pathname.includes("/services")
              ? styles.mobile_active_link
              : ""
          } font-semibold`}>
          Services
        </Link>
        <div className={styles.hor_line}></div>
        <Link
          onClick={handleLinkClick}
          to={"/projects"}
          className={`${
            location.pathname.includes("/projects")
              ? styles.mobile_active_link
              : ""
          } font-semibold`}>
          Projects
        </Link>
        <div className={styles.hor_line}></div>
        <Link
          onClick={handleLinkClick}
          to={"/contact"}
          className={`${
            location.pathname === "/contact" ? styles.mobile_active_link : ""
          } font-semibold`}>
          Contact Us
        </Link>
        <div className={styles.hor_line}></div>
        <Button
          display={{ base: "inline-flex", sm: "inline-flex", lg: "none" }}
          onClick={() => {
            navigate("/contact");
            handleLinkClick();
          }}
          colorScheme="twitter"
          py={"1.5rem"}
          w={"140px"}
          my={"1rem"}
          boxShadow={"0px 0px 10px white"}
          style={{
            fontSize: "13px",
            textTransform: "uppercase",
            alignItems: "center",
          }}>
          Book A Call
        </Button>
      </div>
    </>
  );
}

export default Navbar;
