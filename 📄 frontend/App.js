import React, { useEffect, useState } from "react";

function App() {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/prices")
      .then(res => res.json())
      .then(data => setPrices(data));
  }, []);

  return (
    <div>
      <h1>Crypto Prices</h1>
      <ul>
        {prices.map(p => (
          <li key={p.symbol}>
            {p.symbol}: ${p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
