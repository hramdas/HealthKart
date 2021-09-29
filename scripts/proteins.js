
//Fetch Products Data
async function productData(){

    try{
    let res = await fetch('http://localhost:2200/products')
    let data = await res.json()
    productDB = data.product
    // console.log(productDB)
    showProteins(productDB)
    console.log(productDB)
    } catch (error){
        //console.log(error)
    }
}

productData();


// const proteins_str = JSON.stringify(proteins);
// localStorage.setItem('proteins_json', proteins_str);
// let proteins_local = localStorage.getItem('proteins_json');
// proteins_parse = JSON.parse(proteins_local)

div_data = document.getElementById('items');

function showProteins(productDB) {
    //console.log(proteins)
    productDB.forEach(function(product){

        let div = document.createElement('div');
        let price_quick = document.createElement('div')

        let p_name = document.createElement('b');
        p_name.innerHTML = product.name;

        let p_price = document.createElement('span')
        p_price.innerHTML = '₹' + product.price;

        let p_image = document.createElement('img')
        p_image.src = product.img;

        let p_rating = document.createElement('span')
        p_rating.innerHTML = '★ '+ product.rating;

        let quick_btn = document.createElement('button')
        quick_btn.innerText = '🗲Quick Buy';
        quick_btn.onclick = function () {
            location.href = "checkout.html";
         };

        let wish_btn = document.createElement('button')
         wish_btn.innerText = '♡';
        wish_btn.onclick = function () {
            addtoWish(product)
            wish_btn.style.color = 'red';
         };
        price_quick.append(p_price, quick_btn);
        div.append(wish_btn, p_image, p_name, p_rating, price_quick);

        div_data.append(div)

    });
}
// showProteins()

if(localStorage.getItem("wish")===null){
    localStorage.setItem("wish", JSON.stringify([]));
}

function addtoWish(p){
     let wish_data = JSON.parse(localStorage.getItem("wish"));
     wish_data.push(p);
     localStorage.setItem("wish", JSON.stringify(wish_data));

    //  wishbtn = document.getElementById("button");

}
