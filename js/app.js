'use strict';

var products = [];
var totalClicksAllowed = 25;
var clicks = 0;
var vote = 0;
var myContainer = document.getElementById('container');





// creat consturctor for products
// has following - name of product and file path of image

function Product(name) {
  this.name = name;
  this.src = `image/${name}.jpg`;
  this.views = 0;
  this.click = 0;
  this.votes = 0;
  products.push(this);
}




// create an algorithm that will randomly genereate three photos of the products
// attach event listener to section in html

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
  var list = document.getElementById('photos');
  productArr.push(randomProduct());
  productArr.push(randomProduct());
  productArr.push(randomProduct());

  for (var i = 0; i < 3; i++) {
    var newLi = document.createElement('li');
    var image = document.createElement('img');
    image.src = productArr[i].src;
    image.height = '300';
    newLi.appendChild(image);
    list.appendChild(newLi);
  }
}




renderProducts();


// user clicks prompts generation of new images


function handleClick(event) {
  var clickedProduct = event.target.productArr;
  clicks++;

  for (var j = 0; j < products.length; j++) {
    if (clickedProduct === products[j].name) {
      products[j].vote++;
    }
  }
  renderProducts();
  if (clicks === totalClicksAllowed) {
    myContainer.removeEventListner('click', handleClick);
  }

}

myContainer.addEventListener('click', handleClick);

// 25 rounds by default
// report of results after voting has ended
// remove listener once voting has concluded.
// add button with text View Results that will dsiplay the results showing votes received, number of times seen

