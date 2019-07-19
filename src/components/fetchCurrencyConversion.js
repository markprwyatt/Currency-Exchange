import axios from "axios";

const fetchCurrencyConversion = async (fromCurrency, toCurrency, amount) => {
  const response = await axios.get(
    `https://api.exchangeratesapi.io/latest?symbols=${fromCurrency},${toCurrency}`
  );

  const eur = amount / response.data.rates[fromCurrency];
  const total = eur * response.data.rates[toCurrency];
  return total;
};

export default fetchCurrencyConversion;
