const proteins = [
    {
        name : "MuscleBlaze Beginner's Protein- 2.2 lb Cookies and Cream",
        price: '1299',
        image: 'https://img10.hkrtcdn.com/12134/prd_1213309-MuscleBlaze-Beginners-Protein-2.2-lb-Cookies-and-Cream_c_s.jpg',
        rating: '4.5',
    },
    {
        name : "Isopure Zero Carb Protein Powder- 3 lb Cookies & Cream",
        price: '5709',
        image: 'https://img2.hkrtcdn.com/12608/prd_1260761-Isopure-Zero-Carb-Protein-Powder-3-lb-Cookies-Cream_c_s.jpg',
        rating: '4.5',
    },
    {
        name : "Ultimate Nutrition ISO Sensation 93- 5 lb",
        price: '6299',
        image: 'https://img6.hkrtcdn.com/1130/prd_112915_c_s.jpg',
        rating: '4.8',
    },
    {
        name : "ON (Optimum Nutrition) Gold Standard 100% Whey Protein- 2 lb",
        price: '3174',
        image: 'https://img2.hkrtcdn.com/14325/prd_1432481-ON-Optimum-Nutrition-Gold-Standard-100-Whey-Protein-2-lb-Double-Rich-Chocolate_c_s.jpg',
        rating: '4.5',
    },
    {
        name : "HealthKart 100% Plant Based Protein- Cardamom 2.2 lb",
        price: '999',
        image: 'https://img2.hkrtcdn.com/13488/prd_1348781-MB-Fuel-One-Whey-Protein-Immunity-2.2-lb-Chocolate_c_s.jpg',
        rating: '4.2',
    },
    {
        name : "MB Fuel One Whey Protein Immunity+- 2.2 lb Chocolate",
        price: '5699',
        image: 'https://img6.hkrtcdn.com/14889/prd_1488805-MB-Fuel-One-Whey-Protein-Immunity-8.8-lb-Chocolate_c_s.jpg',
        rating: '4.5',
    },
    {
        name : "MuscleBlaze Biozyme Performance Whey- 4.4 lb",
        price: '3699',
        image: 'https://img2.hkrtcdn.com/14146/prd_1414541-MuscleBlaze-Biozyme-Performance-Whey-4.4-lb-Rich-Chocolate_c_s.jpg',
        rating: '4.5',
    },
    {
        name : "MuscleBlaze Raw Whey Isolate- 2.2 lb Unflavoured",
        price: '31649',
        image: 'https://img4.hkrtcdn.com/13528/prd_1352733_c_s.jpg',
        rating: '4.5',
    },
    {
        name : "HealthKart 100% Plant Based Protein- Cardamom 2.2 lb",
        price: '999',
        image: 'https://img10.hkrtcdn.com/2413/prd_241239_c_s.jpg',
        rating: '4.2',
    },
    // Add
    {
        name : "MuscleBlaze BCAA Gold 8:1:1- 0.99 lb 30 Servings Green Apple",
        price: '2099',
        image: 'https://img2.hkrtcdn.com/9815/prd_981431-MuscleBlaze-BCAA-Gold-811-0.99-lb-Green-Apple_o.jpg',
        rating: '4.6',
    },
    {
        name : "MuscleBlaze ZMA with 100% RDA of Zinc- Magnesium & Vitamin B6",
        price: '629',
        image: 'https://img4.hkrtcdn.com/13362/prd_1336183-MuscleBlaze-ZMA-60-tablets-Unflavoured_o.jpg',
        rating: '4.8',
    },
    {
        name : "MuscleBlaze L-Carnitine L-Tartrate- 120 capsules Unflavoured",
        price: '1175',
        image: 'https://img2.hkrtcdn.com/10242/prd_1024161-MuscleBlaze-LCarnitine-LTartrate-120-capsules-Unflavoured_o.jpg',
        rating: '4.7',
    },
    {
        name : "MuscleBlaze BCAA Gold 8:1:1- 0.99 lb 30 Servings Raspberry Lemonade",
        price: '1949',
        image: 'https://img10.hkrtcdn.com/9815/prd_981429-MuscleBlaze-BCAA-Gold-811-0.99-lb-Raspberry-Lemonade_o.jpg',
        rating: '4.6',
    },
    {
        name : "RONNIE COLEMAN L-Carnitine XS 3000- 473 ml Orange Smash",
        price: '2093',
        image: 'https://img6.hkrtcdn.com/2671/prd_267085_o.jpg',
        rating: '4.8',
    },
    {
        name : "MuscleBlaze Liquid L-Carnitine- 450 ml Tangy Orange",
        price: '799',
        image: 'https://img10.hkrtcdn.com/13512/prd_1351199_o.jpg',
        rating: '4.7',
    },
    {
        name : "TrueBasics Multivit Sport One Daily Multivitamin- 90 tablet(s)",
        price: '1529',
        image: 'https://img4.hkrtcdn.com/6865/prd_686463-TrueBasics-Multivit-Sport-90-tablets-Unflavoured_o.jpg',
        rating: '4.7',
    },
    {
        name : "MuscleBlaze BCAA Pro- 2 Piece(s)/Pack 16 Servings Fruit",
        price: '889',
        image: 'https://img10.hkrtcdn.com/10673/prd_1067229-MuscleBlaze-BCAA-Pro-2-PiecesPack-30-Servings-Fruit-Splash-Watermelon_o.jpg',
        rating: '4.6',
    },
    {
        name : "MuscleBlaze Liquid L-Carnitine- 450 ml Lemon Lime",
        price: '799',
        image: 'https://img6.hkrtcdn.com/11645/prd_1164425-MuscleBlaze-Liquid-LCarnitine-450-ml-Lemon-Lime_o.jpg',
        rating: '4.7',
    },
    {
        name : "MuscleBlaze BCAA Pro- 0.99 lb 30 Servings Fruit Splash",
        price: '1549',
        image: 'https://img6.hkrtcdn.com/11780/prd_1177925-MuscleBlaze-BCAA-Pro-0.99-lb-30-Servings-Fruit-Splash_o.jpg',
        rating: '4.6',
    },
    {
        name : "TrueBasics Multivit Sport One Daily Multivitamin- 30 tablet(s)",
        price: '584',
        image: 'https://img4.hkrtcdn.com/10230/prd_1022983-TrueBasics-Multivit-Sport-One-Daily-Multivitamin-30-tablets-Vanilla-Peppermint_o.jpg',
        rating: '4.7',
    },
    {
        name : "MuscleBlaze Ayurveda for Performance - MuscleHerb with",
        price: '449',
        image: 'https://img6.hkrtcdn.com/13504/prd_1350365-MuscleBlaze-Ayurveda-for-Performance-MuscleHerb-with-Ashwagandha-Shatavari-Safed-Musli-60-tablets-Unflavoured_o.jpg',
        rating: '4.8',
    },
    {
        name : "MuscleBlaze Ayurveda for Performance - MuscleHerb with",
        price: '299',
        image: 'https://img8.hkrtcdn.com/13504/prd_1350387-MuscleBlaze-Ayurveda-for-Performance-MuscleHerb-with-Ashwagandha-Shatavari-Safed-Musli-30-tablets-Unflavoured_o.jpg',
        rating: '4.8',
    },
    {
        name : "Scivation Xtend BCAA (Intra Workout Catalyst)- 0.9 lb 30 Servings Blue",
        price: '2499',
        image: 'https://img4.hkrtcdn.com/11835/prd_1183453-Scivation-Xtend-BCAA-Intra-Workout-Catalyst-0.9-lb-30-Servings-Blue-Raspberry-Ice_o.jpg',
        rating: '4.6',
    },
    {
        name : "MuscleBlaze Creatine Monohydrate- Unflavoured 0.55 lb",
        price: '569',
        image: 'https://img10.hkrtcdn.com/14847/prd_1484609-MuscleBlaze-Creatine-Monohydrate-Unflavoured-0.55-lb_o.jpg',
        rating: '4.6',
    },
    {
        name : "MuscleBlaze PRE Workout 200- 0.22 lb Green Apple",
        price: '649',
        image: 'https://img6.hkrtcdn.com/14369/prd_1436875-MuscleBlaze-PRE-Workout-200-0.22-lb-Green-Apple_c_m.jpg',
        rating: '4.1',
    },
    {
        name : "HealthKart Caffeine 200 mg- 90 capsules Unflavoured",
        price: '699',
        image: 'https://img4.hkrtcdn.com/15129/prd_1512843-HealthKart-Caffeine-200-mg-90-capsules-Unflavoured_o.jpg',
        rating: '4.5',
    },
    {
        name : "MuscleBlaze Pre Workout Ripped- 0.55 lb Fruit Splash",
        price: '1699',
        image: 'https://img8.hkrtcdn.com/10610/prd_1060997-MuscleBlaze-Pre-Workout-Ripped-0.55-lb-Fruit-Splash_o.jpg',
        rating: '4.5',
    },
    {
        name : "MB Fuel One Caffeine- 0.16 lb Fruit Punch",
        price: '335',
        image: 'https://img4.hkrtcdn.com/12570/prd_1256973-MB-Fuel-One-Caffeine-75-g-Fruit-Punch_o.jpg',
        rating: '4.6',
    },
    {
        name : "bGREEN Pre-sports Endurance Mix by MuscleBlaze- 0.55 lb Strawberry",
        price: '532',
        image: 'https://img2.hkrtcdn.com/14830/prd_1482931-bGREEN-UpBeet-Pre-Workout-by-MuscleBlaze-0.55-lb-Strawberry_o.jpg',
        rating: '3.8',
    },
    {
        name : "Cellucor C4 Explosive Preworkout- 0.85 lb Watermelon",
        price: '4199',
        image: 'https://img8.hkrtcdn.com/13068/prd_1306707-Cellucor-C4-Explosive-Preworkout-0.85-lb-Watermelon_o.jpg',
        rating: '4.5',
    },
    {
        name : "MuscleBlaze PRE Workout 300- 0.55 lb Melon Twist",
        price: '1499',
        image: 'https://img6.hkrtcdn.com/9831/prd_983065-MuscleBlaze-PRE-Workout-300-0.55-lb-Melon-Twist_o.jpg',
        rating: '4.6',
    },
    {
        name : "MuscleBlaze PRE Workout 300- 0.55 lb Fruit Punch",
        price: '1499',
        image: 'https://img8.hkrtcdn.com/12085/prd_1208417-MuscleBlaze-PRE-Workout-300-0.55-lb-Fruit-Punch_o.jpg',
        rating: '4.5',
    },
    {
        name : "MuscleBlaze Pre Workout Ripped- 0.55 lb Raspberry Lemonade",
        price: '1699',
        image: 'https://img10.hkrtcdn.com/10610/prd_1060999-MuscleBlaze-Pre-Workout-Ripped-0.55-lb-Raspberry-Lemonade_o.jpg',
        rating: '4.6',
    },
    {
        name : "MuscleBlaze Carb Blend- 6.6 lb Unflavoured",
        price: '1249',
        image: 'https://img2.hkrtcdn.com/10712/prd_1071171-MuscleBlaze-Carb-Blend-6.6-lb-Unflavoured_o.jpg',
        rating: '4.4',
    },
    {
        name : "MuscleBlaze Isotonic Instant Energy Formula- 2.2 lb Fruit Punch",
        price: '549',
        image: 'https://img2.hkrtcdn.com/8771/prd_877071-MuscleBlaze-Isotonic-Instant-Energy-Formula-2.2-lb-Fruit-Punch_o.jpg',
        rating: '4.5',
    },
    {
        name : "MuscleBlaze Test Pro (Natural Testosterone Booster)- 60 capsules",
        price: '849',
        image: 'https://img6.hkrtcdn.com/6362/prd_636155-MuscleBlaze-Test-Pro-Natural-Testosterone-Booster-60-capsules-Unflavoured_o.jpg',
        rating: '4.8',
    },
    {
        name : "GNC Creatine Monohydrate- Unflavoured 0.55 lb",
        price: '604',
        image: 'https://img4.hkrtcdn.com/12181/prd_1218083-GNC-Creatine-Monohydrate-Unflavoured-0.55-lb_o.jpg',
        rating: '4.7',
    },
    {
        name : "MuscleTech Platinum 100% Creatine- Unflavoured 0.88 lb",
        price: '1400',
        image: 'https://img2.hkrtcdn.com/14824/prd_1482371-MuscleTech-Platinum-100-Creatine-Unflavoured-0.88-lb_o.jpg',
        rating: '4.4',
    },

]

const proteins_str = JSON.stringify(proteins);

localStorage.setItem('proteins_json', proteins_str);

let proteins_local = localStorage.getItem('proteins_json');
proteins_parse = JSON.parse(proteins_local)

div_data = document.getElementById('items');

function showProteins() {
    proteins_parse.forEach(function(product){
        
        let div = document.createElement('div');
        let price_quick = document.createElement('div')

        let p_name = document.createElement('b');
        p_name.innerHTML = product.name;

        let p_price = document.createElement('span')
        p_price.innerHTML = '₹' + product.price;

        let p_image = document.createElement('img')
        p_image.src = product.image;

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
