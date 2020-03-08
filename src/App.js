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

  const b64toBlob = (b64DataStr, contentType = '', sliceSize = 512) => {
    const byteCharacters = atob(b64DataStr);
    const byteArrays = [];
  
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
  
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
  
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
  
    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  };
 
  const capture = React.useCallback(
    () => {
      let imageSrc = webcamRef.current.getScreenshot();
      setSource(imageSrc);
      // imageSrc=imageSrc.substring(23,imageSrc.length);
      // imageSrc=btoa(imageSrc);
      // imageSrc=atob(imageSrc);
      console.log(imageSrc);
      const byteNumbers = new Array(imageSrc.length);
      for (let i = 0; i < imageSrc.length; i++) {
          byteNumbers[i] = imageSrc.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], {type:'text/plain'});
      const blobUrl = URL.createObjectURL(blob, {type:'text/plain'});
      console.log(blobUrl);
      // let config = {
      //   headers: {
      //     'Content-Type': 'application/octet-stream',
      //     'Ocp-Apim-Subscription-Key': '4f727d906b284939be579c04f8e108c6'
      //   }
      // }
      // Axios.post("https://imagekk.cognitiveservices.azure.com/vision/v1.0/describe", {
      //   imageSrc
      // }, config)
      // .then(res => {
      //   console.log(res.data.responses[0].faceAnnotations[0]);
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
