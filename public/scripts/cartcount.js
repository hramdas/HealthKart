let user = JSON.parse(localStorage.getItem("HKuser"));
if (user == null) {
  //console.log("haaa");

  setTimeout(() => {
    let txt = document.getElementById("cartOnNum");
    txt.innerText = 0;
  }, 500);
} else {
  let cart_data;
  // console.log("ffffffffff");
  async function cartcounter() {
    try {
      // console.log("dddddd");
      if (user == null) {
        return;
      }
      let res = await fetch(
        `https://health-kart.herokuapp.com/users/${user}/cart/`
      );
      let data = await res.json();
      // console.log(data);
      let cart_data = data.items;
      var len = cart_data.length;
      //console.log(len);
      let spantext = document.createElement("span");
      let txt = document.getElementById("cartOnNum");
      txt.innerHTML = len;

      //  console.log(spantext);

      txt.appendChild(spantext);
    } catch (error) {}
  }
  setInterval(() => {
    cartcounter();
  }, 100);
}
