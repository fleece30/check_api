import React, { useState } from 'react';
import './App.css';
import Webcam from "react-webcam";
import Axios from 'axios';
import Header from './components/header';
import Landing from './components/landing';

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};

function App() {
  const webcamRef = React.useRef(null);
  const [imageSource, setSource] = useState("");

  const capture = React.useCallback(
    () => {
      let imageSrc = webcamRef.current.getScreenshot();
      setSource(imageSrc);
      imageSrc=imageSrc.substring(23);
      console.log(imageSrc);
      Axios.post("https://base64-imgur.herokuapp.com/base64", {
        'url' : imageSrc
      })
    },
    [webcamRef]
  );
  return (
    <div className="App">
      <Header />
      <Landing />
      <Webcam 
      audio={false}
      height={200}
      ref={webcamRef}
      screenshotFormat="image/jpeg"
      width={500}
      videoConstraints={videoConstraints}
      />
      {/* {
        setTimeout(() => capture(), 3000)
      } */}
      <button onClick={capture}></button>
      <img src={imageSource} alt=""></img>
    </div>
  );
}

export default App;
