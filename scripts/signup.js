async function formSubmit(e) {
    e.preventDefault();

    let res = await fetch(`http://localhost:2200/users`);
    // console.log(res);
    let data = await res.json();
    data.userData;

    let userData = {
        name: document.getElementById('name').value,
        mobileNum: document.getElementById('mobileNo').value,
        password: document.getElementById('password').value,
        rePassword: document.getElementById('rePassword').value
    }
    if (password.value !== rePassword.value) {
        alert("Password does not match ");
        window.location.href = "signup.html"
    } else {
        window.location.href = "login.html"
    }

    // localStorage.setItem("Data-User", JSON.stringify(userData));
    // console.log(userData);

}

let bar = document.getElementById('timeBar');
bar.addEventListener('click', function() {
    window.location.href = 'index.html'
})