import React from "react";
import styled from "styled-components";
import Date from "./CurrentDate";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 2rem;

  h4 {
    margin: 1rem;
  }

  p {
    font-size: 1.4rem;
  }
`;

const CurrencyInfo = ({ total, currencyTo, currencyFrom, fromTotal }) => {
  if (total && currencyTo && currencyFrom && fromTotal) {
    return (
      <Wrapper>
        <h4>{fromTotal < 0.01 ? "" : `${fromTotal} ${currencyFrom} =`}</h4>
        <h2>
          {total < 0.01 ? "" : total}
          {" " + currencyTo}
        </h2>

        <p>
          <Date />
        </p>
      </Wrapper>
    );
  }

  return <Wrapper />;
};

export default CurrencyInfo;
