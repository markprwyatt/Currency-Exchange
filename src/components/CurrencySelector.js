import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  display: inline-block;
`;

const Dropdown = styled.div`
  .select-css {
    display: block;
    font-size: 16px;
    font-family: sans-serif;
    font-weight: 700;
    color: #444;
    line-height: 1.3;
    padding: 0.6em 1.4em 0.5em 0.8em;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    margin: 0;
    border: 1px solid #aaa;
    box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
    border-radius: 0.5rem;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E"),
      linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
    background-repeat: no-repeat, repeat;
    background-position: right 0.7em top 50%, 0 0;
    background-size: 0.65em auto, 100%;
  }
  .select-css::-ms-expand {
    display: none;
  }
  .select-css:hover {
    border-color: #888;
  }
  .select-css:focus {
    border-color: #aaa;
    box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);
    box-shadow: 0 0 0 3px -moz-mac-focusring;
    color: #222;
    outline: none;
  }
  .select-css option {
    font-weight: normal;
  }
`;

const CurrencySelector = ({ onChange }) => {
  return (
    <InputWrapper>
      <Dropdown>
        <select
          className="select-css"
          name="currencies"
          onChange={e => onChange(e)}>
          <option defaultValue value="">
            Select currency
          </option>
          <option value="USD">America (United States) Dollars – USD</option>

          <option value="AUD">Australia Dollars – AUD</option>

          <option value="BRL">Brazil Reais – BRL</option>
          <option value="BGN">Bulgaria Leva – BGN</option>
          <option value="CAD">Canada Dollars – CAD</option>

          <option value="CNY">China Yuan Renminbi – CNY</option>

          <option value="HRK">Croatian Kuna - HRK</option>
          <option value="CZK">Czech Republic Koruny – CZK</option>
          <option value="DKK">Denmark Kroner – DKK</option>

          <option value="EUR">Euro – EUR</option>
          <option value="HKD">Hong Kong Dollars – HKD</option>

          <option value="HUF">Hungary Forint – HUF</option>
          <option value="ISK">Iceland Kronur – ISK</option>

          <option value="INR">India Rupees – INR</option>
          <option value="IDR">Indonesia Rupiahs – IDR</option>
          <option value="ILS">Israel New Shekels – ILS</option>

          <option value="JPY">Japan Yen – JPY</option>

          <option value="KRW">Korea (South) Won – KRW</option>

          <option value="MYR">Malaysia Ringgits – MYR</option>
          <option value="MXN">Mexico Pesos – MXN</option>

          <option value="NZD">New Zealand Dollars – NZD</option>
          <option value="NOK">Norway Kroner – NOK</option>

          <option value="PHP">Philippines Pesos – PHP</option>
          <option value="PLN">Poland Zlotych – PLN</option>

          <option value="ROL">Romania Lei – ROL</option>
          <option value="RUB">Russia Rubles – RUB</option>
          <option value="SGD">Singapore Dollars – SGD</option>

          <option value="ZAR">South Africa Rand – ZAR</option>
          <option value="SEK">Sweden Kronor – SEK</option>
          <option value="CHF">Switzerland Francs – CHF</option>

          <option value="THB">Thailand Baht – THB</option>
          <option value="TRY">Turkey New Lira – TRY</option>
          <option value="GBP">United Kingdom Pounds – GBP</option>
          <option value="USD">United States Dollars – USD</option>
        </select>
      </Dropdown>
    </InputWrapper>
  );
};

export default CurrencySelector;
