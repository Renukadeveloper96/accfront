import React from 'react';
import './listing.css';
import {Link} from 'react-router-dom';

const ListingDisplay =(props)=>{
  const renderList=({listData})=>{
    if(listData){
      return listData.map((item)=>{
        return(
          <div className="item" key="item.menu_id">
            <div class="list__content">
              <div class="list__subcontent">
                <div class="list__subcontents">
                  <img src={item.thumb} alt="earrings" style={{height:"150px"}}></img>
                </div>
                <div class="list__subcontents2 description1">
                <center>
                <div class="bold_text">
                <Link to={`/details/${item.product_id}`}><h5 class="name" >{item.name}</h5></Link>
                  <div class="nonbold_text"><div class="culstor-title">{item.description}</div></div>
                  <p><span>{item.cost}&nbsp;<del class="small">{item.strike}</del>&nbsp;<span class="culstor-title offer">({item.offer})</span></span></p>
                  </div>
                </center>
                </div>
              </div>  
            </div>
          </div>
        )
      })
    }
    else{
      return(
        <div>
          <img src="/images/loading-loading-symbol.gif" alt="loader"/>
        </div>
        )
      }
    }
    return(
    <>
      <div id="content1">
      {renderList(props)}
      </div>
    </>
    )
}
export default ListingDisplay;