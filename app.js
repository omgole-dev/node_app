const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <h1>🚀 Hello from Node.js</h1>
    <p>Here’s an image from the internet:</p>
    <img src=https://media.tenor.com/6MTrgk8yCIgAAAAj/clone-shaktimaan.gif"/>
  `);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running at http://0.0.0.0:${PORT}`);
});
