import Tab from "./Tab";
import Navigation from "./Navigation";
import GraphContainer from "./GraphContainer";
import Container from "../asset/Container";

const Home = (prop) => {
  return (
    <Container id={prop.id}>
      <Navigation location="top">
        <Tab
          onClick={() => {
            prop.onNavigate("CONTACT");
          }}
          animationType="A"
        >
          CONTACT
        </Tab>
        <Tab
          onClick={() => {
            prop.onNavigate("ABOUT");
          }}
          animationType="B"
        >
          ABOUT
        </Tab>
      </Navigation>

      <GraphContainer></GraphContainer>

      <Navigation location="bottom">
        <Tab
          onClick={() => {
            prop.onNavigate("PROJECT");
          }}
          animationType="C"
        >
          PROJECT
        </Tab>
        <Tab
          onClick={() => {
            prop.onNavigate("ARTICLE");
          }}
          animationType="A"
        >
          ARTICLE
        </Tab>
      </Navigation>
    </Container>
  );
};

export default Home;
