import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
const App = () => {
  const [base, setBase] = useState('');
  const [target, setTarget] = useState('');
  const [rate, setRate] = useState(null);

  const handleClickConvert = () => {
    if (!base || !target) {
      alert('Please fill all blocks');
      return;
    }
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

    setBase('');
    setTarget('');
  };

  return (
    <div>
      <h1>Currency Exchange Rates</h1>
      <input
        type="text"
        placeholder="Enter source"
        value={base}
        maxLength={3}
        onChange={(e) => {
          setBase(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Enter target"
        value={target}
        maxLength={3}
        onChange={(e) => {
          setTarget(e.target.value);
        }}
      />
      <br />
      <button className='but' onClick={handleClickConvert}>Convert</button>

      {rate && typeof rate === 'object' ? (
        <div>
          <h2>Exchange Rate:</h2>
          {Object.keys(rate).map((key) => (
            <div key={key}>
              <h2>{rate[key]}</h2>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default App;
