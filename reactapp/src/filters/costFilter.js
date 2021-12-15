import React,{Component} from "react";
import axios from 'axios';
import './filter.css';
const url="https://noveapi.herokuapp.com/filter"


    class CostFilter extends Component{
        filterCost = (event) => {
            let mealId = sessionStorage.getItem('mealId');
            let cost = (event.target.value).split('-');
            let lcost = cost[0];
            let hcost = cost[1];
            let filterUrl;
            if(event.target.value == ""){
                filterUrl = `${url}/${mealId}`
            }else{
                filterUrl = `${url}/${mealId}?lcost=${lcost}&hcost=${hcost}`
            }
            axios.get(filterUrl)
            .then((res) => {this.props.restPerCost(res.data)})
        }
    render(){
        return(
           /* <div className="cuisineFilter">
            <h3 className="fontsize">Cost Filter</h3>
            <div onChange={this.filterCost} >
                <label className="radio">
                    <input type="radio"name="cuisine" value="" className="radio"/>All
                </label>
                <label className="radio">
                    <input type="radio"name="cuisine" value="200-300"/>200-300
                </label>
                <label className="radio">
                    <input type="radio"name="cuisine" value="301-600"/>301-600
                </label>
                <label className="radio">
                    <input type="radio"name="cuisine" value="601-1000"/>601-1000
                </label>
                <label className="radio">
                    <input type="radio"name="cuisine" value="1001-1500"/>1001-1500
                </label>
            </div>
            </div>*/
            <div id="filter">
        <div class='flx'>
        <h4>CATEGORIES</h4>
          <div class='demoScroll sc1'>
            <div class="h500">
                <input type="checkbox"/> Mobile & Tablet Accessories<br/>
                <input type="checkbox"/> Fashion Accessories<br/>
                <input type="checkbox"/> Pens & Combs<br/>
                <input type="checkbox"/> Sunglasses<br/>
                <input type="checkbox"/> Sunglasses All
            </div>
          </div>
            <hr/>
      </div>
        <div class='flx'>
          <h4>BRANDS</h4>
            <div class='demoScroll2 sc2'>
              <div class="h500">
                  <input type="checkbox"/> FASTRACK HEARABLES<br/>
                  <input type="checkbox"/> STUFFCOOL<br/>
              </div>
            </div>
              <hr/>
          </div>
          <div class='flx'>
            <h4>COLORS</h4>
              <div class='demoScroll3 sc3'>
                <div class="h300">
                  <input type="checkbox"/> As per images<br/>
                </div>
              </div>
                <hr/>
            </div>
            <div class='flx'>
              <h4>DELIVERY TYPE</h4>
                <div class='demoScroll3 sc3'>
                  <div class="h300">
                      <input type="checkbox"/> Express Store Pick up<br/>
                  </div>
                </div>
                  <hr/>
              </div>
              <div class='flx'>
                <h4>PRICE</h4>
                  <div class='demoScroll4 sc4'>
                    <div class="h600">
                        <input type="checkbox"/> 100-200<br/>
                        <input type="checkbox"/> 200-300<br/>
                        <input type="checkbox"/> 300-400<br/>
                     </div>
                  </div>
                    <hr/>
                </div>
                <div class='flx'>
                  <h4>Enter a price range</h4>
                    <div class='demoScroll3 sc3'>
                      <div class="h300">
                          <input type="text" class="rupee" placeholder="$" />&nbsp; to &nbsp;
                          <input type="text" class="rupee" placeholder="$" />
                      </div>
                    </div>
                   <button class="search">REFINE SEARCH</button>
                  </div>
                </div>
            
        )
    }
    
}

export default CostFilter;