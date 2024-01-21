import style from "./Toast.module.css";

const Toast = (prop) => {
  return (
    <div className={`${style.toast} ${prop.baked ? style.baked : style.out}`}>
      ✓{prop.children}
    </div>
  );
};

export default Toast;
