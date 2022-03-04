const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const path = require('path');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, () => {
  console.log("Listening on: http://localhost:" + port);
});