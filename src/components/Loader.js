import React from "react";
import loader from "../images/Loader.mp4";

const LoaderComp = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        backgroundColor: "#fff",
        zIndex: "535362",
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
};
export default LoaderComp;
