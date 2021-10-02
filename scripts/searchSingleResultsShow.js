// const products = require("../models/products");

// //Get sorting input
// sortIn();

// function sortIn() {
//   productData("none");
//   var sortData = document.getElementById("sortNutri");
//   var valueIN = sortData.options[sortData.selectedIndex].value;
//   // console.log('sort', valueIN)
//   productData(valueIN);
// }

// //Fetch Products Data
// async function productData(valueIN) {
//   // console.log(valueIN)

//   //fetchURl = 'http://localhost:2200/products'
//   if (valueIN == "none") {
//     fetchURL = "http://localhost:2200/products";
//   } else if (valueIN == "rating") {
//     fetchURL = "http://localhost:2200/products/popular";
//   } else if (valueIN == "lhPrice") {
//     fetchURL = "http://localhost:2200/products/priceL";
//   } else if (valueIN == "hlPrice") {
//     fetchURL = "http://localhost:2200/products/priceH";
//   } else if (valueIN == "lhdisc") {
//     fetchURL = "http://localhost:2200/products/discL";
//   } else if (valueIN == "hldisc") {
//     fetchURL = "http://localhost:2200/products/discH";
//   }

//   // console.log('fetch', fetchURL)

//   try {
//     let res = await fetch(fetchURL);
//     let data = await res.json();
//     productDB = data.product;

//     showProteins(productDB);
//   } catch (error) {
//     showProteins(error);
//   }
// }
// setTimeout(2000, productData);
// // productData()

// productData();

// const proteins_str = JSON.stringify(proteins);
// localStorage.setItem('proteins_json', proteins_str);
div_data = document.getElementById("items");
let results = localStorage.getItem("searchResultsData");
results = JSON.parse(results);
showProteins(results);

//Append Data

function showProteins(productDB) {
  div_data.innerHTML = null;
  let ourItem = localStorage.getItem("searchClickedItemId");
  console.log(ourItem);
  productDB.forEach(function (product) {
    if (product._id == ourItem) {
      // console.log(product);

      let div = document.createElement("div");
      let price_quick = document.createElement("div");

      let p_name = document.createElement("b");
      p_name.innerHTML = product.name;

      let p_price = document.createElement("p");
      p_price.innerHTML = "₹" + product.price;

      let p_image = document.createElement("img");
      p_image.src = product.img;

      let p_rating = document.createElement("p");
      p_rating.innerHTML = "★ " + product.rating;

      let quick_btn = document.createElement("button");
      quick_btn.innerText = "🗲Quick Buy";
      quick_btn.onclick = function () {
        location.href = "checkout.html";
      };

      let wish_btn = document.createElement("button");
      wish_btn.innerText = "♡";
      wish_btn.onclick = function () {
        addtoWish(product);
        wish_btn.style.color = "red";
      };
      price_quick.append(p_price, quick_btn);

      let div1 = document.createElement("div");
      let div2 = document.createElement("div");
      let div21 = document.createElement("div");
      let div22 = document.createElement("div");
      div1.append(wish_btn);
      div21.append(p_image);
      div22.append(p_name, p_rating, price_quick);
      div2.append(div21, div22);
      div.append(div1, div2);

      div_data.append(div);
    }
  });
}

if (localStorage.getItem("wish") === null) {
  localStorage.setItem("wish", JSON.stringify([]));
}

function addtoWish(p) {
  let wish_data = JSON.parse(localStorage.getItem("wish"));
  wish_data.push(p);
  localStorage.setItem("wish", JSON.stringify(wish_data));

  //  wishbtn = document.getElementById("button");
}
