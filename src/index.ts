// import { EntryPoint } from "./entryPoint";

// const entryPoint = new EntryPoint(window);
// entryPoint.animate();

var express = require('express');
var app = express();

app.get('/', function (_: any, res: any) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});