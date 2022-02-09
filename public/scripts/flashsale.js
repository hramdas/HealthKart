async function productData(valueIN) {
  try {
    let res = await fetch("https://health-kart.herokuapp.com/products/popular");
    let data = await res.json();
    productDB = data.product;

    showProteins(productDB);
  } catch (error) {
    showProteins(error);
  }
}
setTimeout(2000, productData);
// productData()
productData();

let userID = JSON.parse(localStorage.getItem("HKuser"));
div_data = document.getElementById("items");

function showProteins(productDB) {
  div_data.innerHTML = null;
  productDB.forEach(function (product) {
    let div = document.createElement("div");
    let price_quick = document.createElement("div");

    let p_name = document.createElement("b");
    p_name.innerHTML = product.name;

    let p_price = document.createElement("span");
    p_price.innerHTML = "₹" + product.price;

    let p_image = document.createElement("img");
    p_image.src = product.img;

    let p_rating = document.createElement("span");
    p_rating.innerHTML = "★ " + product.rating;

    let quick_btn = document.createElement("button");
    quick_btn.innerText = "🗲Quick Buy";
    quick_btn.onclick = function () {
      location.href = "checkout.html";
    };

    let wish_btn = document.createElement("button");
    wish_btn.innerText = "♡";
    wish_btn.onclick = function () {
      if (userID == null) {
        alert("Please login");
        window.location.href = "../login.html";
      } else {
        addtoWish(product._id);
        wish_btn.style.color = "red";
      }
    };
    price_quick.append(p_price, quick_btn);
    div.append(wish_btn, p_image, p_name, p_rating, price_quick);

    div_data.append(div);
  });
}

async function addtoWish(p) {
  let res = await fetch(
    "https://health-kart.herokuapp.com/users/" + userID + "/wish/"
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
        alert("Product already available in wishlist");
        break;
      }
    }
  }
  // else add item to cart
  if (result == false) {
    wish_data(p);
  }
}

function wish_data(p) {
  fetch("https://health-kart.herokuapp.com/wishlists", {
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
setTimeout(500, wish_data);
