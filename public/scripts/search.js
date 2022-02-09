//code for searching - antony
document.getElementById("showSearchresult").style.display = "none";
setTimeout(ultraMain, 1000);
function ultraMain() {
  let searchInput = document.getElementById("search");
  searchInput.oninput = () => {
    debounce(main, 1000);
  };

  async function search(n) {
    try {
      var res = await fetch(
        `https://health-kart.herokuapp.com/products/search/${n}`
      );
      data = await res.json();
      // console.log(data);
      return data.product;
    } catch (error) {
      console.log(error);
    }
  }

  function apend(m) {
    //  console.log("yess");
    datadiv = document.getElementById("showSearchresult");
    document.getElementById("showSearchresult").style.display = "grid";
    m.forEach(({ name, img, price, _id }) => {
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

      maindiv.onclick = () => {
        localStorage.setItem("searchClickedItemId", _id);
        location.href = "../searchResultsSingle.html";
      };
      datadiv.append(maindiv);
      // console.log("finall");
    });
  }

  async function main() {
    let searchItem = document.getElementById("search").value;
    datadiv = document.getElementById("showSearchresult");
    // console.log(searchItem);
    if (searchItem == "") {
      datadiv.innerHTML = "";
      document.getElementById("showSearchresult").style.display = "none";
      return;
    }
    let searchResults = await search(searchItem);
    //console.log(searchResults);
    datadiv.innerHTML = "";
    if (searchResults == undefined) {
      return;
    }
    // console.log(searchResults);
    // console.log("what");
    apend(searchResults);
    localStorage.setItem("searchResultsData", JSON.stringify(searchResults));

    document.getElementById("searchForm").onkeydown = function (event) {
      if (window.event.keyCode == "13") {
        event.preventDefault();
        // alert("entered");
        location.href = "../searchResults.html";
      }
    };
  }

  //Debouncing for minimum API calls--------------------------------------------------------------------

  var timerId;
  function debounce(func, delay) {
    if (timerId) {
      // console.log("------------dobounce waiting-------------");
      clearTimeout(timerId);
    }

    timerId = setTimeout(func, delay);
  }
}
