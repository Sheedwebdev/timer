import React, { useEffect }  from 'react';
import styled from 'styled-components';

  function Timer() {
    useEffect(() => {
      console.log("Component Mounted - Timer Started...");

      const timerInterval = setInterval(() => {
        console.log("tick toc");
      }, 1000)

      return () => {
        clearInterval(timerInterval);
      }
    }, []);

    return (
      <Wrapper>
        <h1>Timer started on mount</h1>
      </Wrapper>
    );
  }

  const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    min-height: 100vh;
  `;

export default Timer;