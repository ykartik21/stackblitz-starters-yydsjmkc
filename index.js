const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.send();
});

app.get('/welcome', (req, res) => {
  function WelcomeFunction() {
    return `Welcome to our service`;
  }
  res.send(WelcomeFunction());
});

app.get('/greet', (req, res) => {
  let name = req.query.name;
  function WelcomeFunction(name) {
    return `Hello, ${name}!`;
  }
  res.send(WelcomeFunction(name));
});

app.get('/check-password', (req, res) => {
  let password = req.query.password;
  function checkPassword(password) {
    if (password.length > 15) {
      return 'Passwrd is Strong';
    } else {
      return 'Pasword is Weak';
    }
  }
  res.send(checkPassword(password));
});

app.get('/check-sum', (req, res) => {
  let num1 = req.query.num1;
  let num2 = req.query.num2;
  function checkSum(a, b) {
    let sum = parseFloat(a) + parseFloat(b);
    return sum.toString();
  }
  res.send(checkSum(num1, num2));
});

function checkUserSubscription(name, status) {
  if (status == true) {
    return `${name} is subscribed `;
  } else {
    return `${name} is not subscribed`;
  }
}

app.get('/subscription-status', (req, res) => {
  let status = req.query.status;
  let name = req.query.name;
  res.send(checkUserSubscription(name, status));
});

function discountedPrice(price, discount) {
  let finaLprice;
  finaLprice = price - (discount * price) / 100;
  return finaLprice.toString();
}

app.get('/discounted-price', (req, res) => {
  let price = req.query.price;
  let discount = req.query.discount;
  res.send(discountedPrice(price, discount));
});


function personalisedMsg(name,age,gender){
  return(`Hello ${name} you are ${age} year old ${gender}`)
}
app.get('/personalised-msg', (req, res) => {
  let name = req.query.name;
  let age = req.query.age;
  let gender = req.query.gender;
  res.send(personalisedMsg(name,age,gender))
 
});

function finalPrice(price, discount,tax) {
  let totalPrice;
  finaLprice = price - (discount * price) / 100 +((tax*price)/100)
  return finaLprice.toString();
}

app.get('/final-price', (req, res) => {
  let price = req.query.price;
  let discount = req.query.discount;
  let tax = req.query.tax;
  res.send(finalPrice(price, discount,tax));
});


function exerciseTie(running, cycle,swimming) {
  let totalTime;
  totalTime = running+cycle+swimming
  return totalTime.toString();
}

app.get('/total-exercise-time', (req, res) => {
  let running = parseFloat(req.query.running);
  let cycle = parseFloat(req.query.cycle);
  let swimming = parseFloat(req.query.swimming);
  res.send(exerciseTie(running, cycle,swimming));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
