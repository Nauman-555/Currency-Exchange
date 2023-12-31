import React, { useState } from "react";
import axios from "axios";
import "./App.css";
const App = () => {
  const [rate, setRate] = useState(null);
  const [amount, setAmount] = useState("");
  const [base, setBase] = useState("");
  const [target, setTarget] = useState("");
  // const [current, setCurrent] = useState(false);
  // const [sam, setSam] = useState("Check it!");

  const handleOptionChange = (event) => {
    setBase(event.target.value);
    // setAmount('');
    setRate(null);
  };
  const handleOptionChange2 = (event) => {
    setTarget(event.target.value);
    // setAmount('');
    setRate(null);
  };
  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };
  // const handleCurrencyChange = () =>{
  //   setCurrent(true);
  //   setSam(false);
  // }
  const handleClickConvert = () => {
    if (base && target && amount) {
      setRate(null);
      axios
        .get(
          `https://exchange-rates.abstractapi.com/v1/live/?api_key=8903a5065cba4617b0c60a254d5b8cff&base=${base}&target=${target}`
        )
        .then((response) => {
          console.log(response.data);
          setRate(response.data.exchange_rates);
        })
        .catch((error) => {
          console.log(error);
        });
      <div>hello</div>;
    } else {
      alert("Please fill in all the fields before converting.");
    }
  };
  const calculateConvertedAmount = () => {
    if (rate && !isNaN(amount) && amount !== "") {
      const exchangeRate = rate[target];
      if (exchangeRate !== undefined) {
        const convertedAmount = amount * exchangeRate;
        return convertedAmount.toFixed(2);
      }
    }
  };
  return (
    <div>
      <h1 className="hed">Currency Exchange Rates</h1>
      <div className="fan">
        <div className="abc">
          <label htmlFor="selectBase">Source:</label>
          <select id="selectBase" value={base} onChange={handleOptionChange}>
            <option value="">Select...</option>
            <option value="ARS">ARS</option>
            <option value="AUD">AUD</option>
            <option value="BCH">BCH</option>
            <option value="BGN">BGN</option>
            <option value="BNB">BNB</option>
            <option value="BRL">BRL</option>
            <option value="BTC">BTC</option>
            <option value="CAD">CAD</option>
            <option value="CHF">CHF</option>
            <option value="CNY">CNY</option>
            <option value="CZK">CZK</option>
            <option value="DKK">DKK</option>
            <option value="DOGE">DOGE</option>
            <option value="DZD">DZD</option>
            <option value="ETH">ETH</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="HKD">HKD</option>
            <option value="HRK">HRK</option>
            <option value="HUF">HUF</option>
            <option value="IDR">IDR</option>
            <option value="ILS">ILS</option>
            <option value="INR">INR</option>
            <option value="ISK">ISK</option>
            <option value="JPY">JPY</option>
            <option value="KRW">KRW</option>
            <option value="LTC">LTC</option>
            <option value="MAD">MAD</option>
            <option value="MXN">MXN</option>
            <option value="MYR">MYR</option>
            <option value="NOK">NOK</option>
            <option value="NZD">NZD</option>
            <option value="PHP">PHP</option>
            <option value="PLN">PLN</option>
            <option value="RON">RON</option>
            <option value="RUB">RUB</option>
            <option value="SEK">SEK</option>
            <option value="SGD">SGD</option>
            <option value="THB">THB</option>
            <option value="TRY">TRY</option>
            <option value="TWD">TWD</option>
            <option value="XRP">XRP</option>
            <option value="ZAR">ZAR</option>
            <option value="USD">USD</option>
          </select>
          <label htmlFor="selectOption">Target:</label>
          <select
            id="selectOption2"
            value={target}
            onChange={handleOptionChange2}
          >
            <option value="">Select...</option>
            <option value="ARS">ARS</option>
            <option value="AUD">AUD</option>
            <option value="BCH">BCH</option>
            <option value="BGN">BGN</option>
            <option value="BNB">BNB</option>
            <option value="BRL">BRL</option>
            <option value="BTC">BTC</option>
            <option value="CAD">CAD</option>
            <option value="CHF">CHF</option>
            <option value="CNY">CNY</option>
            <option value="CZK">CZK</option>
            <option value="DKK">DKK</option>
            <option value="DOGE">DOGE</option>
            <option value="DZD">DZD</option>
            <option value="ETH">ETH</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="HKD">HKD</option>
            <option value="HRK">HRK</option>
            <option value="HUF">HUF</option>
            <option value="IDR">IDR</option>
            <option value="ILS">ILS</option>
            <option value="INR">INR</option>
            <option value="ISK">ISK</option>
            <option value="JPY">JPY</option>
            <option value="KRW">KRW</option>
            <option value="LTC">LTC</option>
            <option value="MAD">MAD</option>
            <option value="MXN">MXN</option>
            <option value="MYR">MYR</option>
            <option value="NOK">NOK</option>
            <option value="NZD">NZD</option>
            <option value="PHP">PHP</option>
            <option value="PLN">PLN</option>
            <option value="RON">RON</option>
            <option value="RUB">RUB</option>
            <option value="SEK">SEK</option>
            <option value="SGD">SGD</option>
            <option value="THB">THB</option>
            <option value="TRY">TRY</option>
            <option value="TWD">TWD</option>
            <option value="XRP">XRP</option>
            <option value="ZAR">ZAR</option>
            <option value="USD">USD</option>
          </select>
        </div>
        <br></br>
        <div className="fall">
          <input
            type="number"
            value={amount}
            placeholder="  Enter amount"
            onChange={handleAmountChange}
          />
          <br />
          <button className="but" onClick={handleClickConvert}>
            Convert
          </button>
          {rate && typeof rate === "object" && base && target && amount ? (
            <button className="result">
              <p>
                Source Currency = {base} <br />
              </p>
              <p>
                {" "}
                Target Currency = {target} <br />
              </p>
              <p>
                Exchange_Rate = {calculateConvertedAmount()}
                <br />
              </p>
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default App;
