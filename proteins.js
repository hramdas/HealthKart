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
    {
        name : "",
        price: '3699',
        image: '',
        rating: '4.5',
    },
    {
        name : "",
        price: '3699',
        image: '',
        rating: '4.5',
    },
    {
        name : "",
        price: '3699',
        image: '',
        rating: '4.5',
    },
]

const proteins_str = JSON.stringify(proteins);

localStorage.setItem('proteins_json', proteins_str);

let proteins_local = localStorage.getItem('proteins_json');
proteins_parse = JSON.parse(proteins_local)
console.log(proteins_parse)

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
            location.href = "/address.html";
         };

        price_quick.append(p_price, quick_btn);
        div.append(p_image, p_name, p_rating, price_quick);

        div_data.append(div)

    });
}
// showProteins()
