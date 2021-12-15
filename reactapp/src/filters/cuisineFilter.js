import React,{Component} from "react";
import axios from 'axios';
import './filter.css';
const url="https://noveapi.herokuapp.com/filter/1?cuisine"


class CuisineFilter extends Component{
    filterCuisine = (event) => {
        let mealId = sessionStorage.getItem('mealId');
        let cuisineId = event.target.value;
        let filterUrl;
        if(cuisineId == ""){
            filterUrl = `${url}/${mealId}`
        }else{
            filterUrl = `${url}/${mealId}?cuisine=${cuisineId}`
        }
        axios.get(filterUrl)
        .then((res) => {this.props.restPerCusinie(res.data)})
    }
    render(){
        return(
            /*<div className="cuisineFilter">
           <center> <h2 className="fontsize1">Filter</h2></center>
            <h3 className="fontsize">Cuisine Filter</h3>
            <div onChange={this.filterCuisine}>
                <label className="radio">
                    <input type="radio"name="cuisine" value="" className="radio"/>All
                </label>
                <label className="radio">
                    <input type="radio"name="cuisine" value="1" className="radio"/>New EYE MASK
                </label>
                <label className="radio">
                    <input type="radio"name="cuisine" value="2" className="radio"/>Womens Attract FASHION EYEMASK
                </label>
                <label className="radio">
                    <input type="radio"name="cuisine" value="3" className="radio"/>studearrings
                </label>
                <label className="radio">
                    <input type="radio"name="cuisine" value="4" className="radio"/>EINSKEY
                </label>
                <label className="radio">
                    <input type="radio"name="cuisine" value="5" className="radio"/>Fabrics
                </label> <label className="radio">
                    <input type="radio"name="cuisine" value="" className="radio"/>Womens Attract FASHION EYEMASK
                </label>
            </div>
            </div>*/
            <div>
                
            </div>
        )
    }
    
}

export default CuisineFilter;