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
      let link = '';
      setSource(imageSrc);
      imageSrc=imageSrc.substring(23);
      console.log(imageSrc);
      Axios.post("https://api.imgur.com/3/upload", {
        'image' : imageSrc
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Client-ID 641970866dba431',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
          'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,HEAD,OPTIONS'
        }
      })
      .then(res => {
        link = res.link;
        console.log(link);
      })
      .catch(err => {
        console.log(err);
      })

      // const headers = {
      //   'Content-Type': 'application/octet-stream',
      //   'Ocp-Apim-Subscription-Key': '4cda043ef62648b3b2b1f40e54236f38'
      // }
      // Axios.post("https://facekk.cognitiveservices.azure.com/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=false&returnFaceAttributes=emotion&recognitionModel=recognition_01&returnRecognitionModel=false&detectionModel=detection_01", {
      //   'data': uInt8Array
      // },{headers: headers})
      // .then(res => {
      //   console.log(res.data);
      // })
      // .catch(err => {
      //   console.log(err);
      // })
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
