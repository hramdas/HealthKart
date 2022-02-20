// Fetch cart data using UserID from Db
let userID = JSON.parse(localStorage.getItem("HKuser"));
let cart_data;
async function cartFetch() {
  try {
    let res = await fetch(
      "https://health-kart.herokuapp.com/users/" + userID + "/cart/"
    );
    let data = await res.json();
    cart_data = data.items;
    Cart_items(cart_data);
  } catch (error) {}
}
cartFetch();

let totalAmount = document.getElementById("totalAmount");
let proceedToPay = document.getElementById("proceedtopay");
let cartItem = document.getElementById("cartItem");
let pincode = document.getElementById("pincode");
let coupon = document.getElementById("coupon");
let order = document.getElementById("order");
let shipping = document.getElementById("shipping");
let count = 0;
let data_div = document.getElementById("cart_data");

let datadiv = document.getElementById("cart_data");

//Append cart data
function Cart_items(data) {
  var total = 0;
  if (data.length == 0) {
    datadiv.innerHTML = "<h2> Cart is empty</h2>";
  } else {
    data.forEach(function (itemID) {
      async function itemFetch() {
        try {
          let res = await fetch(
            "https://health-kart.herokuapp.com/products/item/" + itemID.item
          );
          let data = await res.json();
          p = data.product;
        } catch (error) {}

        let div = document.createElement("div");
        let divtxt = document.createElement("span");

        let m_name = document.createElement("b");
        m_name.innerText = p.name;

        let m_price1 = document.createElement("p");
        m_price1.innerText = "₹ " + p.price;

        let image = document.createElement("img");
        image.src = p.img;

        //Onclick remove item from cart
        let removeBtn = document.createElement("button");
        removeBtn.innerHTML = "Remove";
        removeBtn.onclick = function () {
          removeCart(itemID);
        };

        divtxt.append(m_name, m_price1, removeBtn);
        div.append(image, divtxt);
        datadiv.append(div);

        pPrice(p.price);
      }
      setTimeout(2000, itemFetch);
      itemFetch();
    });
  }

  //Total price count
  function pPrice(price) {
    total += price;
    proceedToPay.innerHTML = `Proceed to Pay ₹ ${total} `;
    totalAmount.innerHTML = `Final Payable ₹ ${total} `;
  }

  proceedToPay.addEventListener("click", function () {
    location.href = "checkout.html";
  });

  cartItem.innerHTML = `My Cart(` + cart_data.length + ")";
  pincode.innerHTML = "Pincode";
  coupon.innerHTML = "Apply Code →";
  order.innerHTML = "Order Summery";
  shipping.innerHTML = "Shipping Charges - Free";
} //setTimeout(1000, Cart_items)

// Remove item from cart
async function removeCart(id) {
  fetch("https://health-kart.herokuapp.com/carts/remove/:id", {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      id: id._id,
    }),
  });

  window.location.href = "cart.html";
}
