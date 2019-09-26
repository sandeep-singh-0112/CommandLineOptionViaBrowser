'use strict';
var express = require('express');
var myParser = require('body-parser');
var app = express();
var sum;
var dif;
var mul;
var div;

app.use(myParser.urlencoded({
	extended:true
}));

const form = 
"<form method=\"post\" action=\"http://localhost:4000/num1/num2/operation\">"
  +"Number One:<br>"
  +"  <input type=\"number\" name=\"num1\" value=\"\">"
  +"  <br>"
  +"  Number Two:<br>"
  +"  <input type=\"number\" name=\"num2\" value=\"\">"
  +"  <br>"
  +"  Operation:<br>"
  +"  <input type=\"text\" name=\"operation\" value=\"\">"
  +"  <br><br>"
  +"  <input type=\"submit\" value=\"Submit\">"
  +"</form>";
  
app.get("/num1/num2/operation", function (req, res) {
  res.status(200).send(form);
});

var Mathematics = require('./math');

app.post("/num1/num2/operation", function (req, res) {
	let num1 = Number(req.body.num1);
	let num2 = Number(req.body.num2);
	let switchOperation = String(req.body.operation);

	switch(switchOperation) {
	  case 'sum':
		// code block
		sum = Mathematics.addition(num1, num2);
		res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Output</h1><br /><br />Sum of ' +num1+ ' and ' +num2+ ' : ' + sum);
        res.end();	
		break;
	  case 'sub':
		// code block
		dif = Mathematics.subtraction(num1, num2);
        res.write('<h1>Output</h1><br /><br />Subtraction of ' +num1+ ' and ' +num2+ ' : ' + dif);
        res.end();			
		break;
	  case 'mul':
		// code block
		mul = Mathematics.multiplication(num1, num2);
        res.write('<h1>Output</h1><br /><br />Multiplication of ' +num1+ ' and ' +num2+ ' : ' + mul);
        res.end();			break;
	  case 'div':
		// code block
		div = Mathematics.division(num1, num2);
        res.write('<h1>Output</h1><br /><br />Division of ' +num1+ ' and ' +num2+ ' : ' + div);
        res.end();			break;
	  default:
		// code block
		res.status(200).send("Add, sub, mul and div");
	}  
});

app.post("/", function(req, res) {
	console.log(req.body);
});

var server = app.listen(4000, function () {
	console.log('Node server is running at port 4000 ...');
});
