let getData = JSON.parse(localStorage.getItem("Data-User"));

console.log(getData);
let loginBtn = document.getElementById('btn');
let form = document.getElementById('loginForm');

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let userMobile = form.mobile.value;
    let password = form.password.value;
    if (userMobile === getData.mobileNum && password === getData.password)
    {
        alert("Successful");
        window.location.href = 'index.html'
    }

    else
    {
        alert("Invaild  Mobile Number & Password")
    }
});

let bar = document.getElementById('timeBar');

bar.addEventListener('click', function () {
    window.location.href = 'index.html'
})
