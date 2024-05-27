import React from "react";
import Tilt from "react-parallax-tilt";
import styles from "../../Pages/home/HomePage.module.css";
import link_open_url from "../../Images/icons/icons8-external-link.svg";

function ServiceCard({
  imageUrl,
  title,
  visitLink,
  githubLink,
  description,
  techstack,
}) {
  return (
    <Tilt>
      <div className={`${styles.service_card} project-card`}>
        <img
          src={imageUrl}
          alt="project_image"
          style={{
            marginBottom: "30px",
            objectFit: "contain",
            aspectRatio: "16/9",
          }}
        />
        <div className={styles.service_body}>
          <p
            style={{
              cursor: "pointer",
            }}
            className="project-title">
            <a
              className="project-deployed-link"
              href={visitLink}
              target="_blank">
              {title}
            </a>
          </p>
          <a
            style={{
              cursor: "pointer",
            }}
            className="project-github-link"
            href={githubLink}
            target="_blank">
            Gitub Link
          </a>
          <p className="project-description">{description}</p>

          <div className={`${styles.tech_stack_outer} project-tech-stack`}>
            <p>Tech Stack</p>
            <ul className="">
              {techstack.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>

          <button
            onClick={() => {
              console.log(visitLink);
              window.open(visitLink, "_blank");
            }}
            className={styles.project_card_button}>
            Preview <img src={link_open_url} />
          </button>
        </div>
      </div>
    </Tilt>
  );
}

export default ServiceCard;
