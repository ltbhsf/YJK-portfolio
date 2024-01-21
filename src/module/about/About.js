import { useEffect, useState } from "react";
import Container from "../asset/Container";
import style from "./About.module.css";
import SpaceContainer from "../asset/SpaceContainer";

const About = (prop) => {
  const keywords = [
    "Web developer 🧑‍💻",
    "journalist 📝",
    "Global roamer 🌏",
    "Media maven 🎞️",
    "Curious learner 👀",
    "SE apprentice 🏫",
  ];
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIdx((prevIdx) => prevIdx + 1);
    }, 1500);

    return () => clearInterval(timer);
  }, []);

  const [isHovered, setIsHovered] = useState(false);

  return (
    <SpaceContainer id={prop.id}>
      <section className={style.sentence}>
        <h1>Yujeong kim</h1>
        <p
          onMouseOver={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          a {keywords[idx % 6]}
        </p>

        <section className={`${style.options} ${isHovered && style.show}`}>
          <ol>
            <li>{keywords[(idx + 1) % 6]}</li>
            <li>{keywords[(idx + 2) % 6]}</li>
            <li>{keywords[(idx + 3) % 6]}</li>
            <li>{keywords[(idx + 4) % 6]}</li>
            <li>{keywords[(idx + 5) % 6]}</li>
          </ol>
        </section>
      </section>
    </SpaceContainer>
  );
};

export default About;
