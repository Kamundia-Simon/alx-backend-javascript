const express = require('express');

const app = express();
const PORT = 1245;

app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});

module.exports = app;
