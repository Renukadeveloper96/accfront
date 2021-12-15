/*import React,{Component} from 'react';
import './placeOrder.css'
const url="https://noveapi.herokuapp.com/menuItem";

class PlaceOrder extends Component
{
    constructor(props){
    super(props)
    this.state={
    details:''
    }
    }
    
   
    render(){
        return(
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="col-md-6 bg-info">
                    {this.props.match.params.restName}

                    </div>
                    <div className="col-md-6 bg-warning">
                        jj
                    </div>
                    
                </div>
            </div>
            
       
            <div className="panel panel-primary">
                <div className=" panel-heading">
                    <h3>
                    </h3>
                </div>
            </div>
        </div>
        )
    }
componentDidMount() {
    var menuItem =sessionStorage.getItem('menu');
    var orderId=[]
    menuItem.split(',').map((item)=>{
       orderId.push(parseInt(item))
       return 'ok'
   })
    fetch(url,{
        method:'POST',
        headers:{
            'accept':'application/json',
            'Content-Type':'application/json'

        },
        body:JSON.stringify(orderId)
    })
    
    .then((res)=>res.json())
    .then((data)=>
    {
       this.setState({details:data})
    })
}
}
export default PlaceOrder;*/