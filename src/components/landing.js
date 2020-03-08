import React from 'react';
import './landing.css';
import Fade from 'react-reveal/Fade';
import BGColorGame from './bg-color';

const tracks = [
    {
        "img": "https://image.flaticon.com/icons/svg/2142/2142620.svg",
        "title": "Aids for the Visually Challenged",
        "desc": "Deep space navigation enables missions to precisely target distant solar system bodies and particular sites of interest on them. Navigation takes place in real-time for spacecraft operation and control. It can also be used for creating higher-fidelity reconstructions of a craft’s trajectory for future course corrections, and for scientific and operational purposes. "
    },
    {
        "img": "https://image.flaticon.com/icons/svg/1924/1924432.svg",
        "title": "Learning application for Dyslexic people",
        "desc": "Data can unravel things helping us challenge the our limits everyday. Space science has multitudes of data, be it the syreams of radio signals from the VLA or the stunning full spectral images from the Hubble Space Telescope. Studying, classifying and searching this data efficiently is a herculean task and poses challenges to analysts and scientists across the globe. Automating this collection and analysis could pave the path to numerous discoveries about the intricate workings of our Universe."
    },
    {
        "img": "https://image.flaticon.com/icons/svg/2040/2040946.svg",
        "title": "Chatbot for the mentally ill",
        "desc": "NASA landed humans on the moon. NASA is now poised for its next great transformation: the robot revolution. Here on Earth, robots are performing increasingly complex tasks in ever more challenging settings—medical surgery, automated driving, and bomb disposal are just a few examples of the important work of robots."
    },
    {
        "img": "https://image.flaticon.com/icons/svg/2142/2142620.svg",
        "title": "Aids for the Visually Challenged",
        "desc": "Deep space navigation enables missions to precisely target distant solar system bodies and particular sites of interest on them. Navigation takes place in real-time for spacecraft operation and control. It can also be used for creating higher-fidelity reconstructions of a craft’s trajectory for future course corrections, and for scientific and operational purposes. "
    },
    {
        "img": "https://image.flaticon.com/icons/svg/1924/1924432.svg",
        "title": "Learning application for Dyslexic people",
        "desc": "Data can unravel things helping us challenge the our limits everyday. Space science has multitudes of data, be it the syreams of radio signals from the VLA or the stunning full spectral images from the Hubble Space Telescope. Studying, classifying and searching this data efficiently is a herculean task and poses challenges to analysts and scientists across the globe. Automating this collection and analysis could pave the path to numerous discoveries about the intricate workings of our Universe."
    },
    {
        "img": "https://image.flaticon.com/icons/svg/2040/2040946.svg",
        "title": "Chatbot for the mentally ill",
        "desc": "NASA landed humans on the moon. NASA is now poised for its next great transformation: the robot revolution. Here on Earth, robots are performing increasingly complex tasks in ever more challenging settings—medical surgery, automated driving, and bomb disposal are just a few examples of the important work of robots."
    }
]

const Landing = () => {
    const getTracks = (tracks) => {
        return(
            <div className="tracksGrid">
                {
                    tracks.map((track, key) => 
                        <Fade bottom key={key}>
                            <div className="card shadow p-3 mb-5 bg-white rounded">
                                <img className="card-img-top" src={track.img} alt="" style={{width: "100px"}}></img>
                                <div className="card-body">
                                <h5 className="card-title">{track.title}</h5>
                                <p className="card-text">{track.desc}</p>
                                </div>
                            </div>
                        </Fade>
                    )
                }
            </div>
        )
    }
    return(
        <div>
            <div className="landing" id="landing">
                <span><b>umang</b>.ai</span>
            </div>
            <div id="applications">
                <h2 style={{textAlign: "center"}}>Other Products</h2>
                {getTracks(tracks)}
            </div>
            <div id="games">
                <BGColorGame />
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default Landing;