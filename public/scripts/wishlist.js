let wish = JSON.parse(localStorage.getItem("wish"));
//fetch wishlist
async function wishData() {
  try {
    let res = await fetch("https://health-kart.herokuapp.com/wishlists");
    let data = await res.json();
    wish = data.wish;
    wishlist(wish);
  } catch (error) {}
}
wishData();

let data = document.getElementById("data");
let count = document.getElementById("count");
let text = document.createElement("p");
let userID = JSON.parse(localStorage.getItem("HKuser"));

//Append wishlist data
function wishlist(wish) {
  wish.forEach(function (p) {
    product = p.item;

    let div = document.createElement("div");
    let divtxt = document.createElement("span");
    let divbtn = document.createElement("span");

    let w_image = document.createElement("img");
    w_image.src = product.img;

    let w_name = document.createElement("h4");
    w_name.innerHTML = product.name;

    let w_price = document.createElement("b");
    w_price.innerHTML = "₹" + product.price;

    //Onclick add to cart
    let cart_btn = document.createElement("button");
    cart_btn.innerHTML = "Add to Cart";
    cart_btn.onclick = function () {
      if (userID == null) {
        alert("Please login");
        window.location.href = "../login.html";
      } else {
        cartItems(product._id);
      }
    };

    //Onclick remove from wishlist
    let remove = document.createElement("button");
    remove.innerHTML = "Remove";
    remove.onclick = function () {
      removeWish(p._id);
    };

    divbtn.append(cart_btn, remove);
    divtxt.append(w_name, w_price, divbtn);

    div.append(w_image, divtxt);
    data.append(div);
  });
  //Wishlist item count
  text.innerHTML = "My Wishlist ( " + wish.length + " )";
  count.appendChild(text);
}
//Cart item check
async function cartItems(p) {
  let res = await fetch(
    "https://health-kart.herokuapp.com/users/" + userID + "/cart/"
  );
  let cartData = await res.json();

  let items = cartData.items;
  var result = false;
  if (items.length == 0) {
    var result = false;
  } else {
    for (var i = 0; i < items.length; i++) {
      if (items[i].item == p) {
        var result = true;
        alert("Product already available in cart");
        break;
      }
    }
  }
  // else add item to cart
  if (result == false) {
    addtocart(p);
  }
}
//add to cart
function addtocart(p) {
  fetch("https://health-kart.herokuapp.com/carts", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      item: p,
      user: userID,
    }),
  }).then((response) => response.json());
}
setTimeout(500, addtocart);

// remove from wishlist
async function removeWish(id) {
  fetch("https://health-kart.herokuapp.com/wishlists/remove/:id", {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      id: id,
    }),
  });
  window.location.href = "wishlist.html";
}
