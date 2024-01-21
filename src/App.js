import { useEffect, useState } from "react";
import "./index.css";
import Home from "./module/home/Home";
import Article from "./module/article/Article";
import Header from "./module/asset/Header";
import Contact from "./module/contact/Contact";
import Project from "./module/project/Project";
import About from "./module/about/About";
import Container from "./module/asset/Container";

function App() {
  const [path, setPath] = useState("HOME");
  const [button, setButton] = useState("ABOUT");
  const [pathPositions, setPathPostions] = useState([]);

  const scrollHandler = () => {
    console.log('executed')
    if (pathPositions["CONTACT"]-70 <= window.scrollY) {
      setButton("CONTACT");
    } else if (pathPositions["ARTICLE"]-70 <= window.scrollY) {
      console.log('article');
      setButton("ARTICLE");
    } else if (pathPositions["PROJECT"]-70 <= window.scrollY) {
      console.log('project');
      setButton("PROJECT");
    } else if (pathPositions["ABOUT"]-70 <= window.scrollY) {
      console.log('about');
      setButton("ABOUT");
    }
  };

  const navigateHandler = (path) => {
    setPath(path);
    setButton(path);
  };

  useEffect(() => {
    setPathPostions({
      HOME: document.getElementById("HOME").offsetTop - 70,
      ABOUT: document.getElementById("ABOUT").offsetTop - 70,
      CONTACT: document.getElementById("CONTACT").offsetTop - 70,
      PROJECT: document.getElementById("PROJECT").offsetTop - 70,
      ARTICLE: document.getElementById("ARTICLE").offsetTop - 70,
    });
    
    window.addEventListener("scroll", scrollHandler);
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: pathPositions[path],
      behavior: "smooth",
    });
  }, [path, pathPositions]);

  return (
    <div className="App">
      {/* {path === 'HOME' && <Home onNavigate={navigateHandler}></Home>}
      {path != 'HOME' && <Container><Header onNavigate={()=>{setPath("HOME")}}/>{content}</Container>} */}
      <Home id="HOME" onNavigate={navigateHandler}></Home>
      <Header onNavigate={navigateHandler} button={button}></Header>
      <About id="ABOUT"></About>
      <Project id="PROJECT"></Project>
      <Article id="ARTICLE"></Article>
      <Contact id="CONTACT"></Contact>
    </div>
  );
}

export default App;
