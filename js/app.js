'use strict';

var products = [];
var totalClicksAllowed = 25;
var clicks = 0;
var container = document.getElementById('container');
var results = document.getElementById('results');
var button = document.getElementById('button');
var productArr = [];
var imageOneEl = document.getElementById('one');
var imageTwoEl = document.getElementById('two');
var imageThreeEl = document.getElementById('three');
var ctx = document.getElementById('myChart');
function Product(name) {
  this.name = name;
  this.src = `image/${name}.jpg`;
  this.views = 0;
  this.clicks = 0;
  products.push(this);
}


function randomProduct() {
  return Math.floor(Math.random() * products.length);
}


new Product('bag');
new Product('banana');
new Product('bathroom');
new Product('boots');
new Product('breakfast');
new Product('bubblegum');
new Product('chair');
new Product('cthulhu');
new Product('dog-duck');
new Product('dragon');
new Product('pen');
new Product('pet-sweep');
new Product('scissors');
new Product('shark');
new Product('sweep');
new Product('tauntaun');
new Product('unicorn');
new Product('usb');
new Product('water-can');
new Product('wine-glass');

function populateProductArr() {
  while (productArr.length > 0) {
    productArr.pop();
  }
  while (productArr.length < 6) {
    var uniqueProduct = randomProduct();
    while (productArr.includes(uniqueProduct)) {
      uniqueProduct = randomProduct();
    }
    productArr.push(uniqueProduct);
  }
  console.log(productArr);
}

function renderProducts() {
  populateProductArr();
  imageOneEl.src = products[productArr[0]].src;
  imageOneEl.alt = products[productArr[0]].name;
  products[productArr[0]].views++;

  imageTwoEl.src = products[productArr[1]].src;
  imageTwoEl.alt = products[productArr[1]].name;
  products[productArr[1]].views++;

  imageThreeEl.src = products[productArr[2]].src;
  imageThreeEl.alt = products[productArr[2]].name;
  products[productArr[2]].views++;


}


function renderResults() {
  console.log(products);
  for (var i = 0; i < products.length; i++) {
    var li = document.createElement('li');
    li.textContent = `${products[i].name} had ${products[i].clicks} clicks, and the user saw them ${products[i].views}.`;
    results.appendChild(li);
  }
}

renderProducts();

function handleClick(event) {
  clicks++;
  if (clicks !== totalClicksAllowed) {
    var clickedProduct = event.target.alt;
    for (var j = 0; j < products.length; j++) {
      if (clickedProduct === products[j].name) {
        products[j].clicks++;
      }
    }
    renderProducts();

  }
  else if (clicks === totalClicksAllowed) {
    container.removeEventListener('click', handleClick);
    button.addEventListener('click', renderResults);
    // renderResults();
  }
}






container.addEventListener('click', handleClick);



var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'line',

  // The data for our dataset
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45]
    }]
  },

  // Configuration options go here
  options: {}
});