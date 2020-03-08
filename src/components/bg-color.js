import React, { useState } from 'react';
import './bg-color.css';
import TimerMachine from 'react-timer-machine';
import Timer from 'react-compound-timer';
 
// import moment from "moment";
// import momentDurationFormatSetup from "moment-duration-format";
 
// momentDurationFormatSetup(moment);

const BGColorGame = () => {
    const [bgColor, setColor]=useState('rgb(255,255,255)');
    return(
        <div>
            <TimerMachine
                timeStart={15 * 1000} // start at 10 seconds\
                timeEnd={0}
                started={true}
                countdown={true} // use as stopwatch
                interval={1000} // tick every 1 second
                // formatTimer={(time, ms) =>
                // moment.duration(ms, "milliseconds").format("h:mm:ss")
                // }
                onStart={time =>
                console.info(`Timer started: ${JSON.stringify(time)}`)
                }
                onStop={time =>
                console.info(`Timer stopped: ${JSON.stringify(time)}`)
                }
                onTick={time =>
                console.info(`Timer ticked: ${JSON.stringify(time)}`)
                }
                onPause={time =>
                console.info(`Timer paused: ${JSON.stringify(time)}`)
                }
                onResume={time =>
                console.info(`Timer resumed: ${JSON.stringify(time)}`)
                }
                onComplete={time =>
                console.info(`Timer completed: ${JSON.stringify(time)}`)
                }
            />
            {/* <Timer
                initialTime={5000}
                direction="backward"
            >
                {() => (
                    <React.Fragment>
                        <Timer.Seconds />
                    </React.Fragment>
                )}
            </Timer> */}
        </div>
    )
}

export default BGColorGame;