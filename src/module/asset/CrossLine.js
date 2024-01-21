import style from "./CrossLine.module.css";

const CrossLine = (prop) => {
  return (
    <>
      {prop.type ? (
        <>
          <div className={style["cross-line-left"]}></div>
          <div className={style["cross-line-right"]}></div>
        </>
      ) : (
        <>
          <div className={style["cross-line-left-1"]}></div>
          <div className={style["cross-line-right-1"]}></div>
        </>
      )}
    </>
  );
};

export default CrossLine;
