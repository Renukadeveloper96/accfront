import React from 'react';
import './Header.css';
const Header =()=>{
    return(
      <div>
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#firstnav">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Shop</a>
        </div>
        <div id="firstnav" class="collapse navbar-collapse">
          <ul class="nav navbar-nav visible-lg">
            <li><a href="#"><img src="./icons/facebook.svg" alt=""></img></a></li>
            <li><a href="#"><img src="./icons/twitter.svg" alt=""></img></a></li>
            <li><a href="#"><img src="./icons/google.svg" alt=""></img></a></li>
            <li><a href="#"><img src="./icons/instagram.svg" alt=""></img></a></li>
            <li><a href="#"><img src="./icons/search.svg" alt=""></img></a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#"><img src="./icons/user-icon.svg" alt=""></img>Log in</a></li>
            <li><a href="#"><img src="./icons/edit.svg" alt=""></img>Register Now</a></li>
            <li><a href="#"><img src="./icons/cart.svg" alt=""></img>0 Items - ($0.00)</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container">
      <div class="row">
        <div class="col-sm-4 ">
          <div class="contact">
            <img src="./icons/phone.svg" alt=""></img>
              <div>
                <h5>Call US:85533627**</h5>
                <h6>E-mail : acess@gmail.com</h6>
              </div>
          </div>
        </div>
        <div class="col-sm-4  visible-lg">
          <div class="logo">
          <img src="images/redstarlogo.jpg" style={{height:"40px"}}/>
              <div class="logo1">
                <h5>accessories</h5>
              </div>
          </div>
        </div>
        <div class=" col-sm-4 ">
          <div class="time">
            <a href="#">
              <img src="./icons/clock.svg" alt=""></img>
            </a>
              <div>
                <h5>Working Hours:</h5>
                <h6>24 hours</h6>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
}

export default Header;