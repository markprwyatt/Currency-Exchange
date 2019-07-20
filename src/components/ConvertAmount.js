import React from "react";
import styled from "styled-components";

const Input = styled.input`
  display: inline-block;
  font-size: 1.3rem;
  border-radius: 0.5rem;
  border: none;
  box-sizing: border-box;
  padding: 0.2rem 0.6rem;
`;

const ConvertAmount = ({ onChange }) => {
  return <Input type="number" min="0" onChange={e => onChange(e)} />;
};

export default ConvertAmount;
