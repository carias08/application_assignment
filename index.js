const express = require('express');
const app = express();
const port = 3000;
var quotes = require('random-movie-quotes')

app.use(express.static('public'));

app.get('/quote', (req, res) => {
  res.json({
    quote: quotes.getQuote()
  });
});
 
console.log(quotes.getQuote())


app.listen(port, () => console.log(`Awesome app listening on port ${port}!`));