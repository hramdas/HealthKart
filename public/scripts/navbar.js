function navbar() {
  return `
        <div class="container">
            <div class="logo">
            <a href="/"><img src="https://www.sofinagroup.com/wp-content/uploads/2019/07/Healthkart-transparent-logo.png"
                    alt="">
            </div>
            <form id="searchForm" action="">
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
`;
}

function navbarSec() {
  return `        <div class="container">
            <ul id="catLinks">
                <li>
                    <a href="sports-nutrition.html">Category</a>
                    <ul class="dropdown">
                        <li id="li"><a href="sports-nutrition.html">Sports Nutrition</a></li>
                        <li id="li"><a href="sports-nutrition.html">Vitamins & Supplements</a></li>
                        <li id="li"><a href="sports-nutrition.html">Ayurveda & Herbs</a></li>
                        <li id="li"><a href="sports-nutrition.html">Health Food & Drinks</a></li>
                        <li id="li"><a href="sports-nutrition.html">Fitness</a></li></a>
                        <li id="li"><a href="sports-nutrition.html">Wellness</a></li>
                        <li id="li"><a href="sports-nutrition.html">Service Program</a></li>
                    </ul>
                </li>
                <li><a href="sports-nutrition.html"> Brand</a></li>
                <li><a href="sports-nutrition.html">Gender</a></li>
                <li><a href="sports-nutrition.html">Goal</a></li>
                <li><a href="flashsale.html">Bestsellers</a></li>
                <li><a href="flashsale.html">Deals</a></li>
                <li><a href="sports-nutrition.html">Gift Cart</a></li>
                <li><a href="sports-nutrition.html">Blog, Videos & More</a></li>
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
    </div>`;
}

export { navbar, navbarSec };
