import React from "react";
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <div className="banner">
      <Navbar/>
      <div className="banner-content">
        <div className="container">
          <div className="banner_text">
            <h3 style={{ fontSize: "65px" }}>Restro "&" Retro</h3>
            <h1 style={{ fontSize: "85px" }}>Drinks And Food</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
              impedit fugit repellendus quam ab beatae{" "}
            </p>
            <div className="banner_btn">
              <a href="" className="btn btn-smart">Delivery Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
