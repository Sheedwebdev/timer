import React, { useEffect, useState }  from 'react';
import styled from 'styled-components';

  function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
      console.log("Component Mounted - Timer Started...");

      const timerInterval = setInterval(() => {
        console.log("tick toc");
        setSeconds(prev => prev + 1);
      }, 1000)

      return () => {
        clearInterval(timerInterval);
      }
    }, []);

    return (
        <h1>Seconds: {seconds}</h1>
    );
  }



export default Timer;