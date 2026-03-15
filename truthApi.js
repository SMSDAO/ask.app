const express = require('express');
const app = express();

app.get("/status", (req, res) => {
  res.send("✅ Truth API is running!");
});

app.get("/health", (req, res) => {
  res.json({ status: "ok", uptime: process.uptime(), timestamp: new Date().toISOString() });
});

app.get("/metrics", (req, res) => {
  res.json({
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    timestamp: new Date().toISOString(),
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Truth API listening on port ${PORT}`));

module.exports = app;
