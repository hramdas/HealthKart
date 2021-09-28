let wish = JSON.parse(localStorage.getItem("wish"));
let data = document.getElementById('data');

function wishlist(){
wish.forEach(function(product){

    let div = document.createElement('div');
    let divtxt = document.createElement('span');

    let w_image = document.createElement('img');
    w_image.src = product.image;

    let w_name = document.createElement('h4');
    w_name.innerHTML = product.name;

    let w_price = document.createElement('b');
    w_price.innerHTML = '₹'+ product.price;
    
    let cart_btn = document.createElement('button')
    cart_btn.innerHTML = "Add to Cart"
    cart_btn.onclick = function (){
        addtocart(product);
    };

    let quick = document.createElement('button')
    quick.innerHTML = "Quick Buy"
    quick.onclick = function (){
        location.href = "checkout.html";
    }


    divtxt.append(w_name, w_price, cart_btn, quick);
    div.append(w_image, divtxt);
    data.append(div);
})

}
wishlist()

// wishlist items count
let count = document.getElementById('count')
let text = document.createElement('p')
text.innerHTML = 'My Wishlist ( ' +  wish.length + ' )';

count.appendChild(text);


// Add to cart
if(localStorage.getItem("cart")===null){
    localStorage.setItem("cart",JSON.stringify([]));
}
function addtocart(p){
     let cart_data = JSON.parse(localStorage.getItem("cart"));
     cart_data.push(p);
     localStorage.setItem("cart", JSON.stringify(cart_data));
}


