const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <h1>🚀 good night</h1>
    <p>Zop yedi gan* 😘</p>
    <img src=https://media.tenor.com/6MTrgk8yCIgAAAAj/clone-shaktimaan.gif"/>
  `);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running at http://0.0.0.0:${PORT}`);
});
