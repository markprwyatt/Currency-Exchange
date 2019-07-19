import React from "react";
import styled from "styled-components";

import Title from "./Title";
import CurrencyConvert from "./CurrencyConvert";

const Wrapper = styled.div``;

const App = () => {
  return (
    <>
      <Title />
      <Wrapper>
        <CurrencyConvert />
      </Wrapper>
    </>
  );
};

export default App;
