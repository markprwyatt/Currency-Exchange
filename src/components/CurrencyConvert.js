import React, { useState } from "react";
import ConvertAmount from "./ConvertAmount";
import CurrencySelector from "./CurrencySelector";
import fetchCurrencyConversion from "./fetchCurrencyConversion";
import CurrencyInfo from "./CurrencyInfo";

const CurrencyConvert = () => {
  const [currencyFrom, setCurrencyFrom] = useState("");
  const [currencyTo, setCurrencyTo] = useState("");
  const [fromTotal, setFromTotal] = useState(0);
  const [toTotal, setToTotal] = useState(0);

  return (
    <>
      <div>
        <ConvertAmount onChange={e => setFromTotal(e.target.value)} />
        <CurrencySelector onChange={e => setCurrencyFrom(e.target.value)} />
        <CurrencySelector onChange={e => setCurrencyTo(e.target.value)} />
        <button
          onClick={async () => {
            const total = await fetchCurrencyConversion(
              currencyFrom,
              currencyTo,
              fromTotal
            );
            setToTotal(total.toFixed(2));
          }}
        />
      </div>
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
