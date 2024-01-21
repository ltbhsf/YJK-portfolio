import style from "./Arrow.module.css";

const Arrow = (prop) => {
  
    return (
        <>
          {prop.direction === 'left' ? (
            <span className="material-symbols-outlined" style={prop.style} onClick={prop.onClick}>arrow_forward_ios</span>
          ) : (
            <span className="material-symbols-outlined" style={prop.style} onClick={prop.onClick}>arrow_back_ios</span>
          )}
        </>
      );
};

export default Arrow;
