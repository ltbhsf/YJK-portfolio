import style from "./SpaceContainer.module.css";

const SpaceContainer = (prop) => {
  return (
    <div id={prop.id} className={style["space-container"]}>
      <div className={style["space-slicer"]}></div>
      <div className={`${style["space-slicer"]} ${style.a}`}></div>
      <div className={`${style["space-slicer"]} ${style.b}`}></div>
      <div className={`${style["space-slicer"]} ${style.c}`}></div>
      <div className={`${style["space-slicer"]} ${style.d}`}></div>
      <div className={`${style["space-slicer"]} ${style.e}`}></div>

      <div className={style["space-rectangle"]}></div>
      <div className={`${style["space-rectangle"]} ${style["space-a"]}`}></div>
      <div className={`${style["space-rectangle"]} ${style["space-b"]}`}></div>
      <div className={`${style["space-rectangle"]} ${style["space-c"]}`}></div>
      <div className={`${style["space-rectangle"]} ${style["space-d"]}`}></div>
      <div className={`${style["space-rectangle"]} ${style["space-e"]}`}></div>
      <div className={`${style["space-rectangle"]} ${style["space-f"]}`}></div>

      <div className={style["content-box"]}>{prop.children}</div>
    </div>
  );

  //   {prop.children}
};
export default SpaceContainer;
