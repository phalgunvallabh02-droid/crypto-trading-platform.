const express = require("express");
const app = express();

app.use(express.json());

app.get("/api/prices", (req, res) => {
  res.json([
    { symbol: "BTC", price: 68000 },
    { symbol: "ETH", price: 3500 }
  ]);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

