const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

function isNumber(num1, num2) {
  return !isNaN(parseInt(num1)) && !isNaN(parseInt(num2));
}

function errorUnderflow(num1, num2) {
  return parseInt(num1) < -1000000 || parseInt(num2) < -1000000;
}

function errorOverflow(num1, num2) {
  return parseInt(num1) > 1000000 || parseInt(num2) > 1000000;
}
//Write POST endpoint to get the sum of two number
app.post("/add", (req, res) => {
  const { num1, num2 } = req.body;
  if (isNumber) {
    if (errorUnderflow(num1, num2)) {
      res.status(400).send({ error: "Underflow" });
    } else if (errorOverflow(num1, num2)) {
      res.status(400).send({ error: "Overflow" });
    } else {
      res.status(200).send({ result: `${num1} + ${num2}` });
    }
  } else {
    res.status(400).send({ error: "Invalid data types" });
  }
});

//Write POST endpoint to get the differance of two number
app.post("/subtract", (req, res) => {
  const { num1, num2 } = req.body;
  if (isNumber) {
    if (errorUnderflow(num1, num2)) {
      res.status(400).send({ error: "Underflow" });
    } else if (errorOverflow(num1, num2)) {
      res.status(400).send({ error: "Overflow" });
    } else {
      res.status(200).send({ result: `${num1} - ${num2}` });
    }
  } else {
    res.status(400).send({ error: "Invalid data types" });
  }
});

//Write POST endpoint to get the multiplication of two number
app.post("/multiply", (req, res) => {
  const { num1, num2 } = req.body;
  if (isNumber) {
    if (errorUnderflow(num1, num2)) {
      res.status(400).send({ error: "Underflow" });
    } else if (errorOverflow(num1, num2)) {
      res.status(400).send({ error: "Overflow" });
    } else {
      res.status(200).send({ result: `${num1} * ${num2}` });
    }
  } else {
    res.status(400).send({ error: "Invalid data types" });
  }
});

//Write POST endpoint to check if the num2 is 0 or not and to get the result after dividing two number
app.post("/divide", (req, res) => {
  const { num1, num2 } = req.body;
  if (isNumber) {
    if (errorUnderflow(num1, num2)) {
      res.status(400).send({ error: "Underflow" });
    } else if (errorOverflow(num1, num2)) {
      res.status(400).send({ error: "Overflow" });
    } else {
      if (parseInt(num2) === 0) {
        res.status(400).send({ error: "Cannot divide by zero" });
      } else {
        res.status(200).send({ result: `${num1} / ${num2}` });
      }
    }
  } else {
    res.status(400).send({ error: "Invalid data types" });
  }
});
      

const server = app.listen(4000, () => {
  console.log(`Server running on port 4000`);
});
    
module.exports = app;
