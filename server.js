const express = require("express");
const cors = require("cors");
const detect = require("./detect"); // import your function

const app = express();

app.use(express.json());

// allow your Netlify site to talk to backend
app.use(cors({
  origin: "https://scam-detector-backend-production.up.railway.app/check", 
  methods: ["GET", "POST"],
  credentials: true
}));

// ✅ THIS ROUTE WAS MISSING
app.post("/detect", (req, res) => {
  const { url, type } = req.body;

  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }

  const result = detect(url, type);
  res.json(result);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("API running on port", PORT));
