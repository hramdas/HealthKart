async function formSubmit(e) {
  e.preventDefault();

  // getting all users data for verification
  async function allUsers() {
    let res = await fetch("https://health-kart.herokuapp.com/users");
    let data = await res.json();
    //alluser = data.user
    return data;
  }

  // SignUp form data
  let name = document.getElementById("name").value;
  let mobile = document.getElementById("mobile").value;
  let password = document.getElementById("password").value;
  let rePassword = document.getElementById("rePassword").value;

  let userData = await allUsers(); //

  // Checking mobile number with database
  var result = false;
  for (var i = 0; i < userData.user.length; i++) {
    if (userData.user[i].mobile == mobile) {
      var result = true;
      break;
    }
  }

  if (result == true) {
    //if Mobile present in data
    alert("User already registered");
  } else if (password !== rePassword) {
    // Enter Same password 2 times check
    alert("Password does not matched");
  } else {
    //Post user data to DB
    fetch("https://health-kart.herokuapp.com/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        mobile,
        password,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        alert("Account created");
        window.location.href = "login.html";
      });
  }
}
setTimeout(3000, formSubmit);

// close form
let bar = document.getElementById("timeBar");
bar.addEventListener("click", function () {
  window.location.href = "index.html";
});
