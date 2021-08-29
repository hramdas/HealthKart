//Pooja Js - 1st
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



//Bhargav js -1st
    const medicine = [
        {
        image: "https://img4.hkrtcdn.com/14798/prd_1479773-HealthKart-HK-Vitals-Healthy-Joints-60-tablets_c_t.jpg",
          name : "MuscleBlaze Whey Protein, 4.4 lb, Rich Milk Chocolate",
        price: "4535",
        discount: "18% off",
          button: "Add",
          pricefinal : "Premium Price : 4324",
          rating : "4.4(1034)",
        },
        {
          image: "https://img6.hkrtcdn.com/11003/prd_1100235-MuscleBlaze-Gold-Gainer-XXL-2.2-lb-Chocolate-Bliss_c_t.jpg",
          name : "HealthKart Omega 3 1000mg with 180mg EPA and 120mg DHA, 60 softgels",
          price: "375",
          discount: "20% off",
          button: "Add",
          pricefinal : "Premium Price : 4324",
          rating : "4.3(1634)",

        },
        {
          image: "https://img4.hkrtcdn.com/11965/prd_1196443-MuscleBlaze-High-Protein-Natural-Peanut-Butter-Unsweetened-0.750-kg-Crunchy_c_t.jpg",
          name : "MuscleTech NitroTech Performance Series, 4 lb, Milk Chocolate",
          price: "5635",
          discount: "10% off",
          button: "Add",
          pricefinal : '',
          rating: "4.6(1234)",
        },
        {
          image: "https://img10.hkrtcdn.com/15757/prd_1575689_c_t.jpg",
          name : "MuscleBlaze Natural Peanut Butter Unsweetened, 1 kg, Extra Crunchy",
          price: "403",
          discount: "26% off",
          button: "Add",
          pricefinal : "Premium Price : 350",
          rating: "4.5(1831)",
        },

    ]
    const medicine_json = JSON.stringify(medicine);
    localStorage.setItem("MyMedicine", medicine_json);
    let med = localStorage.getItem("MyMedicine");
    med = JSON.parse(med);
    // console.log("med", med);

    function medProduct(){
        let div_data = document.getElementById("data");
        
        med.forEach(function(products) {
            let div = document.createElement('div');
            let pricecart = document.createElement('div');

            let m_name = document.createElement('h4');
            m_name.innerText = products.name;

            let m_price = document.createElement('b');
            m_price.innerText = '₹'+ products.price;

            let m_button = document.createElement('button');
            m_button.innerHTML = "🛒 ADD";
            m_button.onclick = function (){
                addtocart(products);
            };

            let m_discount = document.createElement('h5');
            m_discount.innerText = products.discount;

            let image = document.createElement('img');
            image.src = products.image;

            let m_pricefinal = document.createElement('h6');
            m_pricefinal.innerText = products.pricefinal;

            let m_rating = document.createElement('p');
            m_rating.innerHTML = '★ ' + products.rating;

            pricecart.append(m_price, m_button)
            div.append(image,m_discount,m_name, m_rating, pricecart, m_pricefinal);
            div_data.append(div);

        });
    }

medProduct();

// Trending by Ramdas

  // const trend = [
  //   {
  //     name : "MuscleBlaze Creatine Monohydrate- Unflavoured 0.55 lb",
  //     price: '569',
  //     image: 'https://img8.hkrtcdn.com/10610/prd_1060997-MuscleBlaze-Pre-Workout-Ripped-0.55-lb-Fruit-Splash_o.jpg',
  //     rating: '4.6',
  //     pricefinal : '560',
  //     discount: "25% off",
  // },
  // {
  //     name : "MuscleBlaze PRE Workout 200- 0.22 lb Green Apple",
  //     price: '649',
  //     image: 'https://img6.hkrtcdn.com/14369/prd_1436875-MuscleBlaze-PRE-Workout-200-0.22-lb-Green-Apple_c_m.jpg',
  //     rating: '4.1',
  //     pricefinal : '',
  //     discount: "17%",
  // },
  // {
  //     name : "HealthKart Caffeine 200 mg- 90 capsules Unflavoured",
  //     price: '699',
  //     image: 'https://img4.hkrtcdn.com/15129/prd_1512843-HealthKart-Caffeine-200-mg-90-capsules-Unflavoured_o.jpg',
  //     rating: '4.5',
  //     pricefinal : '',
  //     discount: "15%",
  // },
  // {
  //     name : "MuscleBlaze Pre Workout Ripped- 0.55 lb Fruit Splash",
  //     price: '1699',
  //     image: 'https://img8.hkrtcdn.com/13068/prd_1306707-Cellucor-C4-Explosive-Preworkout-0.85-lb-Watermelon_o.jpg',
  //     rating: '4.5',
  //     pricefinal : '1599',
  //     discount: "10%",
  // }
  // ];

  // const trend_json = JSON.stringify(trend);
  //   localStorage.setItem("trending", trend_json);
  //   let trend_item = localStorage.getItem("trending");
  //   trend_item = JSON.parse(trend_item);

  //   function trendProducts() {
  //     let trenddata = document.getElementById("trenddata")

  //     trend_item.forEach(function(products){
  //       let div = document.createElement("div");
  //       let pricecart = document.createElement('div');

  //      let t_name = document.createElement("h4")
  //       t_name.innerHTML = products.name

  //       let image = document.createElement("img")
  //       image.src = products.image

  //       let t_price = document.createElement("b");
  //       t_price.innerHTML = '₹'+ products.price;

  //       let t_rating = document.createElement("p");
  //       t_rating.innerHTML = '★ ' + products.rating;

  //       let t_pricefinal = document.createElement('h4'); 
  //       t_pricefinal.innerHTML = products.pricefinal;

  //       let t_discount = document.createElement('h5'); 
  //       t_discount.innerHTML = products.discount;

  //       let t_button = document.createElement('button');
  //       t_button.innerHTML = "🛒 ADD";
  //       t_button.onclick = function (){
  //           addtocart(products);
  //       };

  //       pricecart.append(t_price, t_button)
  //       div.append(image,t_discount,t_name, t_rating, pricecart, t_pricefinal);
  //       trenddata.append(div);

  //     })
  //   }
  //   trendProducts()





// srinivas footer code

function function1() {
  alert('subscribed successfully')
}

if (localStorage.getItem("cart") === null)
{
  localStorage.setItem("cart", JSON.stringify([]));
}
function addtocart(p) {
  let cart_data = JSON.parse(localStorage.getItem("cart"));
  cart_data.push(p);
  localStorage.setItem("cart", JSON.stringify(cart_data));
}