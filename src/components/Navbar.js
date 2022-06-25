import React from 'react'

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar_text">
          <div className="logo">
            <img
              src="https://media.istockphoto.com/vectors/local-craft-food-design-template-local-food-poster-for-restaurant-vector-id1208194075?s=612x612"
              alt="No img"
            />
          </div>
          <ul className='navbar_ul'>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Shop</a>
            </li>
            <li>
              <a href="">News</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}