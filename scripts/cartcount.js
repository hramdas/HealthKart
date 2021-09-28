
let txt = document.getElementById('cartOnNum')
let cart = JSON.parse(localStorage.getItem('cart'))

let spantext = document.createElement('span')
var len = cart.length;
spantext.innerHTML = len;

txt.appendChild(spantext)
