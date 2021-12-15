import React,{Component} from 'react';
import './menuDisplay.css';
import {withRouter} from 'react-router-dom'
class MenuDisplay extends Component{
constructor(props){
    super(props);
    this.state={
        orders:[]
    }
}
orderId=[]
placerOrder=(id)=>{
this.orderId.push(`${id}`)
//console.log(this.orderId)
this.props.finalOrder(this.orderId)
}
/*proceed=()=>{
    sessionStorage.setItem('menu',this.orderId)
    sessionStorage.setItem('main',this.props.restId)
    this.props.history.push('/placeOrder')
}*/
 renderMenu=({menudata})=>{
        if(menudata){
            return menudata.map((item)=>{
                return(
                     <div className="row">
                                        <div className="col-md-12">
                                            <div className="col-md-6">
                                            <img src={item.menu_image} alt="earrings" className="imagemenu"></img>
                                            </div>
                                            <div className="col-md-6">
                                            <h2 className="h2">
                                                Accessories Name:
                                            </h2>
                                            <span className="colorhotpink" >{item.menu_name}</span> 
                                            <h2 className="h2">Cost :<span className="h3"> Rs.{item.menu_price} </span></h2>
                                            

                                            </div>
                                        </div>

                                    </div>
             )
              
            })
        }
    }
    render(){
     console.log(">>>menu>>>",this.props)
             return(
                <div>
                    <div className="col-md-12 big-info">
                    {this.renderMenu(this.props)}
                    </div><br/>
                </div>)
     
    }
   
}
export default withRouter(MenuDisplay);