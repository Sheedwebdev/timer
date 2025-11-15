import React, { useState }  from 'react';
import Timer from '../Timer';
import styled, { createGlobalStyle } from 'styled-components';

  function App() {
    const [shown, setShown] = useState(true);

    return (
      <Wrapper>
        <TimeCard>
          {shown && <Timer />}
          <Button onClick={() => setShown(!shown)}>{shown ? "Unmount" : "Mount"}</Button>
        </TimeCard>
      </Wrapper>
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

  const TimeCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
    align-items: center;
    width: 350px;
    height: 450px;
    background-color: hsl(45deg 100% 50%);
    border-radius: 15px;
    border: 10px solid hsl(0deg 0% 0%);
    padding: 20px;
  `;

  const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    min-height: 100vh;
  `;

export default App;