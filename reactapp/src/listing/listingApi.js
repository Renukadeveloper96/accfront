import React,{Component} from 'react';
import axios from 'axios';
import ListingDisplay from './listingDisplay';
import CuisineFilter from '../filters/cuisineFilter';
import CostFilter from '../filters/costFilter';
const url="https://noveapi.herokuapp.com/main?mealtype_id="

class listingApi extends Component{
    constructor (props){
        super()
        this.state={
            accList:''
        }
    }
        setDataAsPerFilter=(sortedData)=>{
            this.setState({restaurantList:sortedData})
    }
    render(){
        return(
                <div class="row">
                  
                     <center><div id="women">Womens Accessories</div></center>
                    <div id="main1">
                       <div id="filter1">   
                        <CuisineFilter restPerCusinie={(data) => {this.setDataAsPerFilter(data)}}/>
                        <CostFilter restPerCost={(data) => {this.setDataAsPerFilter(data)}}/>
                        </div>
                        <ListingDisplay listData={this.state.accList}/>
                    </div>
                </div>
          
        )
    }

    //callapi
    componentDidMount(){
        let mealId = this.props.match.params.mealId;
        sessionStorage.setItem('mealId',mealId)
        axios.get(`${url}${mealId}`)
        .then((res) => {this.setState({accList:res.data})})
    }
}
export default listingApi;