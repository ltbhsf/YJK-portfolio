import style from "./ArticleElement.module.css";

const ArticleElement = (prop) => {
  return (
    <section className={style["article-element"]}>
      <a href={prop.link} target="_blank" className={style["article-box"]}>
        {prop.image === null && <h3>{prop.type}</h3>}
        {prop.image != null && <img src={prop.image}></img>}
      </a>
      {/* <p>[{prop.type}]</p> */}
      <h2>{prop.title}</h2>
    </section>
  );
};

export default ArticleElement;
