import { useState } from "react";
import style from "./Project.module.css";
import ProjectElement from "./ProjectElement";
import Container from "../asset/Container";
import Arrow from "../asset/Arrow";
import pr00 from "../../db/pr00.gif";
import pr01 from "../../db/pr01.gif";
import pr02 from "../../db/pr02.gif";
import pr03 from "../../db/pr03.gif";
import pr04 from "../../db/pr04.gif";
import pr05 from "../../db/pr05.gif";
import pr06 from "../../db/pr06.gif";
import pr07 from "../../db/pr07.gif";
import pr08 from "../../db/pr09.gif";

const Projects = [
  {
    idx: 5,
    title: "Look into My Eyes",
    description: "RMIT-interactive media 1 final project",
    duration: "2023.10",
    using: "#JavaScript #html #css",
    img: pr05,
    site: "https://ltbhsf.github.io/im2350/a3/",
    github: "https://github.com/ltbhsf/ltbhsf.github.io/tree/main/im2350/a3",
  },
  {
    idx: 0,
    title: "gguge Review Comment Generator",
    description:
      "Work system efficiency project carried out through internship at Glorang. I went beyond the immediate tasks and devoted efforts to review and streamline work processes, contemplating ways to utilize the organization's human resources more efficiently.",
    duration: "2023.04",
    using: "#npm #JavaScript #Netlify",
    img: pr00,
    site: null,
    github: null,
  },
  {
    idx: 7,
    title: "finance-forge",
    description:
      "A financial service that includes monthly expense management and savings/deposit calculators.",
    duration: "2023.10",
    using: "#React",
    img: pr07,
    site: null,
    github: "https://github.com/ltbhsf/finance-forge/tree/main/src",
  },
  {
    idx: 8,
    title:
      "Implementation of the HTTP protocol using TCP-based socket communication",
    description:
      "Performed the HTTP communication process using a CRUD implementation and captured it using the open-source packet analysis program Wireshark.",
    duration: "2024.01",
    using: "#Pyhton #Wireshark #TCP/IP",
    img: pr08,
    site: null,
    github: "https://github.com/ltbhsf/finance-forge/tree/main/src",
  },
  {
    idx: 1,
    title: "safeping",
    description:
      "I designed a beacon-based population density alert service with the earnest wish to prevent tragedies like the Itaewon incident from happening again.",
    duration: "2022.11~12",
    using: "#figma #4Ps #Persona_profiling #Qualitative_Research #Data_coding",
    img: pr01,
    site: null,
    github: null,
  },
  {
    idx: 3,
    title:
      "Analysis of factors influencing public support for welfare policies.",
    description: null,
    duration: "2022.05",
    using: "#R #Regression_analysis",
    img: pr03,
    site: null,
    github: null,
  },

  {
    idx: 2,
    title: "Interactive numeric baseball game",
    description:
      "text-based adventure game using Object-Oriented Programming (OOP)",
    duration: "2021.05.12~16",
    using: "#Java",
    img: pr02,
    site: null,
    github: null,
  },

  {
    idx: 4,
    title:
      "Establishing UI improvement strategies through the analysis of the eCampus user experience of international students at KMU.",
    description: null,
    duration: "2022.04~06",
    using:
      "#K-mean_clustering #Double_diamond_process #WOM #Service_Safari #data_visualization #Persona_research",
    img: pr04,
    site: null,
    github: null,
  },

  {
    idx: 6,
    title: "Pizza hut clone website",
    description:
      "Learned various React hooks functionalities while cloning the main page of Pizza Hut.",
    duration: "2023.10",
    using: "#React",
    img: pr06,
    site: "",
    github: null,
  },
];

const Project = (prop) => {
  const [focused, setFocused] = useState(null);
  const focusHandler = (focusedLoc) => {
    if (focused === null) {
      setFocused(focusedLoc);
    }
    console.log(focusedLoc);
  };
  const [idx, setidx] = useState(0);
  const lastidx = 8;

  const swipeHandler = (direction) => {
    setidx((previdx) =>
      previdx + direction < 0
        ? lastidx
        : previdx + direction > lastidx
        ? 0
        : previdx + direction
    );
    console.log(idx);
  };

  return (
    <Container id={prop.id}>
      <Arrow
        direction="right"
        style={{
          position: "absolute",
          top: "47%",
          left: "100px",
          color: "white",
        }}
        onClick={() => swipeHandler(-2)}
      />
      <Arrow
        direction="left"
        style={{
          position: "absolute",
          top: "47%",
          right: "100px",
          color: "white",
        }}
        onClick={() => swipeHandler(2)}
      />

      <div className={style["project-container"]}>
        <ProjectElement
          img={Projects[idx].img}
          title={Projects[idx].title}
          description={Projects[idx].description}
          duration={Projects[idx].duration}
          tag={Projects[idx].using}
          isFocused={
            focused === "top" ? true : focused === "bottom" ? false : null
          }
          onClick={() => focusHandler("top")}
        ></ProjectElement>
        {idx + 1 < lastidx && (
          <ProjectElement
            img={Projects[idx + 1].img}
            title={Projects[idx + 1].title}
            description={Projects[idx + 1].description}
            duration={Projects[idx + 1].duration}
            tag={Projects[idx + 1].using}
            isFocused={
              focused === "true" ? false : focused === "bottom" ? false : null
            }
            onClick={() => {
              focusHandler("bottom");
            }}
          ></ProjectElement>
        )}
      </div>
    </Container>
  );
};

export default Project;
