import React from 'react'
// import { Link } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";

export const Navbar = () => {
  return (
    <>
      <div className="navbar" id="Navbar">
        <div className="navbar_text">
          <div className="logo">
            <img
              src="https://media.istockphoto.com/vectors/local-craft-food-design-template-local-food-poster-for-restaurant-vector-id1208194075?s=612x612"
              alt="No img"
            />
          </div>
          <ul className="navbar_ul">
            <li>
              <Link to="">Home</Link>
            </li>
            <li>
              <Link
                to="Shop"
                smooth={true}
                duration={1000}
                style={{ cursor: "pointer" }}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="Prices"
                smooth={true}
                duration={800}
                style={{ cursor: "pointer" }}
              >
                Prices
              </Link>
            </li>
            <li>
              <Link
                to="About"
                smooth={true}
                duration={1000}
                style={{ cursor: "pointer" }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to=""
                smooth={true}
                duration={1000}
                style={{ cursor: "pointer" }}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}