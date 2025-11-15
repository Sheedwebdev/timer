import React, { useEffect, useState }  from 'react';
import styled from 'styled-components';

  function Timer() {
    const [seconds, setSeconds] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
      if (isPaused) return;
      console.log("Component Mounted - Timer Started...");

      const timerInterval = setInterval(() => {
        console.log("tick toc");
        setSeconds(prev => prev + 1);
      }, 1000)

      return () => {
        clearInterval(timerInterval);
      }
    }, [isPaused]);

    function pauseToggle() {
      setIsPaused(prev => !prev);
    }


    return (
        <>
          <h1>Seconds: {seconds}</h1>
          <Button onClick={pauseToggle}>{isPaused ? "Unpause" : "Pause"}</Button>
        </>
    );
  }

  const Button = styled.button`
    font-size: 1.25rem;
    font-weight: 600;

    &:hover {
      background-color: hsl(0deg 0% 50%);
      border: 5px solid hsl(0deg 0% 0%);
      color: hsl(0deg 0% 100%);
    }
  `;



export default Timer;