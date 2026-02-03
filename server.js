const express = require("express");
const cors = require("cors");
const config = require("./config");
const detectScam = require("./scamRules");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/check", (req, res) => {
  const { url, type } = req.body;
  const result = detectScam(url, type);
  res.json(result);
});

app.listen(config.port, () => {
  console.log(`API running on port ${config.port}`);
});