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
                    <button onclick="cartBtn()" id="cart"><a href="./cart.html" >Items in cart</a></button>
                </div>
            </div>
    </div>
    <div class="clearDiv"></div>
`
}



function navbarSec() {
    return `        <div class="container">
            <ul id="catLinks">
                <li>
                    <a href="#">Category</a>
                    <ul class="dropdown">
                        <li id="li"><a href="sports-nutrition.html">Sports Nutrition</a></li>
                        <li id="li">Vitamins & Supplements</li>
                        <li id="li">Ayurveda & Herbs</li>
                        <li id="li">Health Food & Drinks</li>
                        <li id="li">Fitness</li>
                        <li id="li">Wellness</li>
                        <li id="li">Service Program</li>
                    </ul>
                </li>
                <li>Brand</li>
                <li>Gender</li>
                <li>Goal</li>
                <li>Bestsellers</li>
                <li>Deals</li>
                <li>Gift Cart</li>
                <li>Blog, Videos & More</li>
            </ul>
            <!-- <div class="rightSideContaint"></div> -->
            <div class="rightPart">
                <div class="consult">
                    <i class="fa fa-video-camera"></i>
                    <p>Hk Consult</p>
                </div>
                <div class="findStore">
                    <i class="fa fa-map-marker"></i>
                    <p>Find a Store</p>
                </div>
            </div>
        </div>
    </div>


           `
}

export { navbar, navbarSec };
