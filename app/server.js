let express = require("express");
let app = express();
let converter = require("./converter");

let billing = require("../app/billing");
let plays = require('../app/plays.json');
let invoices = require('../app/invoices.json');

app.get("/billing", function(req, res) {

  let result = billing.statement(invoices[0], plays);

  res.send(result);
});

app.get("/rgbToHex", function(req, res) {
  var red   = parseInt(req.query.red, 10);
  var green = parseInt(req.query.green, 10);
  var blue  = parseInt(req.query.blue, 10);

  var hex = converter.rgbToHex(red, green, blue);

  res.send(hex);
});

app.get("/hexToRgb", function(req, res) {
  var hex = req.query.hex;

  var rgb = converter.hexToRgb(hex);

  res.send(JSON.stringify(rgb));
});

app.listen(3000);
