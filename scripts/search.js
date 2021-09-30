//code for searching - antony
setTimeout(ultraMain, 1000);
function ultraMain() {
  let searchInput = document.getElementById("search");
  searchInput.oninput = () => {
    //   if (name == "") {
    //     console.log("emmmmmmpppppptyyyyyyyyyyyyyyyy");
    //     window.location.href = "index.html";
    //   }
    debounce(main, 1000);
  };

  async function search(n) {
    try {
      var res = await fetch(`http://localhost:2200/products/search/${n}`);
      data = await res.json();
      console.log(data);
      return data.product;
    } catch (error) {
      console.log(error);
    }
  }

  function apend(m) {
    console.log("yess");
    datadiv = document.getElementById("showSearchresult");
    m.forEach(({ name, img, price }) => {
      //   let div = document.createElement("div");
      //   let p = document.createElement("p");
      //   p.innerHTML = name;
      //   p.addEventListener("click", () => {
      //   });
      let div = document.createElement("div");
      let maindiv = document.createElement("div");
      let divtxt = document.createElement("span");

      let m_name = document.createElement("p");
      m_name.innerText = name;

      let m_price1 = document.createElement("p");
      m_price1.innerText = "₹ " + price;
      let div2 = document.createElement("div");
      let image = document.createElement("img");
      image.src = img;

      divtxt.append(m_name, m_price1);
      div.append(divtxt);
      div2.append(image);
      maindiv.append(div2, div);
      datadiv.append(maindiv);
      // console.log("finall");
    });
  }

  async function main() {
    let searchItem = document.getElementById("search").value;
    console.log(searchItem);
    if (searchItem == "") {
      //searchOutsDiv.innerHTML = "";
      return;
    }
    let searchResults = await search(searchItem);
    //console.log(searchResults);
    //   searchOutsDiv.innerHTML = "";
    if (searchResults == undefined) {
      return;
    }
    console.log(searchResults);
    console.log("what");
    apend(searchResults);
  }

  //Debouncing for minimum API calls--------------------------------------------------------------------

  var timerId;
  function debounce(func, delay) {
    if (timerId) {
      console.log("------------dobounce waiting-------------");
      clearTimeout(timerId);
    }

    timerId = setTimeout(func, delay);
  }
}
