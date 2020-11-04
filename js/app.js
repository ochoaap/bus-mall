'use strict';

var products = [];
var totalClicksAllowed = 25;
var clicks = 0;
var container = document.getElementById('container');
var results = document.getElementById('results');
var button = document.getElementById('button');




function Product(name) {
  this.name = name;
  this.src = `image/${name}.jpg`;
  this.views = 0;
  this.clicks = 0;
  products.push(this);
}


function randomProduct() {
  return products[Math.floor(Math.random() * products.length)];
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



function renderProducts() {
  var productArr = [];
  console.log('renderProducts', productArr);
  var list = document.getElementById('photos');
  // productArr.push(randomProduct());
  // productArr.push(randomProduct());
  // productArr.push(randomProduct());
  var prodOne = randomProduct();
  var prodTwo = randomProduct();
  var prodThree = randomProduct();
  while (prodOne === prodTwo || prodThree === prodTwo || prodOne === prodThree) {
    prodTwo = randomProduct();
    prodThree = randomProduct();
    console.log('duplicatefound');
  }
  productArr.push(prodOne, prodTwo, prodThree);
  list.innerHTML = '';
  for (var i = 0; i < 3; i++) {
    var newLi = document.createElement('li');
    var image = document.createElement('img');
    image.src = productArr[i].src;
    image.height = '300';
    image.id = productArr[i].name;
    newLi.appendChild(image);
    list.appendChild(newLi);
    productArr[i].views++;
  }

}


function renderResults() {
  console.log(products);
  for (var i = 0; i < products.length; i++) {
    var li = document.createElement('li');
    li.textContent = `${products[i].name} had ${products[i].clicks} clicks, and the user saw them ${products[i].views}.`;
    results.appendChild(li);
  }
}


function handleClick(event) {
  console.log(event.target.id);
  clicks++;
  if (clicks !== totalClicksAllowed) {
    var clickedProduct = event.target.id;
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
renderProducts();
