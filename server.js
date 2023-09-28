const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname)));

app.get('/quiz1', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/quiz1/profile', (req, res) => {
  res.sendFile(path.join(__dirname, 'profile.html'));
});

app.get('/quiz1/hometown', (req, res) => {
  res.sendFile(path.join(__dirname,  'hometown.html'));
});

app.get('/quiz1/food', (req, res) => {
  res.sendFile(path.join(__dirname, 'food.html'));
});

app.get('/quiz1/tourist', (req, res) => {
  res.sendFile(path.join(__dirname,  'tourist.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
