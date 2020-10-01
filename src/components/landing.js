import React from "react";
import "./landing.css";
import Fade from "react-reveal/Fade";
import Typewriter from "typewriter-effect";

const tracks = [
  {
    img: "https://image.flaticon.com/icons/svg/2142/2142620.svg",
    title: "Aids for the Visually Challenged",
    desc:
      "We offer the lowest prices on the largest selection of low vision products for the blind and visually impaired. Our low vision devices include Braille items, canes, calendars, talking watches, computer products, magnifiers, music players/recorders, specialty sunglasses, and much more. MaxiAids has tools for the blind and those with low vision. We have everything you need to help you live a more active, healthy and independent lifestyle.",
  },
  {
    img: "https://image.flaticon.com/icons/svg/1924/1924432.svg",
    title: "Learning application for Dyslexic people",
    desc:
      "That is an online tool that allows users to create engaging and creative storyboards, for both educational and entertainment purposes. Creating storyboards is great for school projects, and teachers can use this resource for reinforcing ideas to ESL and students with disabilities. The website provides a variety of customizable templates for teachers that are ready to export or present in minutes. Storyboard That also provides an extensive image library and special tools that make the website easy to use, while also being compatible with iPad and Android.",
  },
  {
    img: "https://image.flaticon.com/icons/svg/2040/2040946.svg",
    title: "Chatbot for counselling",
    desc:
      "According to the World Health Organization (WHO), the array of mental disorders include depression, bipolar affective disorder, schizophrenia and other psychoses, dementia, intellectual disabilities and developmental disorders including autism. In response, technology companies have developed artificial intelligence applications for mobile phones that aim to be the first line of support for mental health patients, yet provide privacy and anonymity. These applications, targeted at individuals, were developed to proactively check on patients, be ready to listen and chat anytime, anywhere, and recommend activities that improve the users’ wellbeing.",
  },
];

const Landing = () => {
  const getTracks = (tracks) => {
    return (
      <div className="tracksGrid">
        {tracks.map((track, key) => (
          <Fade bottom key={key}>
            <div className="card shadow p-3 mb-5 bg-white rounded">
              <img
                className="card-img-top"
                src={track.img}
                alt=""
                style={{ width: "100px" }}
              ></img>
              <div className="card-body">
                <h5 className="card-title">{track.title}</h5>
                <p className="card-text">{track.desc}</p>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    );
  };
  return (
    <div>
      <div className="landing" id="landing">
        <div className="bg-image">
          <img src={process.env.PUBLIC_URL + "/rain.jpg"} alt=""></img>
        </div>
        <div className="offset"></div>
        <span className="heading" style={{ marginBottom: "60px" }}>
          <b>umang</b>.ai
        </span>
        <br />

        <div className="typewriter-class">
          Our solutions are
          <Typewriter
            options={{
              strings: [
                "of the people",
                "for the people",
                "but",
                "by the youth",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div id="applications" style={{ marginBottom: "100px" }}>
        <h2 style={{ textAlign: "center" }}>Other Products</h2>
        {getTracks(tracks)}
      </div>
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <b>Anger: </b>
        {parseFloat(emotionData.anger)}&nbsp;&nbsp;&nbsp;
        <b>Contempt: </b>
        {parseFloat(emotionData.contempt)}&nbsp;&nbsp;&nbsp;
        <b>Disgust: </b>
        {parseFloat(emotionData.disgust)}&nbsp;&nbsp;&nbsp;
        <b>Fear: </b>
        {parseFloat(emotionData.fear)}&nbsp;&nbsp;&nbsp;
        <br />
        <b>Happiness: </b>
        {parseFloat(emotionData.happiness)}&nbsp;&nbsp;&nbsp;
        <b>Neutral: </b>
        {parseFloat(emotionData.neutral)}&nbsp;&nbsp;&nbsp;
        <b>Sadness: </b>
        {parseFloat(emotionData.sadness)}&nbsp;&nbsp;&nbsp;
        <b>Surprise: </b>
        {parseFloat(emotionData.surprise)}&nbsp;&nbsp;&nbsp;
      </div>
    </div>
  );
};

export default Landing;
