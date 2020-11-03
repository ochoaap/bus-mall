'use strict';

var products = [];
var totalClicksAllowed = 25;
var clicks = 0;
var container = document.getElementById('container');
var results = document.getElementById('results');






function Product(name) {
  this.name = name;
  this.src = `image/${name}.jpg`;
  this.views = 0;
  this.click = 0;
  this.votes = 0;
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
  productArr.push(randomProduct());
  productArr.push(randomProduct());
  productArr.push(randomProduct());
  list.innerHTML = '';
  for (var i = 0; i < 3; i++) {
    var newLi = document.createElement('li');
    var image = document.createElement('img');
    image.src = productArr[i].src;
    image.height = '300';
    newLi.appendChild(image);
    list.appendChild(newLi);
  }

}


function renderResults() {
  for (var i = 0; i < products.length; i++) {
    var li = document.createElement('li');
    li.tectcontent = `${products[i].name} had ${products[i].clicks} clicks, and the user saw them ${products[i].views}.`;
    results.appendChild;

  }
}

function handleClick(event) {
  console.log('click', event.target.name);
  clicks++;
  if (clicks !== totalClicksAllowed) {
    var clickedProduct = event.target.name;
    for (var j = 0; j < products.length; j++) {
      if (clickedProduct === products[j].name) {
        products[j].vote++;
      }
    }
    renderProducts();

  }
  else if (clicks === totalClicksAllowed){
    container.removeEventListner('click', handleClick);
    renderResults;
  }
}

container.addEventListener('click', handleClick);
renderProducts();
container.removeEventListner('click', handleClick);
