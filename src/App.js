import React, { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import storage from "local-storage-fallback";
import "./App.css";
import "./components/Navbar/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar/Navbar";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import loader from "./images/Loader.mp4";
import Default from "./Pages/404";

const Home = lazy(
  () =>
    new Promise((resolve, reject) =>
      setTimeout(() => resolve(import("./Pages/Home")), 4000)
    )
);

const TheTeam = lazy(
  () =>
    new Promise((resolve, reject) =>
      setTimeout(() => resolve(import("./Pages/TheTeam")), 4000)
    )
);
const OurWorks = lazy(
  () =>
    new Promise((resolve, reject) =>
      setTimeout(() => resolve(import("./Pages/OurWorks")), 4000)
    )
);
const Confirmation = lazy(
  () =>
    new Promise((resolve, reject) =>
      setTimeout(() => resolve(import("./Pages/Confirmation")), 4000)
    )
);
const Subscription = lazy(
  () =>
    new Promise((resolve, reject) =>
      setTimeout(() => resolve(import("./Pages/Subscription")), 4000)
    )
);
const Courses = lazy(
  () =>
    new Promise((resolve, reject) =>
      setTimeout(() => resolve(import("./Pages/Courses")), 4000)
    )
);
// const Case = lazy(
//   () =>
//     new Promise((resolve, reject) =>
//       setTimeout(() => resolve(import("./Pages/Case")), 4000)
//     )
// );
const NathanApp = lazy(
  () =>
    new Promise((resolve, reject) =>
      setTimeout(() => resolve(import("./Pages/NathanApp")), 4000)
    )
);
const Parkway = lazy(
  () =>
    new Promise((resolve, reject) =>
      setTimeout(() => resolve(import("./Pages/Parkway")), 4000)
    )
);
const Raeanna = lazy(
  () =>
    new Promise((resolve, reject) =>
      setTimeout(() => resolve(import("./Pages/Raeanna")), 4000)
    )
);
const Form = lazy(
  () =>
    new Promise((resolve, reject) =>
      setTimeout(() => resolve(import("./Pages/Form")), 4000)
    )
);
const Career = lazy(
  () =>
    new Promise((resolve, reject) =>
      setTimeout(() => resolve(import("./Pages/Career")), 4000)
    )
);
const Merch = lazy(
  () =>
    new Promise((resolve, reject) =>
      setTimeout(() => resolve(import("./Pages/Merch")), 4000)
    )
);

const Footer = lazy(
  () =>
    new Promise((resolve, reject) =>
      setTimeout(() => resolve(import("./components/Footer/Footer")), 4200)
    )
);
const loading = (
  <div
    style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      backgroundColor: "#fff",
      zIndex: "535362",
      marginTop: "-28px",
    }}
  >
    <video
      src={loader}
      autoPlay
      muted
      loop
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "45%",
        height: "45%",
        overflow: "hidden",
        margin: "auto",
      }}
    />
  </div>
);

const HomeSusp = () => (
  <Suspense fallback={loading}>
    <Home />
  </Suspense>
);

const TheTeamSusp = () => (
  <Suspense fallback={loading}>
    <TheTeam />
  </Suspense>
);
const OurWorksSusp = () => (
  <Suspense fallback={loading}>
    <OurWorks />
  </Suspense>
);
const ConfirmationSusp = (props) => (
  <Suspense fallback={loading}>
    <Confirmation props={props} />
  </Suspense>
);
const SubscriptionSusp = () => (
  <Suspense fallback={loading}>
    <Subscription />
  </Suspense>
);
const CoursesSusp = () => (
  <Suspense fallback={loading}>
    <Courses />
  </Suspense>
);
const NathanAppSusp = () => (
  <Suspense fallback={loading}>
    <NathanApp />
  </Suspense>
);
const ParkwaySusp = () => (
  <Suspense fallback={loading}>
    <Parkway />
  </Suspense>
);
const RaeannaSusp = () => (
  <Suspense fallback={loading}>
    <Raeanna />
  </Suspense>
);
const FormSusp = (props) => (
  <Suspense fallback={loading}>
    <Form props={props} />
  </Suspense>
);
const CareerSusp = (props) => (
  <Suspense fallback={loading}>
    <Career props={props} />
  </Suspense>
);
const MerchSusp = (props) => (
  <Suspense fallback={loading}>
    <Merch props={props} />
  </Suspense>
);

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
  useEffect(() => {
    storage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <>
          <div className="cover">
            <NavBar
              onClick={() =>
                setTheme(
                  theme.mode === "dark" ? { mode: "light" } : { mode: "dark" }
                )
              }
            />
            <Switch>
              <Route exact path="/" component={HomeSusp} />

              <Route path="/Subscription" component={SubscriptionSusp} />

              <Route path="/Courses" component={CoursesSusp} />

              {/* <Route path="/Case" component={CaseSusp} /> */}

              <Route path="/NathanApp" component={NathanAppSusp} />

              <Route path="/Parkway" component={ParkwaySusp} />

              <Route path="/Raeanna" component={RaeannaSusp} />

              <Route
                path="/Confirmation/name=:name"
                component={ConfirmationSusp}
              />

              <Route path="/OurWorks" component={OurWorksSusp} />

              <Route path="/TheTeam" component={TheTeamSusp} />

              <Route path="/Merch" component={MerchSusp} />

              <Route path="/Form:service" component={FormSusp} />

              <Route path="/Career" component={CareerSusp} />

              <Route component={Default} />
            </Switch>
            <Suspense fallback={""}>
              <Footer />
            </Suspense>
            <GlobalStyle />
          </div>
        </>
      </ThemeProvider>
    </Router>
  );
}
