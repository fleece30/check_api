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

  const capture = React.useCallback(
    (emotionData, web) => {
      let imageSrc = web.getScreenshot();
      setSource(imageSrc);
      imageSrc = imageSrc.substring(23);
      console.log(imageSrc);
      const uploadTask = Storage.ref(
        `images/${imageSrc.substring(5, 10)}`
      ).putString(imageSrc, "base64", { contentType: "image/jpg" });
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.log(error);
        },
        () => {
          Storage.ref("images")
            .child(imageSrc.substring(5, 10))
            .getDownloadURL()
            .then((url) => {
              Axios.post(
                "https://facekk.cognitiveservices.azure.com/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=false&returnFaceAttributes=emotion&recognitionModel=recognition_01&returnRecognitionModel=false&detectionModel=detection_01",
                {
                  url: url,
                },
                {
                  headers: {
                    "Content-Type": "application/json",
                    "Ocp-Apim-Subscription-Key":
                      "4cda043ef62648b3b2b1f40e54236f38",
                  },
                }
              )
                .then((res) => {
                  setData(res.data[0].faceAttributes.emotion);
                })
                .catch((err) => {
                  console.log(err);
                });
            });
        }
      );
    },
    [webcamRef]
  );

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
