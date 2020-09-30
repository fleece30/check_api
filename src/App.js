import React, { useState } from "react";
import "./App.css";
import Webcam from "react-webcam";
import Axios from "axios";
import Header from "./components/header";
import Landing from "./components/landing";
import Chatbot from "./components/chatbot";
import { Storage } from "./firebase";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

function App() {
  const webcamRef = React.useRef(null);
  const [imageSource, setSource] = useState("");
  const [emotionData, setData] = useState({});
  const [isOpen, open] = useState(false);

  const shBot = () => {
    open(!isOpen);
  };

  //Write function here

  return (
    <div className="App">
      <Header />
      <Landing />
      <div>
        <h2 style={{ textAlign: "center" }}>Emotion Analysis</h2>
        <Webcam
          audio={false}
          height={400}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={700}
          videoConstraints={videoConstraints}
          style={{
            position: "relative",
            left: "50%",
            transform: "translateX(-50%)",
            marginTop: "30px",
          }}
        />
      </div>

      {/* {
        setTimeout(() => capture(), 3000)
      } */}
      <button
        className="screenshot"
        onClick={(emotionData) => capture(emotionData, webcamRef.current)}
      >
        Take screenshot
      </button>
      {console.log(emotionData)}
      <br />

      <div className="chatbot-popup">
        <img
          src="https://image.flaticon.com/icons/svg/2115/2115916.svg"
          alt=""
          onClick={() => shBot()}
        ></img>
        <div className={isOpen ? "show" : "hide"}>
          <Chatbot />
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#a29bfe",
          height: "80px",
          color: "white",
          textAlign: "center",
          fontSize: "30px",
        }}
      >
        <span style={{ position: "relative", top: "25%" }}>
          Developed by Navonmesh &lt;3
        </span>
      </div>
    </div>
  );
}

export default App;
