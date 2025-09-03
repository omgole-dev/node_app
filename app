const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Home route
app.get("/", (req, res) => {
  res.send("🚀 Hello! Your Node.js app is running.");
});

// About route
app.get("/about", (req, res) => {
  res.send("This is a simple Node.js app with Express.");
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
