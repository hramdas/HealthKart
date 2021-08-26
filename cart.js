let cart_data = JSON.parse(localStorage.getItem("cart"));
let data_div = document.getElementById("cart_data");
cart_data.forEach(function(product) {

           let div = document.createElement("div");

            let m_name = document.createElement('p');
            m_name.innerText = product.name;

            let m_price1 = document.createElement('p');
            m_price1.innerText = product.Price1;

            let m_price2 = document.createElement('p');
            m_price2.innerText = product.price2;

            let m_discount = document.createElement('p');
            m_discount.innerText = product.discount;

            let image = document.createElement('img');
            image.src = product.image;

            let m_pricefinal = document.createElement('p');
            m_pricefinal.innerText = product.pricefinal;

            let m_rating = document.createElement('p');
            m_rating.innerHTML = product.rating;

            div.append(image,m_discount,m_name, m_rating, m_price1, m_price2, m_button,m_pricefinal);
            cart_data.append(div);

    });
