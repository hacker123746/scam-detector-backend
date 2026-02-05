const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

// tumhare routes yahan rahenge

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("API running on port", PORT);
});
