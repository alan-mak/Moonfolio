require('dotenv').config();

const express = require("express");
const app = express();
const sass = require("node-sass-middleware");
const port = process.env.PORT || 8080;
const moment = require("moment");
const dataObj = {moment: moment};

app.set('views', './views');
app.set('view engine', 'ejs');
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static('public'));

app.get('/works/boozy', (req, res) => {
  res.render('boozy', dataObj);
});

app.get('/', (req, res) => {
  res.render('index', dataObj);
});

app.get('*', (req, res) => {
  res.status(404).render('404', dataObj);
});

app.listen(port, () => {
  console.log("Listening on: http://localhost:" + port);
});