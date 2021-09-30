let txt = document.getElementById("cartOnNum");

let cart;
async function cartFetch() {
  try {
    //URL for fetch to be upfated with dynamic URL with user ID
    let res = await fetch(
      "http://localhost:2200/users/61549acf759d0c2bdd45aeb6"
    );
    let data = await res.json();

    // console.log(data.user.cart);
    cart = data.user.cart;
    console.log(cart);
    let spantext = document.createElement("span");
    var len = cart.length;
    
    spantext.innerHTML = len;

    txt.appendChild(spantext);
    //Cart_items();
  } catch (error) {}
} setTimeout(1000, cartFetch)
cartFetch();

//let cart = JSON.parse(localStorage.getItem('cart'))
