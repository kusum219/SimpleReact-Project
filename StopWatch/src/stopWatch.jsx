import { useEffect, useRef, useState } from "react";


function Watch(){
    let [isRunning ,setIsRunning] = useState(false);
    let [elaspedTime, setElapsedTime] = useState(0);
    let intervalIdRef = useRef(null);
    let startTimeRef = useRef(0);

    useEffect(()=>{
        if(isRunning){
           intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now()- startTimeRef.current)
            }, 10);
        }

        return () =>{
            clearInterval(intervalIdRef.current)
        }
    },[isRunning])

    function start(){
        setIsRunning(true);
        startTimeRef.current = Date.now() - elaspedTime;
    }
    function stop(){
        setIsRunning(false);
    }
    function reset(){
        setElapsedTime(0);
        setIsRunning(false);
    }
    function formatTime(){
        let hours = Math.floor(elaspedTime/(1000 * 60 * 60));
        let minutes = Math.floor(elaspedTime/(1000 * 60 ) % 60);
        let seconds = Math.floor(elaspedTime/(1000) % 60);
        let milliSeconds = Math.floor((elaspedTime % 1000) / 10)

        hours = String(hours).padStart(2, "0")
        minutes = String(minutes).padStart(2, "0")
        seconds = String(seconds).padStart(2, "0")
        milliSeconds = String(milliSeconds).padStart(2, "0")



        return `${minutes} : ${seconds} : ${milliSeconds}`;
    }

    function extra(){

    }
   return (<div>
    <h1>{formatTime()}</h1>
    <div className="btn">
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
    </div>
    </div>)
}
export default Watch;