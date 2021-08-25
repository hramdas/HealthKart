
    const medicine = [
        {
          image: "https://img8.hkrtcdn.com/12182/prd_1218147-GNC-Pro-Performance-Weight-Gainer-6.6-lb-Double-Chocolate_c_s.jpg",
          name : "MuscleBlaze Mass Gainer XXL, 11 lb Chocolate",
          Price1 : "Rs. 4535",
          price2 : "Rs 5399",
          discount: "16%",
          button: "Add",
          pricefinal : "Premium Price : 4324",
          rating : "4.6(1234)",
        },
        {
          image: "https://img8.hkrtcdn.com/12182/prd_1218147-GNC-Pro-Performance-Weight-Gainer-6.6-lb-Double-Chocolate_c_s.jpg",
          name : "MuscleBlaze Mass Gainer XXL, 11 lb Chocolate",
          Price1 : "Rs. 4535",
          price2 : "Rs 5399",
          discount: "16%",
          button: "Add",
          pricefinal : "Premium Price : 4324",
          rating : "4.6(1234)",


        },
        {
          image: "https://img8.hkrtcdn.com/12182/prd_1218147-GNC-Pro-Performance-Weight-Gainer-6.6-lb-Double-Chocolate_c_s.jpg",
          name : "MuscleBlaze Mass Gainer XXL, 11 lb Chocolate",
          Price1 : "Rs. 4535",
          price2 : "Rs 5399",
          discount: "16%",
          button: "Add",
          pricefinal : "Premium Price : 4324",
          rating : "4.6(1234)",


        },
        {
          image: "https://img8.hkrtcdn.com/12182/prd_1218147-GNC-Pro-Performance-Weight-Gainer-6.6-lb-Double-Chocolate_c_s.jpg",
          name : "MuscleBlaze Mass Gainer XXL, 11 lb Chocolate",
          Price1 : "Rs. 4535",
          price2 : "Rs 5399",
          discount: "16%",
          button: "Add",
          pricefinal : "Premium Price : 4324",
          rating : "4.6(1234)",



        },
        
    ]

    const medicine_json = JSON.stringify(medicine);
    localStorage.setItem("MyMedicine", medicine_json);
    let med = localStorage.getItem("MyMedicine");
    med = JSON.parse(med);
    console.log("med", med);

    function medProduct(){
        let div_data = document.getElementById("data");
        med.forEach(function(products) {
            let div = document.createElement('div');
            
            let m_name = document.createElement('p');
            m_name.innerText = products.name;

            let m_price1 = document.createElement('p');
            m_price1.innerText = products.Price1;

            let m_price2 = document.createElement('p');
            m_price2.innerText = products.price2;
            
            let m_button = document.createElement('button');
            m_button.innerHTML = products.button;

            let m_discount = document.createElement('p');
            m_discount.innerText = products.discount;

            let image = document.createElement('img');
            image.src = products.image;

            let m_pricefinal = document.createElement('p');
            m_pricefinal.innerText = products.pricefinal;

            let m_rating = document.createElement('p');
            m_rating.innerHTML = products.rating;


            div.append(image,m_discount,m_name, m_rating, m_price1, m_price2, m_button,m_pricefinal);
            div_data.append(div);

        });
    }

    medProduct();
