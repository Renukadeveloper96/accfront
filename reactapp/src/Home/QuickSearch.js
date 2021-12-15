import React from 'react';
import './QuickSearch.css';
import {Link} from 'react-router-dom'
const QuickSearch=(props)=>{
  const listAcc= ({quickData})=>{
    if(quickData){
      return quickData.map((item)=>{
        return(
          <Link to ={`/list/${item.product_id}`}>
        <div class="list_subcontent">
         <div class="list_subcontents">
            <img src={item.thumb} alt="earrings"></img>
          </div>
          <div class="list_subcontents2 description">
            <center>
              <div class="boldtext">
              <h5 class="name" >{item.name}</h5>
                <div class="culstor-title">{item.description}</div>
                <p><span>{item.cost}&nbsp;<del class="small">{item.strike}</del>&nbsp;<span class="culstor-title offer">({item.offer})</span></span></p>
              </div>
            </center>
          </div>
        </div>
        </Link>
        )
      })
    }

  }
  return(
             <div id="main">
                <h1> <center>Women's Accessories</center></h1>
              <div id="content">
                <div class="list_content">
                  {listAcc(props)}
                </div>
              </div>
              <div class="list_content list_content1 ">
                  <div class="list_subcontent list_subcontent1 ">
                    <div class="googletitle">
                      DOWNLOAD THE APP ON
                    </div>
                    <div class="google">
                      <img src="images/downloadapp1.jpg"></img>
                    </div>
                    <div class="google" >
                      <img src="images/getingoogle1.jpg"></img>
                    </div>
                  </div>
                  <div class="list_subcontent list_subcontent2">
                    <div class="exchange">
                      <img src="images/exchange.png"></img>
                    </div>
                  </div>
                  <div class="list_subcontent list_subcontent3">
                    <div class="googletitle">
                      PAY SECURELY BY
                    </div>
                    <div class="google1">
                      <img src="images/visa.jpg"></img>
                    </div>
                    <div class="google1" >
                      <img src="images/mastercard1.jpg"></img>
                    </div>
                    <div class="google1" >
                      <img src="images/rupay.jpg"></img>
                    </div>
                  </div>
                </div>
      </div>
  
 )

}
export default QuickSearch;