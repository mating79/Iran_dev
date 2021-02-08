import React from "react";
import LazyLoad from "react-lazy-load";

const User = ({ name, image }) => {
  //style
  const myStyle = { minWidth: "250px" };
  return (
    <div
      className="card d-flex align-items-center w-25 shadow m-2 "
      style={myStyle}
    >
      <LazyLoad className="d-flex justify-content-center" height={200}>
        <img
          className="card-img-top w-75 h-100 mt-2 rounded-circle "
          src={image}
          alt="#"
        />
      </LazyLoad>
      <h5 className="card-title mt-4">{name}</h5>
    </div> 
  );
};

export default User;
