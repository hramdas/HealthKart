let count = 0;
let images = [];
let time = 2000;

images[0] = 'https://img6.hkrtcdn.com/15645/bnr_1564495_o.jpg';
images[1] = 'https://img10.hkrtcdn.com/15640/bnr_1563949_o.jpg';
images[2] = 'https://img6.hkrtcdn.com/15538/bnr_1553705_o.jpg';
images[3] = 'https://img8.hkrtcdn.com/15641/bnr_1564057_o.jpg';
images[4] = 'https://img8.hkrtcdn.com/14853/bnr_1485287_o.jpg';
images[5] = 'https://img6.hkrtcdn.com/15632/bnr_1563185_o.png';

function slidingShows() {
  document.silde.src = images[count];
  if (count < images.length - 1)
  {
    count++
  }
  else
  {
    count = 0;
  }
  setTimeout('slidingShows()', time)

}
window.onload = slidingShows;

    async function productdata(){
      
     try{
      let res = await fetch('http://localhost:2200/products/flashsale')
      let data = await res.json()
  
      productDB = data.product
    
      showProduct(productDB)
    
      } catch (error){
        showProduct(error)
      } 
    }
    productdata()
    function showProduct(product){
        let div_data = document.getElementById("data");
        
        product.forEach(function(products) {
            let div = document.createElement('div');
            let pricecart = document.createElement('div');

            let m_name = document.createElement('h4');
            m_name.innerText = products.name;

            let m_price = document.createElement('b');
            m_price.innerText = '₹'+ products.price;

            let m_button = document.createElement('button');
            m_button.innerHTML = "🛒 ADD";
            m_button.onclick = function (){
                addtocart(products._id);
            };

            let m_discount = document.createElement('h5');
            m_discount.innerText = products.discount + '% off' ;

            let image = document.createElement('img');
            image.src = products.img;

            let m_pricefinal = document.createElement('h6');
            m_pricefinal.innerText = products.pricefinal;

            let m_rating = document.createElement('p');
            m_rating.innerHTML = '★ ' + products.rating;

            pricecart.append(m_price, m_button)

            div.append(image,m_discount,m_name, m_rating, pricecart);

            div_data.append(div);

        });
    }

// srinivas footer code

function function1() {
  alert('subscribed successfully')
}

function addtocart(p) {
  let userID = JSON.parse(localStorage.getItem('HKuser'))
  fetch('http://localhost:2200/users/'+userID,{
    method: "PATCH",
    headers: {
      "content-type" : "application/json"
    },
    body: JSON.stringify({
      cart: [p]
    })
  })
  .then(res => res.json())
  
  // cart_data.push(p);
 
  
}
