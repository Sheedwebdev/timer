import React, { useState }  from 'react';
import Timer from '../Timer';
import styled, { createGlobalStyle } from 'styled-components';

  function App() {
    const [shown, setShown] = useState(true);

    return (
      <Wrapper>
        {shown && <Timer />}
        <button onClick={() => setShown(!shown)}>{shown ? "Unmount" : "Mount"}</button>
      </Wrapper>
    );
  }

  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
    align-items: center;
    width: 100vw;
    min-height: 100vh;
  `;

export default App;