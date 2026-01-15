import React, { useState } from 'react'

function Timer() {
    let [time,setTime] = useState(0);
    let [active,setActive]= useState(false);
    let [timerId, setTimerId] = useState(null);

    function handleStart(){
        if(active==true){
            alert("Time is Already running");
            return;
        }
        setActive(true);
        let timer = setInterval(()=>{
            setTime(prev=>prev+1)
        },1000);

        setTimerId(timer);
    }

    function handleStop(){
        clearInterval(timerId);
    };

    function handleReset(){
        clearInterval(timerId);
        setTime(0);
    }



  return (
    <div>
        <h1>{time}</h1>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Timer