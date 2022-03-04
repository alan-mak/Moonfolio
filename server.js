require('dotenv').config();

const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log("Listening on: http://localhost:" + port);
});