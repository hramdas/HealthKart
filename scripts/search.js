//code for searching - antony

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
    return data.results;
  } catch (error) {
    console.log(error);
  }
}

// function apend(m) {
//   m.forEach(({ name, birth_year, gender, url }) => {
//     let div = document.createElement("div");
//     let p = document.createElement("p");

//     p.innerHTML = name;

//     p.addEventListener("click", () => {
//       // alert("11111111111111");
//       append(url);
//     });

//     let p2 = document.createElement("p");

//     p2.innerHTML = birth_year;

//     let p3 = document.createElement("p");

//     p3.innerHTML = gender;

//     div.append(p, p2, p3);
//     searchOutsDiv.append(div);
//   });
// }

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
  // apend(chars);
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
