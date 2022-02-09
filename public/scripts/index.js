//Image slider
let count = 0;
let images = [];
let time = 2000;

images[0] = "https://img6.hkrtcdn.com/15645/bnr_1564495_o.jpg";
images[1] = "https://img10.hkrtcdn.com/15640/bnr_1563949_o.jpg";
images[2] = "https://img6.hkrtcdn.com/15538/bnr_1553705_o.jpg";
images[3] = "https://img8.hkrtcdn.com/15641/bnr_1564057_o.jpg";
images[4] = "https://img8.hkrtcdn.com/14853/bnr_1485287_o.jpg";
images[5] = "https://img6.hkrtcdn.com/15632/bnr_1563185_o.png";

function slidingShows() {
  document.silde.src = images[count];
  if (count < images.length - 1) {
    count++;
  } else {
    count = 0;
  }
  setTimeout("slidingShows()", time);
}
window.onload = slidingShows;

let userID = JSON.parse(localStorage.getItem("HKuser"));
//Work n progress..............
// let loginBtn = document.getElementById('loginBtn')
// if(userID !== null){
//   loginBtn.innerHTML = "Logout"
// }

//Flash sale products fetch
async function productdata() {
  try {
    let res = await fetch(
      `https://health-kart.herokuapp.com/products/flashsale`
    );
    let data = await res.json();
    productDB = data.product;

    showProduct(productDB);
  } catch (error) {
    showProduct(error);
  }
}
productdata();

//Append flash sale on index page
function showProduct(product) {
  let div_data = document.getElementById("data");

  product.forEach(function (products) {
    let div = document.createElement("div");
    let pricecart = document.createElement("div");

    let m_name = document.createElement("h4");
    m_name.innerText = products.name;

    let m_price = document.createElement("b");
    m_price.innerText = "₹" + products.price;

    //Onclick add to cart, padd product ID
    let m_button = document.createElement("button");
    m_button.innerHTML = "🛒 ADD";
    m_button.onclick = function () {
      if (userID == null) {
        alert("Please login");
        window.location.href = "../login.html";
      } else {
        cartItems(products._id);
        m_button.innerHTML = "Added to cart";
        m_button.style.background = "gray";
      }
    };

    let m_discount = document.createElement("h5");
    m_discount.innerText = products.discount + "% off";

    let image = document.createElement("img");
    image.src = products.img;
    let m_rating = document.createElement("p");
    m_rating.innerHTML = "★ " + products.rating;

    pricecart.append(m_price, m_button);

    div.append(image, m_discount, m_name, m_rating, pricecart);

    div_data.append(div);
  });
}

//ADD to cart
//fetch cart item of a user and check items if already added

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

function function1() {
  alert("subscribed successfully");
}
