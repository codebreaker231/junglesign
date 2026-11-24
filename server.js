const path = require("path");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/status", (req, res) => {
  res.json({
    status: "online",
    hub: "JungleSign",
    supportedLanguages: ["ASL", "BSL", "AUSLAN", "ISL", "LSF", "JSL"],
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`🌿 JungleSign running at http://localhost:${PORT}`);
});
