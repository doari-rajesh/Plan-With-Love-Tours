import React, { useState } from "react";

const Card = ({ id, image, info, name, price ,removetour}) => {
  console.log("Card");
  const [readmore, setReadmore] = useState(false);
  const description = readmore ? info : `${info.substring(0, 200)}...`;
  const readmoreHandler = () => {
    setReadmore(!readmore);
  };
  return (
    <div className="card">
      <img src={image} className="image" alt="" />
      <div className="tour-info">
        <div className="tour-details">
          <h4 className="tour-price">₹ {price}</h4>
          <h4 className="tour-name">{name}</h4>
        </div>
        <div className="description">
          {description}
          <span className="read-more"   onClick={readmoreHandler}>
            {readmore ? "Show Less" : "Read More"}
          </span>
        </div>
      </div>
      <button className="btn-red" onClick={()=>{removetour(id)}}>
        Not Interested
      </button>
    </div>
  );
};

export default Card;