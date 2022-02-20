async function loginForm(e) {
  e.preventDefault();

  // getting all users data for verification
  async function allUsers() {
    let res = await fetch("https://health-kart.herokuapp.com/users");
    let data = await res.json();
    //alluser = data.user
    return data;
  }

  //Login form data
  let mobile = document.getElementById("mobile").value;
  let password = document.getElementById("password").value;
  let userData = await allUsers(); //

  // Checking login data with database
  var i = 0;
  var result = false;
  while (i < userData.user.length) {
    if (
      userData.user[i].mobile == mobile &&
      userData.user[i].password == password
    ) {
      localStorage.setItem("HKuser", JSON.stringify(userData.user[i]._id));
      var result = true;
      break;
    }
    i++;
  }
  // console.log(result)

  if (result == false) {
    //data matched
    alert("Mobile number or Password does not matched");
  } else if ((result = true)) {
    alert("Login successful");
    window.location.href = "../";
  }
}
setTimeout(3000, loginForm);

// close form
let bar = document.getElementById("timeBar");
bar.addEventListener("click", function () {
  window.location.href = "index.html";
});
