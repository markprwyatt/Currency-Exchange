import React from "react";
import styled from "styled-components";

const Input = styled.input`
  display: inline-block;
`;

const ConvertAmount = ({ onChange }) => {
  return <Input type="number" onChange={e => onChange(e)} />;
};

export default ConvertAmount;
