import React from 'react'
import { Link } from 'react-router-dom';


  


export const Shop = () => {


  return (
    <div className='shop' id='Shop'>
       <div className="container">
        <div className="shop_text">
            <div>
                <h1>Enjoy Free Delivery As Well</h1>
                <div className="shop_btn">
                  <button id="order-now">
                  <Link to="/form" id="order-now-link"> Order Now </Link>
                  </button>
                  
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}
