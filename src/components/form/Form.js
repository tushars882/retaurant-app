import React from 'react'
import { useState } from 'react';
import {useHistory} from 'react-router-dom'

export const Form = () => {
  const [userInfo, setuserInfo] = useState({
    userName: "", //these are the name attribute
    mobile: "",
    address: "",
  });
  const [records, setRecords] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name,value);

    setuserInfo({ ...userInfo, [name]: value }); //here name represents dynamic data which is applicable for all the input fields
  };


  const handleSubmit = () => {
    // e.preventDefault();
    const newRecord = { ...userInfo };
    console.log(records);
    setRecords([...records, newRecord]); //all those wwho have already submitted is carried by ...records

    setuserInfo({userName:"",mobile:"",address:""})
  };


  return (
    <>
    <div className="main-container-form">
      <div className="form-heading" id='form-heading'>
      <h1>Your Food is waiting to be with:</h1>
      </div>

      <div className="container-1">
        <div className="form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            placeholder="Enter Your Name"
            name="userName"
            id="user"
            // autoComplete="no"
            value={userInfo.userName}
            onChange={handleInput}
          />
          <br />

          <label htmlFor="mobile"> Mobile</label>
          <br />
          <input
            type="tel"
            name="mobile" //this hould be the key in useState
            id="mobile"
            autoComplete="no"
            placeholder="Enter Your Number"
            value={userInfo.mobile}
            onChange={handleInput}
          />
          <br />

          <label htmlFor="address">Address</label>
          <br />
          <textarea
            type="textarea"
            cols={30}
            rows={6}
            name="address"
            id="address"
            autoComplete="no"
            className="textarea"
            placeholder="Enter Your address"
            value={userInfo.address}
            onChange={handleInput}
          />
          <br />
          <button type="submit" onClick={handleSubmit}>
            Order
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

