import style from "./Container.module.css";

const Container = (prop) => {
  return (
    <div id={prop.id} className={`${style["origin-container"]} ${style[prop.className]}`}>
      {prop.children}
    </div>
  );
};

export default Container;
