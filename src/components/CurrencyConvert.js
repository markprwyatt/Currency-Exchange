import React, { useState } from "react";
import styled from "styled-components";

import ConvertAmount from "./ConvertAmount";
import CurrencySelector from "./CurrencySelector";
import fetchCurrencyConversion from "./fetchCurrencyConversion";
import CurrencyInfo from "./CurrencyInfo";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  & > * {
    margin: 0.3rem;
  }
`;

const Button = styled.button`
  box-sizing: border-box;
  border-radius: 0.5rem;
  padding: 0 0.5rem;
  background-color: #fcb813;
  border: none;
`;

const CurrencyConvert = () => {
  const [currencyFrom, setCurrencyFrom] = useState("");
  const [currencyTo, setCurrencyTo] = useState("");
  const [fromTotal, setFromTotal] = useState(null);
  const [toTotal, setToTotal] = useState(null);

  return (
    <>
      <Wrapper>
        <ConvertAmount onChange={e => setFromTotal(e.target.value)} />
        <CurrencySelector onChange={e => setCurrencyFrom(e.target.value)} />
        <CurrencySelector onChange={e => setCurrencyTo(e.target.value)} />
        <Button
          onClick={async () => {
            const total = await fetchCurrencyConversion(
              currencyFrom,
              currencyTo,
              fromTotal
            );
            setToTotal(total.toFixed(2));
          }}>
          <i className="fas fa-arrow-right fa-2x" />
        </Button>
      </Wrapper>
      <CurrencyInfo
        total={toTotal}
        currencyTo={currencyTo}
        currencyFrom={currencyFrom}
        fromTotal={fromTotal}
      />
    </>
  );
};

export default CurrencyConvert;
