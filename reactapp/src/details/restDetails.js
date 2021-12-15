import React,{Component} from 'react';
import './details.css';

import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MenuDisplay from './menuDisplay'

const url="https://noveapi.herokuapp.com/details";
const menu="https://noveapi.herokuapp.com/menu"
class Details extends Component {
    constructor(){
        super()
        this.state={
            details:'',
            menuList:'',
            userItem:''
        }
    }
addToCart =(data)=>{
    //console.log("data in card",data)
    this.setState({userItem:data})
   // sessionStorage.setItem('menu',this.orderId)
   // sessionStorage.setItem('main',this.props.restId)
}
proceed=()=>{
    sessionStorage.setItem('menu',this.state.userItem)
    sessionStorage.setItem('restId',this.props.match.params.restId)
    this.props.history.push(`/placeOrder/${this.state.details.name}`)
}
render(){
   // console.log(">>>details state",this.state.userItem)
   //let details=this.state.details
   let {details} = this.state;

return(
    <>
    
    <br/>
    <div className="container containermodify">
        <div className="panel panel-warning ">
            <div className="panel-heading ">
            {this.state.details.name}
            </div>
            <div class="row">
                <div class="col-md-12 color" >
                <img src={details.thumb} alt={this.state.details.name} className="slideimage"/>
                <button className="col-md-offset-9 btn btn-success" data-toggle="modal" data-target="#edumodal" type="button">Click on Image </button>
                </div>
                <div id="edumodal" class="modal fade" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h3 class="modal-title accessories">Accessories</h3>
                        </div>
                        <div class="modal-body">
            
                            <div className="col-md-12">
                                <div className="col-md-6">
                                <img src={details.thumb} alt={this.state.details.name} style={{width:"400px",height:"350px"}}/>
                                </div>
                                <div className="col-md-6 ">
                                <div className="detailsname">
                                {details.name}
                                </div>
                                <div className="description">
                                {details.description}
                                </div>
                                <div className="detailscost"> 
                                <p className="details"><span>{details.cost}&nbsp;<del class="small">{details.strike}</del>&nbsp;<span class="culstor-title offer">({details.offer})</span></span></p>
                                <h6 className="details">Includes all taxes</h6>
                                </div>
                                <div>
                                <h1 className="viewed"><span>295</span> People Have Viewed This Product Recently!</h1>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
                
            </div>
            </div>
            <div className="panel-body">
                                <Tabs>
                                <TabList>
                                    <Tab><h6>Details</h6></Tab>
                                    <Tab><h6>Images</h6></Tab>
                                </TabList>
                                <TabPanel>
                                   
                                    <p><span>{details.name}</span>:&#8594; aim to enhance the effect of clothes you wear- whether they succeed or not depends on your sense of style, the trend in fashion at that particular time and the context. 1..</p>
                                </TabPanel>
                                <TabPanel>
                                
                                    <h2><MenuDisplay menudata={this.state.menuList}finalOrder={(data)=>{this.addToCart(data)}}/></h2>
                                </TabPanel>
                            </Tabs>
          
            </div>
            </div>
            </div>
    </>
)
}
//api
async componentDidMount(){
    let restId=this.props.match.params.restId;
    let response =await axios.get(`${url}/${restId}`);
    let menudata =await axios.get(`${menu}/${restId}`);
    console.log(response.data);
    console.log(menudata.data)
    this.setState({details:response.data[0],menuList:menudata.data})

}
}

export default Details;