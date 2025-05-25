const express = require('express');
const app = express();
app.use(express.json());

app.post('/generate-code', (req, res) => {
  const { language, task } = req.body;
  const code = `// Code for ${task} in ${language}\nfunction example() { return true; }`;
  res.json({ result: code });
});

app.listen(3005, () => console.log('🧠 Truth API listening on port 3005'));
