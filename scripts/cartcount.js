 

let cart;
async function cartFetch() {
  txt = document.getElementById("cartOnNum")
  try {
    //URL for fetch to be upfated with dynamic URL with user ID
    let res = await fetch(
      "http://localhost:2200/users/cart/61549acf759d0c2bdd45aeb6"
    );
    let data = await res.json();

    cart = data.user.cart;
    let spantext = document.createElement("span");

    var len = cart.length;
    console.log(len)
    
    spantxt.innerHTML = 'items'+len;
    
    console.log(spantext)

    txt.appendChild(spantext);

  } catch (error) {}
} //setTimeout(1000, cartFetch)
cartFetch();

//let cart = JSON.parse(localStorage.getItem('cart'))
