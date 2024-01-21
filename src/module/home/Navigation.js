import style from './Navigation.module.css'

const Navigation = (prop) => {
  return (
    <nav className={style.navigation}>
      <ul>{prop.children}</ul>
    </nav>
  );
};

export default Navigation;
