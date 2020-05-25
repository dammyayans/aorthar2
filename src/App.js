import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import storage from "local-storage-fallback";
import "./App.css";
import "./components/Navbar/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar/Navbar";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Default from "./Pages/404";
import Home from "./Pages/Home";
import TheTeam from "./Pages/TheTeam";
import OurWorks from "./Pages/OurWorks";
import Confirmation from "./Pages/Confirmation";
import Subscription from "./Pages/Subscription";
import Courses from "./Pages/Courses";
import NathanApp from "./Pages/NathanApp";
import Parkway from "./Pages/Parkway";
import Raeanna from "./Pages/Raeanna";
import Form from "./Pages/Form";
import Career from "./Pages/Career";
import Merch from "./Pages/Merch";
import Footer from "./components/Footer/Footer";

const GlobalStyle = createGlobalStyle`

body{
  background-color: ${(props) =>
    props.theme.mode === "dark" ? "#111" : "#EEE"};
  color: ${(props) => (props.theme.mode === "dark" ? "#FFF" : "#343434")};
}
.cover{
  color: ${(props) => (props.theme.mode === "dark" ? "#EEE" : "#076847")};
}
.blackText{
  color: ${(props) => (props.theme.mode === "dark" ? "#FFF" : "#343434")};
}
.blackinput{
  color: ${(props) => (props.theme.mode === "dark" ? "#FFF" : "#343434")};
}
.uploadColor{
  color: ${(props) => (props.theme.mode === "dark" ? "#000" : "#2d2d2d")};
}
.whitebg{
  background-color: ${(props) =>
    props.theme.mode === "dark" ? "#000" : "#FFF"};
}
.whitebgNav{
  background-color: ${(props) =>
    props.theme.mode === "dark" ? "#191919" : "#FFF"};
}
.greybg{
  background-color: ${(props) =>
    props.theme.mode === "dark" ? "#191919" : "#F3F3F3"};
}
.mainWhite{
  color: ${(props) => (props.theme.mode === "dark" ? "#FFFFFF" : "#076847")};
}
.a-get-started-testimonies img{
  border: ${(props) =>
    props.theme.mode === "dark" ? "7px solid #343434" : "7px solid #fff"};
}
.textarea{
  border-bottom: ${(props) =>
    props.theme.mode === "dark" ? "1px solid #343434" : "1px solid #343434"};
}
.toggleButton{
  background-color: ${(props) =>
    props.theme.mode === "dark" ? "#343434" : "#000"};   
  color: ${(props) => (props.theme.mode === "dark" ? "#000" : "#343434")};   
}
.toggleMode{
  opacity: ${(props) => (props.theme.mode === "dark" ? ".5" : "1")};     
}
.inputShadow{    
  background-color: ${(props) =>
    props.theme.mode === "dark" ? "#f00" : "#fff"};
  box-shadow: ${(props) =>
    props.theme.mode === "dark"
      ? "2px 4px 8px #000;"
      : "2px 4px 8px #ddd;"};     
}
.card{
  background-color: ${(props) =>
    props.theme.mode === "dark" ? "#191919 !important" : "#fff !important"};
}
option{
  background-color: ${(props) =>
    props.theme.mode === "dark" ? "#191919 !important" : "#fff !important"};
}
.a-banner-heroImgL{
  display: ${(props) =>
    props.theme.mode === "dark" ? "none !important" : "block !important"}
}
.a-banner-heroImgD{
  display: ${(props) =>
    props.theme.mode === "dark" ? "block !important" : "none !important"}
}
.closeIconD{
  display: ${(props) => (props.theme.mode === "dark" ? "block" : "none")}
}
.closeIconL{
  display: ${(props) => (props.theme.mode === "dark" ? "none" : "block")}
}
`;
function getInitialTheme() {
  const savedTheme = storage.getItem("theme");
  return savedTheme ? JSON.parse(savedTheme) : { mode: "light" };
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    storage.setItem("theme", JSON.stringify(theme));
  }, [theme]);
  useEffect(() => setInterval(() => setLoading(true), 4000), []);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <>
          <div className="cover">
            {loading ? (
              <NavBar
                onClick={() =>
                  setTheme(
                    theme.mode === "dark" ? { mode: "light" } : { mode: "dark" }
                  )
                }
              />
            ) : null}
            <Switch>
              <Route exact path="/" component={Home} />

              <Route path="/Subscription" component={Subscription} />

              <Route path="/Courses" component={Courses} />

              {/* <Route path="/Case" component={Case} /> */}

              <Route path="/NathanApp" component={NathanApp} />

              <Route path="/Parkway" component={Parkway} />

              <Route path="/Raeanna" component={Raeanna} />

              <Route path="/Confirmation/name=:name" component={Confirmation} />

              <Route path="/OurWorks" component={OurWorks} />

              <Route path="/TheTeam" component={TheTeam} />

              <Route path="/Merch" component={Merch} />

              <Route path="/Form:service" component={Form} />

              <Route path="/Career" component={Career} />

              <Route component={Default} />
            </Switch>

            {loading ? <Footer /> : null}
            <GlobalStyle />
          </div>
        </>
      </ThemeProvider>
    </Router>
  );
}
