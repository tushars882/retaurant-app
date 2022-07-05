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
                  <button>
                  <Link to="/form"> Click </Link>
                  </button>
                  
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}
