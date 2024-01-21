import { useState } from "react";
import dummy from "../../db/dummy.png";
import CrossLine from "../asset/CrossLine";
import style from "./ProjectElement.module.css";





const ProjectElement = (prop) => {
  const [target, setTarget] = useState("img");

  return (
    <div onClick={prop.onClick} className={style["project-element-container"]}>
      <div
        onMouseOver={() => {
          setTarget(true);
        }}
        className={`${style["image-holder"]} ${
          target ? style["focused-item"] : style["un-focused-item"]
        }`}
      >
        <img src={prop.img}></img>
      </div>

      <CrossLine type={target} />

      <section
        onMouseOver={() => {
          setTarget(false);
        }}
        className={`${style["project-description"]} ${
          target ? style["unfocused-item"] : style["focused-item"]
        }`}
      >
        <div className={style.content}>
          <h1>
            <a>{prop.title}</a>
            {prop.description != null && <p>{prop.description}</p>}
          </h1>

          <ul>
            <li>duration: {prop.duration}</li>
            <li>{prop.tag}</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ProjectElement;
