import { useEffect, useState } from "react";
import style from "./Header.module.css";

const Header = (prop) => {
  return (
    <header className={style.header}>
      <h1 className={style.homeTab} onClick={() => prop.onNavigate("HOME")}>
        HOME
      </h1>
      <section className={style.tabs}>
        <h2 onClick={() => prop.onNavigate("ABOUT")}>Yujeong Kim</h2>
        <h2 onClick={() => prop.onNavigate("PROJECT")}>Projects</h2>
        <h2 onClick={() => prop.onNavigate("ARTICLE")}>Articles</h2>
        <h2 onClick={() => prop.onNavigate("CONTACT")}>Contact</h2>
      </section>
      <div className={`${style["highlight-line"]} ${prop.button === 'ABOUT' ? style.about : prop.button === 'PROJECT' ? style.project : prop.button === 'ARTICLE' ? style.article : style.contact}`}></div>
    </header>
  );
};

export default Header;
