function navbar() {
    return `
        <div class="container">
            <div class="logo">
                <img src="https://www.sofinagroup.com/wp-content/uploads/2019/07/Healthkart-transparent-logo.png"
                    alt="">
            </div>
            <form action="">
                <a><i class="fa fa-search" id="searchIcon" aria-hidden="true"></i></a>
                <input type="text" id="search" placeholder="Search for products, brands or Health Goals">
            </form>
            <div class="oneItem margin">
                <p id="hover"> <p id="wishclr"><a id="hover" href="/wishlist.html">Wishlist</a></p></p>
            </div>
            <p class="borderLine"></p>
            <div class="twoItem margin">
                <p id="hover">Customer Support</p>
                <i class="fa fa-chevron-down arrow"></i>
            </div>
            <p class="borderLine"></p>

            <div class="threeItem margin">
                <div class="userBox">
                    <i class="fa fa-user-o" aria-hidden="true"></i>
                    <p id="hover">My Account & Orders</p>
                    <i class="fa fa-chevron-down arrow"></i>
                </div>
                <div class="userLogin">
                    <button id="loginBtn"><a href="login.html">Login</a></button>
                    <button id="signUp"><a id="a" href="signup.html">New User?/ Sign Up</a></button>
                </div>
            </div>
            <p class="borderLine"></p>
            <div id="cartClick">
                <a href="cart.html">
                    <img src="https://img2.hkrtcdn.com/react/static/media/common/header/cart.svg" alt="" id="cartItem">
                    <p id="cartOnNum"></p>
                </a>

                <div class="cartAdd">
                    <button onclick="cartBtn()" id="cart"><a href="cart.html" >Items in cart</a></button>
                </div>
            </div>
    </div>
    <div class="clearDiv"></div>
`
}

export default navbar;