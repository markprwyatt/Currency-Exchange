import React from "react";
import styled from "styled-components";
import "../styles/main.css";

import Title from "./Title";
import CurrencyConvert from "./CurrencyConvert";

const Wrapper = styled.div``;

const App = () => {
  return (
    <Wrapper>
      <Title />
      <CurrencyConvert />
    </Wrapper>
  );
};

export default App;
