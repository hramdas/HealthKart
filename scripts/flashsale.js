async function productData(valueIN) {
    // console.log(valueIN)

    //fetchURl = 'http://localhost:2200/products'
    try {
        let res = await fetch('http://localhost:2200/products/popular')
        let data = await res.json()
        productDB = data.product

        showProteins(productDB)

    } catch (error) {
        showProteins(error)
    }
}
setTimeout(2000, productData)
    // productData()

productData();

div_data = document.getElementById('items');

function showProteins(productDB) {
    div_data.innerHTML = null
    productDB.forEach(function(product) {

        let div = document.createElement('div');
        let price_quick = document.createElement('div')

        let p_name = document.createElement('b');
        p_name.innerHTML = product.name;

        let p_price = document.createElement('span')
        p_price.innerHTML = '₹' + product.price;

        let p_image = document.createElement('img')
        p_image.src = product.img;

        let p_rating = document.createElement('span')
        p_rating.innerHTML = '★ ' + product.rating;

        let quick_btn = document.createElement('button')
        quick_btn.innerText = '🗲Quick Buy';
        quick_btn.onclick = function() {
            location.href = "checkout.html";
        };

        let wish_btn = document.createElement('button')
        wish_btn.innerText = '♡';
        wish_btn.onclick = function() {
            addtoWish(product)
            wish_btn.style.color = 'red';
        };
        price_quick.append(p_price, quick_btn);
        div.append(wish_btn, p_image, p_name, p_rating, price_quick);

        div_data.append(div)

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