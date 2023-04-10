const express = require('express');
const bodyParser = require('body-parser');
const toNumber = require('./functions/toNumber');
const toWords = require('./functions/toWords');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/to/number', (req, res) => {
  const words = req.body.words;
  const number = toNumber(words);
  res.send({ number });
});

app.post('/to/words', (req, res) => {
    const number = req.body.number;
    const words = toWords(number);
    res.send({ words });
  });



const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));