let user = JSON.parse(localStorage.getItem("HKuser"));
let cart_data;
console.log("ffffffffff");
async function cartcounter() {
  try {
    console.log("dddddd");
    let res = await fetch(`http://localhost:2200/users/${user}/cart/`);
    let data = await res.json();
    console.log(data);
    let cart_data = data.items;
    var len = cart_data.length;
    console.log(len);
    let spantext = document.createElement("span");
    let txt = document.getElementById("cartOnNum");
    txt.innerHTML = len;

    console.log(spantext);

    txt.appendChild(spantext);
  } catch (error) {}
}
setInterval(() => {
  cartcounter();
}, 100);
