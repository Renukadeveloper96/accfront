import React from 'react';
import './Search.css';
import Header from '../Header'
const Search=()=>{
return(
  <>
  <div class="container-fluid container1">
    <Header/>
    <nav class="navbar navbar-inverse1 visible-lg">
      <div class="container-fluid">
        <ul class="nav navbar-nav navbar-top">
        <li class="dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown" href="#">NEW
          <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="merlin/shoes.html">Shoes</a></li>
            <li><a href="#">Bags</a></li>
            <li><a href="#">Jewelary</a></li>
          </ul>
        </li>
        <li class="dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown" href="#">BAGS
          <span class="caret"></span></a>
          <ul class="dropdown-menu" id="bags">
            <li></li>
          </ul> 
        </li>
        <li class="dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown" href="#">SHOES
          <span class="caret"></span></a>
          <ul class="dropdown-menu" id="shoes">
            <li></li>
          </ul>
        </li>
        <li class="dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown" href="#">ACCESSORIES
          <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Sunglasses</a></li>
            <li><a href="#">Watches</a></li>
            <li><a href="#">Footwear</a></li>
            <li><a href="#">Beauty & Fragrances</a></li>
            <li><a href="#">Fashion Accessories</a></li>
            <li><a href="stockapp/stock.html">Jewelary</a></li>
          </ul>
        </li>
      </ul>
      </div>
    </nav>
    <div class="carousel">
      <div id="eduCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#eduCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#eduCarousel" data-slide-to="1"></li>
          <li data-target="#eduCarousel" data-slide-to="2"></li>
          <li data-target="#eduCarousel" data-slide-to="3"></li>
          <li data-target="#eduCarousel" data-slide-to="4"></li>
        </ol>
        <div class="carousel-inner">
          <div class="item active">
            <img src="images/ss.jpg" style={{width:"100%"}}/>
          </div>
          <div class="item">
            <img src="images/springss.jpg" style={{width:"100%"}} alt=""/>
          </div>
          <div class="item">
            <img src="images/footwearss.jpg" style={{width:"100%"}} alt=""/>
          </div>
          <div class="item">
            <img src="images/chimesss.jpg" style={{width:"100%"}} alt=""/>
          </div>
          <div class="item">
            <img src="images/maskss.jpg" style={{width:"100%"}} alt=""/>
          </div>
        </div>
        <a class="left carousel-control" href="#eduCarousel" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left"></span>
        </a>
        <a class="right carousel-control" href="#eduCarousel" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right"></span>
        </a>
      </div>
      </div>
  </div>
  </>
    )

}
export default Search;