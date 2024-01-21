import { useState } from "react";
import style from "./Tab.module.css";
import TabElem from "./TabElem";

const Tab = (prop) => {
  const [isSpotted, setIsSpotted] = useState(false);
  const clickHandler = () => {
    prop.onClick();
  };
  const mouseHandler = () => {
    setIsSpotted((prevState) => !prevState);
  };
  return (
    <li
      className={`${style.tab} ${style[prop.animationType]} ${
        isSpotted && style.paused
      }
      `}
      onClick={clickHandler}
      onMouseOver={mouseHandler}
      onMouseOut={mouseHandler}
    >
      <TabElem>{prop.children}</TabElem>
      <TabElem>{prop.children}</TabElem>
      <TabElem>{prop.children}</TabElem>
      <TabElem>{prop.children}</TabElem>
      <TabElem>{prop.children}</TabElem>
      <TabElem>{prop.children}</TabElem>
      <TabElem>{prop.children}</TabElem>
      <TabElem>{prop.children}</TabElem>
      <TabElem>{prop.children}</TabElem>
      <TabElem>{prop.children}</TabElem>
    </li>
  );
};

export default Tab;
